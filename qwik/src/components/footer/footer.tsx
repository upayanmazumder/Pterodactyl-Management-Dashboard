/* eslint-disable qwik/jsx-a */
import { component$, useStore } from "@builder.io/qwik";
import styles from "./footer.module.css";
import packageJson from '../../../../package.json';
import config from '../../data/config.json';

export const Footer = component$(() => {
  const store = useStore({ version: packageJson.version });

  return (
    <footer class={styles.footer}>
      <p class={styles.anchor}>
        <span>{config.footerTexts[0].copyright}</span>
      </p>
      <p class={styles.version}>v{store.version}</p>
      <p class={styles.disclaimer}>
        {config.footerTexts[0].disclaimer}
      </p>
    </footer>
  );
});

export default Footer;
