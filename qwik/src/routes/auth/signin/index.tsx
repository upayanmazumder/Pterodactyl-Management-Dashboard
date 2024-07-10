import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import SignUpForm from "../../../components/auth/signin"

export default component$(() => {
  return (
    <>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          Sign in
          <SignUpForm />
        </h3>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sign Up",
};
