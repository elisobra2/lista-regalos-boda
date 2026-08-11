// ==========================================================
// CONFIGURACIÓN DE FIREBASE — reemplaza con tus propios datos
// (ver PASO 3 de las instrucciones)
// ==========================================================
const firebaseConfig = {
  apiKey: "AIzaSyAz_OqatzQPJLl54EqIJejRM89BVEUrNYk",
  authDomain: "regalos-62bb9.firebaseapp.com",
  databaseURL: "https://regalos-62bb9-default-rtdb.firebaseio.com/",
  projectId: "regalos-62bb9",
  storageBucket: "regalos-62bb9.firebasestorage.app",
  messagingSenderId: "1053038796358",
  appId: "1:1053038796358:web:0e26b6da8596b832e27447"
};

// Lista de regalos — edita nombres, descripciones y precios aquí
const GIFTS = [
  { id: "olla_essen", name: "Olla juego Essen", desc: "", price: "" },
  { id: "colchon_2plazas", name: "Colchón 2 plazas", desc: "", price: "" },
  { id: "licuadora_oster", name: "Licuadora Oster", desc: "", price: "" },
  { id: "waflera", name: "Waflera", desc: "", price: "" },
  { id: "batidora", name: "Batidora", desc: "", price: "" },
  { id: "plancha_vapor", name: "Plancha a vapor de pie", desc: "", price: "" },
  { id: "set_utensilio_parrilla", name: "Set utensilio para parrilla", desc: "", price: "" },
  { id: "microondas_oster", name: "Microondas Oster", desc: "", price: "" },
  { id: "airfryer_oster", name: "Airfryer Oster", desc: "", price: "" },
  { id: "juego_sartenes", name: "Juego de sartenes", desc: "", price: "" },
  { id: "juego_edredon", name: "Juego de edredón", desc: "", price: "" },
  { id: "juego_sabanas_premium", name: "Juego de sábanas Premium", desc: "", price: "" },
  { id: "lampara_decorativa_pie", name: "Lámpara decorativa de pie", desc: "", price: "" },
  { id: "sanguchera", name: "Sanguchera", desc: "", price: "" },
  { id: "aspiradora", name: "Aspiradora", desc: "", price: "" },
  { id: "juego_cubiertos_plata", name: "Juego de cubiertos plata", desc: "", price: "" },
  { id: "olla_arrocera_oster", name: "Olla arrocera Oster", desc: "", price: "" },
  { id: "cooler", name: "Cooler", desc: "", price: "" },
  { id: "hervidor_oster", name: "Hervidor Oster", desc: "", price: "" },
  { id: "mesa_noche", name: "Mesa de noche", desc: "", price: "" },
  { id: "lampara_mesa_noche", name: "Lámpara para mesa de noche", desc: "", price: "" },
  { id: "mesa_centro", name: "Mesa de centro", desc: "", price: "" },
  { id: "recibidor_sala", name: "Recibidor para sala", desc: "", price: "" },
  { id: "mesa_television", name: "Mesa para televisión", desc: "", price: "" },
  { id: "cuadro_decorativo_a1", name: "Cuadro decorativo set A1", desc: "", price: "" },
  { id: "tetera", name: "Tetera", desc: "", price: "" },
  { id: "extractor", name: "Extractor", desc: "", price: "" },
  { id: "set_utensilio_cocina", name: "Set utensilio cocina", desc: "Espátulas y cucharones", price: "" },
  { id: "reloj_decorativo_pared", name: "Reloj decorativo para pared", desc: "", price: "" },
  { id: "escritorio", name: "Escritorio", desc: "", price: "" },
  { id: "perchero_ropa", name: "Perchero para colgar ropa moderno", desc: "", price: "" },
  { id: "fotolibro_boda", name: "Fotolibro de boda", desc: "", price: "" },
  { id: "aporte_refri", name: "Aporte para refrigeradora", desc: "", price: "" },
  { id: "aporte_mueble_sala", name: "Aporte para mueble de sala", desc: "", price: "" },
  { id: "smart_tv", name: "Smart TV", desc: "", price: "" },
  { id: "juego_comedor_cocina", name: "Juego de comedor cocina", desc: "", price: "" },
  { id: "alexa", name: "Alexa", desc: "", price: "" },
  { id: "set_maleta_viaje", name: "Set de maleta para viaje", desc: "", price: "" },
  { id: "tablet", name: "Tablet", desc: "", price: "" },
  { id: "cocina_empotrable_sole", name: "Cocina empotrable Sole", desc: "", price: "" },
  { id: "campana_sole", name: "Campana Sole", desc: "", price: "" },
  { id: "mueble_cocina", name: "Mueble para cocina", desc: "", price: "" },
  { id: "silla_escritorio", name: "Silla para escritorio", desc: "", price: "" },
  { id: "parrilla", name: "Parrilla", desc: "", price: "" },
  { id: "alfombra_sala", name: "Alfombra para sala", desc: "", price: "" },
  { id: "cafetera_oster_moderna", name: "Cafetera Oster moderna", desc: "", price: "" },
  { id: "vajilla_completa_moderna", name: "Vajilla completa moderna", desc: "", price: "" },
  { id: "juego_copas_vino", name: "Juego de copas de vino", desc: "", price: "" },
  { id: "procesadora_inmersion", name: "Procesadora de inmersión", desc: "", price: "" },
  { id: "set_tabla_picar_premium", name: "Set tabla de picar premium", desc: "", price: "" },
  { id: "maceteros_decorativos", name: "Maceteros decorativos", desc: "", price: "" },
  { id: "manteles_servilletas_tela", name: "Manteles y servilletas de tela", desc: "", price: "" },
  { id: "set_yoga", name: "Set de yoga", desc: "", price: "" },
  { id: "caja_herramientas", name: "Caja de herramientas", desc: "", price: "" },
  { id: "set_herramientas", name: "Set de herramientas", desc: "", price: "" },
  { id: "bicicleta_pareja", name: "Bicicleta para pareja", desc: "", price: "" },
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

    const item = document.createElement('div');
    item.className = 'item' + (reservedBy ? ' taken' : '');
    item.innerHTML = `
      <div class="info">
        <h3>${escapeHtml(gift.name)}</h3>
        <p>${escapeHtml(gift.desc)}</p>
        <span class="price">${escapeHtml(gift.price)}</span>
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
