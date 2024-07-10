import { $, component$, useSignal } from "@builder.io/qwik";
import Session from "../auth/session/session";
import Icon from "../../media/icon.png?jsx";
import menuData from '../../data/nav.json';

import brandingstyles from "./branding.module.css";
import headerstyles from "./header.module.css";
import navStyles from './nav.module.css';

export default component$(() => {
  const hoverIndex = useSignal(-1);

  const handleMouseEnter = $((index: number) => {
    hoverIndex.value = index;
  });

  const handleMouseLeave = $(() => {
    hoverIndex.value = -1;
  });

  const { menuItems } = menuData;
  return (
    <header class={headerstyles.header}>
          <div class={brandingstyles.branding}>
            <div class={brandingstyles.logo}>
              <Icon/>
            </div>
            <h2 class={brandingstyles.text}>
              Pterodactyl Management Dashboard
            </h2>
          </div>
          <nav class={navStyles.navMenu}>
            <ul class={navStyles.mainMenu}>
              {menuItems.map((item, index) => (
              <a
                key={index}
                class={navStyles.menuItem}
                onMouseEnter$={() => handleMouseEnter(index)}
                onMouseLeave$={handleMouseLeave}
                href={item.route}
                >
                {item.name}
                {hoverIndex.value === index && (
                <ul class={navStyles.subMenu}>
                  {item.subOptions.map((subOption, subIndex) => (
                    <li key={subIndex} class={navStyles.subMenuItem}>
                      <a href={subOption.route} class={navStyles.link}>
                        {subOption.name}
                      </a>
                    </li>
                  ))}
                </ul>
                )}
              </a>
              ))}
            </ul>
          </nav>
          <Session/>
    </header>
  );
});
