import React from 'react'

import styles from './Consultas.module.scss'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { vector } from '../../assets'

export const Consultas = () => {
  return (
    <Container className={`${styles.consultas}`}>
        <Row className='justify-content-md-center'>
            <Col 
                md={6}
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
            >
                <h3>¿Querés hacer una <span>CONSULTA GRATUITA?</span></h3>
                <Button className={`rounded-pill`}>
                      Consulta gratis <Image src={vector} width={24} height={24}/>
                </Button>
            </Col>
        </Row>
    </Container>
  )
}
