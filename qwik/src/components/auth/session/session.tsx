/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable qwik/jsx-img */
import { component$, $, useTask$ } from '@builder.io/qwik';
import { useAuthSession } from '~/routes/plugin@auth';
import sessionstyles from "./session.module.css";
import { Form } from '@builder.io/qwik-city';
import { useAuthSignout } from '~/routes/plugin@auth';

export default component$(() => {
  const session = useAuthSession();
  const signOut = useAuthSignout();

  const createUser = $(
    async (email: string, name: string) => {
      try {
        const response = await fetch('https://pmdapi.upayan.space/addUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: name,
            email: email,
            serversOwned: [],
            friendsEmails: []
          })
        });

        if (response.ok) {
          console.log('User created successfully');
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
            <img class={sessionstyles.pfp} loading="lazy" src={imageUrl} alt={session.value?.user?.name  ?? 'User Icon'} />
            <div class={sessionstyles.details}>
                <p class={sessionstyles.name}>{session.value?.user?.name}</p>
                <p class={sessionstyles.email}>{session.value?.user?.email}</p>
                <Form action={signOut}>
                  <input type="hidden" name="callbackUrl" value="/auth/signedout" />
                  <button class="button button-signout">Sign Out</button>
                </Form>
            </div>
        </div>
    </>
  );
});
