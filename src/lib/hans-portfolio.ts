/** Chemins relatifs à `/public` — structure `public/video/HANS/…`. */

import { HOSTABLE_PHOTOS as P, HOSTABLE_VIDEOS as V, SHOWREEL_HOSTABLE } from "@/lib/hostable-media";

export type PortfolioSection = {
  id: string;
  photos: string[];
  videos: string[];
};

export const PORTFOLIO_SECTIONS: PortfolioSection[] = [
  {
    id: "automotive",
    photos: [P.auto0686, P.auto0718, P.dsc5988, P.dsc7128, P.dsc7143, P.dsc7150],
    videos: [V.audi1, V.carShow, V.mustang, V.rollsRoyce],
  },
  {
    id: "real-estate",
    photos: [P.rootA7401563, P.re1590, P.re1668, P.re1728, P.reImg],
    videos: [],
  },
  {
    id: "commercial-ads",
    photos: [],
    videos: [V.commercialSpot, V.medicalSample, V.foodTvr],
  },
  {
    id: "social-media",
    photos: [],
    videos: [V.highlightReel, V.podcastBts, V.diorBts],
  },
  {
    id: "bts",
    photos: [],
    videos: [V.clinicBts, V.diorBts, V.eventBts, V.rollsBts],
  },
  {
    id: "corporate",
    photos: [],
    videos: [V.commercialSpot, V.medicalSample, V.hospitalityBts],
  },
  {
    id: "events",
    photos: [],
    videos: [V.eventBts, V.hospitalityBts, V.clinicBts],
  },
  {
    id: "fashion-beauty",
    photos: [],
    videos: [V.christ, V.podcastBts],
  },
  {
    id: "fitness-lifestyle",
    photos: [],
    videos: [V.ayessa, V.otf],
  },
  {
    id: "food-hospitality",
    photos: [P.rootB1, P.rootB3, P.food170, P.food170b, P.foodB2, P.foodB4],
    videos: [V.foodTvr, V.carShow, V.audi1, V.clinicBts],
  },
  {
    id: "lifestyle-photoshoot",
    photos: [P.life0873, P.life0926, P.auto0718, P.photo8946, P.photo9202],
    videos: [],
  },
  {
    id: "medical-aesthetic",
    photos: [],
    videos: [V.medicalSample, V.eventBts, V.clinicBts],
  },
  {
    id: "personal-branding",
    photos: [],
    videos: [V.christ],
  },
  {
    id: "photoshoot",
    photos: [
      P.photo8946,
      P.photo8948,
      P.photo9202,
      P.photo2690,
      P.photo8481,
      P.photo2293,
      P.auto0718,
      P.auto0686,
    ],
    videos: [],
  },
  {
    id: "product-shoot",
    photos: [P.prodDahlia, P.prodDurrah, P.prodGhala, P.prod002],
    videos: [],
  },
];

/** Tous les fichiers média réellement affichés sur le site. */
export const ALL_USED_MEDIA_PATHS: readonly string[] = [
  ...new Set([
    ...PORTFOLIO_SECTIONS.flatMap((s) => [...s.photos, ...s.videos]),
    P.rootLogo,
    P.rootPresentation,
    SHOWREEL_HOSTABLE,
  ]),
];

export const PORTFOLIO_SECTION_IDS = PORTFOLIO_SECTIONS.map((s) => s.id);

export function sectionAnchor(id: string): string {
  return `section-${id}`;
}

export function countPortfolioMedia(): { photos: number; videos: number } {
  let photos = 0;
  let videos = 0;
  for (const s of PORTFOLIO_SECTIONS) {
    photos += s.photos.length;
    videos += s.videos.length;
  }
  return { photos, videos };
}
