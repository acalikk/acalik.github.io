---
layout: single
title: Projects
permalink: /projects/
classes: wide
---

A selection of projects with focus on **what I built**, **how I tested/validated**, and **measurable outcomes**.

<div class="filters" style="margin: 1rem 0;">
  <div style="display:flex; flex-wrap:wrap; gap:12px; align-items:flex-end;">
    <div>
      <div style="font-size:12px; opacity:.8; margin-bottom:6px;">Areas</div>
      <div id="areaBar" style="display:flex; flex-wrap:wrap; gap:8px;"></div>
    </div>

    <label style="flex:1; min-width:260px;">
      <span style="display:block; font-size:12px; opacity:.8; margin-bottom:6px;">Search</span>
      <input id="searchBox" type="search" placeholder="Search title, subtitle, summary, tags, tools…" style="width:100%; padding:10px 12px; border-radius:10px;">
    </label>

    <button id="clearBtn" type="button" class="btn btn--small" style="height:40px;">
      Clear
    </button>
  </div>

  <details id="tagPanel" style="margin-top:12px;">
    <summary style="cursor:pointer;">Tags</summary>
    <div id="tagBar" style="margin-top:10px; display:flex; flex-wrap:wrap; gap:8px;"></div>
    <div style="margin-top:10px;">
      <button id="toggleMoreTags" type="button" class="btn btn--small">Show more</button>
    </div>
    <p style="font-size: 12px; opacity: .75; margin-top: 8px;">
      Multiple areas and multiple tags use <strong>OR</strong> logic (matches any selected item).
    </p>
  </details>

  <p id="resultCount" style="margin-top:12px; opacity:.8;"></p>
</div>

<div id="projectList" style="display:grid; grid-template-columns: repeat(12, 1fr); gap:14px;">
  {% assign all_projects = site.projects | sort: "order" %}
  {% for p in all_projects %}
    <article class="project-card" style="grid-column: span 12; padding:16px; border-radius:14px;"
      data-title="{{ p.title | downcase | escape }}"
      data-subtitle="{{ p.subtitle | default: '' | downcase | escape }}"
      data-summary="{{ p.summary | default: p.excerpt | default: '' | downcase | escape }}"
      data-areas="{% if p.areas %}{{ p.areas | join: ',' | escape }}{% endif %}"
      data-tags="{% if p.tags %}{{ p.tags | join: ',' | downcase | escape }}{% endif %}"
      data-tools="{% if p.tools %}{{ p.tools | join: ',' | downcase | escape }}{% endif %}">

      <h3 style="margin:0 0 6px 0;">
        <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
      </h3>

      {% if p.subtitle %}
        <p style="margin:0; opacity:.85;">{{ p.subtitle }}</p>
      {% endif %}

      {% if p.summary %}
        <p style="margin:10px 0 0 0;">{{ p.summary }}</p>
      {% elsif p.excerpt %}
        <p style="margin:10px 0 0 0;">{{ p.excerpt }}</p>
      {% endif %}

      <div style="margin-top:10px; font-size: 13px; opacity:.8;">
        {% if p.areas %}<strong>Areas:</strong> {{ p.areas | join: " · " }}{% endif %}
        {% if p.tools %}<span> · <strong>Tools:</strong> {{ p.tools | join: ", " }}</span>{% endif %}
      </div>

      {% if p.tags %}
      <div style="margin-top:10px; display:flex; flex-wrap:wrap; gap:8px;">
        {% for t in p.tags %}
          <span style="font-size:12px; padding:4px 10px; border-radius:999px;">{{ t }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </article>
  {% endfor %}
</div>

<script>
(function () {
  const cards = Array.from(document.querySelectorAll(".project-card"));
  const searchBox = document.getElementById("searchBox");
  const areaBar = document.getElementById("areaBar");
  const tagBar = document.getElementById("tagBar");
  const resultCount = document.getElementById("resultCount");
  const clearBtn = document.getElementById("clearBtn");
  const toggleMoreTagsBtn = document.getElementById("toggleMoreTags");

  const AREAS = ["Biosensing", "Neuroengineering", "Hardware & Testing", "Data & Compute"];
  let selectedAreas = new Set();
  let selectedTags = new Set();

  const tagCounts = new Map();
  const TOP_N = 12;
  let showAllTags = false;

  function splitList(s){
    return (s || "").split(",").map(x => x.trim()).filter(Boolean);
  }
  function getTags(card){ return splitList(card.dataset.tags); }
  function getAreas(card){ return splitList(card.dataset.areas); }

  // tag frequency
  cards.forEach(c => getTags(c).forEach(t => tagCounts.set(t, (tagCounts.get(t) || 0) + 1)));
  const sortedTags = Array.from(tagCounts.entries())
    .sort((a,b) => b[1]-a[1] || a[0].localeCompare(b[0]))
    .map(([t,_]) => t);

  function makeChip(label, setRef){
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = label;
    btn.className = "chip";
    btn.style.cssText = "padding:6px 10px;border-radius:999px;cursor:pointer;font-size:13px;border:1px solid rgba(127,127,127,.35);background:transparent;";
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", () => {
      if (setRef.has(label)) setRef.delete(label);
      else setRef.add(label);
      renderChips();
      filter();
    });
    return btn;
  }

  function renderAreas(){
    areaBar.innerHTML = "";
    AREAS.forEach(a => {
      const chip = makeChip(a, selectedAreas);
      chip.setAttribute("aria-pressed", selectedAreas.has(a) ? "true" : "false");
      chip.style.background = selectedAreas.has(a) ? "rgba(127,127,127,.18)" : "transparent";
      areaBar.appendChild(chip);
    });
  }

  function renderTags(){
    tagBar.innerHTML = "";
    const tagsToShow = showAllTags ? sortedTags : sortedTags.slice(0, TOP_N);
    tagsToShow.forEach(t => {
      const chip = makeChip(t, selectedTags);
      chip.setAttribute("aria-pressed", selectedTags.has(t) ? "true" : "false");
      chip.style.background = selectedTags.has(t) ? "rgba(127,127,127,.18)" : "transparent";
      tagBar.appendChild(chip);
    });
    toggleMoreTagsBtn.textContent = showAllTags ? "Show less" : "Show more";
  }

  function matchesAreas(card){
    if (selectedAreas.size === 0) return true;
    const areas = new Set(getAreas(card));
    for (const a of selectedAreas){
      if (areas.has(a)) return true; // OR logic
    }
    return false;
  }

  function matchesTags(card){
    if (selectedTags.size === 0) return true;
    const tags = new Set(getTags(card));
    for (const t of selectedTags){
      if (tags.has(t)) return true; // OR logic
    }
    return false;
  }

  function filter(){
    const q = (searchBox.value || "").trim().toLowerCase();
    let visible = 0;

    cards.forEach(c => {
      const title = c.dataset.title || "";
      const subtitle = c.dataset.subtitle || "";
      const summary = c.dataset.summary || "";
      const tags = c.dataset.tags || "";
      const tools = c.dataset.tools || "";
      const areas = c.dataset.areas || "";

      const matchesSearch = !q || title.includes(q) || subtitle.includes(q) || summary.includes(q) || tags.includes(q) || tools.includes(q) || areas.toLowerCase().includes(q);
      const show = matchesSearch && matchesAreas(c) && matchesTags(c);

      c.style.display = show ? "" : "none";
      if (show) visible++;
    });

    resultCount.textContent = `${visible} project${visible === 1 ? "" : "s"} shown`;
  }

  toggleMoreTagsBtn.addEventListener("click", () => {
    showAllTags = !showAllTags;
    renderTags();
  });

  clearBtn.addEventListener("click", () => {
    searchBox.value = "";
    selectedAreas = new Set();
    selectedTags = new Set();
    showAllTags = false;
    renderAreas();
    renderTags();
    filter();
  });

  searchBox.addEventListener("input", filter);

  renderAreas();
  renderTags();
  filter();
})();
</script>
