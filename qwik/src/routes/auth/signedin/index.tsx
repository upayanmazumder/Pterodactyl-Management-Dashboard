import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Session from "../../../components/auth/session/session"

export default component$(() => {
  return (
    <>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center container-spacing-xl">
          <h3> You have successfully</h3>
          <br/>
          <h3><span class="highlight">signed in!</span></h3>
          <Session/>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Signed in successfully!",
};
