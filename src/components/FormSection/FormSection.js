import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FormLanding } from '../Form/FormLandig'
import styles from './FormSection.module.scss'

export const FormSection = ({ submitText, id }) => {



  return (
    <Container className={`${styles.formSection}`}>
      <Row className={`justify-content-md-center h-100`}>
        <Col md={6}

        >
          <Col>
            <h6>Confiá en shallpass</h6>
            <h4>Déjanos tu email y un asesor de Shallpass te estará contactando<br /><span>a la brevedad</span></h4>
          </Col>
          <Col >
            <FormLanding submitText={submitText} TEMPLATE_ID={process.env.REACT_APP_LANDING_TEMPLATE_ID} id={id} />
          </Col>
        </Col>
      </Row>
    </Container>
  )
}
