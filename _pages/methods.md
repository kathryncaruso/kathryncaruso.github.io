---
layout: page
title: research methods
permalink: /methods/
description: Lab protocols, interactive diagrams, and computational notebooks from my graduate research.
nav: true
nav_order: 5
---

<style>
  /* ── Page intro ── */
  .methods-intro {
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--global-text-color, #303030);
    margin-bottom: 0.5rem;
    max-width: 680px;
  }
  .methods-intro-note {
    font-size: 0.85rem;
    color: var(--global-text-color-light, #6c757d);
    margin-bottom: 2.5rem;
  }
  .methods-intro-note a {
    color: var(--global-theme-color, #0076df);
    text-decoration: none;
  }
  .methods-intro-note a:hover {
    text-decoration: underline;
  }

  /* ── Research theme sections ── */
  .methods-theme {
    margin-bottom: 3rem;
  }

  .methods-theme-header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.35rem;
    cursor: pointer;
    user-select: none;
  }
  .methods-theme-header:hover .methods-theme-arrow {
    color: var(--global-theme-color, #0076df);
  }

  .methods-theme-icon {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .methods-theme-header h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
  }

  .methods-theme-arrow {
    font-size: 0.7rem;
    margin-left: auto;
    transition: transform 0.3s ease, color 0.2s;
    color: var(--global-text-color-light, #6c757d);
  }
  .methods-theme-arrow.open {
    transform: rotate(90deg);
  }

  .methods-theme-desc {
    color: var(--global-text-color-light, #6c757d);
    font-size: 0.95rem;
    line-height: 1.65;
    margin-bottom: 1.25rem;
    padding-left: 1.15rem;
  }

  .methods-theme-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease, opacity 0.35s ease;
    opacity: 0;
  }
  .methods-theme-body.open {
    opacity: 1;
  }

  /* ── Sub-sections (for sphagnum sub-groups) ── */
  .methods-subsection {
    margin-bottom: 1.5rem;
  }
  .methods-subsection-label {
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--global-text-color-light, #6c757d);
    margin-bottom: 0.6rem;
    padding-left: 0.15rem;
    border-left: 3px solid transparent;
    padding-left: 0.6rem;
  }

  /* ── Method cards ── */
  .method-card {
    border: 1px solid var(--global-divider-color, #dee2e6);
    border-radius: 6px;
    padding: 1.15rem 1.35rem;
    margin-bottom: 0.65rem;
    background: var(--global-bg-color, #fff);
    transition: box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .method-card:hover {
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    border-color: #c5cad0;
  }

  .method-card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .method-title {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 0.2rem;
  }

  .method-desc {
    font-size: 0.88rem;
    color: var(--global-text-color-light, #6c757d);
    line-height: 1.55;
    margin-bottom: 0.6rem;
  }

  /* Status badges */
  .method-status {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.12rem 0.5rem;
    border-radius: 3px;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .status-available {
    background: #d4edda;
    color: #155724;
  }
  .status-soon {
    background: var(--global-code-bg-color, #e9ecef);
    color: #868e96;
  }

  /* ── Dimmed "coming soon" cards ── */
  .method-card.coming-soon {
    opacity: 0.5;
    border-style: dashed;
  }
  .method-card.coming-soon:hover {
    opacity: 0.7;
    box-shadow: none;
  }

  /* ── Resource links ── */
  .method-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.45rem;
  }
  .method-link {
    font-size: 0.78rem;
    font-weight: 500;
    padding: 0.18rem 0.6rem;
    border-radius: 3px;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
    background: var(--global-code-bg-color, #e9ecef);
    color: var(--global-theme-color, #0076df);
  }
  .method-link:hover {
    background: var(--global-theme-color, #0076df);
    color: #fff;
    text-decoration: none;
  }
  .method-link.restricted {
    color: #868e96;
    cursor: default;
  }
  .method-link.restricted:hover {
    background: var(--global-code-bg-color, #e9ecef);
    color: #868e96;
  }

  /* ── Background / Rationale toggle ── */
  .method-rationale-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    background: none;
    border: none;
    color: var(--global-theme-color, #0076df);
    font-size: 0.85rem;
    font-family: inherit;
    cursor: pointer;
    padding: 0.25rem 0;
    margin-top: 0.5rem;
    transition: color 0.2s;
  }
  .method-rationale-toggle:hover { opacity: 0.8; }
  .method-rationale-toggle .arrow {
    display: inline-block;
    transition: transform 0.25s ease;
    font-size: 0.65rem;
  }
  .method-rationale-toggle.open .arrow {
    transform: rotate(90deg);
  }

  .method-rationale {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.3s ease;
    opacity: 0;
  }
  .method-rationale.open {
    opacity: 1;
  }

  .method-rationale-inner {
    padding-top: 0.85rem;
    border-top: 1px solid var(--global-divider-color, #dee2e6);
    margin-top: 0.7rem;
  }

  .method-rationale-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--global-text-color-light, #6c757d);
    margin-bottom: 0.35rem;
  }

  .method-rationale-text {
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--global-text-color, #303030);
  }

  @media (max-width: 600px) {
    .method-card { padding: 1rem; }
    .method-card-top { flex-direction: column; gap: 0.3rem; }
  }
</style>

<p class="methods-intro">
  This page documents the methods I've used and developed in my graduate research. Each protocol includes a detailed written version and, where applicable, a visual diagram and associated computational notebooks.
</p>
<p class="methods-intro-note">
  These materials are shared to support reproducibility and to help other researchers working with similar methods.
  <br>[Restricted] = Private repository — <a href="mailto:caruso.k.e@gmail.com">request access</a>
</p>

<!-- ═══════════════════════════════════════════ -->
<!-- THEME 1: Biocementation & MICP             -->
<!-- ═══════════════════════════════════════════ -->
<section class="methods-theme">
  <div class="methods-theme-header" onclick="toggleTheme(this)">
    <div class="methods-theme-icon" style="background: #c0713a;"></div>
    <h2>Biocementation &amp; MICP</h2>
    <span class="methods-theme-arrow open">▶</span>
  </div>
  <p class="methods-theme-desc">
    Protocols and notebooks related to microbially-induced calcium carbonate precipitation using cold-adapted isolates.
  </p>

  <div class="methods-theme-body open" style="max-height: 2000px;">

    <!-- Carbon source growth assay — AVAILABLE -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">Carbon source growth assay</div>
          <div class="method-desc">Growth assay to determine preferred carbon source for cold-adapted ureolytic bacterial isolates via OD600 growth curves.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/carbon-source-growth-assay/">Protocol</a>
        <a class="method-link" href="/methods/carbon-source-growth-assay-diagram/">Interactive Diagram</a>
        <a class="method-link restricted" href="https://github.com/katie-caruso/research-archive/tree/main/micp/carbon-source-growth-assay/raw-data" title="Private repository — request access">Raw Data [Restricted]</a>
        <a class="method-link restricted" href="https://github.com/katie-caruso/research-archive/tree/main/micp/carbon-source-growth-assay/methods-writeup.md" title="Private repository — request access">Methods Writeup [Restricted]</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            Microbially induced calcium carbonate precipitation (MICP) relies on ureolytic bacteria to drive calcite formation through urea hydrolysis, making adequate growth rate and cell density critical for effective biocementation. The Foreman Lab maintains a collection of ~60 bacterial isolates sampled from diverse cold environments originally recovered on R2A — a low-nutrient medium designed for slow-growing environmental bacteria. Preliminary growth curves of these isolates grown at 15°C in a glucose-based urea medium over 28 days showed poor growth — maximum OD600 values remained below 0.2, several isolates showed decline after modest initial increases, and some barely grew above baseline. On this basis, this experiment tests three alternative carbon sources — sodium malate, sodium succinate, and sodium acetate — that enter central carbon metabolism more directly as TCA cycle intermediates or precursors. Carbon source concentrations were matched on a molar carbon basis to the original glucose formulation. The goal is to identify a carbon source that better supports growth of these isolates under the low-temperature conditions relevant to biocementation.
          </div>
        </div>
      </div>
    </div>

    <!-- Jung assay -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">Jung assay</div>
          <div class="method-desc">Ureolytic activity assay based on the Jung et al. method for characterizing isolate performance.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/jung-assay/">Protocol</a>
        <a class="method-link" href="/methods/jung-assay-diagram/">Interactive Diagram</a>
        <a class="method-link restricted" href="https://github.com/katie-caruso/research-archive/tree/main/micp/jung-assay/raw-data" title="Private repository — request access">Raw Data [Restricted]</a>
        <a class="method-link restricted" href="https://github.com/katie-caruso/research-archive/tree/main/micp/jung-assay/methods-writeup.md" title="Private repository — request access">Methods Writeup [Restricted]</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            Microbially induced calcium carbonate precipitation (MICP) relies on ureolytic bacteria to hydrolyze urea, raising local pH and driving carbonate precipitation. For MICP to work in cold environments, it requires microorganisms that are both cold-adapted and ureolytically active. In preliminary serial transfer experiments, nine cold-adapted isolates — selected based on an in silico screen for urease genes — were cultured at 15°C with transfers to fresh urea medium over a six-week period. pH shifts became visible within two weeks, and several cultures (GG8, GNP012, GNP013) began alkalizing only after a third transfer, suggesting that successive exposure to urea may condition these isolates toward increased ureolytic activity. However, OD measurements indicated that some initially active cultures (GNP014, MP-M2) may not have sustained growth over the full transfer period. The current 28-day assay expands the panel to 21 isolates and formalizes this serial transfer design, measuring urea concentration at three timepoints per seven-day transfer window using a colorimetric method (Jung et al., 1975) to directly test whether successive urea exposure primes increased urea hydrolysis over time. Isolates were originally cultured on R2A and previously grown in Jung assays on a minimal medium (2% urea) with glucose as the primary carbon source; for this assay, succinate replaces glucose based on results of a comparative growth assay.
          </div>
        </div>
      </div>
    </div>

    <!-- BHI Agar -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">BHI Agar</div>
          <div class="method-desc">Brain Heart Infusion agar plate preparation using Difco™ BHI Agar, with batch scaling guide.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/bhi-agar/">Protocol</a>
      </div>
    </div>

    <!-- Notebooks — COMING SOON -->
    <div class="method-card coming-soon">
      <div class="method-card-top">
        <div>
          <div class="method-title">Computational notebooks</div>
          <div class="method-desc">Notebooks for growth curve analysis and data visualization.</div>
        </div>
        <span class="method-status status-soon">Coming Soon</span>
      </div>
    </div>

  </div>
</section>

<!-- ═══════════════════════════════════════════ -->
<!-- THEME 2: Sphagnum Microbiome               -->
<!-- ═══════════════════════════════════════════ -->
<section class="methods-theme">
  <div class="methods-theme-header" onclick="toggleTheme(this)">
    <div class="methods-theme-icon" style="background: #2d6a4f;"></div>
    <h2>Sphagnum Microbiome</h2>
    <span class="methods-theme-arrow open">▶</span>
  </div>
  <p class="methods-theme-desc">
    Protocols for field collection, laboratory cultivation, microbiome transfer, and molecular characterization of <em>Sphagnum</em> moss and its associated microbial communities.
  </p>

  <div class="methods-theme-body open" style="max-height: 8000px;">

    <!-- ── Field Collection ── -->
    <div class="methods-subsection">
      <div class="methods-subsection-label" style="border-left-color: #2d6a4f;">Field Collection</div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title"><em>Sphagnum</em> collection for DNA extraction</div>
            <div class="method-desc">Field collection procedures optimized for downstream DNA work.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title"><em>Sphagnum</em> collection for microbiome</div>
            <div class="method-desc">Field collection procedures for microbiome isolation.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">Environmental parameters</div>
            <div class="method-desc">Measurement and recording of field site environmental conditions.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>
    </div>

    <!-- ── Propagation & Cultivation ── -->
    <div class="methods-subsection">
      <div class="methods-subsection-label" style="border-left-color: #2d6a4f;">Propagation &amp; Cultivation</div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">Gametophyte propagation</div>
            <div class="method-desc">Propagation of <em>Sphagnum</em> gametophytes in the lab.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">Spore propagation</div>
            <div class="method-desc">Growing <em>Sphagnum</em> from spores.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">Axenic media preparation</div>
            <div class="method-desc">Media recipes for axenic <em>Sphagnum</em> culture.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>
    </div>

    <!-- ── Microbiome Transfer & Preservation ── -->
    <div class="methods-subsection">
      <div class="methods-subsection-label" style="border-left-color: #2d6a4f;">Microbiome Transfer &amp; Preservation</div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">Microbiome isolation</div>
            <div class="method-desc">Isolating the microbial community from <em>Sphagnum</em> tissue.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">BG-11-N media</div>
            <div class="method-desc">Preparing BG-11 (minus nitrogen) medium for cyanobacteria.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">Methanotroph media (NMS)</div>
            <div class="method-desc">Nitrate mineral salts medium for methanotroph cultivation.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">PBS preparation</div>
            <div class="method-desc">Phosphate-buffered saline from powder and from scratch.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">Glycerol cryopreservation</div>
            <div class="method-desc">Long-term storage of microbial isolates in glycerol stocks.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">Thermal tolerance</div>
            <div class="method-desc">Thermal tolerance testing of microbial isolates.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">Microbiome transfer</div>
            <div class="method-desc">Transferring microbiome communities between <em>Sphagnum</em> hosts.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>
    </div>

    <!-- ── DNA & Molecular Methods ── -->
    <div class="methods-subsection">
      <div class="methods-subsection-label" style="border-left-color: #2d6a4f;">DNA &amp; Molecular Methods</div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">DNA extraction (16S)</div>
            <div class="method-desc">Extraction optimized for 16S rRNA sequencing.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">DNA extraction (custom)</div>
            <div class="method-desc">Custom extraction protocol for <em>Sphagnum</em>-associated microbes.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">DNA extraction (Qiagen)</div>
            <div class="method-desc">Qiagen kit-based extraction.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">Extraction optimization</div>
            <div class="method-desc">Comparing homogenization methods for extraction yield.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">PCR amplification</div>
            <div class="method-desc">PCR protocols for <em>Sphagnum</em> microbial DNA.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>
    </div>

    <!-- ── Characterization ── -->
    <div class="methods-subsection">
      <div class="methods-subsection-label" style="border-left-color: #2d6a4f;">Characterization</div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">Hyperspectral imaging</div>
            <div class="method-desc">Hyperspectral imaging of <em>Sphagnum</em> samples.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>

      <div class="method-card coming-soon">
        <div class="method-card-top">
          <div>
            <div class="method-title">pH buffer preparation</div>
            <div class="method-desc">Buffer recipes for pH-controlled experiments.</div>
          </div>
          <span class="method-status status-soon">Coming Soon</span>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ═══════════════════════════════════════════ -->
<!-- THEME 3: General Lab Protocols             -->
<!-- ═══════════════════════════════════════════ -->
<section class="methods-theme">
  <div class="methods-theme-header" onclick="toggleTheme(this)">
    <div class="methods-theme-icon" style="background: #3a5a8c;"></div>
    <h2>General Lab Protocols</h2>
    <span class="methods-theme-arrow open">▶</span>
  </div>
  <p class="methods-theme-desc">
    Foundational procedures for routine laboratory work. These are also intended as a reference for new lab members and undergraduate researchers.
  </p>

  <div class="methods-theme-body open" style="max-height: 2000px;">

    <div class="method-card coming-soon">
      <div class="method-card-top">
        <div>
          <div class="method-title">Autoclaving</div>
          <div class="method-desc">Standard autoclaving procedures.</div>
        </div>
        <span class="method-status status-soon">Coming Soon</span>
      </div>
    </div>

    <div class="method-card coming-soon">
      <div class="method-card-top">
        <div>
          <div class="method-title">Cell sorting</div>
          <div class="method-desc">Flow cytometry cell sorting protocol.</div>
        </div>
        <span class="method-status status-soon">Coming Soon</span>
      </div>
    </div>

    <div class="method-card coming-soon">
      <div class="method-card-top">
        <div>
          <div class="method-title">Bacterial freezer stocks</div>
          <div class="method-desc">Preparing and maintaining bacterial freezer stocks.</div>
        </div>
        <span class="method-status status-soon">Coming Soon</span>
      </div>
    </div>

  </div>
</section>

<script>
function toggleTheme(header) {
  var arrow = header.querySelector('.methods-theme-arrow');
  var body = header.parentElement.querySelector('.methods-theme-body');
  var isOpen = body.classList.contains('open');

  if (isOpen) {
    body.style.maxHeight = '0px';
    body.classList.remove('open');
    arrow.classList.remove('open');
  } else {
    body.classList.add('open');
    arrow.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
}

function toggleRationale(btn) {
  var rationale = btn.nextElementSibling;
  var isOpen = rationale.classList.contains('open');

  if (isOpen) {
    rationale.style.maxHeight = '0px';
    rationale.classList.remove('open');
    btn.classList.remove('open');
  } else {
    rationale.classList.add('open');
    btn.classList.add('open');
    rationale.style.maxHeight = rationale.scrollHeight + 'px';
  }
}
</script>
