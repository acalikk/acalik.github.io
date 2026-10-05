---
layout: single
title: CV
permalink: /cv/
classes: wide cv-page
---

<div class="cv-hero">
  <div>
    <p class="cv-kicker">Biomedical and electrical engineering</p>
    <h1>Aybüke Çalık Yüksel</h1>
    <p class="cv-lead">I work at the intersection of biosensors, biomedical instrumentation, neural interfaces, and scientific data analysis.</p>
    <div class="cv-contact" aria-label="Contact links"><a href="mailto:aybuke_calik@hotmail.com">aybuke_calik@hotmail.com</a><a href="tel:+41763763626">+41 76 376 36 26</a><a href="https://www.linkedin.com/in/aybuke-calik/">LinkedIn</a></div>
  </div>
  <div class="cv-hero-actions"><a class="cv-download" href="mailto:aybuke_calik@hotmail.com?subject=CV%20request">Request CV PDF <span aria-hidden="true">↓</span></a><a class="cv-secondary-link" href="{{ '/projects/' | relative_url }}">Explore projects →</a></div>
</div>

<div class="cv-layout">
  <main>
    <section class="cv-section" id="experience"><div class="cv-section-heading"><span>01</span><h2>Experience</h2></div><div class="cv-timeline">
      <article class="cv-entry"><div class="cv-entry-date">May–July 2025</div><div class="cv-entry-body"><h3>Post-Graduate Intern</h3><p class="cv-entry-org">Medical Image Processing Lab, EPFL · Lausanne</p><ul><li>Extended the fMRI analysis pipeline from MNI to native space for 30 subjects and added subject-specific regions of interest.</li><li>Integrated behavioral memory data and optimized parallel processing and matrix operations for more efficient analysis.</li></ul><span class="cv-tag">fMRI · Python · HPC · Statistical modeling</span></div></article>
      <article class="cv-entry"><div class="cv-entry-date">Mar.–Sept. 2024</div><div class="cv-entry-body"><h3>R&amp;D Intern</h3><p class="cv-entry-org">Xsensio, EPFL Innovation Park · Lausanne</p><ul><li>Characterized graphene field-effect transistor pH sensors and developed a semi-automatic analysis framework.</li><li>Investigated thin-film platinum and gold electrodes for electrochemical exosome sensing and automated experiments and analysis, improving productivity fourfold.</li><li>Analyzed paired ISF–blood samples with ELISA/BCA to support wearable-sensing biomarker work.</li></ul><span class="cv-tag">GFETs · CV/EIS · Automation · ELISA</span></div></article>
      <article class="cv-entry"><div class="cv-entry-date">July–Aug. 2021</div><div class="cv-entry-body"><h3>R&amp;D Intern</h3><p class="cv-entry-org">Mikro Biyosistemler, METU Technopark · Turkey</p><ul><li>Analyzed BIO-MEMS data to support microfluidic chip optimization for neutrophil and lymphocyte discrimination using MATLAB signal-processing algorithms.</li></ul><span class="cv-tag">BIO-MEMS · Microfluidics · MATLAB</span></div></article>
    </div></section>
    <section class="cv-section" id="education"><div class="cv-section-heading"><span>02</span><h2>Education</h2></div><div class="cv-timeline">
      <article class="cv-entry"><div class="cv-entry-date">Sept. 2022–Mar. 2025</div><div class="cv-entry-body"><h3>MSc in Life Sciences Engineering</h3><p class="cv-entry-org">École Polytechnique Fédérale de Lausanne (EPFL) · Minor in Biomedical Technologies</p><p>Master’s thesis: <em>The Hippocampal Spatiotemporal Code: Understanding Episodic Memory Through Space and Time</em>.</p><p class="cv-muted">Focus areas: neural interfaces, biosensors, and computational neuroscience · CGPA 5.15/6.0</p></div></article>
      <article class="cv-entry"><div class="cv-entry-date">Oct. 2018–July 2022</div><div class="cv-entry-body"><h3>BSc in Electrical and Electronics Engineering</h3><p class="cv-entry-org">Middle East Technical University · Double major in Biology</p><p>Specialization: electronics · Graduation project: Intelligent Agriculture System · CGPA 3.79/4.0, ranked 13th of 347.</p></div></article>
    </div></section>
    <section class="cv-section" id="projects"><div class="cv-section-heading"><span>03</span><h2>Selected projects</h2></div><div class="cv-project-list">{% assign cv_projects = site.projects | sort: "order" %}{% for p in cv_projects %}<details class="cv-project"><summary><span><strong>{{ p.title }}</strong><em>{{ p.context }}</em></span><span class="cv-project-date">{{ p.card_period }} <b aria-hidden="true">+</b></span></summary><div><p>{{ p.summary }}</p><a href="{{ p.url | relative_url }}">Read the case study →</a></div></details>{% endfor %}</div></section>
  </main>
  <aside class="cv-sidebar">
    <section class="cv-side-section" id="skills"><h2>Skills &amp; tools</h2><div class="cv-skill-group"><h3>Neuroimaging &amp; data</h3><p>fMRI/EEG analysis · neural signal processing · statistical analysis · computational modeling · behavioral data analysis</p></div><div class="cv-skill-group"><h3>Programming</h3><p>Python · MATLAB · C · R · Verilog</p></div><div class="cv-skill-group"><h3>Biosensors &amp; laboratory</h3><p>CV · EIS · biosensor testing · microfluidics · cleanroom fabrication · nanoparticle functionalization · ELISA</p></div><div class="cv-skill-group"><h3>Electronics</h3><p>Analog and digital circuits · instrumentation · embedded systems · hardware–software integration · verification and validation</p></div></section>
    <section class="cv-side-section" id="awards"><h2>Honors</h2><ul class="cv-plain-list"><li><strong>Gold Medalist</strong><span>SensUs Competition · 2023</span></li><li><strong>Outstanding Demo Performance and Project Management</strong><span>Capstone Project · 2022</span></li><li><strong>TÜBİTAK 2205 Undergraduate Scholarship</strong><span>2019–2023</span></li><li><strong>Gold Medal</strong><span>TÜBİTAK National Biology Olympiad · 2017</span></li></ul></section>
    <section class="cv-side-section" id="languages"><h2>Languages</h2><ul class="cv-language-list"><li><span>Turkish</span><b>Native</b></li><li><span>English</span><b>Proficient</b></li><li><span>German</span><b>Intermediate</b></li><li><span>French</span><b>A2, improving</b></li></ul></section>
    <section class="cv-side-section" id="volunteering"><h2>Service</h2><p class="cv-service"><strong>Team Guide</strong><span>55th International Chemistry Olympiad at ETH · July 2023</span></p><p class="cv-service"><strong>Member</strong><span>ODTÜ LODOS · 2020–2021</span></p></section>
  </aside>
</div>
