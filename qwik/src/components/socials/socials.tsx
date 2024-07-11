import { component$ } from "@builder.io/qwik";
import socialstyles from "./socials.module.css";
import { BsDiscord, BsInstagram } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <div class={socialstyles.socialIcons}>
      <a href="https://discord.com/users/1240025366853193758" class={socialstyles.iconLink} title="Join us on Discord!" target="_blank">
        <BsDiscord class={socialstyles.icon} />
      </a>

      <a href="https://www.instagram.com/_._upayan_._/" class={socialstyles.iconLink} title="Follow us on Instagram!" target="_blank">
        <BsInstagram class={socialstyles.icon} />
      </a>
    </div>
  );
});