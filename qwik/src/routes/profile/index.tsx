import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useAuthSession } from "../plugin@auth";
import sessionstyles from "../../components/auth/session/session.module.css";

export default component$(() => {
  const session = useAuthSession();
  return (
    <>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center">
        <h3>
          <span class="highlight">Manage</span> your profile 
        </h3>
        <h4>{session.value?.user?.name}</h4>
        <p class={sessionstyles.email}>{session.value?.user?.email}</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Profile",
  meta: [
    {
      name: "description",
      content: "Your Profile",
    },
  ],
};
