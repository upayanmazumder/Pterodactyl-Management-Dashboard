import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          <span class="highlight">Manage</span> your profile
        </h3>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Profile",
  meta: [
    {
      name: "description",
      content: "Manage your profile",
    },
  ],
};
