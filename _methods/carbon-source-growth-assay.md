---
layout: page
title: Carbon Source Growth Assay
---

<style>
  .callout {
    border-left: 4px solid;
    border-radius: 4px;
    padding: 0.9rem 1.1rem;
    margin: 1rem 0;
    font-size: 0.92rem;
    line-height: 1.65;
  }
  .callout-title {
    font-weight: 700;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.35rem;
  }
  .callout-note {
    border-color: #2d6a4f;
    background: #f0fdf4;
  }
  .callout-note .callout-title { color: #2d6a4f; }
  .callout-important {
    border-color: #c0713a;
    background: #fffbf0;
  }
  .callout-important .callout-title { color: #c0713a; }
  .callout-caution {
    border-color: #b91c1c;
    background: #fef2f2;
  }
  .callout-caution .callout-title { color: #b91c1c; }
</style>

# Overview

<div class="callout callout-note">
  <div class="callout-title">Purpose</div>
  Growth assay to determine preferred carbon source for cold-adapted ureolytic bacterial isolates. Isolates will be grown in liquid urea-based media with different carbon sources (malate, succinate, acetate) and monitored via OD600 measurements over ~1 week.
</div>

**Isolates:**

| Isolate | Source                | Rationale                                                                        |
| ------- | --------------------- | -------------------------------------------------------------------------------- |
| GG8     | Gilkey Glacier        | Most basic of the Gilkey Glacier isolates (other than GG27B) following transfers |
| GG27B   | Gilkey Glacier        | Fast grower on glucose media                                                     |
| GNP012  | Glacier National Park | Has urea transporter                                                             |
| GNP014  | Glacier National Park | Has urea transporter and turned pink quickly initially                           |

Original base media

| Component                    | Amount    | Notes                        |
| ---------------------------- | --------- | ---------------------------- |
| Yeast extract                | 0.1g      |                              |
| Glucose                      | 0.5g      |                              |
| K<sub>2</sub>HPO<sub>4</sub> | 0.3g      | Potassium phosphate          |
| pH                           | 6.8 ± 0.2 | Adjust with 1 M HCl or NaOH |
| Urea                         | 20g       |                              |

**Experimental conditions:**

| Condition | Carbon Source                   | Formula                                                                  |
| --------- | ------------------------------- | ------------------------------------------------------------------------ |
| 1         | Sodium DL-malate                | C<sub>4</sub>H<sub>4</sub>Na<sub>2</sub>O<sub>5</sub>                   |
| 2         | Sodium succinate                | C<sub>4</sub>H<sub>4</sub>Na<sub>2</sub>O<sub>4</sub> · 6H<sub>2</sub>O |
| 3         | Sodium acetate (anhydrous, 99%) | C<sub>2</sub>H<sub>3</sub>NaO<sub>2</sub>                               |

## **Experimental design summary:**
- 4 isolates × 3 conditions × 3 replicates = **36 inoculated tubes**
- 3 uninoculated media blanks (1 per condition) = **3 blank tubes**
- **Total: 39 tubes**

---
# Materials
**Media/reagents:**
- Yeast extract
- **Sodium DL-malate, disodium salt** (MW 178.05 g/mol; CAS 676-46-0) — racemic mixture; only the L-form is metabolically active as a TCA cycle intermediate
- **Sodium succinate dibasic hexahydrate** (disodium succinate hexahydrate; MW 270.14 g/mol; Sigma-Aldrich Cat. No. S2378; CAS 6106-21-4) — note: hexahydrate form; account for water of crystallization in mass calculations
- Sodium acetate, anhydrous, 99% (MW 82.03 g/mol, CAS 127-09-3)
- K<sub>2</sub>HPO<sub>4</sub> (potassium phosphate)
- CH<sub>4</sub>NO<sub>2</sub> (urea)
- 1M HCl
- 1M NaOH
- Sterile deionized water

**Equipment:**
- Analytical balance
- Graduated cylinders or volumetric flasks
- Magnetic stir bar and stir plate
- 0.22 μm syringe filter
- Sterile syringe
- Sterile collection bottles/flasks
- Glass culture tubes: DurexTM Borosilicate, disposable, 16 × 150 mm (Cat. No. 47729-580) — ×39 minimum
- Color-coded stickers for tube labeling
- Inoculating loop (sterile)
- Rotating shaker at 15°C (in fridge)
- Spectrophotometer (OD600)
- Sterile pipettes and tips
- 70% ethanol
- pH strips
- Lab notebook

---
# 1 Pre-experiment preparation

<div class="callout callout-important">
  <div class="callout-title">Timeline</div>
  Combustion and autoclaving must be completed <strong>before</strong> media preparation day. Combustion takes several hours including cool-down.
</div>

## 1.1 Combust glassware
Combustion (dry heat sterilization) removes all organic residues and ensures tubes are free of contaminants that could interfere with growth or OD readings.
1. Wrap glass culture tubes (×39 minimum + spares) loosely in aluminum foil
2. Place in combustion oven
3. Combust at **450°C for 5 hours**
4. Allow to cool completely inside the oven before removing — do not open door while hot (thermal shock can crack tubes)
5. Keep tubes wrapped/covered until use

<div class="callout callout-note">
  Do <strong>not</strong> combust any plastic (caps, etc.)
</div>

## 1.2 Autoclave tube closures and other equipment
Autoclave all non-glass items that will contact sterile media or cultures.

**Items to autoclave:**
- Tube caps/closures

**Procedure:**
1. Wrap or bag each item loosely in aluminum foil — ensure steam can penetrate
2. Autoclave at **121°C, 15 psi, 15–20 min** dry cycle
3. Allow to dry and cool completely inside autoclave
4. Store sealed/wrapped until use
5. Label autoclave tape with date and initials

<div class="callout callout-note">
  Disposable items that come pre-sterilized (e.g., syringe filters, pipette tips, microcentrifuge tubes, Falcon tubes) do not need to be autoclaved. The glass culture tubes are combusted (Section 1.1), not autoclaved.
</div>

---
# 2 Preparing media
Prepare **3 base media** (one per carbon source condition) following the same procedure as the original urea-based growth medium protocol, substituting the carbon source as indicated.

## 2.1 Media formulations

<div class="callout callout-important">
  <div class="callout-title">Carbon source concentrations</div>
  Concentrations matched on a <strong>molar carbon basis</strong> to 0.5 g/L glucose (16.67 mmol C/L). Use the <strong>sodium salt forms</strong> of malate and succinate — biologically equivalent to the free acids but more stable and easier to handle.
</div>

| Carbon Source | Reagent Form | Formula | MW (g/mol) | Carbons | Mass for 16.67 mmol C/L |
| ------------- | ------------ | ------- | ---------- | ------- | ----------------------- |
| Glucose | Free sugar | C₆H₁₂O₆ | 180.16 | 6 | **0.500 g/L** |
| Malate | Sodium DL-malate, disodium | C₄H₄Na₂O₅ | 178.05 | 4 | **0.742 g/L** |
| Succinate | Sodium succinate dibasic hexahydrate (Sigma S2378) | C₄H₄Na₂O₄·6H₂O | 270.14 | 4 | **1.126 g/L** |
| Acetate | Sodium acetate, anhydrous (CAS 127-09-3) | C₂H₃NaO₂ | 82.03 | 2 | **0.684 g/L** |

### Calculations

**Reference:** Glucose at 0.5 g/L
- 0.500 g/L ÷ 180.16 g/mol = 2.776 mmol/L
- 2.776 mmol/L × 6 C/molecule = **16.67 mmol C/L**

**Malate** (sodium DL-malate disodium, MW 178.05 g/mol, 4 C/molecule):
- 16.67 mmol C/L ÷ 4 C/molecule = 4.167 mmol/L
- 4.167 mmol/L × 178.05 g/mol = **0.742 g/L**
- *Note: Reagent is a DL racemic mixture — only the L-form is expected to be metabolically active. Mass has not been doubled to compensate, as the additional osmotic load could confound results. Note as a limitation when interpreting.*

**Succinate** (sodium succinate dibasic hexahydrate, MW 270.14 g/mol, 4 C/molecule):
- 16.67 mmol C/L ÷ 4 C/molecule = 4.167 mmol/L
- 4.167 mmol/L × 270.14 g/mol = **1.126 g/L**
- *Note: The hexahydrate form means a large fraction of the mass is water — this is why the required mass is so high relative to the other carbon sources.*

**Acetate** (sodium acetate anhydrous, MW 82.03 g/mol, 2 C/molecule):
- 16.67 mmol C/L ÷ 2 C/molecule = 8.333 mmol/L
- 8.333 mmol/L × 82.03 g/mol = **0.684 g/L**

Table 1. *Base medium formulation per condition (per liter). Amounts calculated to match 16.67 mmol C/L (equivalent to 0.5 g/L glucose).*

| Component     | Condition 1 (Malate)                                      | Condition 2 (Succinate)                                             | Condition 3 (Acetate)                                  |
| ------------- | --------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------ |
| Yeast extract | 0.1 g                                                     | 0.1 g                                                               | 0.1 g                                                  |
| Carbon source | Sodium DL-malate (disodium, MW 178.05 g/mol): **0.742 g** | Sodium succinate dibasic hexahydrate (MW 270.14 g/mol): **1.126 g** | Sodium acetate anhydrous (MW 82.03 g/mol): **0.684 g** |
| K₂HPO₄        | 0.3 g                                                     | 0.3 g                                                               | 0.3 g                                                  |
| Milli-Q water | to 900 mL                                                 | to 900 mL                                                           | to 900 mL                                              |
| pH target     | 6.8 ± 0.2                                                 | 6.8 ± 0.2                                                           | 6.8 ± 0.2                                              |

<div class="callout callout-caution">
  <div class="callout-title">DL-malate limitation</div>
  DL-malate is a racemic mixture. Only the L-enantiomer enters the TCA cycle; the D-form is generally not metabolized by most bacteria. This means roughly half the malate carbon may be biologically unavailable. Concentrations have <strong>not</strong> been doubled to compensate — the additional osmotic load and sodium could confound results. Acknowledge this as a limitation when interpreting growth on malate vs. other carbon sources.
</div>

## 2.2 Dissolve components
For each condition (200 mL scale):
1. Weigh yeast extract, carbon source, and K₂HPO₄ on analytical balance
2. Add to ~150 mL Milli-Q water
3. Stir on magnetic stir plate until fully dissolved

## 2.3 Adjust pH
1. Measure pH of dissolved medium
2. Adjust to **6.8 ± 0.2** using 1M HCl or 1M NaOH (dropwise)
3. Record volume of acid/base used
4. Bring to final volume of 200 mL after pH adjustment

## 2.4 Autoclave base media
1. Autoclave at **121°C, 15 psi, 15–20 min** liquid cycle
2. Cool to room temperature before adding urea

## 2.5 Prepare urea solution (20% w/v)
1. Dissolve 20 g urea per 100 mL deionized water at room temperature — do **not** heat
2. Filter sterilize through **0.22 μm** syringe filter in biosafety cabinet
3. Collect into sterile container
4. Store at 4°C; use within 1 week

## 2.6 Combine base medium and urea solution
For each condition, aseptically combine base medium and urea stock to achieve 2% (w/v) final urea concentration:
- Work in biosafety cabinet
- C<sub>1</sub>V<sub>1</sub> = C<sub>2</sub>V<sub>2</sub>: (20%)(V₁) = (2%)(final volume)
- **V<sub>1</sub> = 10% of final volume** as urea stock
- **Remaining 90%** = base medium
- Mix gently by swirling

---
# 3 Inoculum preparation

<div class="callout callout-note">
  <div class="callout-title">Approach</div>
  Cultures are grown up from single colonies in R2A, OD600 is measured, and inoculum volume is adjusted for each isolate to achieve a consistent starting OD across all tubes and isolates.
</div>

## 3.1 Prepare starter cultures
For each of the 4 isolates:
1. Select an individual colony from the R2A agar plate
2. Using a sterile loop, transfer the colony into a 50 mL Falcon tube containing **10 mL sterile R2A broth**
3. Incubate on a shaking incubator at **15°C** until visibly turbid

## 3.2 Standardize inoculum
**Target starting OD: 0.025**

### Measuring starter culture OD
Many starter cultures will be too dense to read directly — use a cuvette dilution series:
1. Add a small volume of starter culture to 1000 µL Milli-Q water in a cuvette
2. Measure OD600; if reading is >0.3, try a smaller volume or re-dilute
3. Back-calculate the true OD of the undiluted culture:
   - **True OD = measured OD × (total cuvette volume ÷ sample volume added)**
   - *Example: 10 µL culture in 1000 µL total → True OD = measured OD × 100*
4. Repeat with additional volumes if needed to confirm; average confirmatory reads
5. Record all dilution steps and measured values in lab notebook

### Calculating inoculum volume
Use C<sub>1</sub>V<sub>1</sub> with the confirmed true OD:
- C<sub>1</sub> = true OD of starter culture
- V<sub>1</sub> = inoculum volume to add (solve for this)
- C<sub>2</sub> = **0.025** (target starting OD)
- V<sub>2</sub> = **3000 µL** (final tube volume)
- **V<sub>1</sub> = (0.025 × 3000) ÷ C<sub>1</sub>**
- Round to nearest 5 µL for pipetting accuracy

### Inoculum volumes (inoculation date: 2026-03-04)

| Isolate | True OD (confirmed) | Inoculum volume | Medium volume | R2A carryover |
| ------- | ------------------- | --------------- | ------------- | ------------- |
| GG8     | 0.863               | **85 µL**       | 2915 µL       | ~2.8%         |
| GG27B   | 0.165               | **455 µL**      | 2545 µL       | ~15% ⚠️       |
| GNP012  | 1.115               | **65 µL**       | 2935 µL       | ~2.2%         |
| GNP014  | 0.956               | **80 µL**       | 2920 µL       | ~2.7%         |

## 3.3 Inoculate experimental tubes
1. Add the appropriate volume of starter culture to each tube, then bring to **3 mL final volume** with the corresponding condition medium
2. Leave blank tubes uninoculated
3. Cap all tubes and record time of inoculation
4. Measure and record actual Day 0 OD600 for each tube to confirm starting density

---
# 4 Tube labeling

## 4.1 Color-coded sticker scheme
Assign one sticker color per isolate for quick visual identification:

| Color  | Isolate |
| ------ | ------- |
| Purple | GG8     |
| Blue   | GG27B   |
| Green  | GNP012  |
| Yellow | GNP014  |
| Orange | Blanks  |

## 4.2 Full tube list

| Tube # | Isolate | Carbon Source | Replicate |
| ------ | ------- | ------------- | --------- |
| 1      | GG27B   | Malate        | 1         |
| 2      | GG27B   | Malate        | 2         |
| 3      | GG27B   | Malate        | 3         |
| 4      | GG27B   | Succinate     | 1         |
| 5      | GG27B   | Succinate     | 2         |
| 6      | GG27B   | Succinate     | 3         |
| 7      | GG27B   | Acetate       | 1         |
| 8      | GG27B   | Acetate       | 2         |
| 9      | GG27B   | Acetate       | 3         |
| 10     | GG8     | Malate        | 1         |
| 11     | GG8     | Malate        | 2         |
| 12     | GG8     | Malate        | 3         |
| 13     | GG8     | Succinate     | 1         |
| 14     | GG8     | Succinate     | 2         |
| 15     | GG8     | Succinate     | 3         |
| 16     | GG8     | Acetate       | 1         |
| 17     | GG8     | Acetate       | 2         |
| 18     | GG8     | Acetate       | 3         |
| 19     | GNP012  | Malate        | 1         |
| 20     | GNP012  | Malate        | 2         |
| 21     | GNP012  | Malate        | 3         |
| 22     | GNP012  | Succinate     | 1         |
| 23     | GNP012  | Succinate     | 2         |
| 24     | GNP012  | Succinate     | 3         |
| 25     | GNP012  | Acetate       | 1         |
| 26     | GNP012  | Acetate       | 2         |
| 27     | GNP012  | Acetate       | 3         |
| 28     | GNP014  | Malate        | 1         |
| 29     | GNP014  | Malate        | 2         |
| 30     | GNP014  | Malate        | 3         |
| 31     | GNP014  | Succinate     | 1         |
| 32     | GNP014  | Succinate     | 2         |
| 33     | GNP014  | Succinate     | 3         |
| 34     | GNP014  | Acetate       | 1         |
| 35     | GNP014  | Acetate       | 2         |
| 36     | GNP014  | Acetate       | 3         |
| 37     | —       | Malate        | Blank     |
| 38     | —       | Succinate     | Blank     |
| 39     | —       | Acetate       | Blank     |

---
# 5 Incubation
- **Temperature:** 15°C (fridge)
- **Agitation:** Rotating shaker, 150RPM
- **Duration:** ~1 week (7 days)

---
# 6 OD600 measurements

## 6.1 Measurement schedule

Measurements are taken more frequently during early growth and spaced out as the experiment progresses. Days 1 and 2 each include three timepoints to capture early growth kinetics.

| Day | # Timepoints   |
| --- | -------------- |
| 0   | 1              |
| 1   | 3 (M1, M2, M3) |
| 2   | 3 (M1, M2, M3) |
| 4   | 1              |
| 7   | 1              |

## 6.2 Measurement procedure

**For each measurement session (single or one of multiple timepoints in a day):**
1. Remove all tubes from the shaker
2. **Blank the spectrophotometer** with the corresponding uninoculated blank for each condition — blank once per condition, before reading all tubes in that condition:
    - Blank with BLK-Mal → read all 13 malate tubes
    - Blank with BLK-Suc → read all 13 succinate tubes
    - Blank with BLK-Ace → read all 13 acetate tubes
3. Read OD600 directly in the glass culture tubes
4. **Record the time of measurement (HH:MM) for each reading**
5. Return tubes to shaker promptly

<div class="callout callout-important">
  <div class="callout-title">Consistency</div>
  Use the same spectrophotometer and same tube orientation (align any seam or mark) for every reading throughout the experiment. The blanking tube for each condition should also be read consistently in the same orientation.
</div>

---
# 7 Endpoint measurements
At the conclusion of the experiment (~Day 7):

## 7.1 Final OD600
- Take final OD600 reading as in Section 6.2

## 7.2 Endpoint pH
- Measure pH of each tube using a pH meter (preferred) or pH strips
- Record pH alongside the final OD600 reading
- Compare to initial pH (6.8) — an increase toward alkaline suggests urease activity
