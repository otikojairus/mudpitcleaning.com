export const SITE_NAME = "Mud Pit Canada";
export const DEFAULT_SITE_URL = "https://mudpitcanada.com";
export const EMERGENCY_PHONE_DISPLAY = "1-888-702-2090";
export const EMERGENCY_PHONE_E164 = "+18887022090";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
}

export function absoluteUrl(path: string) {
  return `${getSiteUrl()}${path}`;
}

export function trimMetaDescription(input: string, max = 155) {
  if (input.length <= max) {
    return input;
  }

  const sliced = input.slice(0, max - 1);
  return `${sliced.slice(0, sliced.lastIndexOf(" "))}…`;
}
