import React from 'react'
import { Button, Image } from 'react-bootstrap'

import { vector } from '../../../assets'
// import { useDynamicNavigation } from '../../../hooks/useDynamicNavigation '
import { useMediaQuery } from 'react-responsive'

import styles from './CTAButton.module.scss'
import useScrollTo from '../../../hooks/useScrollTo'

export const CTAButton = ({ text = `Enviar consulta`, textMobile = `Consultar`, idPage = 'espanola' }) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 526px)' })

    // const navigate = useDynamicNavigation({ subject: `${process.env.REACT_APP_CIUDADANIA_SUBJECT}` });

    const scrollTo = useScrollTo()

    return (


        <Button
            className={`${styles.button} rounded-pill`}
            // onClick={navigate({ newTab: true })}
            onClick={() => scrollTo(idPage)}

        >
            {isTabletOrMobile
                ? (<><span>{textMobile}</span><Image src={vector} width='16px' height='16px' /> </>)
                : (<><span>{text}</span><Image src={vector} width='16px' height='16px' /> </>)
            }
        </Button>

    )
}
