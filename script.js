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
  { id: "Juego_de_Ollas", name: "Juego de Ollas", desc: "", price: "", buyUrl: "" },
  { id: "colchon_2plazas", name: "Colchón 2 plazas", desc: "", price: "", buyUrl: "" },
  { id: "licuadora", name: "Licuadora", desc: "", price: "", buyUrl: "" },
  { id: "waflera", name: "Waflera", desc: "", price: "", buyUrl: "" },
  { id: "batidora", name: "Batidora", desc: "", price: "", buyUrl: "" },
  { id: "plancha_vapor_de_pie", name: "Plancha a vapor de pie", desc: "", price: "", buyUrl: "" },
  { id: "set_utensilio_parrilla", name: "Set utensilio para parrilla", desc: "", price: "", buyUrl: "" },
  { id: "microondas", name: "Microondas", desc: "", price: "", buyUrl: "" },
  { id: "freidora_de_aire", name: "Freidora de aire", desc: "", price: "", buyUrl: "" },
  { id: "juego_sartenes", name: "Juego de sartenes", desc: "", price: "", buyUrl: "" },
  { id: "juego_edredon", name: "Juego de edredón", desc: "", price: "", buyUrl: "" },
  { id: "juego_sabanas", name: "Juego de sábanas", desc: "", price: "", buyUrl: "" },
  { id: "lampara_decorativa_pie", name: "Lámpara decorativa de pie", desc: "", price: "", buyUrl: "" },
  { id: "sanguchera", name: "Sanguchera", desc: "", price: "", buyUrl: "" },
  { id: "aspiradora", name: "Aspiradora", desc: "", price: "", buyUrl: "" },
  { id: "juego_cubiertos", name: "Juego de cubiertos", desc: "", price: "", buyUrl: "" },
  { id: "olla_arrocera", name: "Olla arrocera", desc: "", price: "", buyUrl: "" },
  { id: "cooler", name: "Cooler", desc: "", price: "", buyUrl: "" },
  { id: "hervidora", name: "Hervidora", desc: "", price: "", buyUrl: "" },
  { id: "mesa_noche", name: "Mesa de noche", desc: "", price: "", buyUrl: "" },
  { id: "lampara_mesa_noche", name: "Lámpara para mesa de noche", desc: "", price: "", buyUrl: "" },
  { id: "mesa_centro", name: "Mesa de centro", desc: "", price: "", buyUrl: "" },
  { id: "recibidor_sala", name: "Recibidor para sala", desc: "", price: "", buyUrl: "" },
  { id: "mesa_television", name: "Mesa para televisión", desc: "", price: "", buyUrl: "" },
  { id: "cuadro_decorativo", name: "Cuadro decorativo set", desc: "", price: "", buyUrl: "" },
  { id: "tetera", name: "Tetera", desc: "", price: "", buyUrl: "" },
  { id: "extractor_de_jugos", name: "Extractor de jugos", desc: "", price: "", buyUrl: "" },
  { id: "set_utensilio_cocina", name: "Set utensilio cocina", desc: "Espátulas y cucharones", price: "", buyUrl: "" },
  { id: "reloj_decorativo_pared", name: "Reloj decorativo para pared", desc: "", price: "", buyUrl: "" },
  { id: "mesa_escritorio", name: "Escritorio", desc: "", price: "", buyUrl: "" },
  { id: "perchero_ropa", name: "Perchero para colgar ropa", desc: "", price: "", buyUrl: "" },
  { id: "fotolibro_boda", name: "Fotolibro de boda", desc: "", price: "", buyUrl: "" },
  { id: "refrieradora", name: "Aporte para refrigeradora", desc: "", price: "", buyUrl: "" },
  { id: "mueble_de_sala", name: "Aporte para mueble de sala", desc: "", price: "", buyUrl: "" },
  { id: "televisor_smart_tv", name: "Aporte de televisor", desc: "", price: "", buyUrl: "" },
  { id: "juego_comedor_cocina", name: "Juego de comedor cocina", desc: "", price: "", buyUrl: "" },
  { id: "alexa", name: "Alexa Echo Dot", desc: "", price: "", buyUrl: "" },
  { id: "set_maleta_viaje", name: "Set de maleta para viaje", desc: "", price: "", buyUrl: "" },
  { id: "tablet_xiaomi", name: "Tablet Xiaomi", desc: "", price: "", buyUrl: "" },
  { id: "cocina_empotrable", name: "Aporte para cocina", desc: "", price: "", buyUrl: "" },
  { id: "campana_de_cocina", name: "Campana de cocina", desc: "", price: "", buyUrl: "" },
  { id: "mueble_cocina", name: "Mueble para cocina", desc: "", price: "", buyUrl: "" },
  { id: "silla_escritorio", name: "Silla para escritorio", desc: "", price: "", buyUrl: "" },
  { id: "parrilla", name: "Parrilla", desc: "", price: "", buyUrl: "" },
  { id: "alfombra_sala", name: "Alfombra para sala", desc: "", price: "", buyUrl: "" },
  { id: "cafetera", name: "Cafetera", desc: "", price: "", buyUrl: "" },
  { id: "vajilla_completa_moderna", name: "Juego de vajilla", desc: "", price: "", buyUrl: "" },
  { id: "juego_copas_vino", name: "Juego de copas de vino", desc: "", price: "", buyUrl: "" },
  { id: "procesadora_inmersion", name: "Procesadora de inmersión", desc: "", price: "", buyUrl: "" },
  { id: "set_tabla_picar", name: "Set tabla de picar", desc: "", price: "", buyUrl: "" },
  { id: "maceteros_decorativos", name: "Maceteros decorativos", desc: "", price: "", buyUrl: "" },
  { id: "manteles_servilletas_tela", name: "Manteles y servilletas de tela", desc: "", price: "", buyUrl: "" },
  { id: "set_yoga", name: "Set de yoga", desc: "", price: "", buyUrl: "" },
  { id: "caja_herramientas", name: "Caja de herramientas", desc: "", price: "", buyUrl: "" },
  { id: "set_herramientas", name: "Set de herramientas", desc: "", price: "", buyUrl: "" },
  { id: "bicicleta_pareja", name: "Bicicleta para pareja", desc: "", price: "", buyUrl: "" },
  { id: "set_jardineria", name: "Set de jardinería", desc: "", price: "", buyUrl: "" },
  { id: "thermo", name: "Thermo", desc: "", price: "", buyUrl: "" },
  { id: "juego_cuchillos", name: "Juego de cuchillos", desc: "", price: "", buyUrl: "" },
  { id: "aporte_luna_miel", name: "Aporte para luna de miel", desc: "", price: "", buyUrl: "" },
  { id: "aporte_departamento", name: "Aporte para el departamento", desc: "", price: "", buyUrl: "" }
];

// ==========================================================
// No es necesario editar nada debajo de esta línea
// ==========================================================
let db = null;
let currentReserveId = null;
let currentIsAporte = false;

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

function isAporte(gift) {
  return gift.name.toLowerCase().startsWith('aporte');
}

async function loadItems() {
  if (!db && !initFirebase()) return;
  document.getElementById('status').textContent = 'Cargando...';
  const container = document.getElementById('list');
  container.innerHTML = '';

  for (const gift of GIFTS) {
    const buyUrl = gift.buyUrl ||
      ('https://www.google.com/search?tbm=shop&q=' + encodeURIComponent(gift.name + ' Perú'));

    const item = document.createElement('div');

    if (isAporte(gift)) {
      // ---- Regalo tipo "aporte": varios invitados pueden contribuir ----
      let contributions = [];
      try {
        const snap = await db.ref('aportes/' + gift.id).get();
        if (snap.exists()) {
          contributions = Object.values(snap.val());
        }
      } catch (e) {
        console.error(e);
      }

      const total = contributions.reduce((sum, c) => sum + (parseFloat(c.amount) || 0), 0);
      const listHtml = contributions.length
        ? `<ul class="aporte-list">${contributions.map(c =>
            `<li>${escapeHtml(c.name)} — S/ ${escapeHtml(String(c.amount))}</li>`
          ).join('')}</ul>`
        : `<p class="aporte-empty">Sé el primero en aportar</p>`;

      item.className = 'item aporte-item';
      item.innerHTML = `
        <div class="info" style="flex:1;">
          <h3>${escapeHtml(gift.name)}</h3>
          <p>${escapeHtml(gift.desc)}</p>
          ${contributions.length ? `<span class="price">Total aportado: S/ ${total}</span>` : ''}
          <a class="buy-link" href="${buyUrl}" target="_blank" rel="noopener">🛒 Dónde comprar</a>
          ${listHtml}
        </div>
        <div class="action">
          <button class="reserve aportar-btn" data-id="${gift.id}">Aportar</button>
        </div>
      `;
    } else {
      // ---- Regalo normal: se bloquea para un solo invitado ----
      let reservedBy = null;
      try {
        const snap = await db.ref('regalos/' + gift.id).get();
        if (snap.exists()) reservedBy = snap.val().name;
      } catch (e) {
        console.error(e);
      }

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
    }

    container.appendChild(item);
  }

  container.querySelectorAll('button.reserve:not(.aportar-btn)').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.id, false));
  });
  container.querySelectorAll('button.aportar-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.id, true));
  });

  document.getElementById('status').textContent =
    'Lista actualizada · ' + new Date().toLocaleTimeString('es-PE');
}

function openModal(id, aporteMode) {
  currentReserveId = id;
  currentIsAporte = aporteMode;
  document.getElementById('guestName').value = '';
  document.getElementById('guestAmount').value = '';
  document.getElementById('amountField').style.display = aporteMode ? 'block' : 'none';
  document.getElementById('modalTitle').textContent = aporteMode ? 'Hacer un aporte' : 'Reservar regalo';
  document.getElementById('modalBg').classList.add('show');
}

function closeModal() {
  document.getElementById('modalBg').classList.remove('show');
  currentReserveId = null;
  currentIsAporte = false;
}

async function confirmReserve() {
  const name = document.getElementById('guestName').value.trim();
  if (!name) { alert('Por favor ingresa tu nombre'); return; }

  if (currentIsAporte) {
    const amount = parseFloat(document.getElementById('guestAmount').value);
    if (!amount || amount <= 0) { alert('Ingresa un monto válido'); return; }

    try {
      await db.ref('aportes/' + currentReserveId).push({
        name, amount, date: new Date().toISOString()
      });
      closeModal();
      loadItems();
    } catch (e) {
      console.error(e);
      alert('Hubo un problema al registrar tu aporte. Intenta de nuevo.');
    }
    return;
  }

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
