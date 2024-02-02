import React from 'react'


import styles from './Confia.module.scss'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { celphone, confia01, confia02, confia03, confia04 } from '../../assets'

export const Confia = () => {
    return (
        <Container className={`${styles.confia}`}>
            <Row className={`mb-5`} >
                <Col></Col>
                <Col
                    md={7}
                    data-aos="zoom-out"
                    data-aos-delay='500'
                >
                    <h1>Confiá en SHALLPASS<br />
                        <span>
                            para comprender tus necesidades
                        </span>
                    </h1>
                </Col>
                <Col></Col>
            </Row>
            <Col style={{position: 'relative', border: '1px solid transparent'}} className='h-100 w-100'>
                <Row className={`${styles.row2} mt-5 justify-content-md-center`}>
                    <Col md={2}>
                        <Col className={`${styles.itemContainer}`}>
                            <Col 
                                className={`${styles.itemLeft}`}
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0"
                            >
                                <Image src={confia01}/>
                                <p>Ideal para tu <br/><span>tienda de Amazon, agencia, venta de servicios o productos</span></p>
                            </Col>
                        </Col>
                        <Col className={`${styles.itemContainer}`}>
                            <Col 
                                className={`${styles.itemLeft}`}
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="200"
                                data-aos-offset="1"
                            >
                                <Image src={confia02} />
                                <p>Recibí y realizá <span>pagos a cualquier parte del mundo</span></p>
                            </Col>
                        </Col>
                    </Col>
                    <Col md={6} className={`${styles.imagenPhone} h-100`}>
                        <Image src={celphone} />
                    </Col>
                    <Col md={2}>
                        <Col className={`${styles.itemContainer}`}>
                            <Col 
                                className={`${styles.itemRight}`}
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="300"
                                data-aos-offset="2"
                            >
                                <Image src={confia03} />
                                <p><span>Cobrá en USD</span> por internet utilizando Stripe, Wise, Payoneer</p>
                            </Col>
                        </Col>
                        <Col className={`${styles.itemContainer}`}>
                            <Col 
                                className={`${styles.itemRight}`}
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="400"
                                data-aos-offset="3"
                            >
                                <Image src={confia04} />
                                <p>Utilizá tu<br/><span>tarjeta de débito internacional </span><br/>sin restricciones</p>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </Col>

        </Container>
    )
}
