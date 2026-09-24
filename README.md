# Arquitectura de Mini-Apps y Monetización (tools.dakesu.net)

> **Ecosistema:** Dakesu / SeiqOS  
> **Ubicación:** `C:\SeiBOX\prototipador\dakesu-tools\`  
> **Despliegue objetivo:** Vercel Edge (`tools.dakesu.net`)

---

## 1. Respuesta a tus Dudas Clave

### ¿`app` vs `tools` para el subdominio?
* **Recomendación canónica:** `tools.dakesu.net`
  * `tools` comunica exactamente "utilidades gratuitas", genera mayor CTR orgánico en búsquedas de Google (*"asian name generator tool"*, *"wuxia reading calculator"*).
  * `app.` se reserva tradicionalmente para aplicaciones con inicio de sesión o dashboards cerrados (SaaS).

### ¿Cómo tener varias mini apps en un solo subdominio?
Estructura de subdirectorios estáticos limpios gracias a Vercel (`cleanUrls: true`):
- `https://tools.dakesu.net/` (Catálogo principal / Hub)
- `https://tools.dakesu.net/asian-names` (Generador de Nombres)
- `https://tools.dakesu.net/reading-speed` (Calculadora de Lectura)
- `https://tools.dakesu.net/cultivation-realms` (Glosario de Cultivo Xianxia)

---

## 2. ¿Cómo Resolver lo de No Tener Registro de Usuarios?

Para **monetizar al máximo con tráfico masivo**, el registro de usuarios es el peor enemigo (elimina el 85% de la conversión de usuarios casuales que vienen de Google o TikTok):

1. **Persistencia Local (`localStorage`):**  
   Si el usuario guarda nombres favoritos, novelas calculadas o configuraciones, se guardan en el almacenamiento local de su propio navegador. Cero bases de datos que mantener, cero costos de hosting y cero brechas de seguridad GDPR.
2. **Exportación Inmediata:**  
   Botones de *"Copiar"* al portapapeles o *"Descargar como TXT/PNG"*. El usuario obtiene el valor al instante.
3. **Cero Mantenimiento:**  
   Al ser 100% estático (HTML + Tailwind + JavaScript vanilla), el hosting en Vercel cuesta **$0 USD/mes** incluso con millones de visitas.

---

## 3. Estrategia de Monetización Agresiva (Ads + Conversión Directa)

### A. Anuncios Display (Google AdSense / Mediavine / Ezoic)
* **Ubicación de Alto Rendimiento:**
  - Bloque 1: Justo debajo de los controles de configuración y antes de los resultados.
  - Bloque 2: Banner lateral o sticky footer no intrusivo.
* Al ser herramientas donde el usuario genera múltiples veces y pasa 2-5 minutos ajustando opciones, el tiempo de permanencia e impresiones de anuncios es alto.

### B. House Ads (Publicidad de la Casa hacia Dakesu y Novelas)
* La mayor ganancia no son solo los céntimos de ads: es el **tráfico cualificado**.
* Quien busca un nombre chino o japonés está leyendo o escribiendo fantasía asiática.
* Cada mini-app porta un banner integrado hacia `dakesu.net/novelas` con llamados específicos ("¿Buscando qué leer? Descubre novelas de cultivo taoísta en Dakesu").
