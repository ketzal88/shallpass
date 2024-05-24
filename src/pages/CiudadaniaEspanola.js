import React from 'react'
import { Atencion } from '../components/Landings/Atencion/Atencion'
import { Col, Row } from 'react-bootstrap'

import { HeaderCTA } from '../components/Landings/HeaderCTA/HeaderCTA'
import { HeroBanner } from '../components/Landings/HeroBanner/HeroBanner'
import { espanolHeroVideoMobileMp4, espanolHeroVideoMp4, espanolHeroVideoWebm, posterEspanol } from '../assets'
import { HighLigthText } from '../components/Landings/HighLigthText/HighLigthText'
import { CardGrid } from '../components/Landings/CardGrid/CardGrid'
import { cardData, expalinerStandarList, explainer2StandarList, explainerHigligthList, explainerHigligthListTitle, servicios } from '../data/ciudadaniaEspData'
import { Explainer } from '../components/Landings/Explainer/Explainer'
import { Explainer2 } from '../components/Landings/Explainer2/Explainer2'
import { HeroText } from '../components/Landings/HeroText/HeroText'
import { CardGrid2 } from '../components/Landings/CardGrid2/CardGrid2'
import { Price } from '../components/Landings/Price/Price'
import { FooterLanding } from '../components/Landings/FooterLanding/FooterLanding'
import { FormSection } from '../components/FormSection/FormSection'
import useScreenSize from '../hooks/useScreenSize'

import styles from './Landings.module.scss'


export const CiudadaniaEspanola = () => {

    const isMobile = useScreenSize()

    return (
        <>
            <Row className={`justify-content-md-center ${styles.bgR}`}>
                <Atencion />
                <Col className={`${styles.main}`}>

                    <HeaderCTA />
                    <HeroBanner
                        heroTex={`CONVERTITE <br/>en `}
                        spanText={`Ciudadano <br/>Español`}
                        smallText={`Abrazá un futuro de oportunidades`}
                        explainer={`Realizá estudios, obtené un trabajo formal, ingresá de forma libre a otros países fuera de la unión europea, sin necesidad de tramitar una visa, entre otros beneficios.`}
                        poster={posterEspanol}
                        videoMp4={espanolHeroVideoMp4}
                        video={espanolHeroVideoWebm}
                        videoMobile={espanolHeroVideoMobileMp4}
                        videoMobileMp4={espanolHeroVideoMobileMp4}
                    />
                    <HighLigthText text={`Beneficios <br/>de obtener la <br/>ciudadanía <br/>española`} />
                    <CardGrid cardData={cardData} />
                </Col>
            </Row>
            <Row className={`justify-content-md-center ${styles.bgL}`}>
                <Row className={`justify-content-md-center ${styles.explainerContainer}`}>
                    <Col className={`${styles.mainFullW}`}>
                        <Explainer
                            title={`Quienes pueden solicitar la `}
                            titleSpan={`ciudadanía española?`}
                            standarList={expalinerStandarList}
                            higligthListTitle={explainerHigligthListTitle}
                            hihligthList={explainerHigligthList}
                        />
                    </Col>
                </Row>
                <Row className={`justify-content-md-center  ${styles.explainerContainer}`}>
                    <Col className={`${styles.mainFullW}`}>
                        <Explainer2
                            title={`Beneficios de tramitar tu carpeta con Shall Pass`}
                            copy={` Nos enfrentamos a una serie de desafíos al buscar obtener la nacionalidad española, nosotros lo sabemos y te vamos a asesorar durante todo el proceso.`}
                            standarList={explainer2StandarList}
                        />
                    </Col>
                </Row>
                <Col className={`${styles.main}`}>
                    <HeroText titel={`Servicio de armado de<br/>carpeta`} copy={`Con nuestro servicio de armado de carpeta encontrarás`} />
                    <CardGrid2 cardData={servicios} />
                    <Price />
                    {isMobile && <Col style={{ minHeight: '64px' }} />}
                    <FormSection />
                    {isMobile && <Col style={{ minHeight: '64px' }} />}
                    <FooterLanding />
                </Col>
            </Row>

        </>
    )
}
