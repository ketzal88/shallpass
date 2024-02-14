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
const servicios =[
  {
    dark: true,
    title: `Armado<br/>LLC en USA`,
    highlight: ``,
    price: 699,
    note: `<b>Pago único,</b> Incluye todas las tasas y registros.`,
    ctaText: `Quiero más información`,
    ctaLink: `#`,
    bulet: [
      {
        acent: false,
        bulletText: `Búsqueda de nombre, nos encargamos de verificar la disponibilidad y registrar el nombre de tu empresa en USA.`
      },
      {
        acent: false,
        bulletText: `Artículos de Organización, preparamos y presentamos los documentos legales necesarios para establecer tu LLC en USA.`
      },
      {
        acent: false,
        bulletText: `Estatutos, elaboramos los estatutos de tu empresa, detallando la estructura y funcionamiento de tu LLC.`
      },
      {
        acent: false,
        bulletText: `Dirección de empresa en USA, ofrecemos una dirección comercial en USA para tu LLC.`
      },
      {
        acent: false,
        bulletText: `Agente Registrado, proporcionamos un agente registrado para recibir documentos legales y fiscales en nombre de tu empresa.`
      },
      {
        acent: false,
        bulletText: `EIN, obtenemos el EIN para que puedas acceder a cuentas bancarias o integrar plataformas de pago como Paypal o Stripe para tus negocios o abrir cuenta como Amazon Seller.`
      },

    ],
    footer:[
      `Demora: 1 a 3 días hábiles la LLC, 3 a 10 días hábiles el EIN.`
    ]
  },
  {
    dark: false,
    title: `Taxes<br/>anual`,
    highlight: `Requiere tener LLC constituida`,
    price: 699,
    note: `<b>Pago único,</b> Incluye el pago de todas las tasas y liquidación de taxes.`,
    ctaText: `Quiero más información`,
    ctaLink: `#`,
    bulet: [
      {
        acent: false,
        bulletText: `Asesoramiento sobre los impuestos a declarar.`
      },
      {
        acent: false,
        bulletText: `Presentación de los impuestos y formularios federales.`
      },
      {
        acent: false,
        bulletText: `Presentación de los impuestos y formularios estatales.`
      },
      {
        acent: false,
        bulletText: `Pago de las Tasas Estatales.`
      },
      {
        acent: false,
        bulletText: `Renovación de Agente Registrador anual.`
      },
      {
        acent: false,
        bulletText: `Renovación de Domicilio y teléfono en USA.`
      },
    ],
    footer:[
      `Incluye el pago de todas las tasas y liquidación de taxes.`,
      `Estos aranceles son los promocionados para sociedades que hayan sido constituidas con la Consultora, en casos ajenos consultar por honorarios.`,
    ]
  },
  {
    dark: false,
    title: `Taxes<br/>mensual`,
    highlight: `Requiere tener LLC constituida`,
    price: 99,
    note: `Incluye el pago de todas las tasas y liquidación de taxes.`,
    ctaText: `Quiero más información`,
    ctaLink: `#`,
    bulet: [
      {
        acent: true,
        bulletText: `Incluye todos los servicios del pack anual.`
      },
      {
        acent: false,
        bulletText: `Consultas ilimitadas dentro del mes por asesoramiento fiscal o comercial.`
      },
      {
        acent: false,
        bulletText: `Asistencia sobre presentaciones por las cuentas bancarias.`
      },
      {
        acent: false,
        bulletText: `Generación de Invoice a los clientes.`
      },
      {
        acent: false,
        bulletText: `Servicio de Bookkeeping, nos hacemos cargo de los invoices emitidos y recibidos de tu empresa para una correcta liquidación de los impuestos y facilitar tus procesos comerciales.`
      },
    ],
    footer:[
      `Incluye el pago de todas las tasas y liquidación de taxes. Estos valores son indicados para sociedades que hayan sido constituidas con la Consultora, en otros casos consultar por aranceles.`,
      `Este servicio es con contrato fijo a 12 meses.`,
    ]
  },
  {
    dark: false,
    title: `Tarjeta de debito física`,
    highlight: `Requiere tener cuenta bancaria`,
    price: 180,
    note: `<b>Pago único,</b> Incluye costo de envío, seguimiento y gestión.`,
    ctaText: `Quiero más información`,
    ctaLink: `#`,
    bulet: [
      {
        acent: false,
        bulletText: `Asistencia y gestión de la apertura de la cuenta bancaria o plataforma de pago; RelayFi, Mercury Bank, Stripe o Wise.`
      },
      {
        acent: false,
        bulletText: `Gestión de la tarjeta de débito física.`
      },
      {
        acent: false,
        bulletText: `Entrega en cualquier parte de Argentina de la tarjeta de débito física.`
      },
    ],
    footer:[
      `Para las aperturas de las cuentas bancarias que no requieran de tarjeta de débito física, la asistencia en la apertura de la cuenta no tendrá costo alguno.`,
    ]
  },
]

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

export { rubros, textHero, texts, quote, rubrosLLC, textsLLC, textHeroLLC, servicios };
