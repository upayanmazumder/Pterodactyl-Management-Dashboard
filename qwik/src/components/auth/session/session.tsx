/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import { useAuthSession } from '~/routes/plugin@auth';
import sessionstyles from "./session.module.css";
import { Form } from '@builder.io/qwik-city';
import { useAuthSignout } from '~/routes/plugin@auth';

export default component$(() => {
  const session = useAuthSession();
  const signOut = useAuthSignout();
  
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
                  <input type="hidden" name="callbackUrl" value="/" />
                  <button class="button button-signout">Sign Out</button>
                </Form>
            </div>
        </div>
    </>
  );
});
