import { component$ } from '@builder.io/qwik';
import navStyles from './nav.module.css';

const menuItems = [
  { name: 'Home', route: '/' },
  { name: 'Servers', route: '/servers'},
  { name: 'Panel', route: 'https://panel.company.com' },
  { name: 'Admin', route: '/admin/' },
];

const Navigation = component$(() => {
  return (
    <nav class={navStyles.navMenu}>
      <ul class={navStyles.mainMenu}>
        {menuItems.map((item, index) => (
            <a key={index} href={item.route} class={navStyles.link}>
              {item.name}
            </a>
        ))}
      </ul>
    </nav>
  );
});

export default Navigation;
