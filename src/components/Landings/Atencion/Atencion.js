import React from 'react'
import { Col, Row } from 'react-bootstrap'

import styles from './Atencion.module.scss'

export const Atencion = () => {
    return (
        <Row className={`${styles.atencionContainer}`}>
            <Col>
                <p>
                    Contamos con atención presencial en nuestras <span>Oficinas en CABA</span>
                </p>
            </Col>
        </Row>
    )
}
