const business = {
  whatsapp: "50239132672",
  location: {
    name: "Finca Las Nubes",
    city: "San José Pinula",
    route: "Km 39.5 carretera a Mataquescuintla",
    turn: "Desvío a Sanguayabá"
  },
  schedules: {
    lodging: { checkIn: "2:00 PM — 5:00 PM", checkOut: "Hasta las 12:00 PM" },
    camping: { setUp: "Desde las 3:00 PM", removal: "Antes de las 11:00 AM" },
    dayPass: "Sábados, domingos y festivos · 9:00 AM — 4:30 PM",
    breakfast: "Sábados y domingos · 9:00 AM — 11:00 AM",
    lunch: "Sábados y domingos · 1:00 PM — 3:00 PM"
  },
  services: {
    cabins: "Cabañas para 4 — 10 personas",
    camping: "Camping sujeto a disponibilidad entre semana",
    dayPass: "Naturaleza, senderos e instalaciones durante el día",
    meals: "Desayunos y almuerzos bajo reserva",
    events: "Eventos y espacios sujetos a disponibilidad"
  },
  messages: {
    general: "Hola, quisiera consultar disponibilidad en Entre Nubes y Montañas.",
    campo: "Hola, quisiera consultar disponibilidad para Casa de Campo.",
    cipreses: "Hola, quisiera consultar disponibilidad para Los Cipreses.",
    montana: "Hola, quisiera consultar disponibilidad para De La Montaña.",
    camping: "Hola, quisiera consultar disponibilidad para camping.",
    pase: "Hola, quisiera reservar un pase de día.",
    comidas: "Hola, quisiera consultar el servicio de comidas bajo reserva.",
    eventos: "Hola, quisiera solicitar información para realizar un evento."
  },
  cabins: {
    campo: {
      title: "Casa de Campo",
      capacity: "4 — 7 personas",
      description: "Una estancia acogedora para compartir en familia, desconectar del ruido y disfrutar el entorno natural de la finca.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1440,fit=crop/AzGrjDKpgxuO8BNP/img-20221020-wa0004-d95pDrB29kTVOro4.jpg"
    },
    cipreses: {
      title: "Los Cipreses",
      capacity: "5 — 8 personas",
      description: "Una cabaña pensada para grupos que quieren vivir la montaña con calma, cerca de senderos y espacios verdes.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1406,fit=crop/AzGrjDKpgxuO8BNP/img-20221020-wa0005-AGBGMvWnbJFLNqqW.jpg"
    },
    montana: {
      title: "De La Montaña",
      capacity: "8 — 10 personas",
      description: "Más espacio para reunirse, descansar y disfrutar una escapada en grupo entre árboles y aire fresco.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1475,fit=crop/AzGrjDKpgxuO8BNP/inicio-AzGrjDJp84FONZKk.jpg"
    }
  }
};

const whatsappUrl = (type = "general") => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.messages[type] || business.messages.general)}`;

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.open(whatsappUrl(link.dataset.whatsapp), "_blank", "noopener,noreferrer");
  });
});

const header = document.querySelector("[data-header]");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 22);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const modal = document.querySelector("[data-modal]");
const modalImage = modal.querySelector("[data-modal-image]");
const modalKicker = modal.querySelector("[data-modal-kicker]");
const modalTitle = modal.querySelector("[data-modal-title]");
const modalCapacity = modal.querySelector("[data-modal-capacity]");
const modalDescription = modal.querySelector("[data-modal-description]");
const modalWhatsapp = modal.querySelector("[data-modal-whatsapp]");

const closeModal = () => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

document.querySelectorAll("[data-cabin]").forEach((card) => {
  card.addEventListener("click", () => {
    const cabin = business.cabins[card.dataset.cabin];
    if (!cabin) return;
    modalImage.src = cabin.image;
    modalImage.alt = cabin.title;
    modalKicker.textContent = "Detalle de alojamiento";
    modalTitle.textContent = cabin.title;
    modalCapacity.textContent = cabin.capacity;
    modalDescription.textContent = cabin.description;
    modalWhatsapp.href = whatsappUrl(card.dataset.cabin);
    modalWhatsapp.target = "_blank";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });
});

modal.querySelectorAll("[data-modal-close]").forEach((element) => element.addEventListener("click", closeModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
