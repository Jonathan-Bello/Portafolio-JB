---
id: "childfund-mundial-en"
title: "ChildFund Mexico: World Cup sponsorship landing page"
description: "Fast Astro landing page for a ChildFund Mexico sponsorship campaign with custom email handling through Netlify Functions."
publishDate: 2025-05-05
cover: "@assets/coversProjects/sitios-web/childfund-mundial-cover.png"
screenshots:
  - "@assets/coversProjects/sitios-web/childfund-mundial-detail.png"
screenshotCaptions:
  - "ChildFund Mexico World Cup-themed landing page."
techs:
  - Astro.js
  - Tailwind CSS
  - Netlify Functions
  - Nodemailer
category: ["web", "backend"]
url: "https://www.jonathanbello.com/projects/childfund-mundial/"
author: "jonathan-bello"
isRelevant: false
---

This ChildFund Mexico landing page was built to support a sponsorship campaign with a soccer and World Cup theme.

It was delivered in less than two days. The visual challenge was preserving ChildFund's torn-paper section style, which can break easily across resolutions if not implemented carefully.

The form required custom behavior, so instead of using Formspree I created an internal Astro/API flow with Netlify Functions, Nodemailer and Google's SMTP service.
