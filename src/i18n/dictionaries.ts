import type { Locale } from "./types";

/** Structure partagée FR / EN (assure les mêmes clés). */
export type Messages = {
  brandTagline: string;
  metaDescription: string;
  nav: {
    works: string;
    showreel: string;
    gallery: string;
    services: string;
    about: string;
    contact: string;
    contactMe: string;
    menu: string;
    languageAria: string;
  };
  /** Message initial WhatsApp (personnalisable ici, versions FR / EN). */
  whatsapp: {
    prefillMessage: string;
  };
  hero: {
    headline1: string;
    headline2: string;
    lead: string;
    ctaWorks: string;
    ctaShowreel: string;
    cards: { title: string; desc: string }[];
  };
  stats: {
    videosTitle: string;
    videosHint: string;
    photosTitle: string;
    photosHint: string;
    rushTitle: string;
    rushHint: string;
  };
  showreel: {
    kicker: string;
    title: string;
    hintBeforeFile: string;
    hintAfterFile: string;
  };
  services: {
    kicker: string;
    headline: string;
    items: { title: string; desc: string; tags: string[] }[];
  };
  portfolio: {
    kicker: string;
    title: string;
    intro: string;
  };
  gallery: {
    kicker: string;
    title: string;
    intro: string;
    visualsCount: string;
    cats: {
      a740: { title: string; desc: string };
      reportage: { title: string; desc: string };
      "set-b": { title: string; desc: string };
      "studio-170": { title: string; desc: string };
      "brand-misc": { title: string; desc: string };
    };
  };
  about: {
    kicker: string;
    titleLine: string;
    p1: string;
    p2: string;
    socialBox: string;
    instagramLbl: string;
    youtubeLbl: string;
    languagesLabel: string;
    languagesValue: string;
    focusLabel: string;
    focusValue: string;
    presentationAlt: string;
    qrHeading: string;
  };
  skills: {
    kicker: string;
    title: string;
    subtitle: string;
    cols: { title: string; items: string[] }[];
  };
  process: {
    kicker: string;
    headline: string;
    steps: { title: string; desc: string }[];
    commitmentTitle: string;
    commitments: string[];
  };
  footer: {
    blurb: string;
    navHeading: string;
    contactHeading: string;
    emailLbl: string;
    whatsappLbl: string;
    rights: string;
    legalHint: string;
    navWorks: string;
    navGallery: string;
    navShowreel: string;
    navServices: string;
    navAbout: string;
    instagramLbl: string;
    youtubeLbl: string;
  };
  video: {
    badge: string;
    playAriaPrefix: string;
  };
};

const fr: Messages = {
  brandTagline: "Monteur · Photographe · Vidéaste",
  metaDescription:
    "Portfolio montage vidéo, photographie et tournage — Hans Lens.",
  nav: {
    works: "Travaux",
    showreel: "Showreel",
    gallery: "Galerie",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    contactMe: "Me contacter",
    menu: "Menu",
    languageAria: "Choisir la langue du site",
  },
  whatsapp: {
    prefillMessage:
      "Bonjour Hans, je vous contacte depuis votre site portfolio. J’aimerais discuter d’un projet : ",
  },
  hero: {
    headline1: "Images qui racontent,",
    headline2: "rythmes qui marquent.",
    lead: "Je conçois des visuels et des films pour marques, artistes et événements — de la prise de vue au montage final, avec une exigence constante sur l’émotion et la clarté du message.",
    ctaWorks: "Voir les réalisations",
    ctaShowreel: "Showreel",
    cards: [
      { title: "Montage", desc: "Documentaires, pubs, réseaux" },
      { title: "Photo", desc: "Portrait, corporate, événement" },
      { title: "Vidéo", desc: "Tournage & direction photo" },
    ],
  },
  stats: {
    videosTitle: "Vidéos au portfolio",
    videosHint: "Fichiers .mp4 dans public",
    photosTitle: "Images en galerie",
    photosHint: "Photos & visuels",
    rushTitle: "Créneaux rush",
    rushHint: "Selon disponibilité",
  },
  showreel: {
    kicker: "Vidéo",
    title: "Showreel principal",
    hintBeforeFile: "Fichier : ",
    hintAfterFile: " — modifiable dans src/lib/media.ts.",
  },
  services: {
    kicker: "Services",
    headline: "Trois métiers, une même ligne directrice : la qualité image.",
    items: [
      {
        title: "Montage vidéo",
        desc: "Rythme, sound design, étalonnage et livrables multi-formats pour web, TV ou cinéma.",
        tags: ["Premiere", "DaVinci", "After Effects"],
      },
      {
        title: "Photographie",
        desc: "Portrait, corporate, reportage et couverture événementielle — fichiers retouchés et websafe.",
        tags: ["Lightroom", "Capture", "Studio"],
      },
      {
        title: "Vidéographie",
        desc: "Tournage 4K, direction photo légère, stabilisation et préparation pour post-production.",
        tags: ["Sony", "Canon", "Gimbal"],
      },
    ],
  },
  portfolio: {
    kicker: "Portfolio",
    title: "Travaux vidéo",
    intro:
      "{{count}} fichiers issus du dossier public. Survol pour prévisualiser, clic pour ouvrir la vidéo.",
  },
  gallery: {
    kicker: "Galerie",
    title: "Photographie en mouvement",
    intro:
      "Deux bandeaux défilants pour parcourir l’ensemble des clichés, puis des rangées classées par série (scroll horizontal, snap). Survol pour mettre une bande en pause.",
    visualsCount: "visuels",
    cats: {
      a740: {
        title: "Série A740",
        desc: "Portraits & ambiances — même série visuelle.",
      },
      reportage: {
        title: "Reportage _DSC",
        desc: "Séquence DSLR, tons naturels.",
      },
      "set-b": {
        title: "Série B",
        desc: "Sélections thématiques B1–B4.",
      },
      "studio-170": {
        title: "Studio & détails",
        desc: "Plans serrés et textures.",
      },
      "brand-misc": {
        title: "Identité & divers",
        desc: "Visuels brand, captures et hors-séries.",
      },
    },
  },
  about: {
    kicker: "Présentation",
    titleLine: "derrière la caméra.",
    p1: "Créateur visuel : montage, photographie et tournage pour des marques et événements premium. Personnalisez cette section avec votre histoire, vos références et vos zones d’intervention.",
    p2: "Retrouvez les dernières nouveautés sur Instagram et les longs formats sur YouTube — liens officiels ci-dessous.",
    socialBox: "Réseaux",
    instagramLbl: "Instagram · ",
    youtubeLbl: "YouTube · ",
    languagesLabel: "Langues",
    languagesValue: "FR · EN",
    focusLabel: "Focus",
    focusValue: "Automobile · lifestyle · corporate",
    presentationAlt: "présentation",
    qrHeading: "Scanner · Instagram",
  },
  skills: {
    kicker: "Outils & pratiques",
    title: "Stack technique",
    subtitle:
      "Adaptez cette liste à votre configuration réelle (logiciels, boîtiers, objectifs).",
    cols: [
      {
        title: "Post-production",
        items: [
          "Adobe Premiere Pro",
          "DaVinci Resolve",
          "After Effects",
          "Audition",
        ],
      },
      {
        title: "Photo & couleur",
        items: ["Lightroom Classic", "Photoshop", "Capture One", "Etalonnage log"],
      },
      {
        title: "Tournage",
        items: [
          "Caméras cinéma / hybrides",
          "Éclairage LED",
          "Audio HF",
          "Gimbal & slider",
        ],
      },
    ],
  },
  process: {
    kicker: "Méthode",
    headline: "Comment on travaille ensemble",
    steps: [
      {
        title: "Brief créatif",
        desc: "Objectifs, références, délais et budget.",
      },
      {
        title: "Préproduction",
        desc: "Moodboard, planning tournage ou repérage photo.",
      },
      {
        title: "Tournage / prises de vues",
        desc: "Captation ou shooting sur site / studio.",
      },
      {
        title: "Sélection & montage",
        desc: "Première version, retours, ajustements.",
      },
      {
        title: "Finitions",
        desc: "Étalonnage, mix son, exports optimisés.",
      },
      {
        title: "Livraison",
        desc: "Masters, versions réseaux, archivage si besoin.",
      },
    ],
    commitmentTitle: "Engagement qualité",
    commitments: [
      "Deadlines respectées et communication claire",
      "Fichiers nommés et organisés pour vos équipes",
      "Cohérence visuelle entre photo et vidéo",
      "Révisions dans un cadre défini au devis",
    ],
  },
  footer: {
    blurb:
      "Disponibilités rush, déplacements et projets sur mesure — précisez ici votre zone et vos créneaux préférés.",
    navHeading: "Navigation",
    contactHeading: "Contact & réseaux",
    emailLbl: "Email · ",
    whatsappLbl: "WhatsApp · ",
    rights: "Tous droits réservés.",
    legalHint: "Mentions légales · politique de confidentialité (à ajouter)",
    navWorks: "Travaux vidéo",
    navGallery: "Galerie photo",
    navShowreel: "Showreel",
    navServices: "Services",
    navAbout: "À propos",
    instagramLbl: "Instagram ",
    youtubeLbl: "YouTube ",
  },
  video: {
    badge: "Vidéo",
    playAriaPrefix: "Lire la vidéo : ",
  },
};

const en: Messages = {
  brandTagline: "Editor · Photographer · Filmmaker",
  metaDescription:
    "Video editing, photography & production portfolio — Hans Lens.",
  nav: {
    works: "Work",
    showreel: "Showreel",
    gallery: "Gallery",
    services: "Services",
    about: "About",
    contact: "Contact",
    contactMe: "Get in touch",
    menu: "Menu",
    languageAria: "Choose site language",
  },
  whatsapp: {
    prefillMessage:
      "Hi Hans, I'm reaching out from your portfolio site. I'd like to chat about a project: ",
  },
  hero: {
    headline1: "Stories in every frame,",
    headline2: "rhythm in every cut.",
    lead: "I craft visuals and films for brands, artists and events—from capture to final edit—with a relentless focus on emotion and clarity of message.",
    ctaWorks: "View selected work",
    ctaShowreel: "Showreel",
    cards: [
      { title: "Editing", desc: "Documentary, commercials, social" },
      { title: "Photo", desc: "Portraits, corporate, events" },
      { title: "Video", desc: "Production & cinematography" },
    ],
  },
  stats: {
    videosTitle: "Videos in portfolio",
    videosHint: ".mp4 files in /public",
    photosTitle: "Gallery images",
    photosHint: "Photo & visuals",
    rushTitle: "Rush-ready slots",
    rushHint: "Subject to availability",
  },
  showreel: {
    kicker: "Video",
    title: "Main showreel",
    hintBeforeFile: "Source file: ",
    hintAfterFile: " — change it in src/lib/media.ts.",
  },
  services: {
    kicker: "Services",
    headline:
      "Three disciplines, one uncompromising bar: cinematic image quality.",
    items: [
      {
        title: "Video editing",
        desc: "Pacing, sound design, grading and multi-format deliveries for web, TV or cinema.",
        tags: ["Premiere", "DaVinci", "After Effects"],
      },
      {
        title: "Photography",
        desc: "Portraits, corporate, reportage and live coverage — retouched and web-ready files.",
        tags: ["Lightroom", "Capture", "Studio"],
      },
      {
        title: "Videography",
        desc: "4K production, lightweight DP work, stabilization and post-ready files.",
        tags: ["Sony", "Canon", "Gimbal"],
      },
    ],
  },
  portfolio: {
    kicker: "Portfolio",
    title: "Video work",
    intro:
      "{{count}} files from your public folder. Hover to preview, click to open the video.",
  },
  gallery: {
    kicker: "Gallery",
    title: "Photography in motion",
    intro:
      "Two infinite bands to browse every frame, then horizontal, snap-scrolling rows by series. Hover a band to pause the motion.",
    visualsCount: "shots",
    cats: {
      a740: {
        title: "A740 series",
        desc: "Portraits & mood — one cohesive series.",
      },
      reportage: {
        title: "_DSC series",
        desc: "DSLR selects, natural tones.",
      },
      "set-b": {
        title: "B roll series",
        desc: "Thematic selects B1–B4.",
      },
      "studio-170": {
        title: "Studio & macro",
        desc: "Detail shots & texture.",
      },
      "brand-misc": {
        title: "Identity & misc",
        desc: "Branded visuals and one-offs.",
      },
    },
  },
  about: {
    kicker: "About",
    titleLine: "behind the camera.",
    p1: "Visual storyteller: editing, photography and production for premium brands & events. Make this paragraph yours — background, specialties and regions.",
    p2: "Day-to-day on Instagram and long-form drops on YouTube — official handles below.",
    socialBox: "Social",
    instagramLbl: "Instagram · ",
    youtubeLbl: "YouTube · ",
    languagesLabel: "Languages",
    languagesValue: "FR · EN",
    focusLabel: "Focus",
    focusValue: "Automotive · lifestyle · corporate",
    presentationAlt: "profile portrait",
    qrHeading: "Scan · Instagram",
  },
  skills: {
    kicker: "Tools & workflows",
    title: "Creative stack",
    subtitle:
      "Tune this roster to reflect your kit (software, bodies, lenses).",
    cols: [
      {
        title: "Post-production",
        items: [
          "Adobe Premiere Pro",
          "DaVinci Resolve",
          "After Effects",
          "Audition",
        ],
      },
      {
        title: "Photo & color",
        items: ["Lightroom Classic", "Photoshop", "Capture One", "Log grading"],
      },
      {
        title: "Field production",
        items: ["Cinema / hybrid cameras", "LED lighting", "Wireless audio", "Gimbal & slider"],
      },
    ],
  },
  process: {
    kicker: "Process",
    headline: "How we collaborate",
    steps: [
      {
        title: "Creative brief",
        desc: "Goals, references, timeline and budget.",
      },
      {
        title: "Pre-production",
        desc: "Moodboard, shoot schedule or location scout.",
      },
      {
        title: "Production",
        desc: "On-location or studio capture.",
      },
      {
        title: "Selects & edit",
        desc: "First cut, notes, iterative polish.",
      },
      {
        title: "Finish",
        desc: "Color, sound mix, optimised exports.",
      },
      {
        title: "Delivery",
        desc: "Master files, social versions, archiving if needed.",
      },
    ],
    commitmentTitle: "Quality pledge",
    commitments: [
      "Clear communication and honoured deadlines",
      "Neat naming & handoff for your teams",
      "Unified look between photo and video",
      "Revisions framed in the estimate",
    ],
  },
  footer: {
    blurb:
      "Rush timelines, travel and bespoke productions — outline your geography and preferred windows here.",
    navHeading: "Navigation",
    contactHeading: "Contact & networks",
    emailLbl: "Email · ",
    whatsappLbl: "WhatsApp · ",
    rights: "All rights reserved.",
    legalHint: "Legal notice · privacy policy (to add)",
    navWorks: "Video work",
    navGallery: "Photo gallery",
    navShowreel: "Showreel",
    navServices: "Services",
    navAbout: "About",
    instagramLbl: "Instagram ",
    youtubeLbl: "YouTube ",
  },
  video: {
    badge: "Video",
    playAriaPrefix: "Play video: ",
  },
};

export const dictionaries: Record<Locale, Messages> = { fr, en };
