import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'

import styles from './HeaderCTA.module.scss'
import { logoShallPassBaloon, vector } from '../../../assets'
import { useDynamicNavigation } from '../../../hooks/useDynamicNavigation '
import { useMediaQuery } from 'react-responsive'

export const HeaderCTA = ({ whatsAppSubject = process.env.REACT_APP_CIUDADANIA_SUBJECT }) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 526px)' })

    const navigate = useDynamicNavigation({ subject: `${whatsAppSubject}` });

    return (
        <Row className={`${styles.main}`}>
            <Col xs={4} md={2} className={`${styles.logoContainer}`}>
                <Image src={logoShallPassBaloon} alt='Logo de Shall Pass' />
            </Col>
            <Col className={`${styles.ctaButtonContainer} h-100`}>
                <Button
                    className="rounded-pill"
                    onClick={navigate({ newTab: true })}
                >
                    {isTabletOrMobile
                        ? (<><span>Consultar </span><Image src={vector} width='16px' height='16px' alt='flecha hacia la derecha' /> </>)
                        : (<><span>Enviar consulta </span><Image src={vector} width='16px' height='16px' alt='flecha hacia la derecha' /> </>)
                    }
                </Button>
            </Col>
        </Row>
    )
}
