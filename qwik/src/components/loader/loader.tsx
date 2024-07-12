import { component$ } from "@builder.io/qwik";
import socialstyles from "./loader.module.css";

export default component$(() => {
  return (
    <div class={`${socialstyles.loader} ${socialstyles.circularLoader}`}>
      {/* Optional: Overlay for semi-transparency */}
      <div class={socialstyles.overlay}></div>
      {/* Circular loader */}
      <div class={socialstyles.circular}></div>
    </div>
  );
});
