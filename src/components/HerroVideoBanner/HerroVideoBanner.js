import React from 'react'


import styles from './HerroVideoBanner.module.scss'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { heroVideo, vector, vectorWhite } from '../../assets'

export const HerroVideoBanner = ({video}) => {
  return (
    <Container className={`${styles.HerroVideoBanner}`}>
          <Row className='h-100 align-items-center'>
            <Col className={`${styles.heroText}`} md={{ span: 10, offset: 1 }}>
                <small>Internacionalizá tus negocios</small>
                <h1>ARMÁ TU LLC <br/>EN <span>3 DÍAS</span></h1>
                <h4>Creá una cuenta bancaria en <span>USA y <br/>cobrá en dolares.</span></h4>
                <Col className={`${styles.ctaContainer}  h-100 `}>
                    <Col className='d-flex'>
                        <Button className="rounded-pill">
                            Enviar consulta
                        </Button>
                        <Image className={`${styles.vectorColor}`} src={vectorWhite} />
                    </Col>    
                </Col>
            </Col>
            <Col className={`${styles.videoBack}`}>
                <video src={video} className={`${styles.videoStyle}`} muted autoPlay loop />
            </Col>
        </Row>
    </Container>
  )
}
