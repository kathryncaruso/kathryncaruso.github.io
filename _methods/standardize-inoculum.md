---
layout: page
title: Standardize Inoculum by OD600
description: Procedure for standardizing bacterial inocula to a target OD600 using C1V1=C2V2 dilution calculations.
category: general
status: available
nav: false
---

**Standardize Inoculum by OD<sub>600</sub>, v1.0**
Kathryn E. Caruso · [0009-0003-2436-1791](https://orcid.org/0009-0003-2436-1791)
Foreman Lab · Center for Biofilm Engineering, Montana State University
Updated March 2026

<details><summary>How to cite this protocol</summary>

Caruso, K.E. (2026). <em>Standardize Inoculum by OD<sub>600</sub>, v1.0</em>. Foreman Lab, Center for Biofilm Engineering, Montana State University. https://kathryncaruso.github.io/methods/standardize-inoculum/

</details>

---

## Standardize Inoculum by OD<sub>600</sub>

*Standard Operating Procedure*

<div style="border-left: 4px solid #2d6a4f; background: #f0fdf4; border-radius: 4px; padding: 0.9rem 1.1rem; margin: 1rem 0; font-size: 0.92rem; line-height: 1.65;" markdown="1"><span style="font-weight: 700; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.35rem; color: #2d6a4f;">Purpose</span>

General procedure for standardizing bacterial inocula to a target starting OD<sub>600</sub> using C<sub>1</sub>V<sub>1</sub> = C<sub>2</sub>V<sub>2</sub> dilution calculations. Ensures consistent starting cell density across replicates and experiments. Applicable to any liquid culture inoculation where a target OD is specified.

</div>

---

## 1 Equipment and materials

- Spectrophotometer (OD<sub>600</sub>)
- Cuvettes (disposable or quartz)
- Micropipettes (2–1000 µL range)
- Sterile pipette tips
- Milli-Q water (for dilution series)
- Calculator
- Lab notebook

---

## 2 Parameters

Define these before starting — values will vary by experiment.

| Parameter | Symbol | Description |
| --------- | ------ | ----------- |
| Target starting OD | C<sub>2</sub> | The OD<sub>600</sub> you want in each experimental tube after inoculation |
| Final tube volume | V<sub>2</sub> | Total volume of medium + inoculum in each tube (e.g., 3000 µL) |
| Rounding precision | — | Round inoculum volumes for pipetting accuracy (e.g., nearest 5 µL) |

**Common target ODs used in this lab:**

| Experiment | Target OD<sub>600</sub> | Tube volume |
| ---------- | ---------------------- | ----------- |
| Jung assay serial transfer | 0.025 | 3000 µL |
| Carbon source growth assay | 0.025 | 3000 µL |

---

## 3 Measuring starter culture OD<sub>600</sub>

Many starter cultures will be too dense to read directly on the spectrophotometer (readings above ~1.0 become nonlinear). Use a cuvette dilution series:

1. Add **50 µL** of starter culture to **1000 µL Milli-Q water** in a cuvette (1:20 dilution)
2. Measure OD<sub>600</sub>; if reading is >0.3, try a smaller volume or re-dilute
3. Back-calculate the true OD of the undiluted culture:

> **True OD = measured OD × (total cuvette volume ÷ sample volume added)**

**Example:** 50 µL culture added to 1000 µL total:
- True OD = measured OD × (1000 ÷ 50) = measured OD × 20
- If measured OD = 0.15, then True OD = 0.15 × 20 = **3.0**

4. Repeat with additional volumes if needed to confirm; average confirmatory reads
5. Record all dilution steps and measured values in lab notebook

<div style="border-left: 4px solid #2d6a4f; background: #f0fdf4; border-radius: 4px; padding: 0.9rem 1.1rem; margin: 1rem 0; font-size: 0.92rem; line-height: 1.65;" markdown="1"><span style="font-weight: 700; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.35rem; color: #2d6a4f;">Tip</span>

Start with **50 µL into 1000 µL (1:20)**. This gives readable values on the Genesys 10UV Scanning for cultures in the OD 0.5–6.0 range. If the reading is >0.3, try 20 µL or 10 µL. If too low to read accurately (<0.01), try 100 µL.

The Genesys 10UV Scanning has a reliable lower detection limit of ~0.01–0.02 absorbance units. A 1:100 dilution (10 µL into 1000 µL) often puts readings at the noise floor for typical starter culture densities — start at 1:20 and work from there.

</div>

---

## 4 Calculating inoculum volume

Use C<sub>1</sub>V<sub>1</sub> = C<sub>2</sub>V<sub>2</sub> with the confirmed true OD:

| Variable | Meaning | Value |
| -------- | ------- | ----- |
| C<sub>1</sub> | True OD of starter culture | Measured in Section 3 |
| V<sub>1</sub> | Inoculum volume to add | **Solve for this** |
| C<sub>2</sub> | Target starting OD | Defined per experiment (Section 2) |
| V<sub>2</sub> | Final tube volume | Defined per experiment (Section 2) |

> **V<sub>1</sub> = (C<sub>2</sub> × V<sub>2</sub>) ÷ C<sub>1</sub>**

**Worked example** (target OD 0.025, tube volume 3000 µL):
- Starter culture True OD = 8.5
- V<sub>1</sub> = (0.025 × 3000) ÷ 8.5 = 75 ÷ 8.5 = 8.8 µL
- Round to nearest 5 µL → **10 µL inoculum**

<div style="border-left: 4px solid #c0713a; background: #fffbf0; border-radius: 4px; padding: 0.9rem 1.1rem; margin: 1rem 0; font-size: 0.92rem; line-height: 1.65;" markdown="1"><span style="font-weight: 700; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.35rem; color: #c0713a;">Important</span>

Round to the nearest 5 µL for pipetting accuracy. For very small volumes (<5 µL), consider diluting the starter culture first to bring the inoculum volume into a more pipettable range (e.g., ≥10 µL).

</div>

---

## 5 Inoculation

1. Calculate inoculum volume for each starter culture (Section 4)
2. Calculate medium volume per tube: V<sub>2</sub> − V<sub>1</sub>
3. Dispense medium into labeled tubes
4. Add calculated inoculum volume from starter culture
5. Cap and gently vortex or invert to mix
6. Record all values in lab notebook

---

## 6 Verification

After inoculation, confirm the starting OD is in the expected range:

1. Measure OD<sub>600</sub> of inoculated tubes (read directly in culture tube if using glass tubes, or transfer to cuvette)
2. Compare to target OD<sub>600</sub>
3. Flag any tubes that fall outside the acceptable range

<div style="border-left: 4px solid #2d6a4f; background: #f0fdf4; border-radius: 4px; padding: 0.9rem 1.1rem; margin: 1rem 0; font-size: 0.92rem; line-height: 1.65;" markdown="1"><span style="font-weight: 700; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.35rem; color: #2d6a4f;">Note</span>

Small deviations from target are normal due to rounding. The important thing is consistency across replicates.

</div>
