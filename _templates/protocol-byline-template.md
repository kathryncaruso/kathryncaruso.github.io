# Protocol Byline Template

Use this template for ALL protocol Markdown files and React/HTML interactive diagrams.

---

## Markdown Protocol Byline

Add this block at the very top of every `.md` protocol file, immediately after the YAML front matter (if any). Replace bracketed fields with actual values.

```markdown
**[Protocol Title]**  
Kathryn E. Caruso · [0009-0003-2436-1791](https://orcid.org/0009-0003-2436-1791)  
Foreman Lab · Center for Biofilm Engineering, Montana State University  
Updated [Month Year]

<details><summary>How to cite this protocol</summary>

Caruso, K.E. ([Year]). *[Protocol Title].* Foreman Lab, Center for Biofilm Engineering, Montana State University. [Full URL to protocol page]

</details>

---
```

## React / HTML Interactive Diagram Byline

Add this as a header section at the top of every interactive diagram component, visually consistent with the Markdown version. Include a collapsible or toggleable citation section.

```
[Protocol Title] — Interactive Diagram
Kathryn E. Caruso · 0009-0003-2436-1791 (linked to https://orcid.org/0009-0003-2436-1791)
Foreman Lab · Center for Biofilm Engineering, Montana State University
Updated [Month Year]

▸ How to cite this protocol (collapsible, same citation text as Markdown version)
```

## Field Guide

| Field | Where to find it |
|---|---|
| **Protocol Title** | Use the existing H1 / title from the file |
| **Updated date** | Use the most recent edit date (check git history if unclear) |
| **URL** | Use the live URL on the published site |
