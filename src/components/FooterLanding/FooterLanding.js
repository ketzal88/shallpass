import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import styles from './FooterLanding.module.scss'
import { logoPassFullColor } from '../../assets'

export const FooterLanding = () => {
    const date = new Date()

  return (
    <Container fluid className={`${styles.footerLanding}`}>
        <Row>
            <Col xs={12} lg={6}>
                <Row className={` ${styles.logo}`}>

                    <Col xs={6} className={`${styles.imgFooter}`}>
                        <Image src={logoPassFullColor} height={22}/>
                    </Col>
                    <Col xs={6} className={`${styles.claimFooter}`}>
                        <p>Confía en shallpass</p>
                    </Col>
                </Row>
            </Col>
              <Col xs={12} lg={6} className={`text-end ${styles.date}`}> 
                © Copyright {date.getFullYear()}. All Rights Reserved.
            </Col>
        </Row>
    </Container>
  )
}
