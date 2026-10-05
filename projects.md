---
layout: single
title: Projects
permalink: /projects/
classes: wide portfolio-projects
---

<div class="projects-intro">
  <p class="projects-lead">Biosensing, instrumentation, and biomedical data analysis.</p>
  <p>I work across biomedical sensing, experimental instrumentation, and scientific computing. These projects show what I contributed, how I investigated technical problems, and what the results support.</p>
</div>

<div class="project-controls" id="projectControls" hidden>
  <div class="project-search">
    <label for="searchBox">Find a method or skill</label>
    <input id="searchBox" type="search" placeholder="Try Python, electrochemistry, or fabrication" autocomplete="off">
  </div>
  <fieldset class="project-filters">
    <legend>Explore by area</legend>
    <div class="project-filter-buttons">
      <button type="button" class="chip" data-area="all" aria-pressed="true">All projects</button>
      <button type="button" class="chip" data-area="biosensing" aria-pressed="false">Biosensing</button>
      <button type="button" class="chip" data-area="instrumentation" aria-pressed="false">Instrumentation</button>
      <button type="button" class="chip" data-area="data-analysis" aria-pressed="false">Data analysis</button>
    </div>
  </fieldset>
  <div class="project-results-row">
    <p id="resultCount" role="status" aria-live="polite" aria-atomic="true"></p>
    <button id="clearBtn" type="button" class="project-reset">Reset filters</button>
  </div>
</div>

<div class="project-grid" id="projectList">
  {% assign all_projects = site.projects | sort: "order" %}
  {% for p in all_projects %}
  <article class="project-card"
    data-areas="{{ p.area_keys | join: ',' | escape }}"
    data-search="{{ p.title | append: ' ' | append: p.summary | append: ' ' | append: p.context | escape }} {{ p.tools | join: ' ' | escape }} {{ p.skills | join: ' ' | escape }} {{ p.areas | join: ' ' | escape }}">
    <a class="project-card-image {{ p.image_class | default: '' }}" href="{{ p.url | relative_url }}" tabindex="-1" aria-hidden="true">
      <img src="{{ p.image | relative_url }}" alt="" loading="lazy" width="640" height="360">
    </a>
    <div class="project-card-body">
      <p class="project-context">{{ p.context }} <span>{{ p.card_period }}</span></p>
      <h2><a href="{{ p.url | relative_url }}">{{ p.title }}</a></h2>
      <p class="project-summary">{{ p.summary }}</p>
      <p class="project-evidence"><strong>{{ p.evidence_label | default: 'Outcome' }}:</strong> {{ p.evidence }}</p>
      <ul class="project-skills" aria-label="Skills demonstrated">
        {% for skill in p.skills %}<li>{{ skill }}</li>{% endfor %}
      </ul>
      <a class="project-read" href="{{ p.url | relative_url }}">Read the case study <span class="visually-hidden">— {{ p.title }}</span><span aria-hidden="true"> →</span></a>
    </div>
  </article>
  {% endfor %}
</div>

<p id="noProjects" class="project-empty" hidden>No projects match these filters. Try a broader term or reset the filters.</p>
<p class="projects-closing">My background also includes analog circuit design and biomedical signal processing. <a href="{{ '/cv/' | relative_url }}">See my CV for the wider picture.</a></p>
<script src="{{ '/assets/js/projects.js' | relative_url }}" defer></script>
