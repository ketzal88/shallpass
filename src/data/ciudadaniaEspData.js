import { cardIcon01, cardIcon02, cardIcon03, cardIcon04, cardIcon05, cardIcon06 } from "../assets";

const cardData = [
    {
        icon: cardIcon01,
        body: `<b>Obtené</b> un trabajo formal dentro de la comunidad europea.`,
        delay: 300,
    },
    {
        icon: cardIcon02,
        body: `<b>Estudiá</b> en cualquier institución `,
        delay: 500,
    },
    {
        icon: cardIcon03,
        body: `<b>Accedé</b> a empleos en la administración pública.`,
        delay: 700,
    },
    {
        icon: cardIcon04,
        body: `<b>Circulá</b> libremente por el espacio Schengen. `,
        delay: 900,
    },
    {
        icon: cardIcon05,
        body: `<b>Podés</b> transmitirle la nacionalidad a tus hijos menores de edad.`,
        delay: 1100,
    },
    {
        icon: cardIcon06,
        body: `<b>Ingresá</b> libremente a otros países de la Unión Europea sin necesidad de tramitar una visa.`,
        delay: 1300,
    },
]


const expalinerStandarList = [
    `Aquellos hijos o nietos de español/a que hubiera sufrido exilio durante la Guerra Civilespañola (1936 – 1939), el franquismo (1939 – 1975) o la transición (1975 – 1978) y renunciado a su nacionalidad española.`,
    `Aquellos que sean hijos de madre originariamente española que, por contraer matrimonio con un extranjero antes de 1978, hubiera perdido o renunciado a su nacionalidad española.`,
    `Aquellos que sean hijos de nacionalizados españoles por Ley 52/2007.`,
    `Aquellos que sean hijos de nacionalizados por la presente Ley de Memoria Democrática.`,
]

const explainerHigligthListTitle = [
    `Mediante la instrucción <span>(reglamentación) </span>del día 25 de octubre, se incorpora el siguiente supuesto:`
]

const explainerHigligthList = [
    `Los nacidos fuera de España de padre, madre, abuelo o abuela, que originalmente hubieran sido españoles.`,
    `Se consideran originariamente españoles los nacidos de padre o madre españoles independientemente de que hayan nacido en España o en el exterior. (ver cada caso).`,

]

const explainer2StandarList = [
    `Te vas a ahorrar el estrés, la pérdida de tiempo y dinero al buscar información y documentación en lugares inadecuados.`,
    `Podés delegar la complejidad y burocracia excesiva en nosotros, incluyendo la gestión de documentos de más de 100 años de antigüedad.`,
    `La falta de tiempo, los temores y el riesgo de que el consulado rechace la carpeta o solicitud de nacionalidad ya no será un problema.`,
    `Nos encargamos de obtener un turno consular y nos aseguramos de reunir todos los documentos necesarios para el trámite y armado de carpeta.`,
    `Te brindamos seguridad y tranquilidad al encomendarnos una gestión tan crucial como esta.`,
]

const servicios = [
    {
        title: `<span>Agilización</span> <br/>de los plazos`,
        body: `gracias a nuestro experimentado equipo y nuestra red de colaboradores externos.`,
    },
    {
        title: `<span>Recopilación</span> de toda la <br/>documentación`,
        body: `necesaria, actualizada y legalizada según los requisitos.`,
    },
    {
        title: `<span>Completado</span> de anexos y <br/>formularios específicos`,
        body: `requeridos por cada <br/>Consulado.`,
    },
    {
        title: `<span>Acceso</span> directo a nuestro <br/>personal`,
        body: `de forma física o virtual, en nuestras oficinas en CABA o a través de whatsapp.`,
    },
    {
        title: `<span>Firma</span> de un <br/>contrato vinculante`,
        body: `previo al inicio de la gestión, para tu tranquilidad y seguridad.`,
    },
    {
        title: `<span>Envío</span> de la <br/>documentación`,
        body: `de forma virtual y física, a través de correo certificado a cualquier parte de Argentina y el mundo
`,
    },
]

export {
    cardData,
    expalinerStandarList,
    explainerHigligthListTitle,
    explainerHigligthList,
    explainer2StandarList,
    servicios,
}