import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center container-spacing-xl">
          <h3> This is the
            <br/>
          <span class="highlight">Admin Homepage</span></h3>      
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Signed in successfully!",
};
