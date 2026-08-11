// ==========================================================
// CONFIGURACIÓN DE FIREBASE
// ==========================================================
const firebaseConfig = {
  apiKey: "AIzaSyAz_OqatzQPJLl54EqIJejRM89BVEUrNYk",
  authDomain: "regalos-62bb9.firebaseapp.com",
  databaseURL: "https://regalos-62bb9-default-rtdb.firebaseio.com",
  projectId: "regalos-62bb9",
  storageBucket: "regalos-62bb9.firebasestorage.app",
  messagingSenderId: "1053038796358",
  appId: "1:1053038796358:web:0e26b6da8596b832e27447"
};

// Lista de regalos — edita nombres, descripciones y precios aquí
const GIFTS = [
  { id: "olla_essen", name: "Olla juego Essen", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "colchon_2plazas", name: "Colchón 2 plazas", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "licuadora_oster", name: "Licuadora Oster", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "waflera", name: "Waflera", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "batidora", name: "Batidora", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "plancha_vapor", name: "Plancha a vapor de pie", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "set_utensilio_parrilla", name: "Set utensilio para parrilla", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "microondas_oster", name: "Microondas Oster", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "airfryer_oster", name: "Airfryer Oster", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/20604136/freidora-de-aire-oster-4l-digital-con-ventana-y-revestimiento-diamondforce/20604136" },
  { id: "juego_sartenes", name: "Juego de sartenes", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/prod17500468/Set-x3-Sartenes-Ceramica-20-cm,-24-cm-y-30-cm/sku17860073" },
  { id: "juego_edredon", name: "Juego de edredón", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/prod17701049/edredon-estampado-roberta-allen/883022458" },
  { id: "juego_sabanas", name: "Juego de sábanas Premium", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/127777519/JUEGO-DE-SABANAS-2-PLAZAS/127777520" },
  { id: "lampara_decorativa_pie", name: "Lámpara decorativa de pie", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/115119868/lampara-de-pie-shelbys-1l-e27/115121736" },
  { id: "sanguchera", name: "Sanguchera", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "aspiradora", name: "Aspiradora", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/20856380/aspiradora-de-arrastre-2000w-vcc4580v3k-xzs/20856380" },
  { id: "juego_cubiertos", name: "Juego de cubiertos plata", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/881554754/juego-de-cubiertos-75-piezas-ridgewood/881554754" },
  { id: "olla_arrocera", name: "Olla arrocera Oster", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/152844249/arrocera-oster-15-tazas-3-en-1-con-sofrito-y-vaporera-antiadherente-diamondforce-ckstrc15dfblk/152844250" },
  { id: "cooler", name: "Cooler", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/113327710/Cooler-Klimber-Azul-52-Litros/113327711" },
  { id: "hervidor", name: "Hervidor Oster", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/153533411/hervidor-electrico-oster-bvstkt673ss-1-7l-acero-inoxidable-2200w-base-360/153533412" },
  { id: "mesa_noche", name: "Mesa de noche", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/146582803/velador-cottage-3c-taupe/146582814" },
  { id: "lampara_mesa_noche", name: "Lámpara para mesa de noche", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/138695368/lampara-de-mesa-calisto-beige/138695370" },
  { id: "mesa_centro", name: "Mesa de centro", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/132468719/set-x2-mesa-de-centro-redonda-tallin/132468743" },
  { id: "recibidor_sala", name: "Recibidor para sala", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "mesa_television", name: "Mesa para televisión", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/prod17390204/mesa-de-tv-new-oscar-65-con-panel/882947926" },
  { id: "cuadro_decorativo_a1", name: "Cuadro decorativo set A1", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/155495853/cuadro-abstracto-skugge-60-x-80-cm/155495854" },
  { id: "tetera", name: "Tetera", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/80098673/tetera-con-silbato-4l/80098673" },
  { id: "extractor", name: "Extractor", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/128978895/Extractor-de-jugos-Oster-boca-ancha-FPSTJE320S/128978896" },
  { id: "set_utensilio_cocina", name: "Set utensilio cocina", desc: "Espátulas y cucharones", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/154753392/set-de-cucharones-tramontina-multifuncional-acero-inoxidable-7-piezas/154753393" },
  { id: "reloj_decorativo_pared", name: "Reloj decorativo para pared", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "escritorio", name: "Escritorio", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/145371149/Escritorio-Con-Cajones-Marron-De-Madera-Para-Oficina/145371150" },
  { id: "perchero_ropa", name: "Perchero para colgar ropa moderno", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/113309194/perchero-de-pie-6-perchas/113309198" },
  { id: "fotolibro_boda", name: "Fotolibro de boda", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "aporte_refri", name: "Aporte para refrigeradora", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "aporte_mueble_sala", name: "Aporte para mueble de sala", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "smart_tv", name: "Smart TV", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/147783894/televisor-smart-tv-jvc-65-4k-qled-google-tv-65t6c/147783896" },
  { id: "juego_comedor_cocina", name: "Juego de comedor cocina", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/146582781/sillas-mesa/146582787" },
  { id: "alexa", name: "Alexa", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "set_maleta_viaje", name: "Set de maleta para viaje", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "tablet", name: "Tablet", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "cocina_empotrable_sole", name: "Cocina empotrable Sole", desc: "", price: "", buyUrl: "" },
  { id: "campana_sole", name: "Campana Sole", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "mueble_cocina", name: "Mueble para cocina", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "silla_escritorio", name: "Silla para escritorio", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "parrilla", name: "Parrilla", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/154478476/acero/154478477" },
  { id: "alfombra_sala", name: "Alfombra para sala", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/113316793/alfombra-rectangular-lotto-blocks/113316799" },
  { id: "cafetera_oster_moderna", name: "Cafetera Oster moderna", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/20247203/cafetera-programable-de-12-tazas-con-pantalla-tactil-oster/20247203" },
  { id: "vajilla_completa_moderna", name: "Vajilla completa moderna", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/124148629/Juego-de-vajilla-16-piezas-Anastasia-Corona/124148630" },
  { id: "juego_copas_vino", name: "Juego de copas de vino", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "procesadora_inmersion", name: "Procesadora de inmersión", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "set_tabla_picar_premium", name: "Set tabla de picar premium", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "maceteros_decorativos", name: "Maceteros decorativos", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "manteles_servilletas_tela", name: "Manteles y servilletas de tela", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "set_yoga", name: "Set de yoga", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "caja_herramientas", name: "Caja de herramientas", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "set_herramientas", name: "Set de herramientas", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "bicicleta_pareja", name: "Bicicleta para pareja", desc: "", price: "", buyUrl: "https://www.falabella.com.pe/falabella-pe/product/12345" },
  { id: "set_jardineria", name: "Set de jardinería", desc: "", price: "" },
  { id: "thermo_oster", name: "Thermo Oster", desc: "", price: "" },
  { id: "juego_cuchillos", name: "Juego de cuchillos", desc: "", price: "" },
  { id: "alfombrita", name: "Alfombrita", desc: "", price: "" }
];

// ==========================================================
// No es necesario editar nada debajo de esta línea
// ==========================================================
let db = null;
let currentReserveId = null;

function initFirebase() {
  if (!window.firebase) {
    document.getElementById('status').textContent =
      'Error: no se pudo cargar Firebase. Revisa tu conexión.';
    return false;
  }
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  db = firebase.database();
  return true;
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

async function loadItems() {
  if (!db && !initFirebase()) return;
  document.getElementById('status').textContent = 'Cargando...';
  const container = document.getElementById('list');
  container.innerHTML = '';

  for (const gift of GIFTS) {
    let reservedBy = null;
    try {
      const snap = await db.ref('regalos/' + gift.id).get();
      if (snap.exists()) reservedBy = snap.val().name;
    } catch (e) {
      console.error(e);
    }

    const buyUrl = gift.buyUrl ||
      ('https://www.google.com/search?tbm=shop&q=' + encodeURIComponent(gift.name + ' Perú'));

    const item = document.createElement('div');
    item.className = 'item' + (reservedBy ? ' taken' : '');
    item.innerHTML = `
      <div class="info">
        <h3>${escapeHtml(gift.name)}</h3>
        <p>${escapeHtml(gift.desc)}</p>
        <span class="price">${escapeHtml(gift.price)}</span>
        <a class="buy-link" href="${buyUrl}" target="_blank" rel="noopener">🛒 Dónde comprar</a>
      </div>
      <div class="action">
        ${reservedBy
          ? `<span class="taken-badge">Reservado por ${escapeHtml(reservedBy)}</span>`
          : `<button class="reserve" data-id="${gift.id}">Reservar</button>`
        }
      </div>
    `;
    container.appendChild(item);
  }

  container.querySelectorAll('button.reserve').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.id));
  });

  document.getElementById('status').textContent =
    'Lista actualizada · ' + new Date().toLocaleTimeString('es-PE');
}

function openModal(id) {
  currentReserveId = id;
  document.getElementById('guestName').value = '';
  document.getElementById('modalBg').classList.add('show');
}

function closeModal() {
  document.getElementById('modalBg').classList.remove('show');
  currentReserveId = null;
}

async function confirmReserve() {
  const name = document.getElementById('guestName').value.trim();
  if (!name) { alert('Por favor ingresa tu nombre'); return; }

  try {
    const ref = db.ref('regalos/' + currentReserveId);
    // transaction evita que dos personas reserven el mismo regalo a la vez
    const result = await ref.transaction(current => {
      if (current) return; // ya reservado, no lo toca
      return { name, date: new Date().toISOString() };
    });

    if (!result.committed) {
      alert('Este regalo acaba de ser reservado por otra persona. Elige otra opción.');
    }
    closeModal();
    loadItems();
  } catch (e) {
    console.error(e);
    alert('Hubo un problema al reservar. Intenta de nuevo.');
  }
}

document.addEventListener('DOMContentLoaded', loadItems);
