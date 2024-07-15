import { component$ } from "@builder.io/qwik";
import Session from "../auth/session/session";
import Branding from "./branding/branding"
import NavigationMenu from "./nav/nav"
import headerstyles from "./header.module.css";
import Breadcrumb from "./breadcrumb/breadcrumb";

export default component$(() => {
  return (
    <header class={headerstyles.header}>
      <div class={headerstyles.top}>
        <Branding/>
        <NavigationMenu/>
        <Session/>
      </div>
      <div class={headerstyles.bottom}>
        <Breadcrumb />
      </div>
    </header>
  );
});
