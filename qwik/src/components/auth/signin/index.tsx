import { component$ } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';
import { BsGithub, BsGoogle, BsDiscord } from '@qwikest/icons/bootstrap';
import { useAuthSignin } from '~/routes/plugin@auth';
import signinstyles from "./signin.module.css"
export default component$(() => {
  const signIn = useAuthSignin();
  return (
    <div class="container container-center">
      <div class={signinstyles.wrapper}>
        <Form action={signIn}>
          <input type="hidden" name="providerId" value="github" />
          <input type="hidden" name="options.callbackUrl" value="https://pmd.upayan.space/api/auth/callback/github" />
          <button class="button button-auth"><BsGithub/></button>
        </Form>
        <Form action={signIn}>
          <input type="hidden" name="providerId" value="google" />
          <input type="hidden" name="options.callbackUrl" value="https://pmd.upayan.space/api/auth/callback/google" />
          <button class="button button-auth"><BsGoogle/></button>
        </Form>
        <Form action={signIn}>
          <input type="hidden" name="providerId" value="discord" />
          <input type="hidden" name="options.callbackUrl" value="https://pmd.upayan.space/api/auth/callback/discord" />
          <button class="button button-auth"><BsDiscord/></button>
        </Form>
      </div>
    </div>
  );
});