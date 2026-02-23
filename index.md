---
layout: splash
title: " "
permalink: /
header: {}
excerpt: ""
---

<div style="display:flex; gap:28px; align-items:center; flex-wrap:wrap; margin-top:18px; margin-bottom:22px;">

  <div style="flex:0 0 auto;">
    <img src="{{ '/assets/images/profile.jpg' | relative_url }}"
         alt="Aybüke Çalık Yüksel"
         style="width:170px; height:170px; object-fit:cover; border-radius:999px; border:1px solid rgba(255,255,255,.18);">
  </div>

  <div style="flex:1 1 360px; min-width:280px;">
    <h1 style="margin:0 0 10px 0; font-size:2.1rem;">Aybüke Çalık Yüksel</h1>

    <p style="margin:0 0 14px 0; font-size:1.05rem; line-height:1.6; opacity:.9;">
      I design and validate bioelectronic systems, with a focus on sensing interfaces and experimental characterization.
      My approach combines hands-on hardware development with structured testing and quantitative analysis.
    </p>

    <p style="margin:0; font-size:0.98rem; opacity:.85;">
      <a href="https://www.linkedin.com/in/YOUR-LINKEDIN/" target="_blank" rel="noopener">LinkedIn</a>
      &nbsp;·&nbsp;
      <a href="mailto:YOUR.EMAIL@DOMAIN.COM">Email</a>
      &nbsp;·&nbsp;
      <a href="https://github.com/YOUR-GITHUB" target="_blank" rel="noopener">GitHub</a>
    </p>

    <p style="margin:14px 0 0 0;">
      <a class="btn btn--primary" href="{{ '/projects/' | relative_url }}">View projects</a>
      <a class="btn btn--inverse" href="{{ '/cv/' | relative_url }}">CV</a>
    </p>
  </div>

</div>

<hr style="opacity:.25; margin: 10px 0 26px 0;">

{% include feature_row
  id="feature_row"
%}
