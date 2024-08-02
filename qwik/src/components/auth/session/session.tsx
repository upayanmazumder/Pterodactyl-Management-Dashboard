/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable qwik/jsx-img */
import { component$, $, useTask$ } from '@builder.io/qwik';
import { useAuthSession } from '~/routes/plugin@auth';
import sessionstyles from "./session.module.css";
import { Form } from '@builder.io/qwik-city';
import { useAuthSignout } from '~/routes/plugin@auth';
import { API_BASE_URL, DEFAULT_HEADERS } from '../../../shared/api/api';

const generateRandomPassword = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < 8; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
};

export default component$(() => {
  const session = useAuthSession();
  const signOut = useAuthSignout();

  const createUser = $(
    async (email: string, name: string) => {
      const randomPassword = generateRandomPassword();
      try {
        const response = await fetch(`${API_BASE_URL}/user/addUser`, {
          method: 'POST',
          headers: DEFAULT_HEADERS,
          body: JSON.stringify({
            username: name,
            firstName: '',
            lastName: '',
            pterodactylPassword: randomPassword,
            email: email,
            serversOwned: [],
            friendsEmails: []
          })
        });

        if (response.ok) {
          console.log('User synced successfully');
        } else {
          console.error('Failed to create user');
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }
  );

  // When user is logged in, create the user in the API
  useTask$(({ track }) => {
    const user = track(() => session.value?.user);
    if (user?.email && user?.name) {
      createUser(user.email, user.name);
    }
  });

  /* When not signed in */
  if (!session.value?.user) {
    return (
      <>
        <a class={sessionstyles.wrapper} href="/auth/signin">Sign In!</a>
      </>
    );
  }

  /* When signed in */
  const imageUrl = session.value?.user?.image ?? '';
  return (
    <>
      <div class={sessionstyles.wrapper}>
        <a href="/profile"><img class={sessionstyles.pfp} loading="lazy" src={imageUrl} alt={session.value?.user?.name ?? 'User Icon'} /></a>
        <div class={sessionstyles.details}>
          <p class={sessionstyles.name}>{session.value?.user?.name}</p>
          <Form action={signOut}>
            <input type="hidden" name="callbackUrl" value="/auth/signedout" />
            <button class="button button-signout">Sign Out</button>
          </Form>
        </div>
      </div>
    </>
  );
});
