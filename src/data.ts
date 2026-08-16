import { parse } from "yaml";
import * as types from "./types";

//================== FROM GITHUB GISTS =========================

let cachedCV: types.CVData | null = null;

async function fetchCV(): Promise<types.CVData> {
  if (cachedCV) return cachedCV;

  const res = await fetch(
    "https://gist.githubusercontent.com/twodigitss/fdd80b8202366fb4454f4bb470416ff1/raw/cv.txt",
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch CV data: ${res.status} ${res.statusText}`);
  }
  const text = await res.text();
  const parsed = parse(text) as { cv: types.CVData };
  cachedCV = parsed.cv;
  return cachedCV;
}

export async function CV(): Promise<types.CVSections> {
  const cv = await fetchCV();
  return cv.sections;
}

//================== PROJECTS =========================
