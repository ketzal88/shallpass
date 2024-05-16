import React from 'react'
import { Atencion } from '../components/Landings/Atencion/Atencion'
import { Col, Row } from 'react-bootstrap'

import styles from './Landings.module.scss'
import { HeaderCTA } from '../components/Landings/HeaderCTA/HeaderCTA'
import { HeroBanner } from '../components/Landings/HeroBanner/HeroBanner'
import { espanolHeroVideoMp4, espanolHeroVideoWebm, posterEspanol } from '../assets'
import { HighLigthText } from '../components/Landings/HighLigthText/HighLigthText'
import { CardGrid } from '../components/Landings/CardGrid/CardGrid'
import { cardData, expalinerStandarList, explainerHigligthList, explainerHigligthListTitle } from '../data/ciudadaniaEspData'
import { Explainer } from '../components/Landings/Explainer/Explainer'

export const CiudadaniaEspanola = () => {
    return (
        <Row className={`justify-content-md-center`}>
            <Col className={`${styles.mian}`}>
                <Atencion />
                <HeaderCTA />
                <HeroBanner
                    heroTex={`Conviértete <br/>en `}
                    spanText={`Ciudadano <br/>Español`}
                    smallText={`Abraza un futuro de oportunidades`}
                    explainer={`Realizá estudios, obtené un trabajo formal, ingresá de forma libre a otros países fuera de la unión europea, sin necesidad de tramitar una visa, entre otros beneficios.`}
                    poster={posterEspanol}
                    videoMp4={espanolHeroVideoMp4}
                    video={espanolHeroVideoWebm}
                />
                <HighLigthText text={`Beneficios <br/>de obtener la <br/>ciudadanía <br/>española`} />
                <CardGrid cardData={cardData} />
                <Explainer
                    title={`Quienes pueden solicitar la `}
                    titleSpan={`ciudadanía española?`}
                    standarList={expalinerStandarList}
                    higligthListTitle={explainerHigligthListTitle}
                    hihligthList={explainerHigligthList}
                />
            </Col>
        </Row>
    )
}
