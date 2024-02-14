import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import useScreenSize from '../../hooks/useScreenSize'
import useIsIOS from '../../hooks/useIsIOS'
import { vectorCircle } from '../../assets'
import styles from './HerroVideoBanner.module.scss'

export const HerroVideoBanner = ({ video, videoMp4, poster }) => {

    const isMobile = useScreenSize();

    const isIOS = useIsIOS()

    return (
        <Container className={`${styles.HerroVideoBanner}`}>
            <Row className='h-100 align-items-center' style={{ margin: '0px' }}>
                <Col className={`${styles.heroText}`} md={{ span: 10, offset: 1 }}>
                    <small>Internacionalizá tus negocios</small>
                    <h1>ARMÁ {isMobile && <br />}TU LLC <br />EN <span>3 DÍAS</span></h1>
                    <h4>Creá una cuenta bancaria en <span>USA y {!isMobile && <br />}cobrá en dolares.</span></h4>
                    <Col className={`${styles.ctaContainer}  h-100 `}>
                        <Col className='d-flex'>
                            <Button className="rounded-pill">
                                Enviar consulta
                            </Button>
                            <Image className={`${styles.vectorColor}`} src={vectorCircle} />
                        </Col>
                    </Col>
                </Col>
                <Col className={`${styles.videoBack}`}>
                    {
                        isIOS === true
                            ? <video className={`${styles.videoStyle}`} playsInline muted autoPlay loop poster={poster} src={videoMp4} type="video/mp4" />
                            : <video className={`${styles.videoStyle}`} playsInline muted autoPlay loop poster={poster} src={video} type="video/webm" />
                    }
                </Col>
            </Row>
        </Container>
    )
}
