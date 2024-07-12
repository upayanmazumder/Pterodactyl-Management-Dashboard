/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable qwik/jsx-img */
import { component$, $, useTask$ } from '@builder.io/qwik';
import { useAuthSession } from '~/routes/plugin@auth';
import updateStyles from "./update.module.css";
import { Form } from '@builder.io/qwik-city';

export default component$(() => {
  const session = useAuthSession();

  /* When not signed in */
  if (!session.value?.user) {
    return (
      <>
        <a class={updateStyles.wrapper} href="/auth/signin">Sign In!</a>
      </>
    );
  }

  /* When signed in */
  const imageUrl = session.value?.user?.image ?? '';
  return (
    <>
      <div class={updateStyles.wrapper}>
        <a href="/profile"><img class={updateStyles.pfp} loading="lazy" src={imageUrl} alt={session.value?.user?.name ?? 'User Icon'} /></a>
        <div class={updateStyles.details}>
          <p class={updateStyles.email}>{session.value?.user?.email}</p>
        </div>
      </div>
    </>
  );
});
