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
          description: "Academic CV for Kathryn Caruso — education, publications, research experience, and awards in microbiology and biofilm engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed publications in environmental microbiology, plant genetics, and forest ecology by Kathryn Caruso.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Past and current research projects in microbiology, ecology, and remote sensing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-research-methods",
          title: "research methods",
          description: "Lab protocols, interactive diagrams, and computational notebooks from my graduate research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/methods/";
          },
        },{id: "methods-1-m-hcl-amp-naoh-for-ph-adjustment",
          title: '1 M HCl &amp;amp; NaOH for pH Adjustment',
          description: "Preparation of 1 M stock solutions of hydrochloric acid and sodium hydroxide for routine pH adjustment of media and buffers.",
          section: "Methods",handler: () => {
              window.location.href = "/methods/1m-hcl-naoh-ph-adjustment/";
            },},{id: "methods-5-nitric-acid-solution",
          title: '5% Nitric Acid Solution',
          description: "Preparation of 5% (v/v) nitric acid for acid preservation of biological samples and urea standards.",
          section: "Methods",handler: () => {
              window.location.href = "/methods/5pct-nitric-acid/";
            },},{id: "methods-autoclave-operation-interactive-diagram",
          title: 'Autoclave Operation — Interactive Diagram',
          description: "",
          section: "Methods",handler: () => {
              window.location.href = "/methods/autoclave-diagram/";
            },},{id: "methods-autoclave-sterilization-and-decontamination",
          title: 'Autoclave Sterilization and Decontamination',
          description: "Protocol for sterilizing equipment, media, and decontaminating biological waste using autoclave cycles.",
          section: "Methods",handler: () => {
              window.location.href = "/methods/autoclave/";
            },},{id: "methods-bhi-agar-interactive-diagram",
          title: 'BHI Agar — Interactive Diagram',
          description: "",
          section: "Methods",handler: () => {
              window.location.href = "/methods/bhi-agar-diagram/";
            },},{id: "methods-bhi-agar",
          title: 'BHI Agar',
          description: "",
          section: "Methods",handler: () => {
              window.location.href = "/methods/bhi-agar/";
            },},{id: "methods-bhi-broth",
          title: 'BHI Broth',
          description: "General-purpose nutrient-rich liquid medium for growing Sporosarcina pasteurii starter cultures.",
          section: "Methods",handler: () => {
              window.location.href = "/methods/bhi-broth/";
            },},{id: "methods-bhi-urea-agar",
          title: 'BHI Urea Agar',
          description: "Brain Heart Infusion agar supplemented with 2% urea for cultivating and screening ureolytic bacteria",
          section: "Methods",handler: () => {
              window.location.href = "/methods/bhi-urea-agar/";
            },},{id: "methods-carbon-source-growth-assay-interactive-diagram",
          title: 'Carbon Source Growth Assay — Interactive Diagram',
          description: "",
          section: "Methods",handler: () => {
              window.location.href = "/methods/carbon-source-growth-assay-diagram/";
            },},{id: "methods-carbon-source-growth-assay",
          title: 'Carbon Source Growth Assay',
          description: "",
          section: "Methods",handler: () => {
              window.location.href = "/methods/carbon-source-growth-assay/";
            },},{id: "methods-combustion-dry-heat-sterilization-of-glassware",
          title: 'Combustion (Dry Heat Sterilization) of Glassware',
          description: "Procedure for combustion sterilization of glassware to remove organic residues and contaminants.",
          section: "Methods",handler: () => {
              window.location.href = "/methods/combustion-glassware/";
            },},{id: "methods-jung-assay-interactive-diagram",
          title: 'Jung Assay — Interactive Diagram',
          description: "",
          section: "Methods",handler: () => {
              window.location.href = "/methods/jung-assay-diagram/";
            },},{id: "methods-jung-assay-sop-v2-serial-transfer-design",
          title: 'Jung Assay SOP — v2 (Serial Transfer Design)',
          description: "",
          section: "Methods",handler: () => {
              window.location.href = "/methods/jung-assay/";
            },},{id: "methods-plating-bacterial-cultures-from-freezer-stocks-interactive-diagram",
          title: 'Plating Bacterial Cultures from Freezer Stocks — Interactive Diagram',
          description: "",
          section: "Methods",handler: () => {
              window.location.href = "/methods/plating-from-freezer-stock-diagram/";
            },},{id: "methods-plating-bacterial-cultures-from-freezer-stocks",
          title: 'Plating Bacterial Cultures from Freezer Stocks',
          description: "Recover viable colonies from −80°C glycerol freezer stocks by streak plating onto appropriate agar media.",
          section: "Methods",handler: () => {
              window.location.href = "/methods/plating-from-freezer-stock/";
            },},{id: "methods-r2a-broth-two-cycle-growth-protocol-interactive-diagram",
          title: 'R2A Broth — Two-Cycle Growth Protocol — Interactive Diagram',
          description: "",
          section: "Methods",handler: () => {
              window.location.href = "/methods/r2a-broth-diagram/";
            },},{id: "methods-r2a-broth-two-cycle-growth-protocol",
          title: 'R2A Broth — Two-Cycle Growth Protocol',
          description: "Two-cycle liquid culture protocol using R2A broth for bacterial isolate growth and urea conditioning.",
          section: "Methods",handler: () => {
              window.location.href = "/methods/r2a-broth/";
            },},{id: "methods-s-pasteurii-starter-culture",
          title: 'S. pasteurii Starter Culture',
          description: "Revival and starter culture preparation of Sporosarcina pasteurii from freezer stock for use as a positive control in ureolytic activity assays",
          section: "Methods",handler: () => {
              window.location.href = "/methods/s-pasteurii-starter/";
            },},{id: "methods-standardize-inoculum-by-od600",
          title: 'Standardize Inoculum by OD600',
          description: "Procedure for standardizing bacterial inocula to a target OD600 using C1V1=C2V2 dilution calculations.",
          section: "Methods",handler: () => {
              window.location.href = "/methods/standardize-inoculum/";
            },},{id: "methods-succinate-urea-growth-medium",
          title: 'Succinate-Urea Growth Medium',
          description: "Preparation of a succinate-based growth medium supplemented with 2% urea for culturing cold-adapted bacterial isolates in ureolytic activity assays",
          section: "Methods",handler: () => {
              window.location.href = "/methods/succinate-urea-medium/";
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
