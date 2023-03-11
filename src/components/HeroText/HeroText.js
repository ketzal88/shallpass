import React from 'react'
import { Col, Row } from 'react-bootstrap'

import './HeroText.scss'

export const HeroText = ({data}) => {

    const {text01, text02, text03} = data

  return (
    <Row id='HeroText'>
        <Col className='cont'>
            <Col id='text01'>{text01}</Col>
            <Col id='text02'><span>{text02}</span></Col>
            <Col id='text03'>{text03}</Col>
        </Col>
    </Row>
  )
}
