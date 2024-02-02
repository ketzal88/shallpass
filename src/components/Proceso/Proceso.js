import React from 'react'

import styles from './Proceso.module.scss'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { procesIcon, proceso01, proceso02, proceso03, vector } from '../../assets'



export const Proceso = () => {
    const data = [
        { 
            title: `En 1/3 días`,
            subTitle: `Registras la compañia`,
            link: '#',
            img: proceso01,
            delay: 0,
        },
        { 
            title: `En 3/7 días`,
            subTitle: `EIN - Número y Registro fiscal`,
            link: '#',
            img: proceso02,
            delay: 300,
        },
        { 
            title: `En 1/3 días`,
            subTitle: `Abris tu cuenta bancaria`,
            link: '#',
            img: proceso03,
            delay: 600,
        },
    ]
    return (
        <Container className={`${styles.proceso}`}>
            <Row className={`justify-content-md-center h-100`}>
                <Col className={`${styles.procesoContainer} h-100`} md={10}>
                    <Row>
                        <Col 
                            md={7}
                            className='h-100'
                        >
                            <h1>Un proceso <br/><span>rápido y <br/>seguro</span></h1>
                        </Col>
                        <Col className={`h-100 text-start`}>
                            <p>Sin papeleos ni dolores de cabeza legales. Nuestra plataforma en línea automatiza todo el proceso de constitución de empresas con cumplimiento de normativas y atención al cliente global 24/7.</p>
                            <Button className={`rounded-pill`} >Enviar consulta <Image src={vector} width={24}/></Button>
                        </Col>
                    </Row>
                    <Row className='g-3' style={{ marginTop: '74px' }}>
                        {
                            data.map((proceso, id)=>(
                                <Col 
                                    key={id}
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={proceso.delay}
                                    data-aos-offset="0"
                                >
                                    <Col className={`${styles.procesoIntem}`}>
                                        <Row>
                                            <Col >
                                                <Col>
                                                <h4>{proceso.title}</h4>
                                                <p>{proceso.subTitle}</p>
                                                </Col>
                                            </Col>
                                            <Col md={2} className='text-end' style={{padding: '0 24px 0 0'}}>
                                                <Image src={procesIcon}/>
                                            </Col>
                                        </Row>
                                        <Col>
                                            <Col className={`${styles.imgContainer}`}>
                                                <Image src={proceso.img} fluid />
                                            </Col>
                                        </Col>
                                    </Col>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
