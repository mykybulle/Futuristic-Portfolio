import { profile, siteContent } from "../profile.js";

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function linkIf(url) {
  const u = (url || "").trim();
  if (!u) return "";
  const safe = esc(u);
  const label =
    u.includes("github.com") ? "GitHub" : u.includes("linkedin.com") ? "LinkedIn" : "Sito";
  return `<a class="chip" href="${safe}" target="_blank" rel="noreferrer noopener">${label}</a>`;
}

export function renderApp(rootEl) {
  const year = new Date().getFullYear();

  const name = esc(profile.name);
  const role = esc(profile.role);
  const email = esc(profile.email);
  const location = esc(profile.location);
  const heroAvailability = esc(siteContent.heroAvailability);
  const heroTitlePrefix = esc(siteContent.heroTitlePrefix);
  const heroTitleHighlight = esc(siteContent.heroTitleHighlight);
  const heroSubtitle = esc(siteContent.heroSubtitle);
  const projectsDescription = esc(siteContent.projectsDescription);
  const skillsDescription = esc(siteContent.skillsDescription);
  const contactDescription = esc(siteContent.contactDescription);
  const emptyLinksText = esc(siteContent.emptyLinksText);
  const fineprint = esc(siteContent.fineprint);

  const links = [
    linkIf(profile.links.website),
    linkIf(profile.links.github),
    linkIf(profile.links.linkedin)
  ].filter(Boolean);
  const highlights = siteContent.highlights.map((item) => highlightCard(item)).join("");
  const projects = siteContent.projects.map((item) => projectCard(item)).join("");
  const skills = siteContent.skills.map((item) => skillCard(item)).join("");

  const mailto = `mailto:${email}`;

  rootEl.innerHTML = `
    <div class="bg">
      <div class="grid"></div>
      <div class="glow glow-a"></div>
      <div class="glow glow-b"></div>
      <div class="noise"></div>
    </div>

    <header class="topbar">
      <a class="brand" href="#home" aria-label="Vai all'inizio">
        <span class="brand__dot" aria-hidden="true"></span>
        <span class="brand__text">${name}</span>
      </a>
      <nav class="nav">
        <a href="#progetti">Progetti</a>
        <a href="#skills">Skills</a>
        <a href="#contatti">Contatti</a>
      </nav>
      <div class="topbar__cta">
        <a class="btn btn--ghost" href="${mailto}">Email</a>
        <a class="btn" href="#contatti">Contattami</a>
      </div>
    </header>

    <main class="container" id="home">
      <section class="hero">
        <div class="hero__left">
          <div class="kicker">
            <span class="kicker__pulse" aria-hidden="true"></span>
            <span>${heroAvailability}</span>
          </div>

          <h1 class="title">
            <span class="title__line">${heroTitlePrefix}</span>
            <span class="title__line title__line--accent">${heroTitleHighlight}</span>
          </h1>

          <p class="subtitle">
            Sono <span class="text-glow">${name}</span>, <strong>${role}</strong>.
            ${heroSubtitle}
          </p>

          <div class="meta">
            <div class="meta__item">
              <div class="meta__label">Base</div>
              <div class="meta__value">${location}</div>
            </div>
            <div class="meta__item">
              <div class="meta__label">Contatto</div>
              <a class="meta__value meta__link" href="${mailto}">${email}</a>
            </div>
            <div class="meta__item">
              <div class="meta__label">Link</div>
              <div class="meta__value meta__links">${links.join("") || `<span class="muted">—</span>`}</div>
            </div>
          </div>

          <div class="actions">
            <a class="btn btn--primary" href="#progetti">Vedi progetti</a>
            <a class="btn btn--ghost" href="${mailto}">Scrivimi</a>
          </div>
        </div>

        <div class="hero__right">
          <div class="card card--holo">
            <div class="card__header">
              <div class="badge">SYSTEM</div>
              <div class="status">
                <span class="status__dot" aria-hidden="true"></span>
                ONLINE
              </div>
            </div>
            <div class="card__body">
              <div class="mono">
                <div><span class="dim">user</span> = "${name}"</div>
                <div><span class="dim">role</span> = "${role}"</div>
                <div><span class="dim">mail</span> = "${email}"</div>
                <div><span class="dim">loc</span> = "${location}"</div>
              </div>
              <div class="scanline" aria-hidden="true"></div>
            </div>
          </div>

          <div class="stack">
            ${highlights}
          </div>
        </div>
      </section>

      <section class="section" id="progetti">
        <div class="section__head">
          <h2>Progetti</h2>
          <p>${projectsDescription}</p>
        </div>

        <div class="cards">${projects}</div>
      </section>

      <section class="section" id="skills">
        <div class="section__head">
          <h2>Skills</h2>
          <p>${skillsDescription}</p>
        </div>

        <div class="skills">${skills}</div>
      </section>

      <section class="section" id="contatti">
        <div class="section__head">
          <h2>Contatti</h2>
          <p>${contactDescription}</p>
        </div>

        <div class="contact">
          <div class="contact__panel">
            <div class="contact__row">
              <div class="contact__label">Email</div>
              <a class="contact__value" href="${mailto}">${email}</a>
            </div>
            <div class="contact__row">
              <div class="contact__label">Link</div>
              <div class="contact__value contact__chips">
                ${links.join("") || `<span class="muted">${emptyLinksText}</span>`}
              </div>
            </div>
            <div class="contact__row">
              <div class="contact__label">Località</div>
              <div class="contact__value">${location}</div>
            </div>
          </div>

          <div class="contact__cta">
            <a class="btn btn--primary btn--wide" href="${mailto}">
              Invia email
            </a>
            <div class="fineprint">
              ${fineprint}
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="footer__left">© ${year} ${name}</div>
        <div class="footer__right">
          <a href="#home">Torna su</a>
        </div>
      </footer>
    </main>
  `;

  document.title = `${profile.name} — Portfolio`;
}

function highlightCard(item) {
  return `
    <div class="mini">
      <div class="mini__title">${esc(item.title)}</div>
      <div class="mini__text">${esc(item.text)}</div>
    </div>
  `;
}

function projectCard(project) {
  return `
    <article class="p-card">
      <div class="p-card__top">
        <div class="p-card__code">${esc(project.code)}</div>
        <div class="p-card__title">${esc(project.title)}</div>
      </div>
      <div class="p-card__desc">${esc(project.description)}</div>
      <div class="p-card__actions">
        <a class="chip chip--ghost" href="#contatti">Richiedi demo</a>
        <a class="chip" href="#contatti">Dettagli</a>
      </div>
    </article>
  `;
}

function skillCard(group) {
  const list = group.items.map((item) => `<li>${esc(item)}</li>`).join("");
  return `
    <div class="skill">
      <div class="skill__label">${esc(group.label)}</div>
      <ul class="skill__list">${list}</ul>
    </div>
  `;
}

