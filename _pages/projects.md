---
layout: page
title: projects
permalink: /projects/
description: Past and current research projects in microbiology, ecology, and remote sensing.
nav: true
nav_order: 3
horizontal: false
---

<!-- projects page — flat grid, no categories -->
<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
