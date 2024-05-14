import React from 'react'

import styles from './HeroBanner.module.scss'
import { Row } from 'react-bootstrap'
import DOMPurify from 'dompurify';

export const HeroBanner = ({ heroTex, spanText, smallText, explainer }) => {

    const sanitizer = DOMPurify.sanitize;

    return (
        <Row className={styles.main}>
            {smallText && <small>{smallText}</small>}
            <h1 className={styles.heroText}>
                <span dangerouslySetInnerHTML={{ __html: sanitizer(heroTex) }} />
                <span className={`${styles.spanText}`} dangerouslySetInnerHTML={{ __html: sanitizer(spanText) }} />
            </h1>
            {explainer && <p>{explainer}</p>}
        </Row>
    );
}
