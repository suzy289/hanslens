/** Chemins relatifs à `/public` (fichiers présents dans le dossier public). */

import { HOSTABLE_PHOTOS, HOSTABLE_VIDEOS, SHOWREEL_HOSTABLE } from "@/lib/hostable-media";

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
  let base = filename.split("/").pop() ?? filename;
  if (base.endsWith(".jpg.jpeg")) base = base.slice(0, -".jpg.jpeg".length);
  else if (base.endsWith(".jpeg")) base = base.slice(0, -".jpeg".length);
  else if (base.endsWith(".jpg")) base = base.slice(0, -".jpg".length);
  else if (base.endsWith(".png")) base = base.slice(0, -".png".length);
  else if (base.endsWith(".mp4")) base = base.slice(0, -".mp4".length);
  return base.replace(/_/g, " ").trim() || filename;
}

/** Vidéos hébergeables sur GitHub (≤ 50 Mo). */
export const PUBLIC_VIDEOS: string[] = [
  ...new Set(Object.values(HOSTABLE_VIDEOS)),
].sort((a, b) => a.localeCompare(b, "fr"));

/** Images hébergeables (≤ 4 Mo). */
export const PUBLIC_IMAGES: string[] = [
  ...new Set([
    ...Object.values(HOSTABLE_PHOTOS),
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
    "A7400722.jpg.jpeg",
    "A7400724.jpg.jpeg",
    "A7400725.jpg.jpeg",
    "A7400737.jpg.jpeg",
    "A7400743.jpg.jpeg",
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
    "Prism Digital Marketing.jpg.jpeg",
    "Screenshot_2025-09-26-11-48-53-214_photos.gallery.album.imagelock.photovault.jpg.jpeg",
    "_DSC7128.jpg.jpeg",
    "_DSC7134-.jpg.jpeg",
    "_DSC7137.jpg.jpeg",
    "_DSC7143.jpg.jpeg",
    "_DSC7150.jpg.jpeg",
  ]),
].sort((a, b) => a.localeCompare(b, "fr"));

export const PRESENTATION_IMAGE = HOSTABLE_PHOTOS.rootPresentation;

export const INSTAGRAM_QR_IMAGE = "hans-instagram-qr.png";

export const SHOWREEL_VIDEO = SHOWREEL_HOSTABLE;

export const LOGO_IMAGE = HOSTABLE_PHOTOS.rootLogo;

export type ImageCollection = { id: string; files: string[] };

function pick(predicate: (f: string) => boolean): string[] {
  return PUBLIC_IMAGES.filter(predicate);
}

export const IMAGE_COLLECTIONS: ImageCollection[] = [
  { id: "a740", files: pick((f) => f.startsWith("A740") || f.includes("AUTOMOTIVE")) },
  { id: "reportage", files: pick((f) => f.startsWith("_DSC")) },
  {
    id: "set-b",
    files: pick(
      (f) =>
        f.startsWith("B1") || f.startsWith("B2") || f.startsWith("B3") || f.startsWith("B4"),
    ),
  },
  { id: "studio-170", files: pick((f) => f.startsWith("170464")) },
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

export function marqueePool(): string[] {
  const skip = new Set<string>([PRESENTATION_IMAGE]);
  return PUBLIC_IMAGES.filter((f) => !skip.has(f));
}

export function splitMarqueeRows(): [string[], string[]] {
  const pool = marqueePool();
  const mid = Math.ceil(pool.length / 2);
  return [pool.slice(0, mid), pool.slice(mid)];
}
