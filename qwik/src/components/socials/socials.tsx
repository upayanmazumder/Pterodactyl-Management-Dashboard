import type { JSX } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import socialstyles from "./socials.module.css";
import { BsDiscord, BsInstagram, BsYoutube, BsTwitter, BsFacebook, BsGitlab, BsGoogle, BsGithub, BsLinkedin, BsPaypal, BsPinterest, BsThreads, BsX, BsWhatsapp, BsCupHot, BsStar } from "@qwikest/icons/bootstrap";

import linksData from '../../data/config.json';

const socialIconMap: { [key: string]: JSX.Element } = {
  Buymeacoffee: <BsCupHot/>,
  Discord: <BsDiscord />,
  Facebook: <BsFacebook />,
  Github: <BsGithub />,
  Gitlab: <BsGitlab />,
  Google: <BsGoogle />,
  Instagram: <BsInstagram />,
  Linkedin: <BsLinkedin />,
  Paypal: <BsPaypal />,
  Pinterest: <BsPinterest />,
  Threads: <BsThreads />,
  Twitter: <BsTwitter />,
  Trustpilot: <BsStar />,
  BsWhatsapp: <BsWhatsapp />,
  X: <BsX />,
  Youtube: <BsYoutube />,
  // Add more social icons as needed. Refer to https://icons.getbootstrap.com/?q=social
};

export default component$(() => {
  return (
    <div class={socialstyles.socialIcons}>
      {linksData.socialLinks.map((social, idx) => {
        const SocialIcon = socialIconMap[social.name];
        if (!SocialIcon) return null;
        return (
            <a key={idx} href={social.route} class={socialstyles.iconLink} target="_blank">
              <span class={socialstyles.icon}>{SocialIcon}</span>
            </a>
        );
      })}
    </div>
  );
});
