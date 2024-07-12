import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center container-spacing-xl">
          <h3> This is a simple
            <br/>
          <span class="highlight">Test Page</span></h3>   
          <a href="/test/loader">Loader</a> 
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Signed in successfully!",
};
