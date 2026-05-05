/** Chemins relatifs à `/public` (fichiers présents dans le dossier public). */

export function publicUrl(filename: string): string {
  return (
    "/" +
    filename
      .split("/")
      .filter(Boolean)
      .map((segment) => encodeURIComponent(segment))
      .join("/")
  );
}

export function humanTitle(filename: string): string {
  let base = filename;
  if (base.endsWith(".jpg.jpeg")) base = base.slice(0, -".jpg.jpeg".length);
  else if (base.endsWith(".jpeg")) base = base.slice(0, -".jpeg".length);
  else if (base.endsWith(".jpg")) base = base.slice(0, -".jpg".length);
  else if (base.endsWith(".png")) base = base.slice(0, -".png".length);
  else if (base.endsWith(".mp4")) base = base.slice(0, -".mp4".length);
  return base.replace(/_/g, " ").trim() || filename;
}

/** Vidéos (.mp4) — utilisées dans le showreel et la grille « Travaux ». */
export const PUBLIC_VIDEOS: string[] = [
  "AUDI 1.mp4",
  "AUDI 2.mp4",
  "AYESSA_GOODLET_TESTIMONIAL_V1.mp4",
  "BABA GHANOUSH @AMR.mp4",
  "Beyti 1.mp4",
  "CAR 1 (1).mp4",
  "CAR 1.mp4",
  "CAR SHOW.mp4",
  "CERT Ramadan_18042023_V3.mp4",
  "CHRIST 2 Review.mp4",
  "KONAFA_2@AMR.mp4",
  "MG HYBRIDE FOR ME 4K.mp4",
  "Mixology?_V2.mp4",
  "MUSTANG MACH E GT FORD POUR MOI FILTRE 8K.mp4",
  "OTF_1.mp4",
  "POV She Didn't Believe the Pose. Until This.mp4",
  "prism digital Hacked-1.mp4",
  "ROYAL SPIRIT HIGHLIGHT.mp4",
  "Sanchaya_opt 3.mp4",
  "Shoot_19022024_Wood Noir_01.mp4",
  "spa_3.mp4",
  "TAILOR 2.mp4",
  "Video 2_Islander Brunch.mp4",
  "WhatsApp Video 2026-04-21 at 10.33.59.mp4",
].sort((a, b) => a.localeCompare(b, "fr"));

/** Toutes les images (galerie). */
export const PUBLIC_IMAGES: string[] = [
  "1704647940884.jpg.jpeg",
  "1704647945721.jpg.jpeg",
  "1704647960667.jpg.jpeg",
  "1704647964127.jpg.jpeg",
  "1704647967746.jpg.jpeg",
  "1704647971005.jpg.jpeg",
  "1704647974825.jpg.jpeg",
  "1704647979699.jpg.jpeg",
  "1704647985222.jpg.jpeg",
  "1704647989260.jpg.jpeg",
  "A7400686.jpg.jpeg",
  "A7400701.jpg.jpeg",
  "A7400718.jpg.jpeg",
  "A7400721.jpg.jpeg",
  "A7400722.jpg.jpeg",
  "A7400724.jpg.jpeg",
  "A7400725.jpg.jpeg",
  "A7400731.jpg.jpeg",
  "A7400737.jpg.jpeg",
  "A7400743.jpg (1).jpeg",
  "A7400743.jpg (2).jpeg",
  "A7400743.jpg.jpeg",
  "A7400748.jpg.jpeg",
  "A7400851.jpg.jpeg",
  "A7400873.jpg.jpeg",
  "A7400926.jpg.jpeg",
  "A7401563.jpg.jpeg",
  "A7401590.jpg.jpeg",
  "A7401596.jpg.jpeg",
  "A7401668.jpg.jpeg",
  "A7401728.jpg.jpeg",
  "B1.jpg.jpeg",
  "B2-1.jpg.jpeg",
  "B3.jpg.jpeg",
  "B4-1.jpg.jpeg",
  "DAS DESIGN.jpg.jpeg",
  "IMG-20251123-WA0049.jpg.jpg.jpeg",
  "Prism Digital Marketing.jpg.jpeg",
  "Screenshot_2025-09-26-11-48-53-214_photos.gallery.album.imagelock.photovault.jpg.jpeg",
  "_DSC7128.jpg.jpeg",
  "_DSC7134-.jpg.jpeg",
  "_DSC7137.jpg.jpeg",
  "_DSC7138.jpg.jpeg",
  "_DSC7143.jpg.jpeg",
  "_DSC7148.jpg.jpeg",
  "_DSC7149.jpg.jpeg",
  "_DSC7150.jpg.jpeg",
];

/** Image grande « présentation » (portrait / couverture). */
export const PRESENTATION_IMAGE = "IMG-20251123-WA0049.jpg.jpg.jpeg";

/** QR Instagram (placez `hans-instagram-qr.png` dans /public). */
export const INSTAGRAM_QR_IMAGE = "hans-instagram-qr.png";

/** Showreel principal (changez ici si besoin). */
export const SHOWREEL_VIDEO = "ROYAL SPIRIT HIGHLIGHT.mp4";

/** Logo marque (fichier image dans public). */
export const LOGO_IMAGE = "DAS DESIGN.jpg.jpeg";

/** Miniatures héro (aperçu visuel). */
export const HERO_PREVIEW_IMAGES: string[] = [
  "A7401563.jpg.jpeg",
  "B1.jpg.jpeg",
  "B3.jpg.jpeg",
];

export type ImageCollection = { id: string; files: string[] };

function pick(predicate: (f: string) => boolean): string[] {
  return PUBLIC_IMAGES.filter(predicate);
}

/** Galerie classée pour les bandeaux et sections horizontales. */
export const IMAGE_COLLECTIONS: ImageCollection[] = [
  {
    id: "a740",
    files: pick((f) => f.startsWith("A740")),
  },
  {
    id: "reportage",
    files: pick((f) => f.startsWith("_DSC")),
  },
  {
    id: "set-b",
    files: pick(
      (f) =>
        f.startsWith("B1") || f.startsWith("B2") || f.startsWith("B3") || f.startsWith("B4"),
    ),
  },
  {
    id: "studio-170",
    files: pick((f) => f.startsWith("170464")),
  },
  {
    id: "brand-misc",
    files: pick(
      (f) =>
        f.includes("DAS DESIGN") ||
        f.includes("Prism") ||
        f.includes("Screenshot") ||
        f.includes("IMG-20251123"),
    ),
  },
];

/** Images pour les bandeaux défilants (évite de surcharger avec la même couverture que la présentation). */
export function marqueePool(): string[] {
  const skip = new Set([PRESENTATION_IMAGE]);
  return PUBLIC_IMAGES.filter((f) => !skip.has(f));
}

export function splitMarqueeRows(): [string[], string[]] {
  const pool = marqueePool();
  const mid = Math.ceil(pool.length / 2);
  return [pool.slice(0, mid), pool.slice(mid)];
}
