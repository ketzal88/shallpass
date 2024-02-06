import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { FormLanding } from '../Form/FormLandig'

import styles from './FormSection.module.scss'

export const FormSection = () => {
  return (
    <Container className={`${styles.formSection}`}>
        <Row className={`justify-content-md-center h-100`}>
            <Col md={10}>
                <Row>
                    <Col md={{ span: 5 }}>
                      <h6>Confiá en shallpass</h6>
                      <h4>Ponete en contacto con nosotros, <span>te esperamos</span></h4>
                    </Col>
                      <Col md={{ offset: 1 }} >
                        <FormLanding submitText='Enviar consulta' />
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}
