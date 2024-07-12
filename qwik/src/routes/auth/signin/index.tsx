import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import SignUpForm from "../../../components/auth/signin/signin"

export default component$(() => {
  return (
    <>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center container-spacing-xl">
          <SignUpForm />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sign Up",
};
