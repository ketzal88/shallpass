import {
  alcasaLogo,
  beatflowLogo,
  comercialIcon,
  impositivaIcon,
  juridicaIcon,
  patagoniaLogo,
  workerLogo,
} from "../assets";

// 2024
const servicios = [
  {
    dark: false,
    title: `Pack Start LLC`,
    highlight: `Tu LLC en USA lista para empezar`,
    priceClaim: `VALOR`,
    currency: `U$D`,
    price: 499,
    note: `<b>Pago único,</b> Incluye constitución y documentación básica.`,
    ctaText: `Quiero más información`,
    ctaLink: `https://info.shallpassconsultora.com/pack-start-llc`,
    bulet: [
      {
        acent: true,
        bulletText: `Constitución de la LLC en el estado más conveniente según tu perfil (New Mexico / Wyoming)`,
      },
      {
        acent: true,
        bulletText: `EIN gestionado por nosotros ante el IRS`,
      },
      {
        acent: true,
        bulletText: `Registered Agent + Domicilio Fiscal (cumplimiento legal completo por 12 meses)`,
      },
      {
        acent: true,
        bulletText: `Guía práctica de mantenimiento y obligaciones de tu LLC`,
      },
      {
        acent: true,
        bulletText: `Reporte BOI-R gestionado por nosotros presentado ante FinCEN (Reporte federal obligatorio)`,
      },
      {
        acent: true,
        bulletText: `Apertura de cuenta bancaria en Mercury o Relay (sujeta a aprobación del banco)`,
      },
    ],
    footer: [
      `REQUISITOS:`,
      `- Completar formulario de información personal`,
      `- Pasaporte vigente para apertura de cuenta bancaria`,
    ],
  },
  {
    dark: false,
    title: `Pack Pro<br/>LLC`,
    highlight: `El más elegido:`,
    priceClaim: `VALOR`,
    currency: `U$D`,
    price: 799,
    note: `<b>Pago único,</b> Incluye cuenta bancaria y tarjeta física.`,
    ctaText: `Quiero más información`,
    ctaLink: `https://info.shallpassconsultora.com/pack-pro-llc`,
    bulet: [
      {
        acent: true,
        bulletText: `Constitución de la LLC en el estado más conveniente según tu perfil (New Mexico, Wyoming o Florida)`,
      },
      {
        acent: true,
        bulletText: `EIN gestionado por nosotros ante el IRS`,
      },
      {
        acent: true,
        bulletText: `Registered Agent + Domicilio Fiscal (cumplimiento legal completo por 12 meses)`,
      },
      {
        acent: true,
        bulletText: `Guía práctica de mantenimiento y obligaciones de tu LLC`,
      },
      {
        acent: true,
        bulletText: `Reporte BOI-R gestionado por nosotros presentado ante FinCEN (Reporte federal obligatorio)`,
      },
      {
        acent: true,
        bulletText: `Apertura de cuenta bancaria en Mercury o Relay`,
      },
      {
        acent: true,
        bulletText: `Apertura de cuenta business en Payoneer para cobros multicurrency`,
      },
      {
        acent: true,
        bulletText: `Acompañamiento 1 a 1 hasta la renovación de la LLC`,
      },
    ],
    footer: [
      `REQUISITOS:`,
      `- Completar formulario de información personal`,
      `- Presencia digital comprobable (página web, LinkedIn, correo corporativo, etc)`,
      `- Pasaporte vigente`,
    ],
  },
  {
    dark: true,
    title: `Pack Elite<br/>LLC`,
    highlight: `Premium - Operación 360°:`,
    priceClaim: `VALOR`,
    currency: `U$D`,
    price: 1399,
    note: `<b>Pago único,</b> LLC, estructura 360° y cripto.`,
    ctaText: `Agendar una llamada`,
    ctaLink: `https://info.shallpassconsultora.com/form-elite`,
    bulet: [
      {
        acent: true,
        bulletText: `Constitución de la LLC en el estado más conveniente según tu perfil (New Mexico, Wyoming o Florida)`,
      },
      {
        acent: true,
        bulletText: `EIN gestionado por nosotros ante el IRS`,
      },
      {
        acent: true,
        bulletText: `Registered Agent + Domicilio Fiscal (cumplimiento legal completo por 12 meses)`,
      },
      {
        acent: true,
        bulletText: `Guía práctica de mantenimiento y obligaciones de tu LLC`,
      },
      {
        acent: true,
        bulletText: `Reporte BOI-R gestionado por nosotros presentado ante FinCEN (Reporte federal obligatorio)`,
      },
      {
        acent: true,
        bulletText: `Apertura de cuenta bancaria empresarial Mercury ó Relay`,
      },
      {
        acent: true,
        bulletText: `Apertura de cuenta business en Payoneer para cobros multicurrency`,
      },
      {
        acent: true,
        bulletText: `Apertura y configuración de Stripe <span style="white-space:nowrap">(Sujeta a validación de la plataforma)</span>`,
      },
      {
        acent: true,
        bulletText: `Apertura y configuración de Kraken Business <span style="white-space:nowrap">(Sujeta a requisitos de la plataforma)</span>`,
      },
      {
        acent: true,
        bulletText: `Tarjeta de débito física`,
      },
      {
        acent: true,
        bulletText: `Orientación fiscal inicial en USA`,
      },
      {
        acent: true,
        bulletText: `Acompañamiento 1 a 1 hasta la renovación de la LLC`,
      },
    ],
    footer: [
      `REQUISITOS:`,
      `- Completar formulario de información personal`,
      `- Presencia digital comprobable (página web, LinkedIn, correo corporativo, etc)`,
      `- Pasaporte vigente`,
      `- Para la apertura de Kraken la LLC debe tener actividad por al menos 30 días para demostrar ingresos.`,
    ],
  },
  {
    dark: false,
    title: `Servicios adicionales<br/>y gestión continua`,
    highlight: `Ideal para quienes ya tienen una LLC y necesitan soporte puntual o continuidad operativa`,
    priceClaim: `Desde`,
    currency: `U$D`,
    price: 150,
    note: `<b>Servicios disponibles según el perfil y la situación de cada empresa</b>`,
    ctaText: `Quiero más información`,
    ctaLink: `https://info.shallpassconsultora.com/servicios-adicionales`,
    bulet: [
      {
        acent: true,
        bulletText: `Apertura de cuentas bancarias empresariales en EE.UU.`,
      },
      {
        acent: true,
        bulletText: `Apertura y configuración de Stripe`,
      },
      {
        acent: true,
        bulletText: `Apertura de cuenta Business en Payoneer`,
      },
      {
        acent: true,
        bulletText: `Apertura de cuenta Business en Kraken`,
      },
      {
        acent: true,
        bulletText: `Presentación del Reporte BOI (Beneficial Ownership Information)`,
      },
      {
        acent: true,
        bulletText: `Renovación anual de la LLC`,
      },
      {
        acent: true,
        bulletText: `Presentación de impuestos y formularios fiscales aplicables`,
      },
    ],
    footer: [
      `Servicios disponibles según el perfil y la situación de cada empresa`,
    ],
  },
];

const rubros = [
  {
    icon: comercialIcon,
    title: "Administración",
    sTitle: "Comercial",
    body: "Administración integral de todas las aristas del área administrativa de un emprendimiento. Así como: habilitaciones, metodologías de trabajo, selección de proveedores, servicios, productos, etc.",
    delay: "300",
  },
  {
    icon: comercialIcon,
    title: "Armado y Gestión",
    sTitle: "de LLC en USA",
    body: "Obtención del EIN, Asistencia en apertura de cuenta bancaria en USA + Tarjeta de débito virtual y física, Liquidación de impuestos, pagos de tasas estatales y renovaciones anuales.",
    delay: "600",
  },
  {
    icon: impositivaIcon,
    title: "Gestión",
    sTitle: "Impositiva",
    body: "Gestión de toda el área impositiva de la empresa, contacto con contadores o uso de los propios, día a día de la facturación, balance y cobranzas de la empresa.",
    delay: "900",
  },
  {
    icon: juridicaIcon,
    title: "Asesoría",
    sTitle: "Jurídica",
    body: "Consultoría jurídica, contratos, registros de marca, empleados, resolución de conflictos, negociaciones y mediaciones.",
    delay: "1200",
  },
  //   {
  //     icon: financieraIcon,
  //     title: "Administración",
  //     sTitle: "Financiera",
  //     body: "Cómo armar proyectos con bajo presupuesto, financiación y medios de pago, cómo utilizar distintas tecnologías y herramientas financieras.",
  //   },
];
const rubrosLLC = [
  {
    icon: comercialIcon,
    title: "Administración",
    sTitle: "Comercial",
    // body: "Administración integral de todas las aristas del área administrativa de un emprendimiento. Así como: habilitaciones, metodologías de trabajo, selección de proveedores, servicios, productos, etc.",
  },
  {
    icon: comercialIcon,
    title: "Armado y Gestión",
    sTitle: "de LLC en USA",
    // body: "Obtención del EIN, Asistencia en apertura de cuenta bancaria en USA + Tarjeta de débito virtual y física, Liquidación de impuestos, pagos de tasas estatales y renovaciones anuales.",
  },
  {
    icon: impositivaIcon,
    title: "Liquidación",
    sTitle: "de impuestos",
    // body: "Gestión de toda el área impositiva de la empresa, contacto con contadores o uso de los propios, día a día de la facturación, balance y cobranzas de la empresa.",
  },
  {
    icon: juridicaIcon,
    title: "Tarjeta de débito ",
    sTitle: "virtual y física",
    // body: "Consultoría jurídica, contratos, registros de marca, empleados, resolución de conflictos, negociaciones y mediaciones.",
  },
];
const textHero = {
  text01: "Administramos",
  text02: "Gestionamos",
  text03: "Asesoramos",
};

const textHeroLLC = {
  text01: "Beneficios",
  text02: "de Armar una LLC",
  text03: "en USA",
};

const texts = [
  {
    header: "Desarrollo",
    title: `de `,
    titleSpan: "proyectos y negocios",
    text: "Realizamos un asesoramiento personalizado con el objetivo de materializar tus ideas y proyectos.",
  },
  {
    header: "Desarrollo",
    title: "",
    titleSpan: "personal",
    text: "Asesoramiento sobre proyectos, orientación, requerimientos para llevarlo a cabo, brainstorming y acompañamiento.",
  },
  {
    header: "Desarrollo",
    title: "de ",
    titleSpan: "franquicias",
    text: "Asesoramiento en branding, creación del KNOW-HOW, armado del proyecto, cómo salir al mercado, contratos y financiación.",
  },
];

const textsLLC = [
  {
    header: "Mayor",
    title: `privacidad `,
    titleSpan: "Financiera",
    text: "Recibir pagos, emitir Invoice y realizar transferencias sin limitaciones o impuestos",
  },
  {
    header: "Sin pagos de",
    title: "impuestos ",
    titleSpan: "en el exterior",
    text: "Siguiendo unas pocas condiciones tributarias y un proceso simple se evitan los impuestos internacionales",
  },
  {
    header: "Tarjeta de débito",
    title: "",
    titleSpan: " internacional",
    text: "La cuenta bancaria internacional viene con una tarjeta de débito virtual y física que llegará a tu casa",
  },
];

const quote = [
  {
    text: `Delegamos todos nuestros procesos administrativos en Shall Pass y fue la mejor decisión que hemos tomado, resolutivos y prácticos.`,
    logo: beatflowLogo,
  },
  {
    text: `Con Shall Pass lo que hemos conseguido fue deshacernos de toda la burocracia en la que nos veíamos involucrados en la parte impositiva y administrativa, hacen de nuestro trabajo mas fácil y dinámico.`,
    logo: alcasaLogo,
  },
  {
    text: `Veniamos de una muy mala experiencia con el estudio que nos llevaba la contabilidad, a su vez no nos dimos cuenta la necesidad de acompañamiento comercial que teniamos, con la consultora pudimos ordenar todo.`,
    logo: patagoniaLogo,
  },
  {
    text: `Incorporamos a Shall Pass como nuestra área administrativa de la empresa. Delegamos todos los procesos administrativos que nos daban dolor de cabeza`,
    logo: workerLogo,
  },
];

export {
  rubros,
  textHero,
  texts,
  quote,
  rubrosLLC,
  textsLLC,
  textHeroLLC,
  servicios,
};
