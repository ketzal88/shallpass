import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'

import styles from './CardGrid.module.scss'
import DOMPurify from 'dompurify'

export const CardGrid = ({ cardData, xsColum = 1, mdColumn = 2, lgColum = 3 }) => {

    const sanitizer = DOMPurify.sanitize;

    return (
        <Row className={` ${styles.cardGrid} justify-content-md-center`}>
            <Col lg={10} style={{ padding: '0px' }}>
                <Row xs={xsColum} md={mdColumn} lg={lgColum} className={`g-4`}>
                    {cardData.map((data, id) => (
                        <Col
                            key={id}
                            className={`${styles.cardItem}`}
                            data-aos="fade-up"
                            data-aos-delay={data.delay}
                        >
                            <Card className={`${styles.cardCont} h-100`}>
                                <Card.Title className={`${styles.cardIcon}`}>
                                    <Image src={data.icon} />
                                </Card.Title>
                                <Card.Body style={{ padding: '0px' }}><p dangerouslySetInnerHTML={{ __html: sanitizer(data.body) }} /></Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
}
