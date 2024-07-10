import { component$ } from "@builder.io/qwik";
import Icon from "../../../media/icon.png?jsx";
import brandingstyles from "./branding.module.css";

export default component$(() => {
  return (
    <div class={brandingstyles.branding}>
        <div class={brandingstyles.logo}>
            <Icon/>
        </div>
        <h2 class={brandingstyles.text}>
          Pterodactyl Management Dashboard
        </h2>
    </div>
  );
});
