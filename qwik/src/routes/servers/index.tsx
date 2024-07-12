import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          See your <span class="highlight">servers</span>
        </h3>
        <a href="/servers/create">Create a server</a>
      </div>
      
    </>
  );
});

export const head: DocumentHead = {
  title: "Servers",
  meta: [
    {
      name: "description",
      content: "See all your servers here",
    },
  ],
};
