import { component$ } from "@builder.io/qwik";
import Session from "../auth/session/session";
import Branding from "./branding/branding"
import NavigationMenu from "./nav/nav"
import headerstyles from "./header.module.css";

export default component$(() => {
  return (
    <header class={headerstyles.header}>
          <Branding/>
          <NavigationMenu/>
          <Session/>
    </header>
  );
});
