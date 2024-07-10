import { component$ } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';
import { BsGithub, BsGoogle } from '@qwikest/icons/bootstrap';
import { useAuthSignin } from '~/routes/plugin@auth';
import signinstyles from "./signin.module.css"
export default component$(() => {
  const signIn = useAuthSignin();
  return (
    <div class="container container-center">
      <div class={signinstyles.wrapper}>
        <Form action={signIn}>
          <input type="hidden" name="providerId" value="github" />
          <input type="hidden" name="options.callbackUrl" value="http://localhost:5173/" />
          <button class="button button-auth"><BsGithub/></button>
        </Form>
        <Form action={signIn}>
          <input type="hidden" name="providerId" value="google" />
          <input type="hidden" name="options.callbackUrl" value="http://localhost:5173/" />
          <button class="button button-auth"><BsGoogle/></button>
        </Form>
      </div>
    </div>
  );
});