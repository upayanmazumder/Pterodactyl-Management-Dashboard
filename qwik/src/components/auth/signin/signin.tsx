/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import { useAuthSession } from '~/routes/plugin@auth';
import { BsGithub, BsGoogle, BsDiscord } from '@qwikest/icons/bootstrap';
import { useAuthSignin } from '~/routes/plugin@auth';
import signinstyles from "./signin.module.css";
import signoutstyles from "./signout.module.css";
import { Form } from '@builder.io/qwik-city';
import { useAuthSignout } from '~/routes/plugin@auth';

export default component$(() => {
  const session = useAuthSession();
  const signOut = useAuthSignout();
  const signIn = useAuthSignin();

  // Log session state
  console.log('Current session:', session.value);

  /* When not signed in */
  if (!session.value?.user) {
    console.log('User is not signed in. Displaying sign-in options.');

    return (
      <div class="container container-center">
        <h3>Sign in</h3>
        <div class={signinstyles.wrapper}>
          <Form action={signIn}>
            <input type="hidden" name="providerId" value="github" />
            <input type="hidden" name="options.callbackUrl" value="/auth/signedin" />
            <button class="button button-auth"><BsGithub /></button>
          </Form>
          <Form action={signIn}>
            <input type="hidden" name="providerId" value="google" />
            <input type="hidden" name="options.callbackUrl" value="/auth/signedin" />
            <button class="button button-auth"><BsGoogle /></button>
          </Form>
          <Form action={signIn}>
            <input type="hidden" name="providerId" value="discord" />
            <input type="hidden" name="options.callbackUrl" value="/auth/signedin" />
            <button class="button button-auth"><BsDiscord /></button>
          </Form>
        </div>
      </div>
    );
  }

  // When signed in
  const imageUrl = session.value?.user?.image ?? '';
  console.log('User is signed in. Displaying user details:');
  console.log('User name:', session.value?.user?.name);
  console.log('User email:', session.value?.user?.email);
  console.log('User image URL:', imageUrl);

  return (
    <>
      <h3>You are already logged in!</h3>
      <div class={signoutstyles.wrapper}>
        <img class={signoutstyles.pfp} src={imageUrl} alt={session.value?.user?.name ?? 'User Icon'} />
        <div class={signoutstyles.details}>
          <p class={signoutstyles.name}>{session.value?.user?.name}</p>
          <p class={signoutstyles.email}>{session.value?.user?.email}</p>
          <Form action={signOut}>
            <input type="hidden" name="callbackUrl" value="/auth/signedout" />
            <button class="button button-signout">Sign Out</button>
          </Form>
        </div>
      </div>
    </>
  );
});
