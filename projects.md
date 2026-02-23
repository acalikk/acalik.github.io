---
layout: default
title: Projects
permalink: /_projects/
---
# Projects
A selection of projects with focus on **what I built**, **how I tested/validated**, and **measurable outcomes**.

<div class="row" style="margin: 10px 0 12px 0;">
  <div id="tagBar"></div>
  <input id="searchBox" class="search" type="search" placeholder="Search projects..." aria-label="Search projects">
</div>

<div id="projectList">
  {% assign all_projects = site.projects | sort: "order" %}
  {% for p in all_projects %}
    <article class="card project-card"
      data-title="{{ p.title | downcase }}"
      data-subtitle="{{ p.subtitle | default: '' | downcase }}"
      data-tags="{% if p.tags %}{{ p.tags | join: ',' | downcase }}{% endif %}">
      <h3><a href="{{ p.url }}">{{ p.title }}</a></h3>
      {% if p.subtitle %}<p class="muted" style="margin:0;">{{ p.subtitle }}</p>{% endif %}
      {% if p.summary %}<p style="margin:10px 0 0 0;">{{ p.summary }}</p>{% endif %}
      <div class="meta">
        {% if p.tools %}Tools: {{ p.tools | join: ", " }}{% endif %}
      </div>
      <div class="tags">
        {% for t in p.tags %}
          <span class="tag">{{ t }}</span>
        {% endfor %}
      </div>
    </article>
  {% endfor %}
</div>

<script>
(function () {
  const cards = Array.from(document.querySelectorAll(".project-card"));
  const tagBar = document.getElementById("tagBar");
  const searchBox = document.getElementById("searchBox");

  // Collect unique tags
  const tagSet = new Set();
  cards.forEach(c => {
    const tags = (c.dataset.tags || "").split(",").map(s => s.trim()).filter(Boolean);
    tags.forEach(t => tagSet.add(t));
  });

  const tags = Array.from(tagSet).sort();
  let activeTag = "all";

  function makeChip(label, value) {
    const b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.textContent = label;
    b.dataset.value = value;
    b.setAttribute("aria-pressed", value === activeTag ? "true" : "false");
    b.addEventListener("click", () => {
      activeTag = value;
      updateChips();
      filter();
    });
    return b;
  }

  function updateChips() {
    tagBar.querySelectorAll("button.chip").forEach(btn => {
      btn.setAttribute("aria-pressed", btn.dataset.value === activeTag ? "true" : "false");
    });
  }

  function filter() {
    const q = (searchBox.value || "").trim().toLowerCase();
    cards.forEach(c => {
      const title = c.dataset.title || "";
      const subtitle = c.dataset.subtitle || "";
      const tags = (c.dataset.tags || "");

      const matchesSearch = !q || title.includes(q) || subtitle.includes(q) || tags.includes(q);
      const matchesTag = (activeTag === "all") || tags.split(",").includes(activeTag);

      c.classList.toggle("hidden", !(matchesSearch && matchesTag));
    });
  }

  // Build tag chips
  tagBar.appendChild(makeChip("All", "all"));
  tags.forEach(t => tagBar.appendChild(makeChip(t, t)));

  searchBox.addEventListener("input", filter);
})();
</script>
