export type Lang = "es" | "en";

export function resolveLang(value: string | string[] | undefined): Lang {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw === "en" ? "en" : "es";
}

export function langHref(lang: Lang): string {
  return `/?lang=${lang}`;
}

const translations = {
  es: {
    meta: {
      title: "Dr. Diego Echeverría | Profesor Titular — EPN",
      description:
        "Portafolio académico del Dr. Diego Echeverría, PhD. Profesor Titular en el Departamento de Energía Eléctrica de la Escuela Politécnica Nacional. Investigación en sistemas eléctricos de potencia, operación de SEP y redes inteligentes.",
    },
    nav: {
      about: "Sobre mi trabajo",
      trajectory: "Trayectoria",
      research: "Investigación",
      publications: "Publicaciones",
      teaching: "Docencia",
      talks: "Charlas",
      faq: "Estudiantes",
      contact: "Contacto",
      langSwitchLabel: "Idioma",
      english: "English",
      spanish: "Español",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
    },
    hero: {
      name: "Dr. Diego Echeverría",
      credential: "PhD",
      role: "Profesor Titular · Departamento de Energía Eléctrica",
      affiliation: "Escuela Politécnica Nacional",
      focus: "Sistemas eléctricos de potencia · Operación de SEP · Redes inteligentes",
      summary:
        "Investigo cómo operar y proteger redes eléctricas con mayor seguridad, usando mediciones sincrofasoriales, control de área extendida y herramientas de apoyo a la decisión.",
      cta: "Contáctame",
      secondaryCta: "Ver publicaciones",
      photoAlt: "Retrato profesional del Dr. Diego Echeverría.",
      photoCredit: "",
      motifLabel: "Motivo visual: modo de oscilación (análisis modal PMU)",
    },
    about: {
      title: "Operación real, investigación aplicada",
      lead:
        "Soy profesor e investigador en ingeniería eléctrica. Mi trabajo conecta la operación real de sistemas de potencia con métodos que ayudan a anticipar inestabilidades y a tomar mejores decisiones en tiempo real.",
      body:
        "Antes de incorporarme como Profesor Titular en la Escuela Politécnica Nacional, trabajé más de una década en el Operador Nacional de Electricidad CENACE, donde participé en proyectos WAMS, WAMPAC, protección sistémica y simulación digital en tiempo real. Hoy combino esa experiencia de operación con docencia, investigación y edición científica.",
      rolesTitle: "También contribuyo como",
      roles: [
        "Editor en Jefe de la Revista Técnica “energía” (CENACE)",
        "IEEE Senior Member y Presidente del IEEE PES Ecuador Chapter",
        "Miembro del Studies Committee del World Energy Council",
      ],
    },
    trajectory: {
      title: "Trayectoria académica",
      lead:
        "Momentos que marcan el paso de la operación del sistema a la investigación y la docencia.",
      items: [
        {
          year: "2024–",
          title: "Profesor Titular, Escuela Politécnica Nacional",
          detail:
            "Docencia, investigación y vinculación a tiempo completo en el Departamento de Energía Eléctrica.",
        },
        {
          year: "2023",
          title: "Doctorado en Ingeniería Eléctrica",
          detail:
            "Investigación doctoral centrada en estabilidad, mediciones sincrofasoriales y apoyo a la operación segura del SEP.",
        },
        {
          year: "2010–2023",
          title: "Ingeniero e investigador en CENACE",
          detail:
            "Más de una década en el operador nacional: WAMS, WAMPAC, protección sistémica y simulación digital en tiempo real.",
        },
        {
          year: "2018–",
          title: "Editoría científica y liderazgo IEEE",
          detail:
            "Editor en Jefe de la Revista Técnica “energía”; IEEE Senior Member y liderazgo en el IEEE PES Ecuador Chapter.",
        },
      ],
    },
    research: {
      title: "Líneas de investigación",
      lead:
        "Temas en los que trabajo con mayor frecuencia, a partir de operación, investigación aplicada y proyectos recientes.",
      items: [
        {
          title: "Estabilidad transitoria en tiempo real",
          description:
            "Evaluación y mejora de la estabilidad transitoria con PMUs, métodos predictivos y apoyo a la operación segura del sistema.",
        },
        {
          title: "WAMS / WAMPAC y protección sistémica",
          description:
            "Monitoreo, protección y control de área extendida para detectar condiciones críticas y activar acciones de emergencia oportunas.",
        },
        {
          title: "Redes inteligentes y microrredes",
          description:
            "Operación con almacenamiento, control formador de red y despacho en contextos como las Islas Galápagos y sistemas con alta penetración renovable.",
        },
        {
          title: "Aprendizaje automático en SEP",
          description:
            "Modelos de predicción, filtrado de señales PMU e identificación de márgenes de estabilidad a partir de datos de operación.",
        },
      ],
    },
    publications: {
      title: "Publicaciones seleccionadas",
      lead:
        "Una selección reciente. El listado completo está en Google Scholar.",
      scholarLabel: "Ver perfil en Google Scholar",
      featuredLabel: "Destacada",
      items: [
        {
          year: "2025",
          title:
            "Wide-Area Monitoring Protection and Control Supported Operation and Planning in the Ecuadorian Power System: Improving Security and Reliability",
          venue: "IEEE Power and Energy Magazine, vol. 23, no. 1, pp. 59–68",
          note: "Con J. C. Cepeda, M. S. Chamba, I. Kamwa y J. L. Rueda-Torres.",
          featured: true,
        },
        {
          year: "2025",
          title:
            "Adversarial Learning as a PMU Signal Filtering Technique in Load Models Identification",
          venue: "IEEE Access, vol. 13, pp. 100601–100613",
          note: "Con J. R. Constante, D. G. Colomé, E. G. Lincango y J. L. Camacho.",
          featured: false,
        },
        {
          year: "2025",
          title:
            "Characterization of Power System Oscillation Modes Using Synchrophasor Data and a Modified Variational Decomposition Mode Algorithm",
          venue: "Energies (MDPI), vol. 18, no. 11",
          note: "Con J. Oscullo, N. Orozco, H. Carvajal, J. Vega-Sánchez y T. Ohishi.",
          featured: false,
        },
        {
          year: "2024",
          title:
            "Noise Amplitude in Ambient PMU Data and its Impact on Load Models Identification",
          venue: "IEEE Latin America Transactions, vol. 22, no. 8, pp. 678–685",
          note: "Con J. R. Constante Segura y G. Colomé.",
          featured: false,
        },
        {
          year: "2024",
          title:
            "Aplicación del Control Formador de Red en Microrredes con Sistemas de Almacenamiento de Energía para la Regulación Primaria de Frecuencia, Caso de Estudio: Islas Galápagos",
          venue: "Revista Técnica “energía”, 21(1), pp. 94–104",
          note: "Con A. Jacho, S. Chamba, C. Lozada y W. Sánchez.",
          featured: false,
        },
        {
          year: "2022",
          title:
            "Predicción de la Estabilidad Transitoria de Sistemas Eléctricos utilizando Aprendizaje Automático",
          venue: "IEEE ARGENCON 2022",
          note: "Con J. Cepeda y D. Colomé.",
          featured: false,
        },
      ],
    },
    teaching: {
      title: "Docencia",
      lead:
        "Cursos de posgrado y capacitación especializada en estabilidad, confiabilidad, monitoreo y operación de sistemas eléctricos.",
      items: [
        {
          title: "Calidad y Confiabilidad de Sistemas Eléctricos de Potencia",
          detail:
            "Profesor invitado — Maestría en Electricidad y Energías Renovables, PUCE Sede Esmeraldas.",
        },
        {
          title: "Estabilidad de Sistemas Eléctricos de Potencia",
          detail:
            "Profesor invitado — Maestría en Electricidad y Energías Renovables, PUCE Sede Esmeraldas.",
        },
        {
          title: "Monitoreo y Mediciones en Sistemas Eléctricos",
          detail:
            "Profesor invitado — Maestría en Electricidad, Universidad Técnica de Cotopaxi.",
        },
        {
          title: "Sistemas de Monitoreo de Área Extendida (WAMS)",
          detail:
            "Cursos especializados para profesionales del sector eléctrico (ECUACIER y Escuela Politécnica Nacional).",
        },
        {
          title: "Uso práctico de DIgSILENT PowerFactory",
          detail:
            "Capacitación aplicada en modelación y análisis de sistemas eléctricos de potencia.",
        },
      ],
      note:
        "En la Escuela Politécnica Nacional desarrollo actividades de docencia, investigación y vinculación como Profesor Titular a tiempo completo.",
    },
    talks: {
      title: "Charlas y medios",
      lead:
        "Conferencias, paneles y menciones donde comparto trabajo sobre operación, estabilidad y redes inteligentes.",
      exampleNote: "Ejemplo — reemplazar con tus charlas y apariciones reales.",
      items: [
        {
          year: "2025",
          title: "Operación segura con WAMPAC en el sistema ecuatoriano",
          venue: "Ejemplo · Congreso regional IEEE PES",
          kind: "Conferencia invitada",
        },
        {
          year: "2024",
          title: "Microrredes y almacenamiento: lecciones desde Galápagos",
          venue: "Ejemplo · Seminario técnico ECUACIER",
          kind: "Ponencia",
        },
        {
          year: "2024",
          title: "Cómo leen los operadores la estabilidad en tiempo real",
          venue: "Ejemplo · Podcast de ingeniería energética",
          kind: "Entrevista",
        },
      ],
    },
    quotes: {
      label: "Testimonios",
      title: "Voces cercanas al trabajo",
      lead:
        "Fragmentos de quienes han colaborado o estudiado conmigo. Sustituye estos ejemplos cuando tengas citas reales.",
      exampleNote: "Ejemplo — reemplazar con testimonios reales.",
      items: [
        {
          quote:
            "Diego traduce problemas de operación en preguntas de investigación que un estudiante puede atacar con rigor y sentido práctico.",
          attribution: "Ejemplo · Colaborador de investigación",
        },
        {
          quote:
            "En clase no se queda en la teoría: conecta cada modelo con lo que ocurre en la sala de control.",
          attribution: "Ejemplo · Estudiante de posgrado",
        },
      ],
    },
    faq: {
      title: "Preguntas para estudiantes",
      lead:
        "Respuestas breves si te interesa un curso, una tesis o colaborar en el laboratorio.",
      items: [
        {
          question: "¿Puedo pedirte dirección de tesis o proyecto de titulación?",
          answer:
            "Sí, especialmente si tu tema toca estabilidad, WAMS/WAMPAC, microrredes o aprendizaje automático aplicado a SEP. Escríbeme con una idea breve y tu avance académico.",
        },
        {
          question: "¿Ofreces cupos en un laboratorio o grupo de investigación?",
          answer:
            "Depende del semestre y de los proyectos activos. Cuéntame tu disponibilidad, herramientas que ya manejas (por ejemplo PowerFactory o Python) y qué te motiva del tema.",
        },
        {
          question: "¿Cómo preparo un primer correo?",
          answer:
            "Incluye quién eres, qué programa cursas, una pregunta concreta y, si aplica, un párrafo sobre el problema que quieres estudiar. Eso acelera una respuesta útil.",
        },
      ],
    },
    contact: {
      title: "Contacto",
      lead:
        "Si eres estudiante, colega, periodista o posible colaborador, escríbeme. Respondo con gusto sobre investigación, docencia y cooperación técnica.",
      emailLabel: "Correo",
      email: "diego.echeverria01@epn.edu.ec",
      linkedinLabel: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/decheverriajurado/",
      scholarLabel: "Google Scholar",
      scholarUrl: "https://scholar.google.com/citations?user=u6d-ZfIAAAAJ&hl=es",
      cta: "Contáctame",
      location: "Quito, Ecuador",
    },
    footer: {
      rights: "Dr. Diego Echeverría · Escuela Politécnica Nacional",
    },
  },
  en: {
    meta: {
      title: "Dr. Diego Echeverría | Full Professor — EPN",
      description:
        "Academic portfolio of Dr. Diego Echeverría, PhD. Full Professor in the Department of Electrical Energy at Escuela Politécnica Nacional. Research in electric power systems, power system operation, and smart grids.",
    },
    nav: {
      about: "About my work",
      trajectory: "Trajectory",
      research: "Research",
      publications: "Publications",
      teaching: "Teaching",
      talks: "Talks",
      faq: "Students",
      contact: "Contact",
      langSwitchLabel: "Language",
      english: "English",
      spanish: "Español",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      name: "Dr. Diego Echeverría",
      credential: "PhD",
      role: "Full Professor · Department of Electrical Energy",
      affiliation: "Escuela Politécnica Nacional",
      focus: "Electric power systems · Power system operation · Smart grids",
      summary:
        "I study how to operate and protect power grids more securely, using synchrophasor measurements, wide-area control, and decision-support tools.",
      cta: "Contact me",
      secondaryCta: "View publications",
      photoAlt: "Professional portrait of Dr. Diego Echeverría.",
      photoCredit: "",
      motifLabel: "Visual motif: oscillation mode (PMU modal analysis)",
    },
    about: {
      title: "Real operation, applied research",
      lead:
        "I am a professor and researcher in electrical engineering. My work connects real power-system operation with methods that help anticipate instabilities and support better real-time decisions.",
      body:
        "Before joining Escuela Politécnica Nacional as a Full Professor, I spent more than a decade at Ecuador’s national electricity operator, CENACE, contributing to WAMS, WAMPAC, system integrity protection, and real-time digital simulation projects. Today I combine that operational experience with teaching, research, and scientific editing.",
      rolesTitle: "I also contribute as",
      roles: [
        "Editor-in-Chief of the technical journal “energía” (CENACE)",
        "IEEE Senior Member and Chair of the IEEE PES Ecuador Chapter",
        "Studies Committee Member of the World Energy Council",
      ],
    },
    trajectory: {
      title: "Academic trajectory",
      lead:
        "Milestones that mark the path from system operation to research and teaching.",
      items: [
        {
          year: "2024–",
          title: "Full Professor, Escuela Politécnica Nacional",
          detail:
            "Full-time teaching, research, and outreach in the Department of Electrical Energy.",
        },
        {
          year: "2023",
          title: "PhD in Electrical Engineering",
          detail:
            "Doctoral research focused on stability, synchrophasor measurements, and support for secure power-system operation.",
        },
        {
          year: "2010–2023",
          title: "Engineer and researcher at CENACE",
          detail:
            "More than a decade at Ecuador’s national operator: WAMS, WAMPAC, system integrity protection, and real-time digital simulation.",
        },
        {
          year: "2018–",
          title: "Scientific editing and IEEE leadership",
          detail:
            "Editor-in-Chief of the technical journal “energía”; IEEE Senior Member and leadership in the IEEE PES Ecuador Chapter.",
        },
      ],
    },
    research: {
      title: "Research lines",
      lead:
        "Themes I work on most often, drawn from system operation, applied research, and recent projects.",
      items: [
        {
          title: "Real-time transient stability",
          description:
            "Assessment and improvement of transient stability using PMUs, predictive methods, and support for secure system operation.",
        },
        {
          title: "WAMS / WAMPAC and system integrity protection",
          description:
            "Wide-area monitoring, protection, and control to detect critical conditions and trigger timely emergency actions.",
        },
        {
          title: "Smart grids and microgrids",
          description:
            "Operation with energy storage, grid-forming control, and dispatch in settings such as the Galápagos Islands and systems with high renewable penetration.",
        },
        {
          title: "Machine learning for power systems",
          description:
            "Prediction models, PMU signal filtering, and stability-margin identification from operational data.",
        },
      ],
    },
    publications: {
      title: "Selected publications",
      lead:
        "A recent selection. The full list is available on Google Scholar.",
      scholarLabel: "View Google Scholar profile",
      featuredLabel: "Featured",
      items: [
        {
          year: "2025",
          title:
            "Wide-Area Monitoring Protection and Control Supported Operation and Planning in the Ecuadorian Power System: Improving Security and Reliability",
          venue: "IEEE Power and Energy Magazine, vol. 23, no. 1, pp. 59–68",
          note: "With J. C. Cepeda, M. S. Chamba, I. Kamwa, and J. L. Rueda-Torres.",
          featured: true,
        },
        {
          year: "2025",
          title:
            "Adversarial Learning as a PMU Signal Filtering Technique in Load Models Identification",
          venue: "IEEE Access, vol. 13, pp. 100601–100613",
          note: "With J. R. Constante, D. G. Colomé, E. G. Lincango, and J. L. Camacho.",
          featured: false,
        },
        {
          year: "2025",
          title:
            "Characterization of Power System Oscillation Modes Using Synchrophasor Data and a Modified Variational Decomposition Mode Algorithm",
          venue: "Energies (MDPI), vol. 18, no. 11",
          note: "With J. Oscullo, N. Orozco, H. Carvajal, J. Vega-Sánchez, and T. Ohishi.",
          featured: false,
        },
        {
          year: "2024",
          title:
            "Noise Amplitude in Ambient PMU Data and its Impact on Load Models Identification",
          venue: "IEEE Latin America Transactions, vol. 22, no. 8, pp. 678–685",
          note: "With J. R. Constante Segura and G. Colomé.",
          featured: false,
        },
        {
          year: "2024",
          title:
            "Grid-Forming Control in Microgrids with Energy Storage for Primary Frequency Regulation: Galápagos Islands Case Study",
          venue: "Revista Técnica “energía”, 21(1), pp. 94–104",
          note: "With A. Jacho, S. Chamba, C. Lozada, and W. Sánchez.",
          featured: false,
        },
        {
          year: "2022",
          title:
            "Prediction of Transient Stability in Electric Power Systems Using Machine Learning",
          venue: "IEEE ARGENCON 2022",
          note: "With J. Cepeda and D. Colomé.",
          featured: false,
        },
      ],
    },
    teaching: {
      title: "Teaching",
      lead:
        "Graduate and specialized professional courses on stability, reliability, monitoring, and power-system operation.",
      items: [
        {
          title: "Power System Quality and Reliability",
          detail:
            "Guest lecturer — Master’s in Electricity and Renewable Energy, PUCE Esmeraldas.",
        },
        {
          title: "Power System Stability",
          detail:
            "Guest lecturer — Master’s in Electricity and Renewable Energy, PUCE Esmeraldas.",
        },
        {
          title: "Monitoring and Measurements in Electrical Systems",
          detail:
            "Guest lecturer — Master’s in Electricity, Universidad Técnica de Cotopaxi.",
        },
        {
          title: "Wide-Area Monitoring Systems (WAMS)",
          detail:
            "Specialized courses for power-sector professionals (ECUACIER and Escuela Politécnica Nacional).",
        },
        {
          title: "Practical use of DIgSILENT PowerFactory",
          detail:
            "Applied training in modeling and analysis of electric power systems.",
        },
      ],
      note:
        "At Escuela Politécnica Nacional I carry out teaching, research, and outreach as a full-time Full Professor.",
    },
    talks: {
      title: "Talks and media",
      lead:
        "Invited talks, panels, and mentions where I share work on operation, stability, and smart grids.",
      exampleNote: "Example — replace with your real talks and appearances.",
      items: [
        {
          year: "2025",
          title: "Secure operation with WAMPAC in the Ecuadorian system",
          venue: "Example · Regional IEEE PES congress",
          kind: "Invited talk",
        },
        {
          year: "2024",
          title: "Microgrids and storage: lessons from Galápagos",
          venue: "Example · ECUACIER technical seminar",
          kind: "Presentation",
        },
        {
          year: "2024",
          title: "How operators read stability in real time",
          venue: "Example · Energy engineering podcast",
          kind: "Interview",
        },
      ],
    },
    quotes: {
      label: "Testimonials",
      title: "Voices close to the work",
      lead:
        "Short notes from people who have collaborated or studied with me. Replace these examples when you have real quotes.",
      exampleNote: "Example — replace with real testimonials.",
      items: [
        {
          quote:
            "Diego turns operational problems into research questions a student can tackle with rigor and practical sense.",
          attribution: "Example · Research collaborator",
        },
        {
          quote:
            "In class he never stays in theory alone: every model connects to what happens in the control room.",
          attribution: "Example · Graduate student",
        },
      ],
    },
    faq: {
      title: "Questions for students",
      lead:
        "Short answers if you are interested in a course, a thesis, or collaborating in the lab.",
      items: [
        {
          question: "Can I ask you to advise a thesis or capstone project?",
          answer:
            "Yes—especially if your topic touches stability, WAMS/WAMPAC, microgrids, or machine learning for power systems. Write with a short idea and your academic stage.",
        },
        {
          question: "Do you have openings in a lab or research group?",
          answer:
            "It depends on the semester and active projects. Tell me your availability, tools you already use (for example PowerFactory or Python), and what draws you to the topic.",
        },
        {
          question: "How should I write a first email?",
          answer:
            "Include who you are, which program you are in, one concrete question, and—if relevant—a short paragraph on the problem you want to study. That helps me reply usefully.",
        },
      ],
    },
    contact: {
      title: "Contact",
      lead:
        "If you are a student, colleague, journalist, or potential collaborator, write to me. I am glad to discuss research, teaching, and technical cooperation.",
      emailLabel: "Email",
      email: "diego.echeverria01@epn.edu.ec",
      linkedinLabel: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/decheverriajurado/",
      scholarLabel: "Google Scholar",
      scholarUrl: "https://scholar.google.com/citations?user=u6d-ZfIAAAAJ&hl=en",
      cta: "Contact me",
      location: "Quito, Ecuador",
    },
    footer: {
      rights: "Dr. Diego Echeverría · Escuela Politécnica Nacional",
    },
  },
} as const;

export type Dictionary = (typeof translations)["es"];

export function getDictionary(lang: Lang): Dictionary {
  return translations[lang] as Dictionary;
}
