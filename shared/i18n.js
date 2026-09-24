// i18n Dictionary Engine para tools.dakesu.net
// Soporta ES (Español) y EN (English) con persistencia en localStorage

const i18nData = {
  es: {
    site_title: "Herramientas y Recursos para Lectores y Creadores | Dakesu",
    site_tagline: "SUITE CLIENT-SIDE",
    nav_novels: "Leer Novelas",
    nav_portal: "Portal Principal",
    hero_title: "Utilidades para Lectores y Autores de Fantasía Asiática",
    hero_desc: "Herramientas 100% privadas ejecutadas en tu navegador. Cero registros obligatorios, cero cookies de rastreo y exportación directa en un clic.",
    
    // Tools Badges & Types
    type_generator: "GENERADOR",
    type_utility: "UTILIDAD",
    type_reference: "REFERENCIA",
    status_coming_soon: "PRÓXIMAMENTE",
    status_in_dev: "En desarrollo",
    open_tool: "Abrir herramienta",

    // Tool 1: Asian Names
    tool1_title: "Generador de Nombres Asiáticos",
    tool1_desc: "Nombres en Kanji japonés con lectura furigana, Hangul coreano, Wuxia/Xianxia de cultivo taoísta y Devanagari con significado fonético exacto.",

    // Tool 2: Reading Calculator
    tool2_title: "Calculadora de Ritmo de Lectura Wuxia",
    tool2_desc: "Calcula días y horas para terminar novelas masivas de 2.000+ capítulos según tu velocidad WPM y tiempo diario disponible.",

    // Tool 3: Cultivation Realms
    tool3_title: "Glosario y Reinos de Cultivo Xianxia",
    tool3_desc: "Tabla comparativa canónica: Condensación de Qi, Establecimiento de Fundación, Núcleo Dorado, Alma Naciente y Ascensión Celestial.",

    // Tool 4: Hanzi/Pinyin Glossary
    tool4_title: "Diccionario de Términos Daoístas y Marciales",
    tool4_desc: "Guía rápida de conceptos intraducibles: Dao, Dantian, Tribulación Celestial, Cara (Mianzi) y Píldoras Espirituales con pronunciación Pinyin.",

    // Tool 5: Currency Converter
    tool5_title: "Conversor de Monedas de Novelas Fantásticas",
    tool5_desc: "Convierte entre Monedas de Cobre, Lingotes de Plata, Oro y Piedras de Espíritu (Bajo, Medio y Alto Grado).",

    // Tool 6: Sect Name Generator
    tool6_title: "Generador de Sectas y Clanes Antiguos",
    tool6_desc: "Nombres para sectas ortodoxas, demoníacas, pabellones mercantiles y clanes ermitaños con lemas y elementos marciales.",

    // House Banner
    banner_tag: "BIBLIOTECA OFICIAL",
    banner_title: "¿Buscas algo nuevo que leer?",
    banner_desc: "Explora más de 50 novelas ligeras y webnovels asiáticas traducidas con formato limpio y lectura inmersiva sin publicidad invasiva.",
    banner_btn: "Ir a Dakesu.net",

    // Footer
    footer_copy: "© 2026 Dakesu. Herramientas de código abierto ejecutadas en el cliente.",

    // Asian Names App Specific
    an_title: "Generador de Nombres Asiáticos",
    an_subtitle: "Crea identidades verosímiles para personajes de ficción, novelas o avatares con significado original y escritura auténtica.",
    an_culture: "Cultura / Sistema",
    an_archetype: "Arquetipo / Género",
    an_count: "Cantidad",
    an_btn: "Generar Nombres",
    an_copy: "Copiar",
    an_copied: "¡Copiado!",
    an_jp: "Japonés (Kanji + Furigana)",
    an_kr: "Coreano (Hangul + Hanja)",
    an_cn: "Chino Wuxia / Cultivo Taoísta",
    an_in: "Hindi / Védico (Devanagari)",
    an_all: "Cualquiera / Místico",
    an_male: "Masculino / Marcial",
    an_female: "Femenino / Sereno",
    an_novel_cta: "¿Inspirándote para escribir? Lee novelas de cultivo en Dakesu."
  },
  en: {
    site_title: "Tools & Resources for Readers and Creators | Dakesu",
    site_tagline: "CLIENT-SIDE SUITE",
    nav_novels: "Read Novels",
    nav_portal: "Main Portal",
    hero_title: "Utilities for Readers and Authors of Asian Fantasy",
    hero_desc: "100% private tools running directly in your browser. Zero mandatory registrations, zero tracking cookies, and one-click export.",
    
    // Tools Badges & Types
    type_generator: "GENERATOR",
    type_utility: "UTILITY",
    type_reference: "REFERENCE",
    status_coming_soon: "COMING SOON",
    status_in_dev: "In development",
    open_tool: "Open tool",

    // Tool 1: Asian Names
    tool1_title: "Asian Name Generator",
    tool1_desc: "Japanese names in Kanji with furigana readings, Korean Hangul, Chinese Wuxia/Xianxia Daoist cultivation, and Devanagari with etymological meaning.",

    // Tool 2: Reading Calculator
    tool2_title: "Wuxia Reading Speed Calculator",
    tool2_desc: "Estimate days and hours needed to finish massive 2,000+ chapter webnovels based on your reading WPM and daily available time.",

    // Tool 3: Cultivation Realms
    tool3_title: "Xianxia Cultivation Realms Guide",
    tool3_desc: "Canonical progression chart: Qi Condensation, Foundation Establishment, Core Formation, Nascent Soul, and Heavenly Ascension.",

    // Tool 4: Hanzi/Pinyin Glossary
    tool4_title: "Daoist & Martial Arts Terminology Glossary",
    tool4_desc: "Quick reference for untranslatable concepts: Dao, Dantian, Heavenly Tribulation, Face (Mianzi), and Spirit Pills with Pinyin guide.",

    // Tool 5: Currency Converter
    tool5_title: "Fantasy Novel Currency Converter",
    tool5_desc: "Exchange rates between Copper Coins, Silver Taels, Gold Ingots, and Spirit Stones (Low, Mid, and High Grade).",

    // Tool 6: Sect Name Generator
    tool6_title: "Ancient Sect & Clan Generator",
    tool6_desc: "Authentic names for righteous sects, demonic factions, merchant pavilions, and hermit clans with martial mottos.",

    // House Banner
    banner_tag: "OFFICIAL LIBRARY",
    banner_title: "Looking for something new to read?",
    banner_desc: "Explore 50+ translated Asian light novels and webnovels with distraction-free layout and zero intrusive ads.",
    banner_btn: "Visit Dakesu.net",

    // Footer
    footer_copy: "© 2026 Dakesu. Open-source client-side browser tools.",

    // Asian Names App Specific
    an_title: "Asian Name Generator",
    an_subtitle: "Craft authentic identities for fictional characters, novels, or avatars with native script and etymological roots.",
    an_culture: "Culture / Script",
    an_archetype: "Archetype / Gender",
    an_count: "Quantity",
    an_btn: "Generate Names",
    an_copy: "Copy",
    an_copied: "Copied!",
    an_jp: "Japanese (Kanji + Furigana)",
    an_kr: "Korean (Hangul + Hanja)",
    an_cn: "Chinese Wuxia / Daoist Cultivation",
    an_in: "Hindi / Vedic (Devanagari)",
    an_all: "Any / Mystical",
    an_male: "Masculino / Martial",
    an_female: "Femenino / Serene",
    an_novel_cta: "Getting inspired to write? Read cultivation webnovels on Dakesu."
  }
};

let currentLang = localStorage.getItem('dakesu_lang') || (navigator.language?.startsWith('en') ? 'en' : 'es');

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('dakesu_lang', lang);
  document.documentElement.lang = lang;
  
  // Actualizar textos con atributo data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang] && i18nData[lang][key]) {
      el.textContent = i18nData[lang][key];
    }
  });

  // Actualizar placeholders con data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (i18nData[lang] && i18nData[lang][key]) {
      el.setAttribute('placeholder', i18nData[lang][key]);
    }
  });

  // Actualizar label del control pill si existe
  const langLabel = document.getElementById('langToggleLabel');
  if (langLabel) {
    langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
  }
}

function toggleLanguage() {
  const nextLang = currentLang === 'es' ? 'en' : 'es';
  setLanguage(nextLang);
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLanguage);
  }
});
