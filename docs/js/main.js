// Menu mobile
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", String(!isOpen));
    navToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  // Fermer le menu au clic sur un lien
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.setAttribute("data-open", "false");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Année footer
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Formulaire : version simple (front-only).
// Tu pourras remplacer par Formspree / Netlify Forms / API maison.
const form = document.getElementById("contactForm");
const statusEl = document.querySelector("[data-form-status]");

if (form && statusEl) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    // Exemple: ouvrir un mail prérempli
    const subject = encodeURIComponent(`Demande de devis — ${payload.type || "Site"}`);
    const body = encodeURIComponent(
      `Nom: ${payload.name}\nEmail: ${payload.email}\nTéléphone: ${payload.phone || "-"}\nType: ${payload.type}\n\nMessage:\n${payload.message}`
    );

    // Change l'email ici :
    window.location.href = `mailto:contact@tondomaine.fr?subject=${subject}&body=${body}`;

    statusEl.textContent = "Ouverture de votre application mail…";
    form.reset();
  });
}