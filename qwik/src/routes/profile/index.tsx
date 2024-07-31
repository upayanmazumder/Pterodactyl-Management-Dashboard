import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ProfileUpdateMenu from "../../components/profile/update/update";

export default component$(() => {
  return (
    <>
      <ProfileUpdateMenu />
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
