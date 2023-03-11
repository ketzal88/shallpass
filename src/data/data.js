import { comercialIcon, financieraIcon, impositivaIcon, juridicaIcon } from "../assets";

const rubros=[
    { 
        icon: comercialIcon,
        title: 'Administración',
        sTitle: 'Comercial',
        body: 'Administración integral de todas las aristas del área administrativa de un emprendimiento. Así como: habilitaciones, metodologías de trabajo, selección de proveedores, servicios, productos, etc.'

    },
    {
        icon: impositivaIcon,
        title: 'Gestión',
        sTitle: 'Impositiva',
        body: 'Gestión de toda el área impositiva de la empresa, contacto con contadores o uso de los propios, día a día de la facturación, balance y cobranzas de la empresa.'
    },
    {
        icon: juridicaIcon,
        title: 'Asesoría',
        sTitle: 'Jurídica',
        body: 'Consultoría jurídica, contratos, registros de marca, empleados, resolución de conflictos, negociaciones y mediaciones.'
    },
    {
        icon: financieraIcon,
        title: 'Administración',
        sTitle: 'Financiera',
        body: 'Cómo armar proyectos con bajo presupuesto, financiación y medios de pago, cómo utilizar distintas tecnologías y herramientas financieras.'
    },
];

const textHero ={
    text01: 'Administramos',
    text02: 'Gestionamos',
    text03: 'Asesoramos',
}

const texts = [
    {
        title: `de `,
        titleSpan: 'proyectos y negocios',
        text: 'Realizamos un asesoramiento personalizado con el objetivo de materializar tus ideas y proyectos.'
    },
    {
        title: '',
        titleSpan: 'personal',
        text: 'Asesoramiento sobre proyectos, orientación, requerimientos para llevarlo a cabo, brainstorming y acompañamiento.'
    },
    {
        title: 'de ',
        titleSpan: 'franquicias',
        text: 'Asesoramiento en branding, creación del KNOW-HOW, armado del proyecto, cómo salir al mercado, contratos y financiación.'
    },

]

export {
    rubros,
    textHero,
    texts,
}