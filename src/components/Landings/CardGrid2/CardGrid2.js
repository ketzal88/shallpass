import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

import DOMPurify from 'dompurify'

import styles from './CardGrid2.module.scss'

export const CardGrid2 = ({ cardData, xsColum = 1, mdColumn = 2, lgColum = 3 }) => {

    const sanitizer = DOMPurify.sanitize;

    return (
        <Row className={` ${styles.cardGrid} justify-content-md-center`}>
            <Col md={10} style={{ padding: '0px' }} className='h-100'>
                <Row xs={xsColum} md={mdColumn} lg={lgColum} className={`g-4`}>
                    {cardData.map((data, id) => (
                        <Col key={id} className={`
                                        ${styles.cardItem} 
                                        h-100
                                        ${((lgColum % 2 === 1) && (id === 1 || id === 4 || id === 7)) ? (styles.center) : ''}
                                        `}>
                            <Card className={`${styles.cardCont}`}>
                                <Card.Title className={`${styles.cardTitle2}`}>
                                    <h4 dangerouslySetInnerHTML={{ __html: sanitizer(data.title) }} />
                                </Card.Title>
                                <Card.Body className={`${styles.cardBody2}`} style={{ padding: '0px' }}><p dangerouslySetInnerHTML={{ __html: sanitizer(data.body) }} /></Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Col>
        </Row>
    )
}
