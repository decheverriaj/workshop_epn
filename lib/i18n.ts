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
      research: "Investigación",
      publications: "Publicaciones",
      teaching: "Docencia",
      contact: "Contacto",
      langSwitchLabel: "Idioma",
      english: "English",
      spanish: "Español",
    },
    hero: {
      name: "Dr. Diego Echeverría, PhD",
      role: "Profesor Titular, Departamento de Energía Eléctrica",
      affiliation: "Escuela Politécnica Nacional",
      focus:
        "Sistemas eléctricos de potencia · Operación de SEP · Redes inteligentes",
      summary:
        "Investigo cómo operar y proteger redes eléctricas con mayor seguridad, usando mediciones sincrofasoriales, control de área extendida y herramientas de apoyo a la decisión.",
      cta: "Contáctame",
      secondaryCta: "Ver publicaciones",
      photoAlt:
        "Retrato del Dr. Diego Echeverría. Placeholder elegante pendiente de reemplazo con foto personal.",
      photoCredit: "Foto pendiente — reemplazar con retrato personal.",
    },
    about: {
      title: "Sobre mi trabajo",
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
    research: {
      title: "Líneas de investigación",
      lead:
        "Estas son las líneas en las que trabajo con mayor frecuencia, a partir de mi trayectoria en operación, investigación aplicada y proyectos recientes.",
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
        "Una selección reciente de artículos indexados y trabajos técnicos. El listado completo está en Google Scholar.",
      scholarLabel: "Ver perfil en Google Scholar",
      items: [
        {
          year: "2025",
          title:
            "Adversarial Learning as a PMU Signal Filtering Technique in Load Models Identification",
          venue: "IEEE Access, vol. 13, pp. 100601–100613",
          note: "Con J. R. Constante, D. G. Colomé, E. G. Lincango y J. L. Camacho.",
        },
        {
          year: "2025",
          title:
            "Wide-Area Monitoring Protection and Control Supported Operation and Planning in the Ecuadorian Power System: Improving Security and Reliability",
          venue: "IEEE Power and Energy Magazine, vol. 23, no. 1, pp. 59–68",
          note: "Con J. C. Cepeda, M. S. Chamba, I. Kamwa y J. L. Rueda-Torres.",
        },
        {
          year: "2025",
          title:
            "Characterization of Power System Oscillation Modes Using Synchrophasor Data and a Modified Variational Decomposition Mode Algorithm",
          venue: "Energies (MDPI), vol. 18, no. 11",
          note: "Con J. Oscullo, N. Orozco, H. Carvajal, J. Vega-Sánchez y T. Ohishi.",
        },
        {
          year: "2024",
          title:
            "Noise Amplitude in Ambient PMU Data and its Impact on Load Models Identification",
          venue: "IEEE Latin America Transactions, vol. 22, no. 8, pp. 678–685",
          note: "Con J. R. Constante Segura y G. Colomé.",
        },
        {
          year: "2024",
          title:
            "Aplicación del Control Formador de Red en Microrredes con Sistemas de Almacenamiento de Energía para la Regulación Primaria de Frecuencia, Caso de Estudio: Islas Galápagos",
          venue: "Revista Técnica “energía”, 21(1), pp. 94–104",
          note: "Con A. Jacho, S. Chamba, C. Lozada y W. Sánchez.",
        },
        {
          year: "2022",
          title:
            "Predicción de la Estabilidad Transitoria de Sistemas Eléctricos utilizando Aprendizaje Automático",
          venue: "IEEE ARGENCON 2022",
          note: "Con J. Cepeda y D. Colomé.",
        },
      ],
    },
    teaching: {
      title: "Docencia",
      lead:
        "Imparto y he impartido cursos de posgrado y capacitación especializada en estabilidad, confiabilidad, monitoreo y operación de sistemas eléctricos.",
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
      research: "Research",
      publications: "Publications",
      teaching: "Teaching",
      contact: "Contact",
      langSwitchLabel: "Language",
      english: "English",
      spanish: "Español",
    },
    hero: {
      name: "Dr. Diego Echeverría, PhD",
      role: "Full Professor, Department of Electrical Energy",
      affiliation: "Escuela Politécnica Nacional",
      focus: "Electric power systems · Power system operation · Smart grids",
      summary:
        "I study how to operate and protect power grids more securely, using synchrophasor measurements, wide-area control, and decision-support tools.",
      cta: "Contact me",
      secondaryCta: "View publications",
      photoAlt:
        "Portrait of Dr. Diego Echeverría. Elegant placeholder pending replacement with a personal photo.",
      photoCredit: "Photo pending — replace with a personal portrait.",
    },
    about: {
      title: "About my work",
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
    research: {
      title: "Research lines",
      lead:
        "These are the themes I work on most often, drawn from my background in system operation, applied research, and recent projects.",
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
        "A recent selection of indexed articles and technical papers. The full list is available on Google Scholar.",
      scholarLabel: "View Google Scholar profile",
      items: [
        {
          year: "2025",
          title:
            "Adversarial Learning as a PMU Signal Filtering Technique in Load Models Identification",
          venue: "IEEE Access, vol. 13, pp. 100601–100613",
          note: "With J. R. Constante, D. G. Colomé, E. G. Lincango, and J. L. Camacho.",
        },
        {
          year: "2025",
          title:
            "Wide-Area Monitoring Protection and Control Supported Operation and Planning in the Ecuadorian Power System: Improving Security and Reliability",
          venue: "IEEE Power and Energy Magazine, vol. 23, no. 1, pp. 59–68",
          note: "With J. C. Cepeda, M. S. Chamba, I. Kamwa, and J. L. Rueda-Torres.",
        },
        {
          year: "2025",
          title:
            "Characterization of Power System Oscillation Modes Using Synchrophasor Data and a Modified Variational Decomposition Mode Algorithm",
          venue: "Energies (MDPI), vol. 18, no. 11",
          note: "With J. Oscullo, N. Orozco, H. Carvajal, J. Vega-Sánchez, and T. Ohishi.",
        },
        {
          year: "2024",
          title:
            "Noise Amplitude in Ambient PMU Data and its Impact on Load Models Identification",
          venue: "IEEE Latin America Transactions, vol. 22, no. 8, pp. 678–685",
          note: "With J. R. Constante Segura and G. Colomé.",
        },
        {
          year: "2024",
          title:
            "Grid-Forming Control in Microgrids with Energy Storage for Primary Frequency Regulation: Galápagos Islands Case Study",
          venue: "Revista Técnica “energía”, 21(1), pp. 94–104",
          note: "With A. Jacho, S. Chamba, C. Lozada, and W. Sánchez.",
        },
        {
          year: "2022",
          title:
            "Prediction of Transient Stability in Electric Power Systems Using Machine Learning",
          venue: "IEEE ARGENCON 2022",
          note: "With J. Cepeda and D. Colomé.",
        },
      ],
    },
    teaching: {
      title: "Teaching",
      lead:
        "I teach and have taught graduate and specialized professional courses on stability, reliability, monitoring, and power-system operation.",
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
