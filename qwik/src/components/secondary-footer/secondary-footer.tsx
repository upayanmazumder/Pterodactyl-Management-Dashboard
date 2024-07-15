/* eslint-disable qwik/jsx-a */
import { component$ } from "@builder.io/qwik";
import styles from "./secondary-footer.module.css";
import { LuBuilding, LuFolderKanban, LuLayers } from "@qwikest/icons/lucide";
import Socials from "../socials/socials";

// Importing your config.json data
import config from "../../data/config.json";

export default component$(() => {
  return (
    <div class={styles.secondaryFooter}>
      {/* Company Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
          <LuBuilding /> Company
        </a>
        <ul class={styles.columnlinks}>
          {/* Mapping over config.menuItems.Company */}
          {config.secondaryFooterLinks.Company.map((item, index) => (
            <li key={index}>
              <a href={item.route}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Products Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
          <LuFolderKanban /> Products
        </a>
        <ul class={styles.columnlinks}>
          {/* Mapping over config.secondaryFooterLinks.Products */}
          {config.secondaryFooterLinks.Products.map((item, index) => (
            <li key={index}>
              <a href={item.route} target="_blank">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Resources Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
          <LuLayers /> Resources
        </a>
        <ul class={styles.columnlinks}>
          {/* Mapping over config.secondaryFooterLinks.Resources */}
          {config.secondaryFooterLinks.Resources.map((item, index) => (
            <li key={index}>
              <a href={item.route} target="_blank">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Socials Section */}
      <div class={styles.column}>
        <Socials />
      </div>
    </div>
  );
});
