import { component$ } from "@builder.io/qwik";
import Session from "../auth/session/session";
import Icon from '../../media/icon.png?jsx';
import headerstyles from "./header.module.css";
import { useLocation } from "@builder.io/qwik-city";

const menuItems = [
  { name: 'Home', route: '/' },
  { name: 'Servers', route: '/servers'},
  { name: 'Panel', route: 'https://panel.company.com' },
  { name: 'Admin', route: '/admin/' },
];

export default component$(() => {
  const loc = useLocation();
  return (
    <header class={headerstyles.header}>
      <div class={headerstyles.top}>
        <div class={headerstyles.branding}>
          <div class={headerstyles.logo}>
              <Icon/>
          </div>
          <h2 class={headerstyles.text}>
            Pterodactyl Management Dashboard
          </h2>
        </div>
        <nav class={headerstyles.navMenu}>
          <ul class={headerstyles.mainMenu}>
            {menuItems.map((item, index) => (
                <a key={index} href={item.route} class={headerstyles.link}>
                  {item.name}
                </a>
            ))}
          </ul>
        </nav>
        <Session/>
      </div>
      <div class={headerstyles.bottom}>
        <div class={headerstyles.wrapper}>
          {loc.isNavigating && <p>Loading...</p>}
          <p class={headerstyles.pathname}>{loc.url.pathname}</p>
        </div>
      </div>
    </header>
  );
});
