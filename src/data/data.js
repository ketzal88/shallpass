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
  },
  {
    icon: comercialIcon,
    title: "Armado y Gestión",
    sTitle: "de LLC en USA",
    body: "Obtención del EIN, Asistencia en apertura de cuenta bancaria en USA + Tarjeta de débito virtual y física, Liquidación de impuestos, pagos de tasas estatales y renovaciones anuales.",
  },
  {
    icon: impositivaIcon,
    title: "Gestión",
    sTitle: "Impositiva",
    body: "Gestión de toda el área impositiva de la empresa, contacto con contadores o uso de los propios, día a día de la facturación, balance y cobranzas de la empresa.",
  },
  {
    icon: juridicaIcon,
    title: "Asesoría",
    sTitle: "Jurídica",
    body: "Consultoría jurídica, contratos, registros de marca, empleados, resolución de conflictos, negociaciones y mediaciones.",
  },
  //   {
  //     icon: financieraIcon,
  //     title: "Administración",
  //     sTitle: "Financiera",
  //     body: "Cómo armar proyectos con bajo presupuesto, financiación y medios de pago, cómo utilizar distintas tecnologías y herramientas financieras.",
  //   },
];

const textHero = {
  text01: "Administramos",
  text02: "Gestionamos",
  text03: "Asesoramos",
};

const texts = [
  {
    title: `de `,
    titleSpan: "proyectos y negocios",
    text: "Realizamos un asesoramiento personalizado con el objetivo de materializar tus ideas y proyectos.",
  },
  {
    title: "",
    titleSpan: "personal",
    text: "Asesoramiento sobre proyectos, orientación, requerimientos para llevarlo a cabo, brainstorming y acompañamiento.",
  },
  {
    title: "de ",
    titleSpan: "franquicias",
    text: "Asesoramiento en branding, creación del KNOW-HOW, armado del proyecto, cómo salir al mercado, contratos y financiación.",
  },
];

const quote = [
  {
    text: `Delegamos todos nuestros procesos administrativos en Shall Pass y fue la mejor decisión que hemos tomado, resolutivos y prácticos.`,
    logo: beatflowLogo,
  },
  {
    text: `“Con Shall Pass lo que hemos conseguido fue deshacernos de toda la burocracia en la que nos veíamos involucrados en la parte impositiva y administrativa, hacen de nuestro trabajo mas fácil y dinámico.”`,
    logo: alcasaLogo,
  },
  {
    text: `“Veniamos de una muy mala experiencia con el estudio que nos llevaba la contabilidad, a su vez no nos dimos cuenta la necesidad de acompañamiento comercial que teniamos, con la consultora pudimos ordenar todo.”`,
    logo: patagoniaLogo,
  },
  {
    text: `“Incorporamos a Shall Pass como nuestra área administrativa de la empresa. Delegamos todos los procesos administrativos que nos daban dolor de cabeza”`,
    logo: workerLogo,
  },
];

export { rubros, textHero, texts, quote };
