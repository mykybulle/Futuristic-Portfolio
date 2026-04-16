function env(key, fallback = "") {
  const v = import.meta.env[key];
  return typeof v === "string" ? v : fallback;
}

function text(value, fallback = "") {
  if (typeof value !== "string") return fallback;
  const normalized = value.trim();
  return normalized || fallback;
}

function freezeItems(items) {
  return Object.freeze(items.map((item) => Object.freeze(item)));
}

function jsonArrayEnv(key, fallback, mapItem) {
  const raw = env(key).trim();
  if (!raw) return fallback;

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return fallback;

    const normalized = parsed.map(mapItem).filter(Boolean);
    return normalized.length ? freezeItems(normalized) : fallback;
  } catch {
    return fallback;
  }
}

const defaultHighlights = freezeItems([
  { title: "Focus", text: "UI - DX - Perf" },
  { title: "Stack", text: "JS - TS - Web" },
  { title: "Metodo", text: "Design -> Build" }
]);

const defaultProjects = freezeItems([
  {
    code: "01",
    title: "Neon Dashboard",
    description: "UI data-driven con micro-animazioni e componenti riusabili."
  },
  {
    code: "02",
    title: "Holo Landing",
    description: "Landing conversione con layout modulare e accessibilita."
  },
  {
    code: "03",
    title: "Realtime Widget",
    description: "Widget realtime con focus su performance e UX."
  }
]);

const defaultSkills = freezeItems([
  { label: "Frontend", items: Object.freeze(["HTML", "CSS", "JavaScript"]) },
  { label: "UI/UX", items: Object.freeze(["Design Systems", "Accessibilita", "Motion"]) },
  { label: "Performance", items: Object.freeze(["Lighthouse", "Bundle size", "Caching"]) },
  { label: "Tooling", items: Object.freeze(["Vite", "Git", "CI/CD"]) }
]);

function mapHighlight(item) {
  if (!item || typeof item !== "object") return null;

  const title = text(item.title);
  const value = text(item.text);
  if (!title || !value) return null;

  return { title, text: value };
}

function mapProject(item) {
  if (!item || typeof item !== "object") return null;

  const title = text(item.title);
  const description = text(item.description);
  if (!title || !description) return null;

  return {
    code: text(item.code, "00"),
    title,
    description
  };
}

function mapSkill(item) {
  if (!item || typeof item !== "object") return null;

  const label = text(item.label);
  const items = Array.isArray(item.items)
    ? item.items.map((entry) => text(entry)).filter(Boolean)
    : [];

  if (!label || items.length === 0) return null;

  return {
    label,
    items: Object.freeze(items)
  };
}

export const profile = Object.freeze({
  name: env("VITE_PROFILE_NAME", "Il Tuo Nome"),
  role: env("VITE_PROFILE_ROLE", "Creative Developer"),
  email: env("VITE_PROFILE_EMAIL", "nome@dominio.com"),
  location: env("VITE_PROFILE_LOCATION", "Italia"),
  links: Object.freeze({
    github: env("VITE_PROFILE_GITHUB", ""),
    linkedin: env("VITE_PROFILE_LINKEDIN", ""),
    website: env("VITE_PROFILE_WEBSITE", "")
  })
});

export const siteContent = Object.freeze({
  heroAvailability: env("VITE_HERO_AVAILABILITY", "Disponibile per progetti"),
  heroTitlePrefix: env("VITE_HERO_TITLE_PREFIX", "Portfolio"),
  heroTitleHighlight: env("VITE_HERO_TITLE_HIGHLIGHT", "futuristico"),
  heroSubtitle: env(
    "VITE_HERO_SUBTITLE",
    "Progetto interfacce moderne e prodotti digitali con attenzione a performance e dettaglio."
  ),
  projectsDescription: env("VITE_PROJECTS_DESCRIPTION", "Tre card pronte da personalizzare."),
  skillsDescription: env("VITE_SKILLS_DESCRIPTION", 'Una griglia semplice, stile "console".'),
  contactDescription: env(
    "VITE_CONTACT_DESCRIPTION",
    "Scrivimi e raccontami cosa vuoi costruire."
  ),
  emptyLinksText: env("VITE_EMPTY_LINKS_TEXT", "Aggiungi i link in .env"),
  fineprint: env(
    "VITE_FINEPRINT_TEXT",
    "Aggiorna nome, email, link, progetti e skills in .env e riavvia il server."
  ),
  highlights: jsonArrayEnv("VITE_HIGHLIGHTS_JSON", defaultHighlights, mapHighlight),
  projects: jsonArrayEnv("VITE_PROJECTS_JSON", defaultProjects, mapProject),
  skills: jsonArrayEnv("VITE_SKILLS_JSON", defaultSkills, mapSkill)
});

