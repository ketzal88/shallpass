import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

import styles from './FooterLanding.module.scss'
import { logoShallPassBaloon } from '../../../assets'

export const FooterLanding = () => {
    const date = () => {
        return new Date().getFullYear()
    }
    return (
        <Row className={`${styles.FooterLanding}`}>
            <Col xs={12} md={6} className={`${styles.brand}`} >
                <Image src={logoShallPassBaloon} height={36.5} />
                <p>Confía en shallpass</p>
            </Col>
            <Col className={`${styles.date}`} >
                <p>© Copyright {date()}. All Rights Reserved.</p>
            </Col>
        </Row>
    )
}
