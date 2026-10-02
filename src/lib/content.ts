import { LEAD_TAG, PIPELINE_NAME } from "./site";

export type Lang = "en" | "es";

const en = {
  nav: {
    links: ["Home", "Solutions", "How It Works", "Contact"],
    cta: "Book a Discovery Call",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchTo: "Cambiar a español",
  },
  hero: {
    badge: "GoHighLevel + AI workflow automation",
    title: "Turn More Leads Into Customers With",
    titleAccent: "AI Automation",
    subtitle:
      "Capture leads, automate follow-ups, and manage your sales pipeline in one streamlined system.",
    primary: "Book a Discovery Call",
    secondary: "Explore Our Process",
    preview: "Workflow preview",
    step: "Step",
    nodes: [
      { label: "Form", sub: "Lead submits" },
      { label: "AI Processing", sub: "Tag & route" },
      { label: "CRM", sub: "Pipeline stage" },
      { label: "Email Follow-up", sub: "Sent automatically" },
    ],
  },
  problem: {
    eyebrow: "The problem",
    title: "Manual lead management leaks opportunities",
    description:
      "Most small teams lose leads not because of a bad offer, but because of slow, inconsistent, manual follow-up. Automation takes the repetitive work off your plate.",
    withAutomation: "With automation:",
    items: [
      {
        problem: "Slow lead response times",
        detail: "New inquiries wait in an inbox until someone has time to reply.",
        solution: "An instant confirmation email goes out the moment a form is submitted.",
      },
      {
        problem: "Manual data entry",
        detail: "Contact details are copied by hand from forms into spreadsheets.",
        solution: "Form data flows straight into the CRM as a tagged contact.",
      },
      {
        problem: "Forgotten follow-ups",
        detail: "Busy weeks mean promising leads never hear back a second time.",
        solution: "A scheduled follow-up email is sent automatically after a delay.",
      },
      {
        problem: "Disorganized customer information",
        detail: "No single place shows where each lead is in the sales process.",
        solution: "Every lead becomes an opportunity in a clear, stage-based pipeline.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Everything you need to automate your lead flow",
    items: [
      {
        title: "Lead Capture Automation",
        description: "Branded GoHighLevel forms embedded on your website and landing pages.",
        benefit: "Every inquiry is captured in one place.",
      },
      {
        title: "CRM and Pipeline Setup",
        description: "A clear five-stage pipeline from New Lead to Won / Converted.",
        benefit: "See where every lead stands at a glance.",
      },
      {
        title: "Automated Email Follow-ups",
        description: "Confirmation and follow-up emails sequenced with smart delays.",
        benefit: "Consistent follow-up without remembering to send it.",
      },
      {
        title: "AI Workflow Integration",
        description: "AI-assisted copywriting and workflow planning to design your automations.",
        benefit: "Launch faster with well-structured workflows.",
      },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "From form submission to follow-up, automatically",
    description:
      "This is the exact GoHighLevel workflow behind the form on this page. Click any step to see what happens.",
    stepOf: "Step {current} of {total}",
    pause: "Pause",
    autoplay: "Auto-play",
    stepsLabel: "Workflow steps",
    chain:
      "Form Submitted → Add Tag → Create Opportunity → Internal Notification → Confirmation Email → Wait 1 Day → Follow-up Email",
    steps: [
      {
        title: "A prospect submits a form",
        detail:
          "A visitor fills in the GoHighLevel form embedded on this website. The form submission is the trigger that starts the workflow.",
      },
      {
        title: "Contact information is captured",
        detail:
          "Name and email from the form are saved automatically — no copying and pasting into spreadsheets.",
      },
      {
        title: "Contact is added to GoHighLevel CRM",
        detail:
          "The lead appears as a contact record in the GoHighLevel CRM, ready for the team to view.",
      },
      {
        title: "Tag assigned + opportunity created",
        detail: `The contact receives the tag "${LEAD_TAG}" and an opportunity is created in the "${PIPELINE_NAME}" at the New Lead stage.`,
      },
      {
        title: "Internal notification sent",
        detail:
          "The responsible person (the account owner — not the whole workspace) is notified the moment a new lead arrives.",
      },
      {
        title: "Confirmation email sent",
        detail:
          "The prospect receives a registration confirmation email right away so they know their request was received.",
      },
      {
        title: "Wait 1 day, then follow up",
        detail:
          "After a 24-hour delay, a follow-up email is sent automatically to keep the conversation going.",
      },
    ],
  },
  pipeline: {
    eyebrow: "CRM pipeline",
    description:
      "Five stages that map the real journey from lead to customer. Try it: click a sample lead to move it to the next stage.",
    stages: ["New Lead", "Contacted", "Qualified", "Meeting Booked", "Won / Converted"],
    sampleLead: "Sample Lead",
    advance: "Advance",
    reset: "Reset demo",
    moveTo: "Move {name} to {stage}",
    converted: "{name} converted",
    note: "Interactive illustration with sample data only — not connected to a live CRM.",
  },
  expert: {
    eyebrow: "Featured expert",
    bio: "Digital marketing entrepreneur, founder of Solutions 8, and author focused on helping businesses grow with smarter marketing systems. This project uses his workshops as the sample entrepreneur brief for our lead-automation funnel.",
    photoAlt: "Portrait of Kasim Aslam",
    coverAlt: "Book cover:",
    books: [
      "The 7 Critical Principles of Effective Digital Marketing",
      "You vs Google: The Very Unauthorized Guide to Google Ads",
    ],
  },
  book: {
    eyebrow: "Get started",
    title: "Book Your AI Automation Discovery Call",
    description:
      "Tell us about your business and what you want to automate. Your details go straight into our GoHighLevel CRM and kick off the workflow shown above.",
    expectations: [
      "Instant registration confirmation email",
      "A personal follow-up the next day",
      "A short call to map your automation opportunities",
    ],
    privacy:
      "Privacy notice: we only use your information to respond to your request and send related follow-up emails. See our",
    privacyLink: "Privacy Policy",
    loading: "Loading form…",
  },
  benefits: {
    eyebrow: "Benefits",
    title: "What automation gives back to your team",
    items: [
      { title: "Less repetitive manual work", text: "Tagging, data entry, and reminder emails happen on their own." },
      { title: "More consistent follow-up", text: "Every lead gets the same timely confirmation and follow-up." },
      { title: "Better lead visibility", text: "Know instantly when a new lead arrives and who it is." },
      { title: "A more organized pipeline", text: "Each opportunity sits in a clear stage from New Lead to Won." },
      { title: "More time for real conversations", text: "Spend your energy talking to prospects, not chasing admin." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "What is lead automation?",
        a: "Lead automation uses software to handle repetitive steps after someone shows interest — saving their details, tagging them, notifying your team, and sending emails — so no lead is forgotten.",
      },
      {
        q: "How does GoHighLevel help manage leads?",
        a: `GoHighLevel combines forms, a CRM, sales pipelines, and workflows in one platform. Here, form submissions create a contact tagged "${LEAD_TAG}" and an opportunity in the "${PIPELINE_NAME}".`,
      },
      {
        q: "Can workflows send automated emails?",
        a: "Yes. The workflow behind this page is configured to send a confirmation email right after submission and a follow-up email one day later.",
      },
      {
        q: "Can the system be customized for my business?",
        a: "Yes. Pipeline stages, tags, email copy, delays, and notifications can all be adapted to your sales process during the discovery call.",
      },
      {
        q: "Does this website use a live integration or a demo?",
        a: "The discovery-call form is a live GoHighLevel form embed, so submissions are sent directly to GoHighLevel, where the automation workflow runs. The pipeline board and workflow animations on this page are interactive illustrations with sample data and are not connected to the CRM.",
      },
    ],
  },
  footer: {
    tagline:
      "Helping businesses capture leads, organize their CRM, and automate follow-ups with GoHighLevel and AI.",
    navigation: "Navigation",
    contact: "Contact",
    email: "[your-email@example.com]",
    phone: "[Your phone number]",
    address: "[Your business address]",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
  },
  privacy: {
    back: "Back to home",
    title: "Privacy Policy",
    note: "Template — review and adapt before using commercially.",
    sections: [
      {
        h: "Information we collect",
        p: "When you submit the discovery-call form we collect the details you provide, such as your name and email address.",
      },
      {
        h: "How we use it",
        p: "Your information is stored in our GoHighLevel CRM and used only to respond to your request, send a registration confirmation, and send related follow-up emails.",
      },
      {
        h: "Third-party services",
        p: "The form is provided by GoHighLevel (LeadConnector). Their handling of data is governed by their own privacy policy.",
      },
      {
        h: "Your choices",
        p: "You can unsubscribe from emails at any time using the link in each email, or contact us to request deletion of your data.",
      },
      { h: "Contact", p: "[your-email@example.com]" },
    ],
  },
};

export type Content = typeof en;

const es: Content = {
  nav: {
    links: ["Inicio", "Soluciones", "Cómo funciona", "Contacto"],
    cta: "Agenda una llamada",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchTo: "Switch to English",
  },
  hero: {
    badge: "GoHighLevel + automatización de flujos con IA",
    title: "Convierte más leads en clientes con",
    titleAccent: "automatización con IA",
    subtitle:
      "Captura leads, automatiza los seguimientos y gestiona tu pipeline de ventas en un solo sistema simplificado.",
    primary: "Agenda una llamada de diagnóstico",
    secondary: "Conoce nuestro proceso",
    preview: "Vista del flujo",
    step: "Paso",
    nodes: [
      { label: "Formulario", sub: "El lead se registra" },
      { label: "Procesamiento con IA", sub: "Etiqueta y asigna" },
      { label: "CRM", sub: "Etapa del pipeline" },
      { label: "Correo de seguimiento", sub: "Enviado automáticamente" },
    ],
  },
  problem: {
    eyebrow: "El problema",
    title: "La gestión manual de leads hace que pierdas oportunidades",
    description:
      "La mayoría de los equipos pequeños no pierden leads por tener una mala oferta, sino por un seguimiento lento, inconsistente y manual. La automatización se encarga del trabajo repetitivo por ti.",
    withAutomation: "Con automatización:",
    items: [
      {
        problem: "Respuesta lenta a los leads",
        detail: "Las nuevas consultas esperan en la bandeja de entrada hasta que alguien tiene tiempo de responder.",
        solution: "Un correo de confirmación se envía al instante en cuanto se completa el formulario.",
      },
      {
        problem: "Ingreso manual de datos",
        detail: "Los datos de contacto se copian a mano de los formularios a hojas de cálculo.",
        solution: "Los datos del formulario llegan directo al CRM como un contacto etiquetado.",
      },
      {
        problem: "Seguimientos olvidados",
        detail: "En semanas ocupadas, los leads prometedores nunca reciben un segundo contacto.",
        solution: "Un correo de seguimiento programado se envía automáticamente después de un tiempo.",
      },
      {
        problem: "Información de clientes desorganizada",
        detail: "No hay un solo lugar donde ver en qué etapa del proceso de venta está cada lead.",
        solution: "Cada lead se convierte en una oportunidad dentro de un pipeline claro por etapas.",
      },
    ],
  },
  services: {
    eyebrow: "Servicios",
    title: "Todo lo que necesitas para automatizar tu flujo de leads",
    items: [
      {
        title: "Automatización de captura de leads",
        description: "Formularios de GoHighLevel con tu marca, integrados en tu sitio web y landing pages.",
        benefit: "Cada consulta queda registrada en un solo lugar.",
      },
      {
        title: "Configuración de CRM y pipeline",
        description: "Un pipeline claro de cinco etapas, desde Nuevo lead hasta Ganado / Convertido.",
        benefit: "Ve de un vistazo en qué etapa está cada lead.",
      },
      {
        title: "Correos de seguimiento automáticos",
        description: "Correos de confirmación y seguimiento programados con tiempos de espera inteligentes.",
        benefit: "Seguimiento constante sin tener que acordarte de enviarlo.",
      },
      {
        title: "Integración de flujos con IA",
        description: "Redacción y planificación de flujos asistidas por IA para diseñar tus automatizaciones.",
        benefit: "Lanza más rápido con flujos bien estructurados.",
      },
    ],
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "Del formulario al seguimiento, de forma automática",
    description:
      "Este es el flujo exacto de GoHighLevel detrás del formulario de esta página. Haz clic en cualquier paso para ver qué sucede.",
    stepOf: "Paso {current} de {total}",
    pause: "Pausar",
    autoplay: "Reproducir",
    stepsLabel: "Pasos del flujo",
    chain:
      "Formulario enviado → Agregar etiqueta → Crear oportunidad → Notificación interna → Correo de confirmación → Esperar 1 día → Correo de seguimiento",
    steps: [
      {
        title: "Un prospecto envía el formulario",
        detail:
          "Un visitante completa el formulario de GoHighLevel integrado en este sitio web. El envío del formulario es el disparador que inicia el flujo.",
      },
      {
        title: "Se capturan los datos de contacto",
        detail:
          "El nombre y el correo del formulario se guardan automáticamente, sin copiar y pegar en hojas de cálculo.",
      },
      {
        title: "El contacto se agrega al CRM de GoHighLevel",
        detail:
          "El lead aparece como un contacto en el CRM de GoHighLevel, listo para que el equipo lo vea.",
      },
      {
        title: "Se asigna una etiqueta y se crea una oportunidad",
        detail: `El contacto recibe la etiqueta "${LEAD_TAG}" y se crea una oportunidad en el "${PIPELINE_NAME}" en la etapa Nuevo lead.`,
      },
      {
        title: "Se envía una notificación interna",
        detail:
          "La persona responsable (el dueño de la cuenta, no todo el equipo) recibe un aviso en el momento en que llega un nuevo lead.",
      },
      {
        title: "Se envía el correo de confirmación",
        detail:
          "El prospecto recibe de inmediato un correo confirmando su registro, para que sepa que su solicitud fue recibida.",
      },
      {
        title: "Esperar 1 día y hacer seguimiento",
        detail:
          "Después de 24 horas, se envía automáticamente un correo de seguimiento para mantener la conversación activa.",
      },
    ],
  },
  pipeline: {
    eyebrow: "Pipeline del CRM",
    description:
      "Cinco etapas que reflejan el recorrido real de un lead hasta convertirse en cliente. Pruébalo: haz clic en un lead de ejemplo para pasarlo a la siguiente etapa.",
    stages: ["Nuevo lead", "Contactado", "Calificado", "Reunión agendada", "Ganado / Convertido"],
    sampleLead: "Lead de ejemplo",
    advance: "Avanzar",
    reset: "Reiniciar demo",
    moveTo: "Mover {name} a {stage}",
    converted: "{name} convertido",
    note: "Ilustración interactiva con datos de ejemplo; no está conectada a un CRM real.",
  },
  expert: {
    eyebrow: "Experto destacado",
    bio: "Emprendedor de marketing digital, fundador de Solutions 8 y autor enfocado en ayudar a las empresas a crecer con sistemas de marketing más inteligentes. Este proyecto usa sus talleres como el caso de emprendedor de ejemplo para nuestro embudo de automatización de leads.",
    photoAlt: "Retrato de Kasim Aslam",
    coverAlt: "Portada del libro:",
    books: [
      "The 7 Critical Principles of Effective Digital Marketing (Los 7 principios críticos del marketing digital efectivo)",
      "You vs Google: The Very Unauthorized Guide to Google Ads (Tú vs Google: la guía no autorizada de Google Ads)",
    ],
  },
  book: {
    eyebrow: "Comienza ahora",
    title: "Agenda tu llamada de diagnóstico de automatización con IA",
    description:
      "Cuéntanos sobre tu negocio y lo que quieres automatizar. Tus datos llegan directo a nuestro CRM de GoHighLevel e inician el flujo que viste arriba.",
    expectations: [
      "Correo de confirmación de registro al instante",
      "Un seguimiento personal al día siguiente",
      "Una llamada corta para identificar tus oportunidades de automatización",
    ],
    privacy:
      "Aviso de privacidad: solo usamos tu información para responder a tu solicitud y enviarte correos de seguimiento relacionados. Consulta nuestra",
    privacyLink: "Política de privacidad",
    loading: "Cargando formulario…",
  },
  benefits: {
    eyebrow: "Beneficios",
    title: "Lo que la automatización le devuelve a tu equipo",
    items: [
      { title: "Menos trabajo manual repetitivo", text: "Las etiquetas, el ingreso de datos y los recordatorios se hacen solos." },
      { title: "Seguimiento más constante", text: "Cada lead recibe la misma confirmación y seguimiento a tiempo." },
      { title: "Mejor visibilidad de los leads", text: "Sabes al instante cuándo llega un nuevo lead y quién es." },
      { title: "Un pipeline más organizado", text: "Cada oportunidad está en una etapa clara, desde Nuevo lead hasta Ganado." },
      { title: "Más tiempo para conversaciones reales", text: "Dedica tu energía a hablar con prospectos, no a tareas administrativas." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es la automatización de leads?",
        a: "La automatización de leads usa software para encargarse de los pasos repetitivos cuando alguien muestra interés: guardar sus datos, etiquetarlo, avisar a tu equipo y enviar correos, para que ningún lead se olvide.",
      },
      {
        q: "¿Cómo ayuda GoHighLevel a gestionar los leads?",
        a: `GoHighLevel reúne formularios, un CRM, pipelines de ventas y flujos de trabajo en una sola plataforma. Aquí, cada envío del formulario crea un contacto con la etiqueta "${LEAD_TAG}" y una oportunidad en el "${PIPELINE_NAME}".`,
      },
      {
        q: "¿Los flujos pueden enviar correos automáticos?",
        a: "Sí. El flujo detrás de esta página está configurado para enviar un correo de confirmación justo después del registro y un correo de seguimiento un día después.",
      },
      {
        q: "¿Se puede personalizar el sistema para mi negocio?",
        a: "Sí. Las etapas del pipeline, las etiquetas, el texto de los correos, los tiempos de espera y las notificaciones se pueden adaptar a tu proceso de ventas durante la llamada de diagnóstico.",
      },
      {
        q: "¿Este sitio usa una integración real o es una demo?",
        a: "El formulario de la llamada de diagnóstico es un formulario real de GoHighLevel, así que los envíos llegan directamente a GoHighLevel, donde se ejecuta el flujo de automatización. El tablero del pipeline y las animaciones del flujo son ilustraciones interactivas con datos de ejemplo y no están conectadas al CRM.",
      },
    ],
  },
  footer: {
    tagline:
      "Ayudamos a las empresas a capturar leads, organizar su CRM y automatizar los seguimientos con GoHighLevel e IA.",
    navigation: "Navegación",
    contact: "Contacto",
    email: "[tu-correo@ejemplo.com]",
    phone: "[Tu número de teléfono]",
    address: "[La dirección de tu negocio]",
    rights: "Todos los derechos reservados.",
    privacy: "Política de privacidad",
  },
  privacy: {
    back: "Volver al inicio",
    title: "Política de privacidad",
    note: "Plantilla: revísala y adáptala antes de usarla comercialmente.",
    sections: [
      {
        h: "Información que recopilamos",
        p: "Cuando envías el formulario de la llamada de diagnóstico, recopilamos los datos que nos proporcionas, como tu nombre y correo electrónico.",
      },
      {
        h: "Cómo la usamos",
        p: "Tu información se guarda en nuestro CRM de GoHighLevel y se usa solo para responder a tu solicitud, enviarte la confirmación de registro y correos de seguimiento relacionados.",
      },
      {
        h: "Servicios de terceros",
        p: "El formulario es proporcionado por GoHighLevel (LeadConnector). El manejo de los datos se rige por su propia política de privacidad.",
      },
      {
        h: "Tus opciones",
        p: "Puedes darte de baja de los correos en cualquier momento usando el enlace en cada correo, o contactarnos para solicitar que eliminemos tus datos.",
      },
      { h: "Contacto", p: "[tu-correo@ejemplo.com]" },
    ],
  },
};

export const CONTENT: Record<Lang, Content> = { en, es };

export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? ""));
}
