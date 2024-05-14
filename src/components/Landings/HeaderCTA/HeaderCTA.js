import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'

import styles from './HeaderCTA.module.scss'
import { logoShallPassBaloon, vector } from '../../../assets'
import { useDynamicNavigation } from '../../../hooks/useDynamicNavigation '
import { useMediaQuery } from 'react-responsive'

export const HeaderCTA = () => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 526px)' })

    const navigate = useDynamicNavigation();

    return (
        <Row className={`${styles.main}`}>
            <Col md={2} className={`${styles.logoContainer}`}>
                <Image src={logoShallPassBaloon} />
            </Col>
            <Col className={`${styles.ctaButtonContainer} h-100`}>
                <Button
                    className="rounded-pill"
                    onClick={navigate({ newTab: true })}
                >
                    {isTabletOrMobile
                        ? (<><span>Consultar </span><Image src={vector} width='16px' height='16px' /> </>)
                        : (<><span>Enviar consulta </span><Image src={vector} width='16px' height='16px' /> </>)
                    }
                </Button>
            </Col>
        </Row>
    )
}
