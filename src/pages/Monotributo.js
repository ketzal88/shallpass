import React from 'react'
import { Atencion } from '../components/Landings/Atencion/Atencion'
import { Col, Row } from 'react-bootstrap'

import { HeaderCTA } from '../components/Landings/HeaderCTA/HeaderCTA'
import { monotributoDescktopMp4, monotributoMobileMp4, posterEspanol } from '../assets'
import { FooterLanding } from '../components/Landings/FooterLanding/FooterLanding'
import { FormSection } from '../components/FormSection/FormSection'
import useScreenSize from '../hooks/useScreenSize'
import { Servicios } from "../components/Servicios/Servicios";

import styles from './Landings.module.scss'
import { HeroBannerV2 } from '../components/Landings/HeroBannerV2/HeroBannerV2'
import { expalinerStandarList, servicios } from '../data/monotributo'
import { ExplainerNoBg } from '../components/Landings/ExplainerNoBg/ExplainerNoBg'


export const Monotributo = () => {


    const isMobile = useScreenSize()

    const idPage = 'monotributo'

    return (
        <>
            <Row className={`justify-content-md-center ${styles.bgR}`}>
                <Atencion />
                <Col className={`${styles.main}`}>
                    <HeaderCTA idTo={idPage} />
                    <HeroBannerV2
                        heroTex={`TU MONOTRIBUTO DE FORMA `}
                        spanText={`CLARA Y SENCILLA`}
                        smallText={`Asesoramiento integral`}
                        explainer={`Orientado a monotributistas prestadores de servicios, emprendedores, freelancers y profesionales que necesitan ayuda con su administración y mantenimiento impositivo.`}
                        poster={posterEspanol}
                        videoMp4={monotributoDescktopMp4}
                        videoMobileMp4={monotributoMobileMp4}
                        pageId={idPage}
                    />
                </Col>
                <Row className={`justify-content-md-center ${styles.explainerContainer}`}  >
                    <Col className={`${styles.mainFullW}`} >
                        <ExplainerNoBg
                            title={`Te ayudamos a comprender como funciona el sistema tributario.`}
                            copy={`Delegá con nosotros todas esas situaciones que te generan estrés.`}
                            standarList={expalinerStandarList}
                            idPage={idPage}

                        />
                    </Col>
                </Row>
            </Row>
            <Servicios cont={servicios} ctaId={idPage} colums={3} separator={false} darkHighlight />
            <Row className={`justify-content-md-center ${styles.bgL}`}>
                <Col className={`${styles.main}`}>
                    <Col style={{ minHeight: '64px' }} />
                    {isMobile && <Col style={{ minHeight: '64px' }} />}
                    <FormSection id={idPage} submitText={'Contactanos'} />
                    {isMobile && <Col style={{ minHeight: '64px' }} />}
                    <FooterLanding />
                </Col>
            </Row>

        </>
    )
}
