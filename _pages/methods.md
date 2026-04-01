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
<!-- THEME 1: General Lab Protocols             -->
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

  <div class="methods-theme-body open" style="max-height: 6000px;">

    <!-- Autoclave Sterilization — AVAILABLE -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">Autoclave Sterilization &amp; Decontamination</div>
          <div class="method-desc">Equipment sterilization, liquid media sterilization, and biological waste decontamination with cycle selection guide.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/autoclave/">Protocol</a>
        <a class="method-link" href="/methods/autoclave-diagram/">Interactive Diagram</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            Autoclaving uses pressurized steam to sterilize equipment and media and to decontaminate biological waste. Different load types (dry equipment, liquid media, biological waste) require different cycle parameters to ensure effective sterilization without damaging materials. This protocol consolidates three previously separate procedures into a single reference covering all routine autoclave uses, with guidance on cycle selection, safety precautions, and troubleshooting common issues.
          </div>
        </div>
      </div>
    </div>

    <!-- Plating from Freezer Stock — AVAILABLE -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">Plating Bacterial Cultures from Freezer Stocks</div>
          <div class="method-desc">Revival of bacterial isolates from −80°C glycerol stocks by streak plating, with medium selection guide.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/plating-from-freezer-stock/">Protocol</a>
        <a class="method-link" href="/methods/plating-from-freezer-stock-diagram/">Interactive Diagram</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            Streak plating from −80°C glycerol stocks produces isolated colonies that can be used to start fresh liquid cultures, confirm strain identity, or assess colony morphology. This protocol covers both the frozen scrape method (which preserves the stock for repeated use) and the thawed pipette method, with guidance on medium selection for different organism types including cold-adapted environmental isolates.
          </div>
        </div>
      </div>
    </div>

    <!-- Standardize Inoculum — AVAILABLE -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">Standardize Inoculum by OD<sub>600</sub></div>
          <div class="method-desc">General procedure for standardizing bacterial inocula to a target starting OD using dilution calculations.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/standardize-inoculum/">Protocol</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            Optical density at 600 nm (OD<sub>600</sub>) provides a quick, non-destructive estimate of cell concentration in liquid culture. This protocol describes a general-purpose method for standardizing bacterial inocula using dilution-based OD measurements and C₁V₁ = C₂V₂ calculations, applicable to any liquid culture experiment where a target starting OD is specified.
          </div>
        </div>
      </div>
    </div>

    <!-- Combustion Glassware — AVAILABLE -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">Combustion (Dry Heat Sterilization) of Glassware</div>
          <div class="method-desc">Dry heat sterilization at 450°C to eliminate organic residues from glass culture tubes and vessels.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/combustion-glassware/">Protocol</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            Combustion sterilization eliminates all organic residues from glassware by heating to 450°C for five hours. Unlike autoclaving, which sterilizes but does not remove organics, combustion ensures glassware is both sterile and organically clean. This is used for culture tubes in optical density measurements, where trace organic contaminants could interfere with growth readings or introduce unwanted carbon sources.
          </div>
        </div>
      </div>
    </div>

    <!-- 5% Nitric Acid — AVAILABLE -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">5% Nitric Acid Solution</div>
          <div class="method-desc">Preparation of 5% (v/v) nitric acid for acid preservation of biological samples and urea standard matrices.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/5pct-nitric-acid/">Protocol</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            A 5% nitric acid solution denatures enzymes like urease on contact, locking in the urea concentration at the moment of sampling. This same solution serves as the matrix for preparing urea standards in colorimetric assays, ensuring that standards and samples share identical chemical backgrounds for accurate quantification.
          </div>
        </div>
      </div>
    </div>

    <!-- 1M HCl & NaOH — AVAILABLE -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">1 M HCl &amp; NaOH for pH Adjustment</div>
          <div class="method-desc">Preparation of 50 mL working stocks of 1 M hydrochloric acid and 1 M sodium hydroxide for media pH adjustment.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/1m-hcl-naoh-ph-adjustment/">Protocol</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            Stock solutions of 1 M hydrochloric acid and 1 M sodium hydroxide are used for fine pH adjustments during media preparation. This protocol covers the preparation of small-volume (50 mL) working stocks suitable for bench-scale media preparation.
          </div>
        </div>
      </div>
    </div>

    <!-- Cell sorting — COMING SOON -->
    <div class="method-card coming-soon">
      <div class="method-card-top">
        <div>
          <div class="method-title">Cell sorting</div>
          <div class="method-desc">Flow cytometry cell sorting protocol.</div>
        </div>
        <span class="method-status status-soon">Coming Soon</span>
      </div>
    </div>

  </div>
</section>

<!-- ═══════════════════════════════════════════ -->
<!-- THEME 2: Biocementation & MICP             -->
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

  <div class="methods-theme-body open" style="max-height: 6000px;">

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
            Ureolytic bacteria require both a carbon source for growth and urea as a substrate for urease activity. Different carbon sources can significantly affect growth rates and metabolic activity, particularly in cold-adapted organisms whose metabolic preferences may differ from mesophilic model strains. This assay provides a standardized framework for comparing bacterial growth across carbon sources using optical density measurements over time, paired with endpoint pH readings as an indicator of urease activity. It can be adapted for any combination of carbon sources, bacterial isolates, and incubation temperatures.
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
            Quantifying ureolytic activity — the rate at which bacteria hydrolyze urea — is central to studying microbially-induced calcium carbonate precipitation (MICP). The Jung assay uses a colorimetric two-reagent system (o-phthalaldehyde and NED) to measure urea concentration at 505 nm, providing a direct, quantitative measure of urea hydrolysis over time. The serial transfer design in this protocol allows tracking of ureolytic activity across multiple growth cycles, which is useful for understanding how bacteria adapt to urea-containing media over extended culture periods. This approach can be scaled to screen panels of isolates under standardized conditions.
          </div>
        </div>
      </div>
    </div>

    <!-- BHI Agar — AVAILABLE -->
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
        <a class="method-link" href="/methods/bhi-agar-diagram/">Interactive Diagram</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">&#9654;</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            Brain Heart Infusion (BHI) agar is a nutrient-rich, general-purpose medium widely used for cultivating fastidious organisms. In this research, BHI agar plates are used specifically for growing up <em>Sporosarcina pasteurii</em> from freezer stock to serve as a positive control in ureolytic activity assays. <em>S. pasteurii</em> is a well-characterized ureolytic bacterium that grows optimally at 30°C on rich media, and BHI provides the nutritional complexity needed to reliably recover it from cryopreserved stocks. Having a standardized BHI plate preparation protocol ensures consistency across experiments and supports reproducibility when onboarding new lab members.
          </div>
        </div>
      </div>
    </div>

    <!-- BHI Broth — AVAILABLE -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">BHI Broth</div>
          <div class="method-desc">Brain Heart Infusion broth preparation for <em>Sporosarcina pasteurii</em> starter cultures, with batch scaling guide.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/bhi-broth/">Protocol</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            Brain Heart Infusion (BHI) broth is a commercially available, nutrient-rich liquid medium widely used for cultivating fastidious organisms. In this context, it serves as the growth medium for <em>Sporosarcina pasteurii</em>, a well-characterized ureolytic bacterium used as a positive control in urea hydrolysis experiments. BHI supports rapid growth of <em>S. pasteurii</em> at both its optimal temperature (30°C) and at lower experimental temperatures.
          </div>
        </div>
      </div>
    </div>

    <!-- BHI Urea Agar — AVAILABLE -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">BHI Urea Agar</div>
          <div class="method-desc">Brain Heart Infusion agar supplemented with 2% urea for cultivating and screening ureolytic bacteria.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/bhi-urea-agar/">Protocol</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            BHI Urea Agar combines a nutrient-rich base (Brain Heart Infusion) with 2% urea to support growth of ureolytic bacteria on solid medium. The urea is added via a filter-sterilized stock after autoclaving to prevent thermal degradation. This medium is used for plating and screening ureolytic organisms, where urea hydrolysis can be detected through downstream assays or pH-based indicators.
          </div>
        </div>
      </div>
    </div>

    <!-- S. pasteurii Starter Culture — AVAILABLE -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title"><em>S. pasteurii</em> Starter Culture</div>
          <div class="method-desc">Revival and starter culture preparation of <em>Sporosarcina pasteurii</em> from freezer stock for use as a positive control.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/s-pasteurii-starter/">Protocol</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            <em>Sporosarcina pasteurii</em> is a well-characterized ureolytic bacterium commonly used as a positive control in urea hydrolysis experiments. This protocol covers revival from frozen glycerol stocks and preparation of starter cultures at both 15°C and 30°C incubation temperatures. Standardized positive control preparation supports consistent reference performance across assay runs.
          </div>
        </div>
      </div>
    </div>

    <!-- Succinate-Urea Growth Medium — AVAILABLE -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">Succinate-Urea Growth Medium</div>
          <div class="method-desc">Defined growth medium with succinate as carbon source and 2% urea, carbon-matched to a glucose reference formulation.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/succinate-urea-medium/">Protocol</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            This defined medium uses sodium succinate as the sole carbon source, paired with 2% urea as a nitrogen source and urease substrate. The succinate concentration is matched on a molar carbon basis to a 0.5 g/L glucose reference formulation (16.67 mmol C/L). The medium can be used for growth experiments, ureolytic activity assays, or any application requiring a defined carbon source with urea supplementation.
          </div>
        </div>
      </div>
    </div>

    <!-- R2A Broth — AVAILABLE -->
    <div class="method-card">
      <div class="method-card-top">
        <div>
          <div class="method-title">R2A Broth — Two-Cycle Growth Protocol</div>
          <div class="method-desc">Two-cycle liquid culture protocol: growth in R2A followed by urea conditioning for downstream assays.</div>
        </div>
        <span class="method-status status-available">Available</span>
      </div>
      <div class="method-links">
        <a class="method-link" href="/methods/r2a-broth/">Protocol</a>
        <a class="method-link" href="/methods/r2a-broth-diagram/">Interactive Diagram</a>
      </div>
      <button class="method-rationale-toggle" onclick="toggleRationale(this)">
        <span class="arrow">▶</span> Background &amp; Rationale
      </button>
      <div class="method-rationale">
        <div class="method-rationale-inner">
          <div class="method-rationale-label">Background &amp; Rationale</div>
          <div class="method-rationale-text">
            R2A is a low-nutrient medium originally developed for enumerating heterotrophic bacteria in treated drinking water. Its minimal formulation makes it suitable for culturing slow-growing environmental isolates that may be inhibited by richer media. This two-cycle protocol first establishes growth in standard R2A liquid, then subcultures into R2A supplemented with urea to condition bacteria to urea-containing media before use in downstream assays.
          </div>
        </div>
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
<!-- THEME 3: Sphagnum Microbiome               -->
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
