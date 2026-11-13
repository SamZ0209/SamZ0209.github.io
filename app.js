/* Website logic. Most content changes only require editing data.js. */
(() => {
  "use strict";
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const config = window.PORTFOLIO || PORTFOLIO;
  const setText = (selector, text) => { const element = $(selector); if (element) element.textContent = text; };

  setText("#brand-initials", config.initials);
  setText("#brand-name", config.name); // append decorative dot after text below
  const dot = document.createElement("span"); dot.className = "brand-dot"; dot.textContent = "."; $("#brand-name").append(dot);
  setText("#hero-role", config.role.toUpperCase());
  setText("#hero-description", config.introduction);
  setText("#hero-university", config.university);
  setText("#about-paragraph-one", config.aboutOne);
  setText("#about-paragraph-two", config.aboutTwo);
  setText("#footer-name", config.name);
  setText("#footer-year", new Date().getFullYear());
  document.title = `${config.name} | Software & AI Portfolio`;

  const safeLink = (url, allowMailto = false) => {
    if (!url || typeof url !== "string") return null;
    const trimmed = url.trim();
    if (allowMailto && /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(trimmed)) return trimmed;
    if (/^https:\/\//i.test(trimmed) || /^(?!\/\/)[a-z0-9_./-]+\.pdf$/i.test(trimmed)) return trimmed;
    return null;
  };
  const tag = (name, className, text) => { const el = document.createElement(name); if (className) el.className = className; if (text != null) el.textContent = text; return el; };
  const externalAnchor = (text, url, className = "") => {
    const href = safeLink(url);
    if (!href) return null;
    const a = tag("a", className, text); a.href = href;
    if (href.startsWith("https://")) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  };

  function makeArtwork(kind) {
    const artwork = tag("div", `project-art project-art-${kind}`);
    artwork.setAttribute("aria-hidden", "true");
    if (kind === "ai") {
      artwork.innerHTML = '<div class="ai-ring ai-ring-outer"></div><div class="ai-ring ai-ring-inner"></div><span class="ai-core">✳</span><span class="art-float art-float-a">VOICE</span><span class="art-float art-float-b">MCP</span>';
    } else if (kind === "graph") {
      artwork.innerHTML = '<svg viewBox="0 0 360 220" preserveAspectRatio="xMidYMid meet"><path class="graph-edge" d="M34 158 L104 59 L183 126 L282 51 L325 165 L221 188 L104 59 M34 158 L183 126 L325 165 M282 51 L221 188"/><path class="graph-highlight" d="M34 158 L183 126 L282 51"/><g class="graph-points"><circle cx="34" cy="158" r="8"/><circle cx="104" cy="59" r="7"/><circle cx="183" cy="126" r="8"/><circle cx="282" cy="51" r="8"/><circle cx="325" cy="165" r="7"/><circle cx="221" cy="188" r="7"/></g></svg>';
    } else if (kind === "terminal") {
      artwork.innerHTML = '<div class="mini-terminal"><span class="mini-terminal-title">automation.py</span><code><span class="term-muted">$</span> python bot.py<br><span class="term-bright">&gt;</span> starting workflow...<br><span class="term-bright">&gt;</span> steps complete <span class="term-check">✓</span></code></div>';
    } else if (kind === "weather") {
      artwork.innerHTML = '<div class="weather-art"><div class="weather-sun"></div><div class="weather-cloud weather-cloud-one"></div><div class="weather-cloud weather-cloud-two"></div><div class="weather-bars"><span></span><span></span><span></span><span></span><span></span><span></span></div></div>';
    }
    return artwork;
  }

  function createCard(project) {
    const card = tag("article", `project-card${project.featured ? " project-featured" : ""}`);
    card.dataset.category = project.category;
    const body = tag("div", "project-card-body");
    const topline = tag("div", "project-topline");
    topline.append(tag("span", "project-label", project.categoryLabel), tag("span", "project-number", `/ ${project.number}`));
    body.append(topline, tag("h3", "project-title", project.title), tag("p", "project-summary", project.summary));
    const tags = tag("div", "project-tags");
    project.tech.forEach(item => tags.append(tag("span", "project-tag", item)));
    body.append(tags);
    const bottom = tag("div", "project-card-bottom");
    const details = document.createElement("details");
    details.className = "project-details";
    const summary = document.createElement("summary");
    summary.textContent = "What I built ";
    summary.append(tag("span", "details-arrow", "+"));
    details.append(summary);
    const detailList = tag("ul", "detail-list");
    project.details.forEach(item => detailList.append(tag("li", "", item)));
    details.append(detailList);
    bottom.append(details);
    const links = tag("div", "project-links");
    const source = externalAnchor("Source ↗", project.source, "project-link");
    const demo = externalAnchor("Demo ↗", project.demo, "project-link");
    if (source) links.append(source);
    if (demo) links.append(demo);
    if (links.childElementCount) bottom.append(links);
    body.append(bottom);
    card.append(makeArtwork(project.art), body);
    return card;
  }

  const projectsGrid = $("#projects-grid");
  config.projects.forEach(project => projectsGrid.append(createCard(project)));
  setText("#project-count", `${String(config.projects.length).padStart(2, "0")} PROJECTS`);
  $$(".filter-button").forEach(button => button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    $$(".filter-button").forEach(item => { item.classList.toggle("active", item === button); item.setAttribute("aria-pressed", String(item === button)); });
    $$(".project-card").forEach(card => { card.hidden = filter !== "all" && card.dataset.category !== filter; });
  }));

  const skillsGrid = $("#skills-grid");
  config.skills.forEach((group, i) => {
    const panel = tag("div", "skill-panel");
    panel.append(tag("span", "skill-panel-number", `0${i + 1} /`), tag("h3", "", group.heading));
    const list = tag("div", "skill-items");
    group.items.forEach(item => list.append(tag("span", "skill-pill", item)));
    panel.append(list); skillsGrid.append(panel);
  });

  const contactActions = $("#contact-actions");
  const email = config.email && /^\S+@\S+\.\S+$/.test(config.email) ? `mailto:${config.email}` : "";
  if (email) { const link = tag("a", "button button-primary", "Email me ↗"); link.href = email; contactActions.append(link); }
  [["GitHub ↗", config.github], ["LinkedIn ↗", config.linkedin], ["Résumé ↗", config.resume]].forEach(([label, url]) => {
    const link = externalAnchor(label, url, "button button-outline");
    if (link) contactActions.append(link);
  });
  if (!contactActions.childElementCount) contactActions.append(tag("p", "contact-placeholder", "Contact and profile links can be added in data.js."));

  const nav = $("#primary-navigation");
  const menuButton = $("#mobile-menu-button");
  const closeMenu = () => { nav.classList.remove("nav-open"); menuButton.setAttribute("aria-expanded", "false"); };
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open"); menuButton.setAttribute("aria-expanded", String(open));
  });
  $$("a", nav).forEach(a => a.addEventListener("click", closeMenu));
  window.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });

  const toggle = $("#theme-toggle");
  const storedTheme = (() => { try { return localStorage.getItem("portfolio-theme"); } catch (_) { return null; } })();
  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    toggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
    toggle.querySelector(".theme-toggle-icon").textContent = theme === "dark" ? "☼" : "☾";
    const meta = $('meta[name="theme-color"]'); if (meta) meta.content = theme === "dark" ? "#0b1220" : "#f5f8fc";
    try { localStorage.setItem("portfolio-theme", theme); } catch (_) { /* storage unavailable */ }
  };
  applyTheme(storedTheme === "light" ? "light" : "dark");
  toggle.addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
})();
