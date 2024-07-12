import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Loader from "../../../components/loader/loader"
export default component$(() => {
  return (
    <>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center container-spacing-xl">
          <h3> This is a simple
            <br/>
          <span class="highlight">Test Page</span></h3>   
          <Loader />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Signed in successfully!",
};
