import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { circleGrad, quoteIcon } from '../../assets'


import './Quote.scss'

export const Quote = ({data}) => {

    const quote = data


  return (
    <Row id={'Quote'}>
        <Col className='cont'>
            <Row id='rubros' xs={1} md={2} className="g-4">
                {
                    quote.map(({text, logo}, id) =>
                        <Col key={id}>
                            <Card>
                                <Col id='quoteIcon' >
                                    <Image src={quoteIcon} fluid/>
                                </Col>
                                <Card.Body
                                    className='h-100'
                                >
                                    {text}
                                </Card.Body>
                                <Card.Img className='logoSponsor' src={logo}/>
                            </Card>
                        </Col>
                )}
            </Row>
        </Col>
        <Row className='circleGrad' >
            <Image src={circleGrad}  />
        </Row>
    </Row>
  )
}
