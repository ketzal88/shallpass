import React from 'react'

import styles from './HighLigthText.module.scss'
import { Col, Row } from 'react-bootstrap'
import DOMPurify from 'dompurify';

export const HighLigthText = ({ text = `Texto destacado` }) => {

    const sanitizer = DOMPurify.sanitize;

    return (
        <Row className={`${styles.hightLightText} justify-content-md-center`}>
            <Col md={10} style={{ padding: '0px' }}>
                < h2 dangerouslySetInnerHTML={{ __html: sanitizer(text) }} />
            </Col>
        </Row>
    )
}
