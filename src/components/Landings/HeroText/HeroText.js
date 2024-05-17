import DOMPurify from 'dompurify';
import React from 'react'
import { Row } from 'react-bootstrap'

import styles from './HeroText.module.scss'

export const HeroText = ({ titel, copy }) => {

    const sanitizer = DOMPurify.sanitize;

    return (
        <Row className={`${styles.heroTex}`}>
            <h1 dangerouslySetInnerHTML={{ __html: sanitizer(titel) }} />
            <p dangerouslySetInnerHTML={{ __html: sanitizer(copy) }} />
        </Row>
    )
}
