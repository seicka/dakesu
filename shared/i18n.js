// Motor Unificado i18n & Tema (Oscuro / Claro) para tools.dakesu.net
// Estándar Canónico SeiqOS / MabelCox

const i18nData = {
  es: {
    site_title: "Herramientas · Dakesu",
    site_name: "Dakesu Tools",
    nav_novels: "Novelas",
    nav_tools_menu: "Herramientas",
    
    // Nombres Limpios de Apps
    tool1_name: "Generador de Nombres",
    tool2_name: "Calculadora de Lectura",
    tool3_name: "Reinos de Cultivo",
    tool4_name: "Diccionario Daoísta",
    tool5_name: "Conversor de Monedas",
    tool6_name: "Generador de Sectas",

    // App Asian Names
    an_title: "Generador de Nombres Asiáticos",
    an_desc: "Nombres y caracteres auténticos para novelas, ficción y avatares.",
    an_culture: "Cultura",
    an_archetype: "Arquetipo",
    an_count: "Cantidad",
    an_btn: "Generar",
    an_copy: "Copiar",
    an_copied: "¡Copiado!",
    an_jp: "Japonés (Kanji)",
    an_kr: "Coreano (Hangul)",
    an_cn: "Chino (Wuxia / Cultivo)",
    an_in: "Hindi (Védico)",
    an_vn: "Vietnamita (Hán)",
    an_th: "Tailandés",
    an_all: "Todos",
    an_male: "Masculino",
    an_female: "Femenino",
    an_fantasy: "Fantasía / Soberano",
    an_mode_desc: "Generador 100% libre de servidor y sin consumo de tokens.",
    an_filter_ph: "Filtrar por significado, tag o elemento (ej. Dragón, Fuego, Loto)...",
    pwa_install_btn: "Instalar App",
    pwa_install_title: "Instalar en móvil o escritorio como acceso directo rápido.",

    // Reading Speed
    rs_title: "Calculadora de Ritmo de Lectura",
    rs_chapters: "Capítulos",
    rs_wpc: "Palabras por capítulo",
    rs_wpm: "Velocidad (WPM)",
    rs_daily: "Horas al día",
    rs_result_time: "Tiempo total estimado:",
    rs_days: "Días",

    // Cultivation
    cr_title: "Reinos de Cultivo Xianxia",
    cr_all: "Todos",
    cr_mortal: "Mortal",
    cr_immortal: "Inmortal",
    cr_divine: "Divino",

    // Currency
    cc_title: "Conversor de Monedas",
    cc_amount: "Cantidad",
    cc_copper: "Cobre",
    cc_silver: "Plata",
    cc_gold: "Oro",
    cc_stones: "Piedras de Espíritu",

    // Daoist
    dg_title: "Glosario de Términos Daoístas",
    dg_search: "Buscar concepto...",

    // Sect
    sg_title: "Generador de Sectas",
    sg_faction: "Alineación",
    sg_btn: "Generar",

    footer_copy: "© 2026 Dakesu. Ecosistema de Ficción y Novelas Orientales."
  },
  en: {
    site_title: "Tools · Dakesu",
    site_name: "Dakesu Tools",
    nav_novels: "Novels",
    nav_tools_menu: "Tools",
    
    // Clean App Names
    tool1_name: "Asian Name Generator",
    tool2_name: "Reading Speed Calculator",
    tool3_name: "Cultivation Realms",
    tool4_name: "Daoist Glossary",
    tool5_name: "Currency Converter",
    tool6_name: "Sect Generator",

    // App Asian Names
    an_title: "Asian Name Generator",
    an_desc: "Authentic names and characters for fiction, novels, and avatars.",
    an_culture: "Culture",
    an_archetype: "Archetype",
    an_count: "Quantity",
    an_btn: "Generate",
    an_copy: "Copy",
    an_copied: "Copied!",
    an_jp: "Japanese (Kanji)",
    an_kr: "Korean (Hangul)",
    an_cn: "Chinese (Wuxia / Cultivation)",
    an_in: "Hindi (Vedic)",
    an_vn: "Vietnamese (Hán)",
    an_th: "Thai",
    an_all: "All",
    an_male: "Male",
    an_female: "Female",
    an_mode_desc: "100% client-side zero-token generation.",
    an_filter_ph: "Filter by meaning, tag or element (e.g. Dragon, Fire, Lotus)...",
    pwa_install_btn: "Install App",
    pwa_install_title: "Install on mobile or desktop as a quick shortcut.",

    // Reading Speed
    rs_title: "Reading Speed Calculator",
    rs_chapters: "Chapters",
    rs_wpc: "Words per chapter",
    rs_wpm: "Speed (WPM)",
    rs_daily: "Hours per day",
    rs_result_time: "Estimated completion time:",
    rs_days: "Days",

    // Cultivation
    cr_title: "Xianxia Cultivation Realms",
    cr_all: "All",
    cr_mortal: "Mortal",
    cr_immortal: "Immortal",
    cr_divine: "Divine",

    // Currency
    cc_title: "Novel Currency Converter",
    cc_amount: "Amount",
    cc_copper: "Copper",
    cc_silver: "Silver",
    cc_gold: "Gold",
    cc_stones: "Spirit Stones",

    // Daoist
    dg_title: "Daoist Concepts Glossary",
    dg_search: "Search concept...",

    // Sect
    sg_title: "Ancient Sect Generator",
    sg_faction: "Alignment",
    sg_btn: "Generate",

    footer_copy: "© 2026 Dakesu. Eastern Fiction & Novel Ecosystem."
  }
};

// ========================================== GESTOR DE IDIOMA
let currentLang = localStorage.getItem('dakesu_lang') || (navigator.language?.startsWith('en') ? 'en' : 'es');

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('dakesu_lang', lang);
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang] && i18nData[lang][key]) {
      el.textContent = i18nData[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (i18nData[lang] && i18nData[lang][key]) {
      el.setAttribute('placeholder', i18nData[lang][key]);
    }
  });

  const langLabel = document.getElementById('langToggleLabel');
  if (langLabel) {
    langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
  }

  window.dispatchEvent(new CustomEvent('dakesu:langchange', { detail: { lang } }));
}

function toggleLanguage() {
  const nextLang = currentLang === 'es' ? 'en' : 'es';
  setLanguage(nextLang);
}

// ========================================== GESTOR DE TEMA (DARK / LIGHT)
let currentTheme = localStorage.getItem('dakesu_theme') || 'dark';

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('dakesu_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  const themeToggle = document.getElementById('themeToggle');

  if (theme === 'dark') {
    if (sunIcon) sunIcon.style.display = 'block';
    if (moonIcon) moonIcon.style.display = 'none';
    if (themeToggle) themeToggle.setAttribute('title', currentLang === 'es' ? 'Cambiar a modo claro' : 'Switch to light mode');
  } else {
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'block';
    if (themeToggle) themeToggle.setAttribute('title', currentLang === 'es' ? 'Cambiar a modo oscuro' : 'Switch to dark mode');
  }
}

function toggleTheme() {
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
}

// ========================================== INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  applyTheme(currentTheme);

  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.addEventListener('click', toggleLanguage);

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Manejo de dropdown de herramientas si existe
  const navToolsBtn = document.getElementById('toolsMenuBtn');
  const navToolsDropdown = document.getElementById('toolsDropdown');
  if (navToolsBtn && navToolsDropdown) {
    navToolsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navToolsDropdown.classList.toggle('open');
    });
    document.addEventListener('click', () => {
      navToolsDropdown.classList.remove('open');
    });
  }

  // Registrar Service Worker para soporte PWA (Instalar en móvil)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  // Soporte de Instalación Nativa (PWA en Android / iPhone / Escritorio)
  let deferredPrompt;
  const pwaInstallBtns = document.querySelectorAll('.pwa-install-btn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    pwaInstallBtns.forEach(btn => {
      btn.style.display = 'inline-flex';
      btn.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          pwaInstallBtns.forEach(b => b.style.display = 'none');
        }
        deferredPrompt = null;
      });
    });
  });

  // Si ya está instalada o en standalone
  if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    pwaInstallBtns.forEach(b => b.style.display = 'none');
  }
});
