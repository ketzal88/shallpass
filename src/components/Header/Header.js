import React from 'react'
import { Col, Form, Image, Row } from 'react-bootstrap'
import { circleGrad } from '../../assets'

import './Header.scss'

export const Header = ({ logo }) => {
  return (
      <Row id='header'>
        <Col
          id='logo'
          md={6}
          >
          <Image src={logo}  />
          <Col>
            <h1>
              Nos especializamos en la atención de<br/> <span>Comercios, Emprendedores y PyMES.</span>
            </h1>
          </Col>
        </Col>
        <Col md={6}>
          <Row
            className='justify-content-end'
            >
              <Form></Form>
          </Row>
        </Col>
        <Col className='imageGradient' >
          <Image src={circleGrad} />
        </Col>
      </Row>


  )
}
