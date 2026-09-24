export type Attribution = {
  landing_page: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
};

const KEY = "cloc_attr";

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(KEY)) return;
    const p = new URLSearchParams(window.location.search);
    const attr: Attribution = {
      landing_page: window.location.pathname,
      referrer: document.referrer,
      utm_source: p.get("utm_source") ?? "",
      utm_medium: p.get("utm_medium") ?? "",
      utm_campaign: p.get("utm_campaign") ?? "",
      utm_content: p.get("utm_content") ?? "",
    };
    sessionStorage.setItem(KEY, JSON.stringify(attr));
  } catch {}
}

export function getAttribution(): Attribution {
  const empty: Attribution = {
    landing_page: "",
    referrer: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
  };
  if (typeof window === "undefined") return empty;
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : empty;
  } catch {
    return empty;
  }
}
