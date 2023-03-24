import React from 'react'
import { Col,  Image, Row } from 'react-bootstrap'
import { circleGrad } from '../../assets'
import { Form } from '../Form/Form'

import './Header.scss'

export const Header = ({ logo }) => {

  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env
 
  return (
      <Row id='header'>
        <Col
          id='logo'
          md={6}
          xs={12}
          >
          <Image src={logo}  />
          <Col>
          <h1 className='d-none d-sm-block'>
              Nos especializamos en la atención de<br/> <span>Comercios, Emprendedores y PyMES.</span>
          </h1>
          <h1 className='d-block d-sm-none'>
              Nos especializamos en la atención de <span>Comercios, Emprendedores y PyMES.</span>
          </h1>
          </Col>
        </Col>
      <Col md={6} xs={12}>
          <Row
            className='justify-content-end'
            >
          <Col className=''>
              <Form  
                SERVICE_ID={REACT_APP_SERVICE_ID}
                TEMPLATE_ID={REACT_APP_TEMPLATE_ID}
                PUBLIC_KEY={REACT_APP_PUBLIC_KEY}
                id='fromHeader'  
              />
              </Col>
          </Row>
        </Col>
        <Col className='imageGradient' >
          <Image src={circleGrad} />
        </Col>
      </Row>
  )
}
