const ASSETS = {
  hero: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2800,h=991,fit=crop/AzGrjDKpgxuO8BNP/img-20221119-wa0084-ALpJBbQ9eVh0ORk9.jpg',
  cabin: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1440,fit=crop/AzGrjDKpgxuO8BNP/img-20221020-wa0004-d95pDrB29kTVOro4.jpg',
  cipreses: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1406,fit=crop/AzGrjDKpgxuO8BNP/img-20221020-wa0005-AGBGMvWnbJFLNqqW.jpg',
  montana: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1475,fit=crop/AzGrjDKpgxuO8BNP/inicio-AzGrjDJp84FONZKk.jpg',
  camping: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1475,fit=crop/AzGrjDKpgxuO8BNP/img-20210729-wa0010-Y4L4Op0L1bCyRDDq.jpg',
  event: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1478,fit=crop/AzGrjDKpgxuO8BNP/palapa-AoPe6e9erLsgJ2bQ.jpg',
  cycling: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1542,fit=crop/AzGrjDKpgxuO8BNP/ciclismo-mnl369ZqlrFE5Rqb.jpg',
  fire: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1542,fit=crop/AzGrjDKpgxuO8BNP/fogata-2-AR0J7ble1Qtk6pMj.jpg',
  hiking: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1542,fit=crop/AzGrjDKpgxuO8BNP/senderismo-AMqnx42rW9TqgD0M.jpg',
  walk: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1406,fit=crop/AzGrjDKpgxuO8BNP/paseo-A0xw96yrqOfpK6Gx.jpg',
  eventTable: 'https://cdn.zyrosite.com/cdn-ecommerce/store_01HWXT8NGFBRCSXAECKV90WQ77%2Fassets%2F1719439942128-mesa%20decorada%20eventos.jpg',
  palapa: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1478,fit=crop/AzGrjDKpgxuO8BNP/palapa-AoPe6e9erLsgJ2bQ.jpg'
};

const BUSINESS = {
  phone: '50239132672',
  displayPhone: '+502 3913 2672',
  location: ['Finca Las Nubes', 'San José Pinula', 'Km 39.5 carretera a Mataquescuintla', 'Desvío a Sanguayabá'],
  cabinCheckIn: '2:00 PM — 5:00 PM',
  cabinCheckOut: 'Hasta las 12:00 PM',
  messages: {
    general: 'Hola, quisiera solicitar información sobre disponibilidad en Entre Nubes y Montañas.',
    camping: 'Hola, quisiera consultar disponibilidad para camping.',
    dayPass: 'Hola, quisiera reservar un pase de día.',
    meals: 'Hola, quisiera consultar el servicio de comidas bajo reserva.',
    events: 'Hola, quisiera solicitar información para realizar un evento.'
  }
};

const CABINS = [
  { slug: 'casa-de-campo', name: 'Casa de Campo', capacity: '4–7 personas', image: ASSETS.cabin, description: 'Una opción familiar para descansar entre naturaleza y tranquilidad.' },
  { slug: 'los-cipreses', name: 'Los Cipreses', capacity: '5–8 personas', image: ASSETS.cipreses, description: 'Un refugio para compartir una escapada en grupo.' },
  { slug: 'de-la-montana', name: 'De La Montaña', capacity: '8–10 personas', image: ASSETS.montana, description: 'Una cabaña amplia para grupos familiares.' }
];

const EXPERIENCE_CARDS = [
  { title: 'Cabañas', kicker: 'Descanso', image: ASSETS.cabin, copy: 'Tres espacios familiares para quedarse entre las montañas.', href: '/cabanas' },
  { title: 'Camping', kicker: 'Al aire libre', image: ASSETS.camping, copy: 'Una forma sencilla de vivir la finca y sus senderos.', href: '/camping' },
  { title: 'Pase de día', kicker: 'Visita', image: ASSETS.walk, copy: 'Ven a pasar el día, recorrer y compartir.', href: '/pase-de-dia' },
  { title: 'Actividades', kicker: 'Naturaleza', image: ASSETS.hiking, copy: 'Aire libre, senderos y actividades para distintos ritmos.', href: '/actividades' },
  { title: 'Comidas', kicker: 'Bajo reservación', image: ASSETS.eventTable, copy: 'Consulta desayunos y almuerzos disponibles.', href: '/desayunos-almuerzos' },
  { title: 'Eventos', kicker: 'Momentos para compartir', image: ASSETS.event, copy: 'Consulta el espacio para reuniones y celebraciones.', href: '/eventos' }
];

const path = () => {
  const clean = window.location.pathname.replace(/\/+$/, '');
  return clean || '/';
};

const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const waUrl = (kind = 'general') => {
  let message = BUSINESS.messages.general;
  if (kind.startsWith('cabin:')) message = `Hola, quisiera consultar disponibilidad para ${kind.slice(6)}.`;
  if (BUSINESS.messages[kind]) message = BUSINESS.messages[kind];
  return `https://wa.me/${BUSINESS.phone}?text=${encodeURIComponent(message)}`;
};
const waButton = (kind, label, className = 'button button-accent') => `<a class="${className}" href="${waUrl(kind)}" data-whatsapp="${esc(kind)}">${label} <span aria-hidden="true">↗</span></a>`;
const arrowLink = (href, label) => `<a class="text-link" href="${href}">${label} <span aria-hidden="true">↗</span></a>`;

function pageHero(kicker, title, copy, image, actions = '') {
  return `<section class="page-hero">
    <div class="page-hero-media" style="background-image:url('${image}')"></div>
    <div class="page-hero-shade"></div>
    <div class="shell page-hero-content"><p class="eyebrow light">${kicker}</p><h1>${title}</h1><p class="page-hero-copy">${copy}</p>${actions ? `<div class="hero-actions">${actions}</div>` : ''}</div>
  </section>`;
}

function sectionIntro(kicker, title, copy, href = '', label = '') {
  return `<div class="section-intro reveal"><p class="eyebrow">${kicker}</p><h2>${title}</h2><p>${copy}</p>${href ? arrowLink(href, label) : ''}</div>`;
}

function renderHome() {
  return `<div class="home-page">
    <section class="hero">
      <div class="hero-image"></div><div class="hero-shade"></div>
      <div class="shell hero-content"><p class="eyebrow light">Finca Las Nubes · San José Pinula</p><h1>Un lugar para <em>volver</em> a lo esencial.</h1><p class="hero-copy">Cabañas, camping, naturaleza y sabores de una finca familiar entre las nubes.</p><div class="hero-actions"><a class="button button-accent" href="/experiencias">Conoce las experiencias <span aria-hidden="true">↗</span></a>${waButton('general', 'Consultar disponibilidad', 'button button-ghost')}</div><p class="hero-note hero-reservation"><span class="dot"></span>TODOS LOS SERVICIOS SE REALIZAN BAJO RESERVACIÓN.</p></div><div class="scroll-cue"><span>Explorar</span><i class="scroll-line"></i></div>
    </section>

    <section class="intro section-pad">
      <div class="reveal"><p class="eyebrow">Entre Nubes y Montañas</p><h2>La pausa que estabas buscando.</h2></div>
      <div class="intro-copy reveal"><p>Una finca familiar en San José Pinula para respirar aire limpio, compartir con los tuyos y descubrir una forma más tranquila de estar afuera.</p>${arrowLink('/experiencias', 'Ver experiencias')}</div>
    </section>

    <section class="editorial-story section-pad">
      <div class="editorial-story-mark">01<span>ESENCIA</span></div>
      <div class="editorial-story-copy reveal"><p class="eyebrow">Más que una escapada</p><h2>Una finca que todavía vive sus tradiciones.</h2></div>
      <div class="editorial-story-text reveal"><p>Entre Nubes y Montañas es una finca familiar con tradición lechera y una relación cercana con la naturaleza.</p><p>Sus senderos, espacios abiertos y actividades rurales o artesanales forman parte de una experiencia sencilla, auténtica y hecha para compartir.</p>${arrowLink('/sabores', 'Conoce la finca')}</div>
    </section>

    <section class="section-pad home-experiences"><div class="section-heading reveal"><div><p class="eyebrow">Elige tu manera de estar aquí</p><h2>Experiencias</h2></div><div class="section-heading-actions"><p class="section-note">Camping, pase de día y actividades para disfrutar la finca a tu ritmo.</p>${arrowLink('/experiencias', 'Ver experiencias')}</div></div><div class="experience-grid home-feature-grid">${[EXPERIENCE_CARDS[1], EXPERIENCE_CARDS[2], EXPERIENCE_CARDS[3]].map((card) => `<a class="experience-card reveal" href="${card.href}"><img src="${card.image}" alt="${card.title} en Entre Nubes y Montañas" loading="lazy"><span class="experience-overlay"></span><span class="card-content"><span class="card-kicker">${card.kicker}</span><h3>${card.title}</h3><p>${card.copy}</p><span class="card-link">${card.title === 'Camping' ? 'Conocer camping' : card.title === 'Pase de día' ? 'Ver pase de día' : 'Explorar actividad'} <span aria-hidden="true">↗</span></span></span></a>`).join('')}</div></section>

    <section class="cabins section-pad"><div class="section-heading reveal"><div><p class="eyebrow">Quédate entre las montañas</p><h2>Cabañas</h2></div><div class="section-heading-actions"><p class="section-note">Capacidades para grupos familiares. Consulta disponibilidad y condiciones.</p>${arrowLink('/cabanas', 'Ver cabañas')}</div></div><div class="cabin-list">${CABINS.map((cabin, i) => `<a class="cabin-card reveal" href="/cabanas/${cabin.slug}"><span class="cabin-index">0${i + 1}</span><span class="cabin-image-wrap"><img src="${cabin.image}" alt="${cabin.name}" loading="lazy"></span><span class="cabin-body"><span class="cabin-capacity">${cabin.capacity}</span><strong>${cabin.name}</strong><span class="cabin-arrow" aria-hidden="true">↗</span></span></a>`).join('')}</div><p class="micro-note reveal">Check-in ${BUSINESS.cabinCheckIn} · Check-out ${BUSINESS.cabinCheckOut}</p></section>

    <section class="events-feature section-pad"><div class="events-image reveal"><img src="${ASSETS.event}" alt="Espacio natural para eventos" loading="lazy"></div><div class="events-copy reveal"><p class="eyebrow">Momentos para compartir</p><h2>Celebra entre montañas.</h2><p>El espacio puede consultarse para reuniones, celebraciones, actividades familiares, grupos y eventos privados.</p><p class="events-note">La disponibilidad, condiciones y alcance se revisan directamente para cada solicitud.</p>${arrowLink('/eventos', 'Ver eventos')}</div></section>

    <section class="flavor section-pad"><div class="flavor-copy reveal"><p class="eyebrow">Sabores de la finca</p><h2>Del campo a la mesa.</h2><p>Comidas bajo reservación y productos lácteos artesanales de Finca Las Nubes.</p>${arrowLink('/sabores', 'Explorar sabores')}</div><div class="meal-times reveal"><div class="meal-block"><span class="meal-number">01</span><div><h3>Desayunos y almuerzos</h3><p>Sábados y domingos, bajo reservación.</p>${arrowLink('/desayunos-almuerzos', 'Ver horarios')}</div></div><div class="meal-block"><span class="meal-number">02</span><div><h3>Lácteos artesanales</h3><p>Productos para disfrutar o llevar.</p>${arrowLink('/lacteos-artesanales', 'Ver productos')}</div></div></div></section>

    <section class="reservation-strip"><div class="shell"><p class="reservation-banner"><span class="dot"></span>TODOS LOS SERVICIOS SE REALIZAN BAJO RESERVACIÓN.</p><p>Confirma disponibilidad, condiciones y ruta antes de planear tu visita.</p>${arrowLink('/contacto', 'Consultar disponibilidad')}</div></section>

    <section class="location section-pad"><div class="location-copy reveal"><p class="eyebrow">Dónde estamos</p><h2>El camino también es parte de la experiencia.</h2><address>${BUSINESS.location.join('<br>')}</address><div class="route-note"><span class="route-icon">⌁</span><p>Consulta la ruta recomendada antes de salir para llegar por el acceso más conveniente.</p></div>${arrowLink('/como-llegar', 'Cómo llegar')}</div><div class="map-art reveal"><div class="map-rings"></div><span class="map-road road-one"></span><span class="map-road road-two"></span><span class="map-label label-city">San José Pinula</span><span class="map-label label-finca"><i class="pin"></i> Finca Las Nubes</span></div></section>

    <section class="final-cta section-pad"><p class="eyebrow light">Tu próxima escapada</p><h2>Tu próxima escapada empieza <em>aquí.</em></h2><p>Consulta disponibilidad para cabañas, camping, pase de día, comidas o eventos.</p><div class="final-actions">${waButton('general', 'Consultar disponibilidad', 'button button-accent button-large')}</div><p class="phone">${BUSINESS.displayPhone}</p></section>
  </div>`;
}

function experienceCard(card) {
  return `<a class="simple-card image-card reveal" href="${card.href}"><div class="simple-card-image"><img src="${card.image}" alt="${card.title}" loading="lazy"></div><div class="simple-card-body"><p class="eyebrow">${card.kicker}</p><h3>${card.title}</h3><p>${card.copy}</p><span class="card-link dark">Ver detalle <span aria-hidden="true">↗</span></span></div></a>`;
}

function renderExperiences() {
  return `${pageHero('Experiencias', 'Elige cómo quieres vivir la finca.', 'Quédate, ven por el día, recorre los senderos o consulta un momento para compartir.', ASSETS.hero, waButton('general', 'Consultar disponibilidad'))}<section class="section-pad page-section">${sectionIntro('Una experiencia a tu medida', 'Naturaleza para distintos ritmos.', 'Cada opción se coordina bajo reservación y se confirma directamente con Entre Nubes y Montañas.', '/contacto', 'Hablar con la finca')}<div class="card-grid">${EXPERIENCE_CARDS.map(experienceCard).join('')}</div></section><section class="reservation section-pad"><p class="reservation-banner"><span class="dot"></span>TODOS LOS SERVICIOS SE REALIZAN BAJO RESERVACIÓN.</p><div class="reservation-head"><p class="eyebrow light">Tu visita</p><h2>Primero consulta.</h2><p>Así recibes las condiciones vigentes de la experiencia que elijas.</p></div></section>`;
}

function cabinCard(cabin, index) {
  return `<a class="cabin-card detail-cabin-card reveal" href="/cabanas/${cabin.slug}"><span class="cabin-index">0${index + 1}</span><span class="cabin-image-wrap"><img src="${cabin.image}" alt="${cabin.name}" loading="lazy"></span><span class="cabin-body"><span class="cabin-capacity">${cabin.capacity}</span><strong>${cabin.name}</strong><span class="cabin-arrow" aria-hidden="true">↗</span></span></a>`;
}

function renderCabins() {
  return `${pageHero('Cabañas', 'Descansa entre las montañas.', 'Tres cabañas familiares, cada una con su propia capacidad. La disponibilidad se confirma por WhatsApp.', ASSETS.cabin, waButton('general', 'Consultar disponibilidad'))}<section class="section-pad page-section"><div class="section-heading reveal"><div><p class="eyebrow">Elige tu espacio</p><h2>Cabañas familiares</h2></div><p class="section-note">No publicamos comodidades ni tarifas no confirmadas. Consulta las condiciones vigentes directamente.</p></div><div class="cabin-list">${CABINS.map(cabinCard).join('')}</div><p class="micro-note reveal">Check-in ${BUSINESS.cabinCheckIn} · Check-out ${BUSINESS.cabinCheckOut}</p></section>`;
}

function renderCabinDetail(cabin) {
  return `<section class="detail-hero"><div class="detail-hero-image" style="background-image:url('${cabin.image}')"></div><div class="detail-hero-shade"></div><div class="shell detail-hero-content"><a class="back-link" href="/cabanas">← Cabañas</a><p class="eyebrow light">Cabaña familiar</p><h1>${cabin.name}</h1><p>${cabin.capacity}</p></div></section><section class="section-pad detail-content"><div class="detail-layout"><div class="detail-main reveal"><p class="eyebrow">Una pausa en la finca</p><h2>${cabin.name} para compartir.</h2><p>${cabin.description}</p><p>La capacidad confirmada es de <strong>${cabin.capacity}</strong>. Para conocer disponibilidad y condiciones, escríbenos antes de planear tu visita.</p></div><aside class="info-panel reveal"><p class="eyebrow">Información de reserva</p><div class="info-row"><span>Capacidad</span><strong>${cabin.capacity}</strong></div><div class="info-row"><span>Check-in</span><strong>${BUSINESS.cabinCheckIn}</strong></div><div class="info-row"><span>Check-out</span><strong>${BUSINESS.cabinCheckOut}</strong></div><p class="info-note">Disponibilidad y condiciones se confirman por WhatsApp.</p>${waButton(`cabin:${cabin.name}`, 'Consultar esta cabaña', 'button button-dark')}</aside></div></section><section class="section-pad related-section"><div class="section-heading reveal"><div><p class="eyebrow">También puedes explorar</p><h2>Otras experiencias</h2></div></div><div class="mini-grid">${EXPERIENCE_CARDS.slice(1, 4).map(experienceCard).join('')}</div></section>`;
}

function renderCamping() {
  return `${pageHero('Camping', 'Dormir bajo el cielo.', 'Un espacio para montar tu campamento, recorrer y disfrutar la naturaleza de la finca.', ASSETS.camping, waButton('camping', 'Consultar camping'))}<section class="section-pad split-section"><div class="split-image reveal"><img src="${ASSETS.camping}" alt="Área de camping" loading="lazy"></div><div class="split-copy reveal">${sectionIntro('Camping en Finca Las Nubes', 'Una forma cercana de vivir el entorno.', 'La experiencia incluye acceso a espacios de la finca y senderos. Consulta antes de llegar para confirmar disponibilidad y condiciones.') }<div class="facts-list"><div class="info-row"><span>Montaje</span><strong>Desde las 3:00 PM</strong></div><div class="info-row"><span>Retiro</span><strong>Antes de las 11:00 AM</strong></div><div class="info-row"><span>Incluye</span><strong>Parqueo, baños y ducha con agua caliente</strong></div><div class="info-row"><span>También</span><strong>Senderos y churrasqueras con mesas y bancos</strong></div></div>${waButton('camping', 'Consultar disponibilidad', 'button button-dark')}</div></div></section>`;
}

function renderDayPass() {
  return `${pageHero('Pase de día', 'Ven a pasar el día.', 'Un día para caminar, respirar y compartir en el entorno natural de Finca Las Nubes.', ASSETS.walk, waButton('dayPass', 'Reservar pase de día'))}<section class="section-pad split-section reverse-mobile"><div class="split-copy reveal">${sectionIntro('Visita de día', 'Una pausa sin quedarte a dormir.', 'El pase de día permite disfrutar la finca durante el horario de visita. Todo se coordina bajo reservación.') }<div class="facts-list"><div class="info-row"><span>Horario</span><strong>Sábados, domingos y festivos<br>9:00 AM — 4:30 PM</strong></div><div class="info-row"><span>Incluye</span><strong>Parqueo, baños y ducha con agua caliente, senderos y churrasqueras con mesas y bancos</strong></div></div>${waButton('dayPass', 'Reservar un pase de día', 'button button-dark')}</div><div class="split-image reveal"><img src="${ASSETS.walk}" alt="Pase de día en la finca" loading="lazy"></div></div></section>`;
}

const ACTIVITIES = [
  ['Ciclismo de montaña', ASSETS.cycling, 'Recorre el entorno natural en bicicleta.'],
  ['Senderismo', ASSETS.hiking, 'Camina por los senderos de la finca.'],
  ['Fogatas', ASSETS.fire, 'Consulta el uso de espacios autorizados.'],
  ['Actividades caninas', ASSETS.walk, 'Disfruta el aire libre junto a tu perro, bajo las normas de convivencia.']
];

function renderActivities() {
  return `${pageHero('Actividades al aire libre', 'Muévete al ritmo de la naturaleza.', 'Ponemos a su disposición un entorno natural para realizar la actividad que se proponga, de forma segura y respetuosa.', ASSETS.hiking, waButton('general', 'Consultar actividad'))}<section class="section-pad page-section"><div class="activity-grid">${ACTIVITIES.map(([title, image, copy]) => `<article class="simple-card image-card reveal"><div class="simple-card-image"><img src="${image}" alt="${title}" loading="lazy"></div><div class="simple-card-body"><p class="eyebrow">Aire libre</p><h3>${title}</h3><p>${copy}</p></div></article>`).join('')}</div></section><section class="editorial-story section-pad"><div class="editorial-story-mark">04<span>RESPETO</span></div><div class="editorial-story-copy reveal"><p class="eyebrow">Ven preparado</p><h2>La naturaleza se disfruta mejor cuando se cuida.</h2></div><div class="editorial-story-text reveal"><p>Consulta previamente las condiciones de cada actividad y respeta los senderos, horarios y normas de convivencia.</p>${arrowLink('/reglamento', 'Leer reglamento')}</div></section>`;
}

function renderEvents() {
  return `${pageHero('Eventos', 'Celebra entre montañas.', 'Un espacio natural que puede consultarse para reuniones, celebraciones, actividades familiares, grupos y eventos privados.', ASSETS.event, waButton('events', 'Consultar evento por WhatsApp'))}<section class="section-pad split-section"><div class="split-image reveal"><img src="${ASSETS.event}" alt="Espacio natural para eventos" loading="lazy"></div><div class="split-copy reveal">${sectionIntro('Momentos para compartir', 'Tu ocasión, en un entorno distinto.', 'La finca puede revisarse para realizar un evento. Cada solicitud se conversa directamente para confirmar disponibilidad, condiciones y alcance.') }<div class="quiet-list"><p>Reuniones</p><p>Celebraciones</p><p>Actividades familiares</p><p>Grupos</p><p>Eventos privados</p></div>${waButton('events', 'Consultar evento por WhatsApp', 'button button-dark')}</div></div></section><section class="section-pad soft-section"><div class="narrow-copy reveal"><p class="eyebrow">Importante</p><h2>Primero conversemos.</h2><p>No publicamos capacidades, paquetes ni precios que no hayan sido confirmados. Escríbenos para revisar tu idea.</p></div></section>`;
}

function renderFlavors() {
  return `${pageHero('Sabores de la finca', 'Del campo a la mesa.', 'Conoce las comidas bajo reservación y los productos que nacen de la tradición lechera de Finca Las Nubes.', ASSETS.eventTable, arrowLink('/contacto', 'Consultar disponibilidad'))}<section class="section-pad page-section"><div class="card-grid two-col"><a class="simple-card reveal" href="/desayunos-almuerzos"><div class="simple-card-body"><p class="eyebrow">Bajo reservación</p><h3>Desayunos y almuerzos</h3><p>Opciones para compartir durante tu visita. Consulta disponibilidad y menú vigente.</p><span class="card-link dark">Ver horarios <span aria-hidden="true">↗</span></span></div></a><a class="simple-card reveal" href="/lacteos-artesanales"><div class="simple-card-body"><p class="eyebrow">Tradición lechera</p><h3>Lácteos artesanales</h3><p>Productos elaborados con leche de la finca para disfrutar aquí o llevar.</p><span class="card-link dark">Ver productos <span aria-hidden="true">↗</span></span></div></a></div></section>`;
}

function renderMeals() {
  return `${pageHero('Sabores', 'Desayunos y almuerzos.', 'Servicio de comidas bajo reservación para compartir durante tu visita a la finca.', ASSETS.eventTable, waButton('meals', 'Consultar comidas'))}<section class="section-pad narrow-section"><div class="schedule-card reveal"><p class="eyebrow">Horarios publicados</p><div class="schedule-row"><span>Desayunos</span><strong>Sábados y domingos<br>9:00 AM — 11:00 AM</strong></div><div class="schedule-row"><span>Almuerzos</span><strong>Sábados y domingos<br>1:00 PM — 3:00 PM</strong></div><p class="schedule-note">Disponibilidad y menú se confirman bajo reservación. El servicio puede variar según la fecha.</p>${waButton('meals', 'Consultar el servicio de comidas', 'button button-dark')}</div></section>`;
}

const DAIRY = [['Litro de leche', 'Q13'], ['Litro de crema', 'Q60'], ['Medio litro de crema', 'Q30'], ['Litro de yogurt', 'Q35'], ['Medio litro de yogurt', 'Q20'], ['Queso de capas · 1 lb', 'Q35']];
const EXTRAS = [['Libra de chocolate', 'Q20'], ['Paquete de longanizas · 8 unidades', 'Q35'], ['Marshmallows', 'Q20'], ['Ración de leña', 'Q20'], ['Bolsa de carbón · 3 lb', 'Q20']];

function priceGrid(items) { return `<div class="price-grid">${items.map(([name, price]) => `<div class="price-item"><span>${name}</span><strong>${price}</strong></div>`).join('')}</div>`; }

function renderDairy() {
  return `${pageHero('Tradición lechera', 'Lácteos artesanales.', 'Productos de Finca Las Nubes elaborados a partir de leche de la finca. Consulta disponibilidad antes de venir.', ASSETS.cabin, waButton('general', 'Consultar productos'))}<section class="section-pad page-section"><div class="section-heading reveal"><div><p class="eyebrow">Productos lácteos Finca Las Nubes</p><h2>Para disfrutar o llevar.</h2></div><p class="section-note">Precios publicados en el material actual de la finca. Confirma existencias y presentación por WhatsApp.</p></div>${priceGrid(DAIRY)}<div class="extras-block reveal"><p class="eyebrow">Extras</p>${priceGrid(EXTRAS)}</div><div class="dairy-note reveal"><p>Para productos para llevar, se recomienda solicitarlos antes de las 11:00 AM del día de salida.</p>${waButton('general', 'Consultar disponibilidad', 'button button-dark')}</div></section>`;
}

function renderStore() {
  const items = [
    ['Cabañas', 'Quédate entre las montañas.', '/cabanas', ASSETS.cabin],
    ['Camping', 'Vive la finca al aire libre.', '/camping', ASSETS.camping],
    ['Pase de día', 'Ven a pasar el día.', '/pase-de-dia', ASSETS.walk],
    ['Eventos', 'Consulta tu momento para compartir.', '/eventos', ASSETS.event],
    ['Lácteos artesanales', 'Productos para disfrutar o llevar.', '/lacteos-artesanales', ASSETS.cabin]
  ];
  return `${pageHero('Tienda', 'Todo empieza con una consulta.', 'Explora las experiencias y productos disponibles en Entre Nubes y Montañas. No hay compra automática: cada servicio se coordina directamente.', ASSETS.hero, waButton('general', 'Escribir por WhatsApp'))}<section class="section-pad page-section"><div class="store-grid">${items.map(([title, copy, href, image]) => `<a class="store-card reveal" href="${href}"><img src="${image}" alt="${title}" loading="lazy"><div><p class="eyebrow">Entre Nubes y Montañas</p><h3>${title}</h3><p>${copy}</p><span class="card-link dark">Consultar <span aria-hidden="true">↗</span></span></div></a>`).join('')}</div></section>`;
}

function renderLocation() {
  return `${pageHero('Cómo llegar', 'La ruta hacia Finca Las Nubes.', 'Estamos en San José Pinula. Consulta las indicaciones antes de salir y considera el tramo de terracería.', ASSETS.hero, arrowLink('#ruta', 'Ver dirección'))}<section id="ruta" class="section-pad location-page"><div class="address-card reveal"><p class="eyebrow">Ubicación</p><h2>Finca Las Nubes</h2><address>${BUSINESS.location.join('<br>')}</address><p class="route-alert"><strong>Importante:</strong> la ruta recomendada incluye aproximadamente 12 km de terracería. Vehículos muy bajos pueden tener dificultad.</p><p class="location-small">La finca está en un entorno rural. Consulta la ruta antes de salir para evitar desvíos y llegar con tranquilidad.</p><a class="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Finca+Las+Nubes+San+Jos%C3%A9+Pinula" target="_blank" rel="noreferrer">Abrir referencia en mapas <span aria-hidden="true">↗</span></a></div><div class="map-art large-map reveal"><div class="map-rings"></div><span class="map-road road-one"></span><span class="map-road road-two"></span><span class="map-label label-city">San José Pinula</span><span class="map-label label-finca"><i class="pin"></i> Finca Las Nubes</span></div></section><section class="section-pad soft-section"><div class="narrow-copy reveal"><p class="eyebrow">Horario público</p><h2>Planifica tu visita.</h2><p>La información pública de la finca indica atención los sábados y domingos de 9:00 AM a 5:00 PM. Cada experiencia puede tener un horario propio; confirma el tuyo al reservar.</p></div></section>`;
}

function ruleGroup(title, items) { return `<details class="rule-card reveal"><summary>${title}<span aria-hidden="true">+</span></summary><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul></details>`; }

function renderRules() {
  return `${pageHero('Reglamento y normas', 'Cuidar el lugar también es parte de la visita.', 'Estas normas ayudan a proteger la finca, ordenar la convivencia y cuidar la experiencia de todos.', ASSETS.hiking, arrowLink('#normas', 'Leer normas'))}<section id="normas" class="section-pad rules-page"><div class="rules-intro reveal"><p class="eyebrow">Antes de reservar</p><h2>Consulta las condiciones vigentes.</h2><p>El reglamento público de la finca resume las siguientes condiciones. Si tienes una duda puntual, consúltala directamente por WhatsApp.</p></div><div class="rule-grid">${ruleGroup('Generales de cabañas', ['La reserva solicita 50% anticipado y el resto al entregar las llaves.', 'La capacidad de cada cabaña no debe excederse. Colchones extra requieren autorización y tienen costo adicional.', 'El estacionamiento contempla 2 vehículos por cabaña; un vehículo extra tiene un cargo publicado de Q30.', 'El inventario y los daños se revisan al ingreso y salida; cualquier daño se cubre según su valor.', 'Se solicita entregar la cabaña limpia. El material público indica un cargo de Q200 por suciedad excesiva.', 'Check-in desde las 2:00 PM y check-out antes de las 12:00 PM.'])}${ruleGroup('Convivencia y cuidado', ['No se permiten mascotas dentro de las cabañas.', 'No fumar dentro de las cabañas, mover mobiliario ni utilizar la electricidad para fines distintos a los autorizados.', 'No se permiten bocinas o sistemas de sonido.', 'No dañar, extraer o alimentar flora y fauna; tampoco globos no biodegradables, pirotecnia ni drones sin autorización.', 'Las mascotas pueden acompañar visitas de día o camping, con correa y recogiendo sus desechos.', 'Clasifica correctamente la basura y evita plásticos de un solo uso.'])}${ruleGroup('Camping y eventos', ['En camping, el montaje es desde las 3:00 PM y el desmontaje antes de las 11:00 AM.', 'En eventos, respeta el horario de 9:00 AM a 4:30 PM, devuelve el mobiliario completo y deposita las cenizas únicamente en los lugares indicados.', 'Las fogatas solo pueden hacerse en áreas autorizadas. No se permiten bocinas ni alcohol en exceso.', 'El incumplimiento puede cancelar el servicio sin devolución y la administración puede solicitar el retiro.'])}${ruleGroup('Protección de la finca', ['No cortes las bromelias o gallitos: son plantas que alojan vida y varias especies dependen del agua que acumulan.', 'Si encuentras un gallito caído, colócalo en un árbol cercano o entrégalo en información para intentar salvarlo.', 'Existe un área especial de protección de aves donde está prohibido volar drones.'])}</div></section>`;
}

function renderContact() {
  return `${pageHero('Contacto y reservas', 'Hablemos de tu próxima visita.', 'Todos los servicios se realizan bajo reservación. Escríbenos y te ayudaremos a revisar disponibilidad, condiciones y ruta.', ASSETS.hero, waButton('general', 'Escribir por WhatsApp'))}<section class="section-pad contact-page"><div class="contact-layout"><div class="contact-copy reveal"><p class="eyebrow">Reserva directa</p><h2>Una conversación antes de venir.</h2><p>Cuéntanos qué experiencia te interesa y para qué fecha. La finca confirma cada solicitud directamente.</p><p class="contact-phone">${BUSINESS.displayPhone}</p><p class="contact-address">${BUSINESS.location.join('<br>')}</p></div><div class="contact-card reveal"><p class="eyebrow">Elige tu consulta</p><a href="${waUrl('general')}" data-whatsapp="general">Disponibilidad general <span>↗</span></a><a href="${waUrl('camping')}" data-whatsapp="camping">Camping <span>↗</span></a><a href="${waUrl('dayPass')}" data-whatsapp="dayPass">Pase de día <span>↗</span></a><a href="${waUrl('meals')}" data-whatsapp="meals">Comidas <span>↗</span></a><a href="${waUrl('events')}" data-whatsapp="events">Eventos <span>↗</span></a></div></div></section><section class="reservation section-pad"><p class="reservation-banner"><span class="dot"></span>TODOS LOS SERVICIOS SE REALIZAN BAJO RESERVACIÓN.</p><div class="reservation-head"><p class="eyebrow light">Te esperamos</p><h2>Consulta primero.</h2><p>La mejor visita es la que llega con información clara.</p></div></section>`;
}

const pageMap = {
  '/': renderHome,
  '/experiencias': renderExperiences,
  '/cabanas': renderCabins,
  '/camping': renderCamping,
  '/pase-de-dia': renderDayPass,
  '/actividades': renderActivities,
  '/eventos': renderEvents,
  '/sabores': renderFlavors,
  '/desayunos-almuerzos': renderMeals,
  '/lacteos-artesanales': renderDairy,
  '/tienda': renderStore,
  '/como-llegar': renderLocation,
  '/reglamento': renderRules,
  '/contacto': renderContact
};

for (const cabin of CABINS) pageMap[`/cabanas/${cabin.slug}`] = () => renderCabinDetail(cabin);

const titles = {
  '/': 'Entre Nubes y Montañas',
  '/experiencias': 'Experiencias | Entre Nubes y Montañas',
  '/cabanas': 'Cabañas | Entre Nubes y Montañas',
  '/camping': 'Camping | Entre Nubes y Montañas',
  '/pase-de-dia': 'Pase de día | Entre Nubes y Montañas',
  '/actividades': 'Actividades | Entre Nubes y Montañas',
  '/eventos': 'Eventos | Entre Nubes y Montañas',
  '/sabores': 'Sabores de la finca | Entre Nubes y Montañas',
  '/desayunos-almuerzos': 'Desayunos y almuerzos | Entre Nubes y Montañas',
  '/lacteos-artesanales': 'Lácteos artesanales | Entre Nubes y Montañas',
  '/tienda': 'Tienda | Entre Nubes y Montañas',
  '/como-llegar': 'Cómo llegar | Entre Nubes y Montañas',
  '/reglamento': 'Reglamento y normas | Entre Nubes y Montañas',
  '/contacto': 'Contacto y reservas | Entre Nubes y Montañas'
};

function renderNotFound() { return `${pageHero('Página no encontrada', 'Volvamos al camino.', 'La página que buscas no está disponible, pero la finca sí puede seguir explorándose.', ASSETS.hero, '<a class="button button-accent" href="/">Volver al inicio <span aria-hidden="true">↗</span></a>')}<section class="section-pad narrow-section"><div class="narrow-copy"><p class="eyebrow">404</p><h2>Prueba otra ruta.</h2>${arrowLink('/experiencias', 'Ver experiencias')}</div></section>`; }

function bindReveal() {
  document.querySelectorAll('.reveal').forEach((element, index) => element.style.setProperty('--reveal-delay', `${Math.min(index * 45, 360)}ms`));
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible')); return; }
  const observer = new IntersectionObserver((entries, obs) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function renderRoute() {
  const currentPath = path();
  document.title = titles[currentPath] || 'Entre Nubes y Montañas';
  document.querySelector('#app').innerHTML = (pageMap[currentPath] || renderNotFound)();
  document.body.classList.add('page-ready');
  bindReveal();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function setupInteractions() {
  document.addEventListener('click', (event) => {
    const dropdownTrigger = event.target.closest('.dropdown-trigger');
    if (dropdownTrigger) {
      const dropdown = dropdownTrigger.closest('.nav-dropdown');
      document.querySelectorAll('.nav-dropdown.is-open').forEach((item) => { if (item !== dropdown) item.classList.remove('is-open'); });
      dropdown.classList.toggle('is-open');
      dropdownTrigger.setAttribute('aria-expanded', dropdown.classList.contains('is-open'));
      return;
    }
    const whatsapp = event.target.closest('[data-whatsapp]');
    if (whatsapp) { whatsapp.href = waUrl(whatsapp.dataset.whatsapp || 'general'); return; }
    const link = event.target.closest('a[href]');
    if (!link || link.target === '_blank' || link.origin !== window.location.origin || link.hash) return;
    const href = link.pathname;
    if (!href || href === path()) { event.preventDefault(); return; }
    event.preventDefault();
    document.body.classList.add('page-leave');
    setTimeout(() => { window.history.pushState({}, '', href); document.body.classList.remove('page-leave'); renderRoute(); }, 180);
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-dropdown')) document.querySelectorAll('.nav-dropdown.is-open').forEach((item) => item.classList.remove('is-open'));
  });
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', open); });
  nav?.addEventListener('click', (event) => { if (event.target.closest('a')) { nav.classList.remove('is-open'); toggle?.setAttribute('aria-expanded', 'false'); } });
  window.addEventListener('scroll', () => document.querySelector('.site-header')?.classList.toggle('scrolled', window.scrollY > 30), { passive: true });
  window.addEventListener('popstate', renderRoute);
}

document.addEventListener('DOMContentLoaded', () => { setupInteractions(); renderRoute(); });
