---
layout: page
permalink: /projects/
title: projects
description: Past and current research projects in microbiology, ecology, and remote sensing.
nav: true
nav_order: 4
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

  /* ── Project cards ── */
  .proj-card {
    border: 1px solid var(--global-divider-color, #dee2e6);
    border-radius: 6px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    background: var(--global-bg-color, #fff);
    transition: box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .proj-card:hover {
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    border-color: #c5cad0;
  }

  .proj-card-top {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
  }

  .proj-img-wrap {
    flex-shrink: 0;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--global-divider-color, #dee2e6);
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  }
  .proj-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .proj-img-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    color: rgba(255,255,255,0.85);
  }

  .proj-title {
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.45;
    margin-bottom: 0.3rem;
  }
  .proj-title a {
    color: var(--global-text-color, #303030);
    text-decoration: none;
    transition: color 0.2s;
  }
  .proj-title a:hover {
    color: var(--global-theme-color, #0076df);
  }

  .proj-status {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.15rem 0.5rem;
    border-radius: 3px;
    margin-bottom: 0.4rem;
  }
  .status-current {
    background: #cce5ff;
    color: #004085;
  }
  .status-completed {
    background: #d4edda;
    color: #155724;
  }

  .proj-summary {
    font-size: 0.93rem;
    color: var(--global-text-color-light, #6c757d);
    line-height: 1.6;
    margin-bottom: 0.25rem;
  }

  .proj-collaborators {
    font-size: 0.85rem;
    color: var(--global-text-color-light, #6c757d);
    font-style: italic;
    margin-top: 0.4rem;
  }

  /* ── Expandable details ── */
  .proj-toggle {
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
  .proj-toggle:hover { opacity: 0.8; }
  .proj-toggle .arrow {
    display: inline-block;
    transition: transform 0.25s ease;
    font-size: 0.7rem;
  }

  .proj-details {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.3s ease;
    opacity: 0;
  }
  .proj-details.open {
    opacity: 1;
  }

  .proj-details-inner {
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

  .proj-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.5rem;
  }
  .proj-tag {
    font-size: 0.76rem;
    font-weight: 500;
    padding: 0.15rem 0.55rem;
    border-radius: 3px;
    background: var(--global-code-bg-color, #e9ecef);
    color: var(--global-text-color-light, #6c757d);
  }

  @media (max-width: 600px) {
    .proj-card { padding: 1.2rem; }
    .proj-card-top { flex-direction: column; align-items: center; text-align: center; gap: 0.8rem; }
  }
</style>

<!-- ═══════════════════════════════════════════ -->
<!-- THEME 1: Environmental Microbiology        -->
<!-- ═══════════════════════════════════════════ -->
<section class="theme-section">
  <div class="theme-header">
    <div class="theme-icon" style="background: #3a5a8c;"></div>
    <h2>Environmental Microbiology</h2>
  </div>
  <p class="theme-description">
    Engineering microbial solutions for infrastructure challenges in extreme cold environments.
  </p>

  <div class="proj-card">
    <div class="proj-card-top">
      <div class="proj-img-wrap">
        <div class="proj-img-placeholder" style="background: linear-gradient(135deg, #a8d8ea, #3b82c4);">
          <i class="fa-solid fa-flask"></i>
        </div>
      </div>
      <div>
        <div class="proj-title"><a href="{{ '/projects/biocementation/' | relative_url }}">Biocementation in Permafrost Environments</a></div>
        <span class="proj-status status-current">Current</span>
        <div class="proj-summary">Studying applications of cold-adapted bacterial isolates for microbially-induced calcium carbonate precipitation (MICP) to stabilize defense materials in Arctic environments.</div>
        <div class="proj-collaborators">Center for Biofilm Engineering · Montana State University</div>
      </div>
    </div>
    <button class="proj-toggle" onclick="toggleDetails(this)">
      <span class="arrow">▶</span> Read more
    </button>
    <div class="proj-details">
      <div class="proj-details-inner">
        <div class="detail-block">
          <div class="detail-label">In Plain Language</div>
          <div class="detail-text">
            As permafrost thaws across the Arctic, roads, runways, and buildings are losing their foundations. I'm investigating whether cold-adapted bacteria can produce natural cement (calcium carbonate) to stabilize these structures — essentially asking microbes to do construction work in freezing conditions.
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-label">Methods</div>
          <div class="detail-text">
            Bacterial isolation and screening, ureolysis assays, MICP optimization, unconfined compressive strength testing, scanning electron microscopy, and cold-temperature growth characterization.
          </div>
        </div>
        <div class="proj-tags">
          <span class="proj-tag">biocementation</span>
          <span class="proj-tag">MICP</span>
          <span class="proj-tag">permafrost</span>
          <span class="proj-tag">extremophiles</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════ -->
<!-- THEME 2: Remote Sensing & Conservation     -->
<!-- ═══════════════════════════════════════════ -->
<section class="theme-section">
  <div class="theme-header">
    <div class="theme-icon" style="background: #2d6a4f;"></div>
    <h2>Remote Sensing &amp; Conservation</h2>
  </div>
  <p class="theme-description">
    Applying NASA Earth observations to inform environmental management and rare species conservation.
  </p>

  <div class="proj-card">
    <div class="proj-card-top">
      <div class="proj-img-wrap">
        <div class="proj-img-placeholder" style="background: linear-gradient(135deg, #b8e6c8, #2d8a4e);">
          <i class="fa-solid fa-satellite"></i>
        </div>
      </div>
      <div>
        <div class="proj-title"><a href="{{ '/projects/venus-flytrap/' | relative_url }}">Venus Flytrap Habitat Suitability Modeling</a></div>
        <span class="proj-status status-completed">Completed</span>
        <div class="proj-summary">Modeled current and future Venus flytrap habitat using remote sensing data to inform rare plant conservation in the Carolina Coastal Plain.</div>
        <div class="proj-collaborators">NASA DEVELOP · U.S. Fish and Wildlife Service · University of Georgia</div>
      </div>
    </div>
    <button class="proj-toggle" onclick="toggleDetails(this)">
      <span class="arrow">▶</span> Read more
    </button>
    <div class="proj-details">
      <div class="proj-details-inner">
        <div class="detail-block">
          <div class="detail-label">In Plain Language</div>
          <div class="detail-text">
            Venus flytraps only grow naturally in a small region of the Carolinas, and their habitat is shrinking. Using satellite imagery from Landsat, Sentinel-2, and other NASA instruments, we built models to map where flytraps can live now and where they might survive in 2050 as climate and land use change — giving conservationists a roadmap for protecting this iconic species.
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-label">Methods</div>
          <div class="detail-text">
            Landsat 8, PALSAR, Sentinel-2, and Terra MODIS data processing and analysis; habitat suitability modeling; TerrSet Land Change Modeler for future projections; ArcGIS mapping and StoryMaps.
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-label">Publications</div>
          <div class="detail-text">
            Rock, M., <strong>Caruso, K. E.</strong>, Lampley, J., Siddhi, A., and S. Zhu. (2021). Utilizing NASA Earth observations to map suitable Venus flytrap habitat. <em>NASA Technical Reports Server</em>.
          </div>
        </div>
        <div class="proj-tags">
          <span class="proj-tag">remote sensing</span>
          <span class="proj-tag">habitat modeling</span>
          <span class="proj-tag">conservation</span>
          <span class="proj-tag">GIS</span>
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
    <div class="theme-icon" style="background: #7b4b94;"></div>
    <h2>Forest Ecology</h2>
  </div>
  <p class="theme-description">
    Investigating how the loss of foundation tree species cascades through forest ecosystems.
  </p>

  <div class="proj-card">
    <div class="proj-card-top">
      <div class="proj-img-wrap">
        <div class="proj-img-placeholder" style="background: linear-gradient(135deg, #d4c5a9, #6b7c3e);">
          <i class="fa-solid fa-tree"></i>
        </div>
      </div>
      <div>
        <div class="proj-title"><a href="{{ '/projects/hemlock-mycorrhizae/' | relative_url }}">Ectomycorrhizal Fungi in Declining Hemlock Stands</a></div>
        <span class="proj-status status-completed">Completed</span>
        <div class="proj-summary">Investigated shifts in mycorrhizal communities associated with eastern hemlock decline from hemlock woolly adelgid infestation.</div>
        <div class="proj-collaborators">UNC Asheville · Department of Biology</div>
      </div>
    </div>
    <button class="proj-toggle" onclick="toggleDetails(this)">
      <span class="arrow">▶</span> Read more
    </button>
    <div class="proj-details">
      <div class="proj-details-inner">
        <div class="detail-block">
          <div class="detail-label">In Plain Language</div>
          <div class="detail-text">
            Eastern hemlocks across the Appalachians are dying from an invasive insect called the hemlock woolly adelgid. As hemlocks disappear, forests change — more light reaches the floor, soils warm up, and the fungal communities in the soil shift. I studied whether these changes affect how well red oak seedlings form partnerships with beneficial root fungi and how that influences their growth and survival.
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-label">Methods</div>
          <div class="detail-text">
            Field surveys across hemlock decline gradient, root tip sampling and ectomycorrhizal colonization assessment, seedling growth measurements, soil analysis.
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-label">Publications</div>
          <div class="detail-text">
            <strong>Caruso, K. E.</strong>, Horton, J. L., and A. A. Hove. (2021). Assessing the effect of eastern hemlock decline on ectomycorrhizal colonization and growth of red oak seedlings. <em>American Midland Naturalist</em>, 186(1), 16–31.
          </div>
        </div>
        <div class="proj-tags">
          <span class="proj-tag">mycorrhizae</span>
          <span class="proj-tag">invasive species</span>
          <span class="proj-tag">forest ecology</span>
          <span class="proj-tag">Appalachia</span>
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
