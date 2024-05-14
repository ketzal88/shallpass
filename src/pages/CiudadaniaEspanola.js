import React from 'react'
import { Atencion } from '../components/Landings/Atencion/Atencion'
import { Col, Row } from 'react-bootstrap'

import styles from './Landings.module.scss'
import { HeaderCTA } from '../components/Landings/HeaderCTA/HeaderCTA'
import { HeroBanner } from '../components/Landings/HeroBanner/HeroBanner'

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
                />
            </Col>
        </Row>
    )
}
