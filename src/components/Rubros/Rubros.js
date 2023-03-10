import React from 'react'
import { Card, Row } from 'react-bootstrap'

import './Rubros.scss'


export const Rubros = ({data}) => {

    const rubros = data
    return (
        <Row id='rubros' xs={1} md={4} className="g-4">
            {rubros.map(({icon, title, sTitle, body}, i) =>
                <Card
                    key={i}
                >
                    <Card.Img src={icon} />
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{sTitle}</Card.Subtitle>
                    <Card.Body> {body} </Card.Body>
                </Card>
            )}
            
        </Row>
    )
}
