/**
 * Médias ≤ 50 Mo (vidéo) et ≤ 4 Mo (image) — compatibles GitHub.
 * Réutilisés dans plusieurs sections si besoin.
 */

const H = "video/HANS";

export const HOSTABLE_VIDEOS = {
  audi1: `${H}/1 AUTOMOTIVE/VIDEOS/GOOOD/AUDI 1.mp4`,
  audi2: "AUDI 2.mp4",
  carShow: `${H}/1 AUTOMOTIVE/VIDEOS/GOOOD/CAR SHOW.mp4`,
  car1: `${H}/1 AUTOMOTIVE/VIDEOS/GOOOD/CAR 1.mp4`,
  fordExplorer: `${H}/1 AUTOMOTIVE/VIDEOS/GOOOD/NEW FORD EXPLORER TREMOR.mp4`,
  rollsRoyce: `${H}/1 AUTOMOTIVE/VIDEOS/GOOOD/ROLLS-ROYCE 17092025(1).mp4`,
  mustang: `${H}/1 AUTOMOTIVE/VIDEOS/GOOOD/MUSTANG MACH E GT FORD POUR MOI FILTRE 8K.mp4`,
  commercialSpot: `${H}/3  COMMERCIAL ADS/VIDEO-2024-11-15-16-31-26.mp4`,
  medicalSample: `${H}/MEDICAL & AESTHETIC/approved editing sample.mp4`,
  foodTvr: `${H}/FOOD & HOSPITALITY/VIDEOS/TVR Mohanade.mp4`,
  highlightReel: `${H}/4  SOCIAL MEDIA CONTENT/HIGHLIGHT REEL 2_1.mp4`,
  podcastBts: `${H}/BTS/Podcast BTS 2.mp4`,
  diorBts: `${H}/BTS/Dior Sunglass BTS.mp4`,
  eventBts: `${H}/BTS/Event BTS.mp4`,
  clinicBts: `${H}/BTS/Clinic BTS Shoot.mp4`,
  rollsBts: `${H}/BTS/Rolls Royce 50yrs  BTS.mp4`,
  hospitalityBts: `${H}/BTS/Hospitality TVR BTS G.mp4`,
  ayessa: `${H}/FITNESS &  LIFESTYLE/AYESSA_GOODLET_TESTIMONIAL_V1.mp4`,
  otf: `${H}/FITNESS &  LIFESTYLE/OTF_1.mp4`,
  christ: `${H}/PERSONAL BRANDING & LIFESTYLE/CHRIST.mp4`,
  whatsapp: "WhatsApp Video 2026-04-21 at 10.33.59.mp4",
} as const;

export const HOSTABLE_PHOTOS = {
  auto0686: `${H}/1 AUTOMOTIVE/PHOTOS/A7400686.jpg`,
  auto0718: `${H}/1 AUTOMOTIVE/PHOTOS/A7400718.jpg`,
  auto0737: `${H}/1 AUTOMOTIVE/PHOTOS/A7400737.jpg`,
  dsc5988: `${H}/1 AUTOMOTIVE/PHOTOS/_DSC5988.png`,
  dsc7128: `${H}/1 AUTOMOTIVE/PHOTOS/_DSC7128.jpg`,
  dsc7143: `${H}/1 AUTOMOTIVE/PHOTOS/_DSC7143.jpg`,
  dsc7150: `${H}/1 AUTOMOTIVE/PHOTOS/_DSC7150.jpg`,
  re1563: `${H}/2  REAL ESTATE/A7401563.jpg`,
  re1590: `${H}/2  REAL ESTATE/A7401590.jpg`,
  re1668: `${H}/2  REAL ESTATE/A7401668.jpg`,
  re1728: `${H}/2  REAL ESTATE/A7401728.jpg`,
  reImg: `${H}/2  REAL ESTATE/IMG20240622173330.jpg`,
  foodB1: `${H}/FOOD & HOSPITALITY/Food Photography/B1.jpg`,
  foodB3: `${H}/FOOD & HOSPITALITY/Food Photography/B3.jpg`,
  food170: `${H}/FOOD & HOSPITALITY/Food Photography/1704647971005.jpg`,
  food170b: `${H}/FOOD & HOSPITALITY/Food Photography/1704647989260.jpg`,
  foodB2: `${H}/FOOD & HOSPITALITY/Food Photography/B2-1.jpg`,
  foodB4: `${H}/FOOD & HOSPITALITY/Food Photography/B4-1.jpg`,
  life0873: `${H}/LIFESTYLE PHOTOSHOOT/A7400873.jpg`,
  life0926: `${H}/LIFESTYLE PHOTOSHOOT/A7400926.jpg`,
  photo8946: `${H}/PHOTOSHOOT/6T9A8946.jpg`,
  photo8948: `${H}/PHOTOSHOOT/6T9A8948.jpg`,
  photo9202: `${H}/PHOTOSHOOT/6T9A9202.jpg`,
  photo2690: `${H}/PHOTOSHOOT/DSC02690.jpg`,
  photo8481: `${H}/PHOTOSHOOT/DSC_8481.jpg`,
  photo2293: `${H}/PHOTOSHOOT/_T9A2293.jpg`,
  prodDahlia: `${H}/PRODUCT SHOOT/Dahlia.jpg`,
  prodDurrah: `${H}/PRODUCT SHOOT/Durrah_Mauve.jpg`,
  prodGhala: `${H}/PRODUCT SHOOT/Ghala Zayed Luxury Rouge 1.jpg`,
  prod002: `${H}/PRODUCT SHOOT/002A8527.jpg`,
  rootB1: "B1.jpg.jpeg",
  rootB3: "B3.jpg.jpeg",
  rootA7401563: "A7401563.jpg.jpeg",
  rootPresentation: "IMG-20251123-WA0049.jpg.jpg.jpeg",
  rootLogo: "Mon logo.png",
} as const;

/** Showreel : vidéo légère mais représentative (< 50 Mo). */
export const SHOWREEL_HOSTABLE = HOSTABLE_VIDEOS.carShow;
