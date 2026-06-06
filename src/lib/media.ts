/** Chemins relatifs à `/public` — fichiers présents dans le dossier public. */

import { ALL_USED_MEDIA_PATHS } from "@/lib/hans-portfolio";
import { HOSTABLE_PHOTOS, SHOWREEL_HOSTABLE } from "@/lib/hostable-media";

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

/** Tous les médias réellement utilisés sur le site. */
export const USED_MEDIA_PATHS = ALL_USED_MEDIA_PATHS;

export const PRESENTATION_IMAGE = HOSTABLE_PHOTOS.rootPresentation;

export const SHOWREEL_VIDEO = SHOWREEL_HOSTABLE;

export const LOGO_IMAGE = HOSTABLE_PHOTOS.rootLogo;
