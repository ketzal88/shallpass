import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import styles from './FooterLanding.module.scss'
import { logoPassFullColor } from '../../assets'

export const FooterLanding = () => {
    const date = new Date()

  return (
    <Container fluid className={`${styles.footerLanding}`}>
        <Row>
            <Col>
                <Row className={` ${styles.logo}`}>
                    <Col className={`${styles.imgFooter}`}>
                        <Image src={logoPassFullColor} height={22}/>
                    </Col>
                    <Col className={`${styles.claimFooter}`}>
                        <p>Confía en shallpass</p>
                    </Col>
                </Row>
            </Col>
            <Col className={`text-end ${styles.date}`}> 
                © Copyright {date.getFullYear()}. All Rights Reserved.
            </Col>
        </Row>
    </Container>
  )
}
