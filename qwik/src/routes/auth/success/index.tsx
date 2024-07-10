import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          You have <span class="highlight">successfully</span>
          <br /> signed in!
        </h3>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Authentication Success",
};
