import { component$ } from "@builder.io/qwik";
import socialstyles from "./socials.module.css";
import { BsDiscord, BsInstagram, BsYoutube } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <div class={socialstyles.socialIcons}>
      <a href="https://discord.gg/X547TVKMqF" class={socialstyles.iconLink} title="Join us on Discord!" target="_blank">
        <BsDiscord class={socialstyles.icon} />
      </a>

      <a href="https://www.instagram.com/g9aerospace/" class={socialstyles.iconLink} title="Follow us on Instagram!" target="_blank">
        <BsInstagram class={socialstyles.icon} />
      </a>

      <a href="https://www.youtube.com/@G9AEROSPACEYT" class={socialstyles.iconLink} title="Subscribe to us on youtube!" target="_blank">
        <BsYoutube class={socialstyles.icon} />
      </a>
    </div>
  );
});