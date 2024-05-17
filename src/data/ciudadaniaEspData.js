import { cardIcon01, cardIcon02, cardIcon03, cardIcon04, cardIcon05, cardIcon06 } from "../assets";

const cardData = [
    {
        icon: cardIcon01,
        body: `Podrás obtener un trabajo formal dentro de la comunidad europea.`,
        delay: 300,
    },
    {
        icon: cardIcon02,
        body: `Podrás realizar estudios en cualquier institución. `,
        delay: 500,
    },
    {
        icon: cardIcon03,
        body: `Accedé a empleos en la administración pública.`,
        delay: 700,
    },
    {
        icon: cardIcon04,
        body: `Tendrás libre circulación por el espacio Schengen.`,
        delay: 900,
    },
    {
        icon: cardIcon05,
        body: `Podrás transmitir la nacionalidad a tus hijos menores de edad.`,
        delay: 1100,
    },
    {
        icon: cardIcon06,
        body: `Ingresá de forma libre a otros países de la unión europea, sin necesidad de una visa.`,
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
    `Podes delegar la complejidad y burocracia excesiva al tener que remitirnos a documentos de más de 100 años de antigüedad.`,
    `La falta de tiempo necesaria para dedicarle a este tipo de gestión, así como varios temores, o el riesgo de que el consulado rechace nuestra carpeta o la solicitud de nacionalidad ya no será un problema.`,
    `Nos ocuparemos de la dificultad para obtener un turno consular, o la posibilidad de no reunir todos los documentos necesarios. `,
    `Te brindaremos seguridad al encomendar en nosotros una gestión tan crucial como esta.`,
]

const servicios = [
    {
        title: `<span>Agilización</span> <br/>de los plazos`,
        body: `Gracias a nuestro experimentado equipo y nuestra red de colaboradores externos.`,
    },
    {
        title: `<span>Recopilación</span> de toda la <br/>documentación`,
        body: `necesaria, actualizada y legalizada según los requisitos.`,
    },
    {
        title: `<span>Completado</span> de anexos y <br/>formularios específicos`,
        body: `Requeridos por cada <br/>Consulado.`,
    },
    {
        title: `<span>Acceso</span> directo a nuestro <br/>personal`,
        body: `De forma física o virtual, en nuestras oficinas en CABA o a través de whatsapp.`,
    },
    {
        title: `<span>Firma</span> de un <br/>contrato`,
        body: `Vinculante previo al inicio de la gestión, para tu tranquilidad y seguridad.`,
    },
    {
        title: `<span>Envío</span> de la <br/>documentación`,
        body: `De forma virtual y física, a través de correo certificado, etc`,
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