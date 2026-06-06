import fs from "fs";
import path from "path";
import { ALL_USED_MEDIA_PATHS } from "../src/lib/hans-portfolio";

const publicDir = path.join(process.cwd(), "public");
const used = new Set(ALL_USED_MEDIA_PATHS.map((p) => p.replace(/\\/g, "/")));
const mediaExt = /\.(mp4|jpe?g|png|webp|gif|JPG|JPEG|PNG)$/i;

const deleted: string[] = [];
let kept = 0;

for (const file of walk(publicDir)) {
  const rel = path.relative(publicDir, file).replace(/\\/g, "/");
  if (!mediaExt.test(rel)) continue;
  if (used.has(rel)) {
    kept += 1;
    continue;
  }
  fs.unlinkSync(file);
  deleted.push(rel);
}

removeEmptyDirs(publicDir);

console.log(`Conservés : ${kept} fichier(s) média`);
console.log(`Supprimés : ${deleted.length} fichier(s) média`);
deleted.sort().forEach((f) => console.log(`  - ${f}`));

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function removeEmptyDirs(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    removeEmptyDirs(full);
    if (fs.readdirSync(full).length === 0) fs.rmdirSync(full);
  }
}
