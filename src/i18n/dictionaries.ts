import type { Locale } from "./types";

/** Structure partagée FR / EN (assure les mêmes clés). */
export type Messages = {
  brandTagline: string;
  metaDescription: string;
  nav: {
    works: string;
    categories: string;
    showreel: string;
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
    categoriesTitle: string;
    categoriesHint: string;
  };
  showreel: {
    kicker: string;
    title: string;
    intro: string;
    videoAria: string;
  };
  services: {
    kicker: string;
    headline: string;
    items: { title: string; desc: string; tags: string[] }[];
  };
  portfolioSections: {
    kicker: string;
    title: string;
    intro: string;
    photosLabel: string;
    videosLabel: string;
    navAll: string;
    navAria: string;
    photoAlt: string;
    categories: {
      automotive: { title: string; desc: string };
      "real-estate": { title: string; desc: string };
      "commercial-ads": { title: string; desc: string };
      "social-media": { title: string; desc: string };
      bts: { title: string; desc: string };
      corporate: { title: string; desc: string };
      events: { title: string; desc: string };
      "fashion-beauty": { title: string; desc: string };
      "fitness-lifestyle": { title: string; desc: string };
      "food-hospitality": { title: string; desc: string };
      "lifestyle-photoshoot": { title: string; desc: string };
      "medical-aesthetic": { title: string; desc: string };
      "personal-branding": { title: string; desc: string };
      photoshoot: { title: string; desc: string };
      "product-shoot": { title: string; desc: string };
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
    navCategories: string;
    navShowreel: string;
    navServices: string;
    navAbout: string;
    instagramLbl: string;
    youtubeLbl: string;
  };
  video: {
    playAria: string;
  };
};

const fr: Messages = {
  brandTagline: "Monteur · Photographe · Vidéaste",
  metaDescription:
    "Portfolio montage vidéo, photographie et tournage — Hans Lens.",
  nav: {
    works: "Réalisations",
    categories: "Catégories",
    showreel: "Showreel",
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
    videosTitle: "Vidéos présentées",
    videosHint: "Sélection par catégorie",
    photosTitle: "Photos présentées",
    photosHint: "Sélection par catégorie",
    categoriesTitle: "Catégories",
    categoriesHint: "Automobile, food, corporate…",
  },
  showreel: {
    kicker: "Vidéo",
    title: "Showreel principal",
    intro: "Sélection de réalisations — lecture avec le lecteur intégré.",
    videoAria: "Showreel vidéo",
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
  portfolioSections: {
    kicker: "Portfolio",
    title: "Réalisations par catégorie",
    intro:
      "{{sections}} univers créatifs — {{photos}} photos et {{videos}} vidéos en avant. Cliquez sur une catégorie pour accéder directement à la section.",
    photosLabel: "photos",
    videosLabel: "vidéos",
    navAll: "Tout voir",
    navAria: "Navigation par catégorie",
    photoAlt: "Photo portfolio",
    categories: {
      automotive: {
        title: "Automobile",
        desc: "Shootings véhicules, salons et campagnes auto.",
      },
      "real-estate": {
        title: "Immobilier",
        desc: "Visuels biens, architecture et ambiances intérieures.",
      },
      "commercial-ads": {
        title: "Publicité",
        desc: "Spots, pubs et contenus promotionnels.",
      },
      "social-media": {
        title: "Réseaux sociaux",
        desc: "Formats courts, reels et contenus digitaux.",
      },
      bts: {
        title: "Behind the scenes",
        desc: "Coulisses de tournage et making-of.",
      },
      corporate: {
        title: "Corporate",
        desc: "Événements d’entreprise, signatures et institutions.",
      },
      events: {
        title: "Événementiel",
        desc: "Couvertures live, soirées et entertainment.",
      },
      "fashion-beauty": {
        title: "Mode & beauté",
        desc: "Lookbooks, tailleurs et univers premium.",
      },
      "fitness-lifestyle": {
        title: "Fitness & lifestyle",
        desc: "Sport, témoignages et contenus dynamiques.",
      },
      "food-hospitality": {
        title: "Food & hospitality",
        desc: "Gastronomie, bars, hôtels et restauration.",
      },
      "lifestyle-photoshoot": {
        title: "Lifestyle",
        desc: "Portraits et séries lifestyle en lumière naturelle.",
      },
      "medical-aesthetic": {
        title: "Médical & esthétique",
        desc: "Cliniques, spas et soins esthétiques.",
      },
      "personal-branding": {
        title: "Personal branding",
        desc: "Image de marque personnelle et storytelling.",
      },
      photoshoot: {
        title: "Photoshoot",
        desc: "Séances photo studio et éditoriales.",
      },
      "product-shoot": {
        title: "Produit",
        desc: "Packshots, parfums et visuels e-commerce.",
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
    navWorks: "Réalisations",
    navCategories: "Catégories portfolio",
    navShowreel: "Showreel",
    navServices: "Services",
    navAbout: "À propos",
    instagramLbl: "Instagram ",
    youtubeLbl: "YouTube ",
  },
  video: {
    playAria: "Lire la vidéo",
  },
};

const en: Messages = {
  brandTagline: "Editor · Photographer · Filmmaker",
  metaDescription:
    "Video editing, photography & production portfolio — Hans Lens.",
  nav: {
    works: "Work",
    categories: "Categories",
    showreel: "Showreel",
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
    videosTitle: "Featured videos",
    videosHint: "Curated by category",
    photosTitle: "Featured photos",
    photosHint: "Curated by category",
    categoriesTitle: "Categories",
    categoriesHint: "Automotive, food, corporate…",
  },
  showreel: {
    kicker: "Video",
    title: "Main showreel",
    intro: "A curated selection — play with the built-in player.",
    videoAria: "Showreel video",
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
  portfolioSections: {
    kicker: "Portfolio",
    title: "Work by category",
    intro:
      "{{sections}} creative fields — {{photos}} photos and {{videos}} videos highlighted. Pick a category to jump straight to that section.",
    photosLabel: "photos",
    videosLabel: "videos",
    navAll: "View all",
    navAria: "Category navigation",
    photoAlt: "Portfolio photo",
    categories: {
      automotive: {
        title: "Automotive",
        desc: "Vehicle shoots, motor shows and auto campaigns.",
      },
      "real-estate": {
        title: "Real estate",
        desc: "Property visuals, architecture and interiors.",
      },
      "commercial-ads": {
        title: "Commercial ads",
        desc: "Spots, promos and branded films.",
      },
      "social-media": {
        title: "Social media",
        desc: "Short-form, reels and digital content.",
      },
      bts: {
        title: "Behind the scenes",
        desc: "On-set moments and making-of films.",
      },
      corporate: {
        title: "Corporate",
        desc: "Business events, signings and institutions.",
      },
      events: {
        title: "Events & entertainment",
        desc: "Live coverage, galas and entertainment.",
      },
      "fashion-beauty": {
        title: "Fashion & beauty",
        desc: "Lookbooks, tailoring and premium beauty.",
      },
      "fitness-lifestyle": {
        title: "Fitness & lifestyle",
        desc: "Sport, testimonials and dynamic stories.",
      },
      "food-hospitality": {
        title: "Food & hospitality",
        desc: "Dining, bars, hotels and hospitality brands.",
      },
      "lifestyle-photoshoot": {
        title: "Lifestyle",
        desc: "Portraits and lifestyle series in natural light.",
      },
      "medical-aesthetic": {
        title: "Medical & aesthetic",
        desc: "Clinics, spas and aesthetic treatments.",
      },
      "personal-branding": {
        title: "Personal branding",
        desc: "Personal brand films and storytelling.",
      },
      photoshoot: {
        title: "Photoshoot",
        desc: "Studio and editorial photo sessions.",
      },
      "product-shoot": {
        title: "Product",
        desc: "Packshots, fragrance and e-commerce visuals.",
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
    navWorks: "Selected work",
    navCategories: "Portfolio categories",
    navShowreel: "Showreel",
    navServices: "Services",
    navAbout: "About",
    instagramLbl: "Instagram ",
    youtubeLbl: "YouTube ",
  },
  video: {
    playAria: "Play video",
  },
};

export const dictionaries: Record<Locale, Messages> = { fr, en };
