import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import DOMPurify from 'dompurify'

import styles from './Destacados.module.scss'
import { destacadoIcon01, destacadoIcon02, destacadoIcon03, destacadoIcon04, logoPassFullColor, vector } from '../../assets'

export const Destacados = () => {
    const sanitizer = DOMPurify.sanitize;

    const data = [
        {
            id: '001',
            ico: destacadoIcon01,
            text: `Sin necesidad <br/><span>de viajar o visa.</span>`,
            delay: 300,
        },
        {
            id: '002',
            ico: destacadoIcon02,
            text: `Con dirección física <br/><span>y agente registrado <br/>para tu compañía.</span>`,
            delay: 500,
        },
        {
            id: '003',
            ico: destacadoIcon03,
            text: `Obtención de  <span>EIN <br/>ultra rápido</span>`,
            delay: 700,
        },
        {
            id: '004',
            ico: destacadoIcon04,
            text: `Integración de <br/><span>plataformas de pago</span>`,
            delay: 900,
        },
    ]
  return (
    <Container className={`${styles.destacados}`}>
        <Row md={4} className={`${styles.destacadosRow} align-items-center h-100 g-4`}>
            {
                data.map( data => (
                    <Col
                        key={data.id} 
                        className='h-100'
                        data-aos="fade-up"
                        data-aos-delay={data.delay}
                    > 
                        <Col className={`${styles.itemDestacado} h-100`}>

                                <Image src={data.ico} />

                                <p dangerouslySetInnerHTML={{ __html: sanitizer(data.text) }} />

                        </Col>
                    </Col>
                ))
            }

        </Row>
    </Container>
  )
}
