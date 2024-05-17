import React from 'react'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'

import styles from './Price.module.scss'
import DOMPurify from 'dompurify'
import { CTAButton } from '../CTAButton/CTAButton'

export const Price = ({ cardData, xsColum = 1, mdColumn = 2, lgColum = 3 }) => {

    const sanitizer = DOMPurify.sanitize;

    return (
        <Row className={` ${styles.price} justify-content-md-center`}>
            <Col md={5} style={{ padding: '0px' }}>
                <Row className={`${styles.title}`}>

                    <Col className={`${styles.claim}`}>Desde</Col> <Col className={`${styles.currency}`}>U$D</Col> <Col className={`${styles.amount}`}>1200</Col>

                </Row>
                <Row>
                    <p>Antes de aceptar el caso, coordinaremos una consulta profesional (presencial o por video) para analizar su árbol genealógico, la información y documentación que posee, así como para aclarar todas sus dudas.</p>
                </Row>
                <CTAButton text='Enviar consulta' />
            </Col>
        </Row>
    )
}
