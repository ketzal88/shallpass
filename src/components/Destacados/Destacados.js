import React from 'react'

import styles from './Destacados.module.scss'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { destacadoIcon01, destacadoIcon02, destacadoIcon03, destacadoIcon04, logoPassFullColor, vector } from '../../assets'
import DOMPurify from 'dompurify'

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
        <Row md={4} className={`align-items-center h-100 g-4`}>
            {
                data.map( data => (
                    <Col
                        className='h-100'
                        key={data.id} 
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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </Container>
  )
}
