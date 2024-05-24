import React from 'react'
import { Col, Row } from 'react-bootstrap'

import styles from './Price.module.scss'
import { CTAButton } from '../CTAButton/CTAButton'

export const Price = () => {


    return (
        <Row className={` ${styles.price} justify-content-md-center`}>
            <Col md={5} style={{ padding: '0px' }}>
                <Row className={`${styles.title}`}>
                    <Col className={`${styles.claim}`}>Desde</Col>
                    <Col className={`${styles.piceContaimer}`}>
                        <Col className={`${styles.currency}`}>U$D</Col>
                        <Col className={`${styles.amount}`}>1200</Col>
                    </Col>
                </Row>
                <Row style={{ margin: '0px' }}>
                    <p>Antes de aceptar el caso, coordinaremos una consulta profesional (presencial o por video) para analizar su árbol genealógico, la información y documentación que posee, así como para aclarar todas sus dudas.</p>
                </Row>
                <CTAButton text='Enviar consulta' textMobile='Enviar consulta' />
            </Col>
        </Row>
    )
}
