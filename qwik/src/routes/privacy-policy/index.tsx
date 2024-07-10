import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Infobox from "../../components/infobox/infobox";
import SecondaryFooter from "../../components/secondary-footer/secondary-footer";

export default component$(() => {
  return (
    <>
      <div class="container container-center container-spacing-xl">
        <h3>Privacy Policy</h3>
        <p>Please go through our privacy policy carefully!</p>
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-info">
            Our Commitment to Privacy
          </div>
          <>
            <p>
              KSP Community is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website kspcommunity.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.
            </p>
          </>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-data">
            Information We Collect
          </div>
          <>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul>
              <li>Personal Data</li>
              <li>Derivative Data</li>
              <li>Financial Data</li>
              <li>Third-Party Data</li>
            </ul>
            <p>
              Please note that we may process your personal data without your knowledge or consent where this is required or permitted by law.
            </p>
          </>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-security">
            How We Use It
          </div>
          <>
            <p>
              We use the information we collect in order to:
            </p>
            <ul>
              <li>Administer our Site</li>
              <li>Improve our Site</li>
              <li>Monitor and analyze usage</li>
              <li>Send you promotional materials</li>
              <li>Deliver targeted advertising</li>
            </ul>
            <p>
              We may use the information collected from you to ensure compliance with our terms and conditions and policies.
            </p>
          </>
        </Infobox>
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-access">
            Accessing and Controlling Your Information
          </div>
          <>
            <p>
              You have the right to request access to the information we have on you. You can do this by contacting us at <a href="mailto:support@kspcommunity.com">support@kspcommunity.com</a>.
            </p>
            <p>
              You have the right to request that we erase your data, under certain conditions.
            </p>
            <p>
              You have the right to object to our processing of your personal data.
            </p>
          </>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-questions">
            Contact Us
          </div>
          <>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@kspcommunity.com">support@kspcommunity.com</a>
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
  title: "Privacy Policy",
  meta: [
    {
      name: "description",
      content: "Welcome to our Privacy Policy page!"
    }
  ]
};