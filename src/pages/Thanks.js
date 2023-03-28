import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Thanks.scss'

export const Thanks = () => {
    return (
      <Row id='thanks'>
          <Col xs={12} className='d-flex justify-content-center'>
              {/* Visible only on sm	.d-none .d-sm-block .d-md-none */}
              <h1>
                  Gracias por contactanos.<br/> <span>Nos comunicaremos a la brevedad</span>
              </h1>
          </Col>
            <Col xs={12}>
            <Link to={'/'}>
                <div>Volver al home</div>
            </Link>
            </Col>
      </Row>

    )
}
