const UTM_PARAMS = {
  utm_source: "instagram",
  utm_medium: "bio",
  utm_campaign: "link-in-bio",
} as const;

const SKIPPED_HOSTS = ["wa.me", "api.whatsapp.com"];

export function isExternal(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

export function withUtm(url: string, noUtm = false): string {
  if (noUtm || !isExternal(url)) return url;

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }

  if (SKIPPED_HOSTS.includes(parsed.hostname)) return url;

  for (const [key, value] of Object.entries(UTM_PARAMS)) {
    if (!parsed.searchParams.has(key)) parsed.searchParams.set(key, value);
  }

  return parsed.toString();
}
