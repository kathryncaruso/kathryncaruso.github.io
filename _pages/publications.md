---
layout: page
permalink: /publications/
title: publications
description: Publications are grouped below by theme.
nav: true
nav_order: 3
---

<style>
  /* ── Research theme sections ── */
  .theme-section {
    margin-bottom: 3rem;
  }

  .theme-header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.5rem;
  }

  .theme-icon {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .theme-header h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
  }

  .theme-description {
    color: var(--global-text-color-light, #6c757d);
    font-size: 0.95rem;
    line-height: 1.65;
    margin-bottom: 1.5rem;
    padding-left: 1.15rem;
  }

  /* ── Publication cards ── */
  .pub-card {
    border: 1px solid var(--global-divider-color, #dee2e6);
    border-radius: 6px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    background: var(--global-bg-color, #fff);
    transition: box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .pub-card:hover {
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    border-color: #c5cad0;
  }

  .pub-card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .pub-title {
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.45;
    margin-bottom: 0.3rem;
  }

  .pub-year {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--global-text-color-light, #6c757d);
    background: var(--global-code-bg-color, #e9ecef);
    padding: 0.15rem 0.55rem;
    border-radius: 3px;
    flex-shrink: 0;
  }

  .pub-authors {
    font-size: 0.9rem;
    color: var(--global-text-color-light, #6c757d);
    margin-bottom: 0.25rem;
  }
  .pub-authors .me {
    font-weight: 600;
    color: var(--global-text-color, #303030);
  }

  .pub-journal {
    font-size: 0.88rem;
    font-style: italic;
    color: var(--global-text-color-light, #6c757d);
    margin-bottom: 0.7rem;
  }

  .pub-status {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.15rem 0.5rem;
    border-radius: 3px;
    margin-bottom: 0.7rem;
  }
  .status-published {
    background: #d4edda;
    color: #155724;
  }
  a.pub-status {
    text-decoration: none;
    cursor: pointer;
  }
  a.pub-status:hover {
    filter: brightness(0.92);
  }

  /* ── Expandable details ── */
  .pub-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    background: none;
    border: none;
    color: var(--global-theme-color, #0076df);
    font-size: 0.88rem;
    font-family: inherit;
    cursor: pointer;
    padding: 0.25rem 0;
    transition: color 0.2s;
  }
  .pub-toggle:hover { opacity: 0.8; }
  .pub-toggle .arrow {
    display: inline-block;
    transition: transform 0.25s ease;
    font-size: 0.7rem;
  }

  .pub-details {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.3s ease;
    opacity: 0;
  }
  .pub-details.open {
    opacity: 1;
  }

  .pub-details-inner {
    padding-top: 1rem;
    border-top: 1px solid var(--global-divider-color, #dee2e6);
    margin-top: 0.75rem;
  }

  .detail-block {
    margin-bottom: 1rem;
  }
  .detail-block:last-child {
    margin-bottom: 0;
  }

  .detail-label {
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--global-text-color-light, #6c757d);
    margin-bottom: 0.3rem;
  }

  .detail-text {
    font-size: 0.93rem;
    line-height: 1.65;
  }

  .pub-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.5rem;
  }
  .pub-tag {
    font-size: 0.76rem;
    font-weight: 500;
    padding: 0.15rem 0.55rem;
    border-radius: 3px;
    background: var(--global-code-bg-color, #e9ecef);
    color: var(--global-text-color-light, #6c757d);
  }

  .pub-journal a {
    color: var(--global-text-color-light, #6c757d);
    text-decoration: underline;
    text-decoration-color: var(--global-divider-color, #dee2e6);
    text-underline-offset: 2px;
    transition: color 0.2s, text-decoration-color 0.2s;
  }
  .pub-journal a:hover {
    color: var(--global-theme-color, #0076df);
    text-decoration-color: var(--global-theme-color, #0076df);
  }

  @media (max-width: 600px) {
    .pub-card { padding: 1.2rem; }
    .pub-card-top { flex-direction: column; gap: 0.4rem; }
  }
</style>

<!-- ═══════════════════════════════════════════ -->
<!-- THEME 1: Extreme Environment Microbiology  -->
<!-- ═══════════════════════════════════════════ -->
<section class="theme-section">
  <div class="theme-header">
    <div class="theme-icon" style="background: #3a5a8c;"></div>
    <h2>Extreme Environment Microbiology</h2>
  </div>
  <p class="theme-description">
    Characterizing the genomic potential and metabolic capabilities of cold-adapted bacteria from icy and cold environments.
  </p>

  <div class="pub-card">
    <div class="pub-card-top">
      <div>
        <div class="pub-title">Seven genome sequences of bacterial environmental isolates from the western coast of the Greenland Ice Sheet</div>
        <div class="pub-authors">Markus Dieser, Heidi J. Smith, <span class="me">Kathryn Caruso</span>, Christine M. Foreman</div>
        <div class="pub-journal"><a href="https://doi.org/10.1128/mra.01192-25" target="_blank">Microbiology Resource Announcements</a>, 2026</div>
        <a href="https://doi.org/10.1128/mra.01192-25" target="_blank" class="pub-status status-published">Published</a>
      </div>
      <span class="pub-year">2026</span>
    </div>
    <button class="pub-toggle" onclick="toggleDetails(this)">
      <span class="arrow">▶</span> Read more
    </button>
    <div class="pub-details">
      <div class="pub-details-inner">
        <div class="detail-block">
          <div class="detail-label">In Plain Language</div>
          <div class="detail-text">
            We sequenced the complete genomes of seven bacteria collected from the surface of the Greenland Ice Sheet. These organisms survive in an environment of extreme cold, UV radiation, and limited nutrients. Publishing their genomes makes them available for researchers worldwide to study how life adapts to extreme conditions — and whether these microbes could be useful in biotechnology, including my own work on biocementation in permafrost.
          </div>
        </div>
        <div class="pub-tags">
          <span class="pub-tag">genomics</span>
          <span class="pub-tag">extremophiles</span>
          <span class="pub-tag">Greenland Ice Sheet</span>
          <span class="pub-tag">bioinformatics</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════ -->
<!-- THEME 2: Plant Genetics                    -->
<!-- ═══════════════════════════════════════════ -->
<section class="theme-section">
  <div class="theme-header">
    <div class="theme-icon" style="background: #7b4b94;"></div>
    <h2>Plant Genetics</h2>
  </div>
  <p class="theme-description">
    Using genetic and reproductive data to understand the population structure of rare Appalachian plant species — informing how we protect fragmented populations.
  </p>

  <div class="pub-card">
    <div class="pub-card-top">
      <div>
        <div class="pub-title">Reproductive and genetic patterns in Virginia spiraea (<em>Spiraea virginiana</em> Britton; Rosaceae) reveal a fragmented species, frozen in place and time</div>
        <div class="pub-authors">Matt C. Estep, Logan Clark, Kristin Emery, Shravya Sanigepalli, <span class="me">Kathryn Caruso</span>, Adam Morgan, David Greene, Jennifer Rhode Ward</div>
        <div class="pub-journal"><a href="https://doi.org/10.2179/0008-7475.90.1.48" target="_blank">Castanea</a>, 2025</div>
        <a href="https://doi.org/10.2179/0008-7475.90.1.48" target="_blank" class="pub-status status-published">Published</a>
      </div>
      <span class="pub-year">2025</span>
    </div>
    <button class="pub-toggle" onclick="toggleDetails(this)">
      <span class="arrow">▶</span> Read more
    </button>
    <div class="pub-details">
      <div class="pub-details-inner">
        <div class="detail-block">
          <div class="detail-label">In Plain Language</div>
          <div class="detail-text">
            Virginia spiraea is a rare shrub found along rivers in the southern Appalachians. We studied its genetics and reproduction across scattered populations and found that these populations are deeply isolated — genetically "frozen" with very little gene flow between them. This means each population is essentially on its own evolutionarily, which has major implications for conservation: losing any single population means losing unique genetic diversity that won't be replaced.
          </div>
        </div>
        <div class="pub-tags">
          <span class="pub-tag">conservation</span>
          <span class="pub-tag">population genetics</span>
          <span class="pub-tag">rare species</span>
          <span class="pub-tag">Appalachia</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════ -->
<!-- THEME 3: Forest Ecology                    -->
<!-- ═══════════════════════════════════════════ -->
<section class="theme-section">
  <div class="theme-header">
    <div class="theme-icon" style="background: #2d6a4f;"></div>
    <h2>Forest Ecology</h2>
  </div>
  <p class="theme-description">
    Investigating how the loss of foundation tree species cascades through forest ecosystems — from soil fungi to seedling survival.
  </p>

  <div class="pub-card">
    <div class="pub-card-top">
      <div>
        <div class="pub-title">Assessing the effect of eastern hemlock (<em>Tsuga canadensis</em>) decline from hemlock woolly adelgid (<em>Adelges tsugae</em>) infestation on ectomycorrhizal colonization and growth of red oak (<em>Quercus rubra</em>) seedlings</div>
        <div class="pub-authors"><span class="me">Kathryn E. Caruso</span>, Jonathan L. Horton, and Alisa A. Hove</div>
        <div class="pub-journal"><a href="https://doi.org/10.1674/0003-0031-186.1.16" target="_blank">American Midland Naturalist</a>, 2021</div>
        <a href="https://doi.org/10.1674/0003-0031-186.1.16" target="_blank" class="pub-status status-published">Published</a>
      </div>
      <span class="pub-year">2021</span>
    </div>
    <button class="pub-toggle" onclick="toggleDetails(this)">
      <span class="arrow">▶</span> Read more
    </button>
    <div class="pub-details">
      <div class="pub-details-inner">
        <div class="detail-block">
          <div class="detail-label">In Plain Language</div>
          <div class="detail-text">
            Eastern hemlocks across the Appalachians are dying from an invasive insect called the hemlock woolly adelgid. As hemlocks disappear, forests change — more light reaches the floor, soils warm up, and the fungal communities in the soil shift. I studied whether these changes affect how well red oak seedlings form partnerships with beneficial root fungi (mycorrhizae) and how that influences their growth. Understanding these cascading effects helps us predict what Appalachian forests will look like as they lose one of their most important tree species.
          </div>
        </div>
        <div class="pub-tags">
          <span class="pub-tag">mycorrhizae</span>
          <span class="pub-tag">invasive species</span>
          <span class="pub-tag">forest ecology</span>
          <span class="pub-tag">Appalachia</span>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
function toggleDetails(btn) {
  var details = btn.nextElementSibling;
  var isOpen = details.classList.contains('open');
  if (isOpen) {
    details.style.maxHeight = '0px';
    details.classList.remove('open');
    btn.classList.remove('open');
  } else {
    details.classList.add('open');
    btn.classList.add('open');
    details.style.maxHeight = details.scrollHeight + 'px';
  }
}
</script>
