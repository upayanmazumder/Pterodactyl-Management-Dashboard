/* eslint-disable qwik/jsx-a */
import { component$ } from "@builder.io/qwik";
import styles from "./secondary-footer.module.css";
import { LuBuilding, LuFolderKanban, LuLayers } from "@qwikest/icons/lucide";
import Socials from "../socials/socials";

export default component$(() => {
  return (
    <div class={styles.secondaryFooter}>
      {/*KSP-C Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
        <LuBuilding /> Company
        </a>
        <ul class={styles.columnlinks}>
          <li>
            <a
              href="/terms-of-service"
              >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/feedback"
              >
              Feedback
            </a>
          </li>
          <li>
            <a href="mailto:support@company.com">
              Contact us
            </a>
          </li>
        </ul>
      </div>

      {/*Products Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
          <LuFolderKanban /> Products
        </a>
        <ul class={styles.columnlinks}>
          <li>
            <a
              href="https://company.com/product1"
              target="_blank"
              >
              Product 1
            </a>
          </li>
          <li>
            <a
              href="https://company.com/product2"
              target="_blank"
              >
              Product 2
            </a>
          </li>
        </ul>
      </div>

      {/*Resources Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
          <LuLayers /> Resources
        </a>
        <ul class={styles.columnlinks}>
          <li>
            <a
              href="https://status.company.com"
              target="_blank"
              >
              Status page
            </a>
          </li>
          <li>
            <a
              href="https://github.com/company/company.com"
              target="_blank"
              >
              Open Source
            </a>
          </li>
        </ul>
      </div>

      <div class={styles.column}>
        <Socials />
      </div>
    </div>
  );
});