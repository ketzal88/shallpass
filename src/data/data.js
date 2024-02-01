import {
  alcasaLogo,
  beatflowLogo,
  comercialIcon,
  impositivaIcon,
  juridicaIcon,
  patagoniaLogo,
  workerLogo,
} from "../assets";

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

export { rubros, textHero, texts, quote, rubrosLLC, textsLLC, textHeroLLC };
