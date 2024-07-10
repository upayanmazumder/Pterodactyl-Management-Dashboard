import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import SignUpForm from "../../../components/auth/signin"

export default component$(() => {
  return (
    <>

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          <span class="highlight"> Sign in</span>
          <br /> with Github
          <SignUpForm />

          <a href="/auth/signout">Sign out?</a>
        </h3>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sign Up",
};
