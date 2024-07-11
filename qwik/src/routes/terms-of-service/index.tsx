import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Infobox from "../../components/infobox/infobox";
import SecondaryFooter from "../../components/secondary-footer/secondary-footer";

export default component$(() => {
  return (
    <>
      <div class="container container-center container-spacing-xl">
        <h3>Terms of Service</h3>
        <p>Please read our terms of service carefully before using our website!</p>
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-terms">
            Acceptance of Terms
          </div>
          <>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services, which may be posted and modified from time to time. All such guidelines or rules are hereby incorporated by reference into the Terms of Service.
            </p>
          </>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-use">
            Use of the Site
          </div>
          <>
            <p>
              You are responsible for any activity that occurs under your screen name. You are responsible for keeping your password secure. You must not abuse, harass, threaten, impersonate, or intimidate other users of the Site. You may not use the Site for any illegal or unauthorized purpose. You agree to comply with all local laws regarding online conduct and acceptable content.
            </p>
          </>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-changes">
            Changes to Terms
          </div>
          <>
            <p>
              We may modify the Terms from time to time. You understand and agree that your access to or use of the Site is governed by the Terms effective at the time of your access to or use of the Site. If we make material changes to these Terms, we will notify you by email or by posting a notice on the Site prior to the effective date of the changes. You should revisit these Terms on a regular basis as revised versions will be binding on you.
            </p>
          </>
        </Infobox>
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-access">
            Termination
          </div>
          <>
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination of your account, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
          </>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-questions">
            Contact Us
          </div>
          <>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-policy">
            Changes to This Privacy Policy
          </div>
          <>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </>
        </Infobox>
      </div>

      <SecondaryFooter />
    </>
  );
});

export const head: DocumentHead = {
  title: "Terms of Service",
  meta: [
    {
      name: "description",
      content: "Welcome to our Terms of Service page!"
    }
  ]
};