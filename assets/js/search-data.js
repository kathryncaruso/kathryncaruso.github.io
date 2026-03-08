// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Past and current research projects in microbiology, ecology, and remote sensing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications are grouped by theme below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research-methods",
          title: "research methods",
          description: "Lab protocols, interactive diagrams, and computational notebooks from my graduate research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/methods/";
          },
        },{id: "methods-carbon-source-growth-assay-interactive-diagram",
          title: 'Carbon Source Growth Assay — Interactive Diagram',
          description: "Visual step-by-step walkthrough of the carbon source growth assay protocol.",
          section: "Methods",handler: () => {
              window.location.href = "/methods/carbon-source-growth-assay-diagram/";
            },},{id: "methods-carbon-source-growth-assay",
          title: 'Carbon Source Growth Assay',
          description: "Protocol for determining preferred carbon source for cold-adapted ureolytic bacterial isolates via OD600 growth curves.",
          section: "Methods",handler: () => {
              window.location.href = "/methods/carbon-source-growth-assay/";
            },},{id: "projects-biocementation-in-permafrost-environments",
          title: 'Biocementation in Permafrost Environments',
          description: "Studying applications of cold-adapted bacterial isolates for microbially-induced calcium carbonate precipitation (MICP) to stabilize defense materials in Arctic environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/biocementation/";
            },},{id: "projects-ectomycorrhizal-fungi-in-declining-hemlock-stands",
          title: 'Ectomycorrhizal Fungi in Declining Hemlock Stands',
          description: "Investigated shifts in mycorrhizal communities associated with eastern hemlock decline from hemlock woolly adelgid infestation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hemlock-ecm/";
            },},{id: "projects-venus-flytrap-habitat-suitability-modeling",
          title: 'Venus Flytrap Habitat Suitability Modeling',
          description: "Modeled current and future Venus flytrap habitat using remote sensing data to inform rare plant conservation in the Carolina Coastal Plain.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/venus-flytrap/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/katie-caruso/KathrynCaruso_CV/blob/main/main.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%61%72%75%73%6F.%6B.%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/katie-caruso", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/carusokatie", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0003-2436-1791", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=https://scholar.google.com/citations?user=sb7E_g0AAAAJ&hl=en", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
