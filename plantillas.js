/* ==========================================================================
   PLANTILLAS para quien crea su propio CV con el editor (modo público).
   Personas, empresas y datos de contacto FICTICIOS (dominio example.com, reservado para ejemplos).
   - CV_EJEMPLOS: varios CV completos de distintos sectores.
   - CV_BLANCO: estructura mínima con textos de ayuda para rellenar.
   ========================================================================== */

const ESTILO_BASE = { "tituloColor": "coral", "lineaSecciones": "alterna", "lineaTiempo": "color" };
const QR_BASE = { "mostrar": true, "tipo": "vcard", "url": "", "posicion": "final" };

window.CV_EJEMPLOS = [
  {
    "id": "administracion", "etiqueta": "Administración", "icono": "🗂️",
    "cv": {
      "nombre": "Laura",
      "apellido1": "Martín",
      "apellido2": "Gómez",
      "titular": "Administrativa contable",
      "perfil": "Administrativa con seis años de experiencia en contabilidad, facturación y atención a proveedores. Me organizo bien con plazos ajustados, domino Excel y los programas de gestión más habituales, y me gusta automatizar tareas repetitivas para ganar tiempo.",
      "contacto": { "email": "laura.martin@example.com", "telefono": "600 000 001", "ubicacion": "Valencia", "linkedin": "linkedin.com/in/ejemplo-laura", "github": "", "web": "" },
      "experiencia": [
        {
          "puesto": "Administrativa contable", "empresa": "Distribuciones Ejemplo S.A.", "lugar": "Valencia", "fechas": "abr. 2021 – Actualidad", "color": "oro",
          "puntos": [
            "Contabilidad diaria, conciliaciones bancarias y cierres mensuales.",
            "Emisión y control de más de 400 facturas al mes.",
            "Gestión de cobros y pagos con clientes y proveedores.",
            "Preparación de la documentación para la asesoría fiscal."
          ]
        },
        {
          "puesto": "Auxiliar administrativa", "empresa": "Asesoría Ejemplo", "lugar": "Paterna, Valencia", "fechas": "sep. 2018 – mar. 2021", "color": "coral",
          "puntos": [
            "Atención telefónica y presencial a clientes.",
            "Archivo, registro de documentación y apoyo en nóminas."
          ]
        }
      ],
      "proyectos": [
        {
          "nombre": "Digitalización de facturas", "fecha": "2023", "color": "oro",
          "descripcion": "Implantación de un sistema de facturas digitales que eliminó el archivo en papel y redujo a la mitad el tiempo de búsqueda de documentos.",
          "etiquetas": ["Mejora de procesos", "Excel"], "enlace": ""
        }
      ],
      "creatividad": { "titulo": "Programas", "texto": "", "items": ["Excel avanzado", "A3", "ContaPlus", "SAP Business One", "Google Workspace"] },
      "competencias": { "tecnicas": ["Contabilidad", "Facturación", "Conciliación bancaria", "Gestión de proveedores", "Atención al cliente"], "ia": [], "nociones": "", "transversales": ["Organización", "Atención al detalle", "Trabajo en equipo"] },
      "formacion": [ { "titulo": "Técnico Superior en Administración y Finanzas", "centro": "IES Ejemplo", "fechas": "2016 – 2018" } ],
      "cursos": [ "Contabilidad avanzada · 80 h (2022)", "Excel para la gestión empresarial · 40 h (2020)" ],
      "idiomas": [ { "idioma": "Castellano", "nivel": "Nativo", "porcentaje": 100 }, { "idioma": "Valenciano", "nivel": "C1", "porcentaje": 85 }, { "idioma": "Inglés", "nivel": "B2", "porcentaje": 70 } ],
      "otros": [ "Carnet de conducir B" ],
      "estilo": ESTILO_BASE, "qr": QR_BASE
    }
  },
  {
    "id": "hosteleria", "etiqueta": "Hostelería", "icono": "🍳",
    "cv": {
      "nombre": "Carlos",
      "apellido1": "Ruiz",
      "apellido2": "Navarro",
      "titular": "Jefe de partida",
      "perfil": "Cocinero con ocho años de experiencia en restaurantes y hoteles. Especializado en cocina mediterránea y producto de temporada. Acostumbrado a trabajar bajo presión, organizar la partida y formar a ayudantes, siempre cumpliendo las normas de higiene y seguridad alimentaria.",
      "contacto": { "email": "carlos.ruiz@example.com", "telefono": "600 000 002", "ubicacion": "Sevilla", "linkedin": "", "github": "", "web": "" },
      "experiencia": [
        {
          "puesto": "Jefe de partida", "empresa": "Hotel Ejemplo ****", "lugar": "Sevilla", "fechas": "may. 2021 – Actualidad", "color": "oro",
          "puntos": [
            "Responsable de la partida de carnes y pescados para servicios de hasta 150 cubiertos.",
            "Formación y coordinación de dos ayudantes de cocina.",
            "Control de pedidos, mermas y escandallos de la partida.",
            "Aplicación del sistema APPCC en el día a día."
          ]
        },
        {
          "puesto": "Cocinero", "empresa": "Restaurante Ejemplo", "lugar": "Cádiz", "fechas": "mar. 2017 – abr. 2021", "color": "coral",
          "puntos": [
            "Elaboración de menús del día y carta de temporada.",
            "Preparación de eventos y banquetes de hasta 200 personas."
          ]
        }
      ],
      "proyectos": [],
      "creatividad": { "titulo": "Especialidades", "texto": "", "items": ["Cocina mediterránea", "Arroces", "Pescados", "Cocina a baja temperatura", "Repostería básica"] },
      "competencias": { "tecnicas": ["Organización de partida", "Escandallos", "Control de stock", "APPCC", "Emplatado"], "ia": [], "nociones": "", "transversales": ["Trabajo bajo presión", "Liderazgo", "Trabajo en equipo"] },
      "formacion": [ { "titulo": "Técnico en Cocina y Gastronomía", "centro": "Escuela de Hostelería Ejemplo", "fechas": "2015 – 2017" } ],
      "cursos": [ "Manipulador de alimentos (2023)", "Cocina a baja temperatura · 30 h (2022)", "Alérgenos en restauración · 10 h (2021)" ],
      "idiomas": [ { "idioma": "Castellano", "nivel": "Nativo", "porcentaje": 100 }, { "idioma": "Inglés", "nivel": "A2", "porcentaje": 40 } ],
      "otros": [ "Carnet de manipulador de alimentos", "Disponibilidad para turnos" ],
      "estilo": ESTILO_BASE, "qr": QR_BASE
    }
  },
  {
    "id": "marketing", "etiqueta": "Marketing", "icono": "📣",
    "cv": {
      "nombre": "Marta",
      "apellido1": "Sánchez",
      "apellido2": "Ortega",
      "titular": "Especialista en marketing digital",
      "perfil": "Especialista en marketing digital con experiencia en redes sociales, campañas de publicidad online y analítica web. Me encanta convertir datos en decisiones y crear contenidos que conectan con el público. Busco un equipo donde aportar creatividad y resultados medibles.",
      "contacto": { "email": "marta.sanchez@example.com", "telefono": "600 000 003", "ubicacion": "Madrid", "linkedin": "linkedin.com/in/ejemplo-marta", "github": "", "web": "example.com" },
      "experiencia": [
        {
          "puesto": "Especialista en marketing digital", "empresa": "Agencia Ejemplo", "lugar": "Madrid", "fechas": "ene. 2022 – Actualidad", "color": "oro",
          "puntos": [
            "Gestión de campañas en Google Ads y Meta Ads para 12 clientes.",
            "Aumento medio del 35 % en conversiones gracias a pruebas A/B.",
            "Planificación de contenidos y calendario editorial en redes sociales.",
            "Informes mensuales de resultados con Google Analytics y Looker Studio."
          ]
        },
        {
          "puesto": "Community manager", "empresa": "Tienda Online Ejemplo", "lugar": "Madrid", "fechas": "jun. 2020 – dic. 2021", "color": "coral",
          "puntos": [
            "Gestión de Instagram, TikTok y LinkedIn de la marca.",
            "Creación de contenidos gráficos y vídeos cortos."
          ]
        }
      ],
      "proyectos": [
        {
          "nombre": "Lanzamiento de marca propia", "fecha": "2024", "color": "oro",
          "descripcion": "Estrategia de lanzamiento en redes para una nueva línea de producto: 20.000 seguidores y 1.500 ventas en los tres primeros meses.",
          "etiquetas": ["Redes sociales", "Publicidad", "Analítica"], "enlace": ""
        }
      ],
      "creatividad": { "titulo": "Herramientas", "texto": "", "items": ["Google Ads", "Meta Ads", "Google Analytics", "Canva", "Figma", "Mailchimp", "WordPress"] },
      "competencias": { "tecnicas": ["SEO y SEM", "Publicidad en redes", "Analítica web", "Email marketing", "Creación de contenidos"], "ia": ["ChatGPT", "Midjourney"], "iaTitulo": "IA para contenidos", "nociones": "", "transversales": ["Creatividad", "Comunicación", "Orientación a resultados"] },
      "formacion": [ { "titulo": "Grado en Publicidad y Relaciones Públicas", "centro": "Universidad Ejemplo", "fechas": "2016 – 2020" } ],
      "cursos": [ "Certificación Google Ads (2023)", "Analítica web avanzada · 40 h (2022)" ],
      "idiomas": [ { "idioma": "Castellano", "nivel": "Nativo", "porcentaje": 100 }, { "idioma": "Inglés", "nivel": "C1", "porcentaje": 85 }, { "idioma": "Francés", "nivel": "A2", "porcentaje": 40 } ],
      "otros": [ "Carnet de conducir B" ],
      "estilo": ESTILO_BASE, "qr": QR_BASE
    }
  }
];

window.CV_BLANCO = {
  "nombre": "Tu Nombre",
  "apellido1": "Primer apellido",
  "apellido2": "Segundo apellido",
  "titular": "Tu profesión o puesto",
  "perfil": "Escribe aquí un resumen de 3–4 líneas: qué haces, tu experiencia y qué buscas.",
  "contacto": { "email": "tu@email.com", "telefono": "600 000 000", "ubicacion": "Ciudad", "linkedin": "", "github": "", "web": "" },
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
  "estilo": ESTILO_BASE,
  "qr": QR_BASE
};
