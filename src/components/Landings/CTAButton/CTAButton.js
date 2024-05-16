import React from 'react'
import { Button, Image } from 'react-bootstrap'

import { vector } from '../../../assets'
import { useDynamicNavigation } from '../../../hooks/useDynamicNavigation '
import { useMediaQuery } from 'react-responsive'

import styles from './CTAButton.module.scss'

export const CTAButton = ({ text = `Enviar consulta`, textMobile = `Consultar` }) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 526px)' })

    const navigate = useDynamicNavigation();

    return (


        <Button
            className={`${styles.button} rounded-pill`}
            onClick={navigate({ newTab: true })}

        >
            {isTabletOrMobile
                ? (<><span>{textMobile}</span><Image src={vector} width='16px' height='16px' /> </>)
                : (<><span>{text}</span><Image src={vector} width='16px' height='16px' /> </>)
            }
        </Button>

    )
}
