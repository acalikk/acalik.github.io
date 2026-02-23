---
layout: default
title: Home
---

# Aybüke Çalık Yüksel
<p class="lead">Bioelectronics • Neuroengineering • Hardware + testing mindset</p>

<p>
  <a class="chip" href="{{ '/projects/' | relative_url }}">View projects</a>
  <a class="chip" href="{{ '/cv/' | relative_url }}">CV</a>
  <a class="chip" href="{{ '/hobbies/' | relative_url }}">Hobbies</a>
</p>

## Featured projects
<div class="grid">
  {% assign featured = site.projects | sort: "order" | slice: 0, 3 %}
  {% for p in featured %}
    <div class="card col-6">
      <h2 style="margin:0 0 6px 0;">
        <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
      </h2>
      {% if p.subtitle %}<p class="muted" style="margin:0;">{{ p.subtitle }}</p>{% endif %}
      {% if p.summary %}<p style="margin:10px 0 0 0;">{{ p.summary }}</p>{% endif %}
      <div style="margin-top:8px;">
        {% for t in p.tags %}
          {% assign slug = t | downcase | replace: ' ', '-' %}
          <span class="tag tag-{{ slug }}">{{ t }}</span>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>

<p style="margin-top:14px;">
  <a class="chip" href="{{ '/projects/' | relative_url }}">View all projects →</a>
</p>

## Contact
- LinkedIn: (add)
- GitHub: (add)
- Email: (add)
