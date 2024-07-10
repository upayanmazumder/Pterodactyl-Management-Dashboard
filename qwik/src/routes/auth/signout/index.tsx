import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import SignOut from "../../../components/auth/signout"

export default component$(() => {
  return (
    <>

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          <span class="highlight"> Sign Out</span>
          <br /> with Github
          <SignOut />
        </h3>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sign Up",
};
