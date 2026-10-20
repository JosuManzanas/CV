/* ==========================================================================
   PLANTILLAS para quien crea su propio CV con el editor (modo público).
   - CV_EJEMPLO: persona ficticia para ver cómo queda un CV completo.
   - CV_BLANCO: estructura mínima con textos de ayuda para rellenar.
   ========================================================================== */

window.CV_EJEMPLO = {
  "nombre": "Ane Etxeberria",
  "apellido2": "Larrañaga",
  "titular": "Técnica de mantenimiento industrial",
  "perfil": "Técnica de mantenimiento con cinco años de experiencia en mantenimiento preventivo y correctivo de líneas de producción. Acostumbrada a trabajar con PLC, neumática y sistemas eléctricos, a documentar cada intervención y a proponer mejoras que reducen paradas. Busco un puesto donde seguir creciendo en automatización.",
  "contacto": {
    "email": "ane.etxeberria@example.com",
    "telefono": "600 000 000",
    "ubicacion": "Donostia, Gipuzkoa",
    "linkedin": "linkedin.com/in/ejemplo",
    "github": "",
    "web": ""
  },
  "experiencia": [
    {
      "puesto": "Técnica de mantenimiento",
      "empresa": "Industrias Ejemplo S.L.",
      "lugar": "Andoain, Gipuzkoa",
      "fechas": "mar. 2022 – Actualidad",
      "color": "oro",
      "puntos": [
        "Mantenimiento preventivo y correctivo de líneas de envasado y paletizado.",
        "Diagnóstico de averías eléctricas, neumáticas y de PLC Siemens S7.",
        "Reducción de un 20 % de las paradas no planificadas con un plan de revisiones semanal.",
        "Registro de intervenciones y repuestos en el GMAO de la planta."
      ]
    },
    {
      "puesto": "Electricista industrial",
      "empresa": "Instalaciones Ejemplo",
      "lugar": "Hernani, Gipuzkoa",
      "fechas": "sep. 2019 – feb. 2022",
      "color": "coral",
      "puntos": [
        "Montaje y cableado de cuadros eléctricos para maquinaria industrial.",
        "Puesta en marcha y pruebas de instalaciones en planta del cliente."
      ]
    }
  ],
  "proyectos": [
    {
      "nombre": "Plan de mantenimiento preventivo",
      "fecha": "2023",
      "color": "oro",
      "descripcion": "Diseño de un calendario de revisiones y listas de comprobación para las líneas de envasado, con seguimiento de indicadores de disponibilidad.",
      "etiquetas": ["Mejora continua", "Indicadores"],
      "enlace": ""
    }
  ],
  "creatividad": {
    "titulo": "Herramientas",
    "texto": "",
    "items": ["TIA Portal", "AutoCAD Electrical", "Excel", "SAP PM"]
  },
  "competencias": {
    "tecnicas": ["Mantenimiento preventivo", "PLC Siemens", "Neumática", "Electricidad industrial", "Lectura de esquemas", "Prevención de riesgos"],
    "ia": [],
    "nociones": "",
    "transversales": ["Resolución de problemas", "Trabajo en equipo", "Organización"]
  },
  "formacion": [
    { "titulo": "Técnico Superior en Mecatrónica Industrial", "centro": "CIFP Ejemplo", "fechas": "2017 – 2019" }
  ],
  "cursos": [
    "Programación de PLC — Centro de formación · 60 h (2021)",
    "Prevención de riesgos eléctricos · 20 h (2020)"
  ],
  "idiomas": [
    { "idioma": "Euskera", "nivel": "Nativo", "porcentaje": 100 },
    { "idioma": "Castellano", "nivel": "Nativo", "porcentaje": 100 },
    { "idioma": "Inglés", "nivel": "B1", "porcentaje": 55 }
  ],
  "otros": ["Carnet de conducir B"],
  "estilo": { "tituloColor": "coral", "lineaSecciones": "alterna", "lineaTiempo": "color" },
  "qr": { "mostrar": true, "tipo": "vcard", "url": "", "posicion": "final" }
};

window.CV_BLANCO = {
  "nombre": "Tu Nombre",
  "apellido2": "Apellido",
  "titular": "Tu profesión o puesto",
  "perfil": "Escribe aquí un resumen de 3–4 líneas: qué haces, tu experiencia y qué buscas.",
  "contacto": { "email": "tu@email.com", "telefono": "600 000 000", "ubicacion": "Ciudad, Provincia", "linkedin": "", "github": "", "web": "" },
  "experiencia": [
    {
      "puesto": "Puesto", "empresa": "Empresa", "lugar": "Ciudad", "fechas": "ene. 2024 – Actualidad", "color": "oro",
      "puntos": ["Tarea o logro principal.", "Otra tarea o logro."]
    }
  ],
  "proyectos": [],
  "creatividad": { "titulo": "Herramientas", "texto": "", "items": [] },
  "competencias": { "tecnicas": ["Competencia 1", "Competencia 2"], "ia": [], "nociones": "", "transversales": ["Trabajo en equipo"] },
  "formacion": [ { "titulo": "Tus estudios", "centro": "Centro", "fechas": "2018 – 2020" } ],
  "cursos": [],
  "idiomas": [ { "idioma": "Castellano", "nivel": "Nativo", "porcentaje": 100 } ],
  "otros": [],
  "estilo": { "tituloColor": "coral", "lineaSecciones": "alterna", "lineaTiempo": "color" },
  "qr": { "mostrar": true, "tipo": "vcard", "url": "", "posicion": "final" }
};
