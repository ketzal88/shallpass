import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';

import styles from './Explainer.module.scss'
import { CTAButton } from '../CTAButton/CTAButton';

export const Explainer = ({ dark = false, title, titleSpan, standarList, hihligthList = true, higligthListTitle, }) => {
    const sanitizer = DOMPurify.sanitize;

    const [darck, setDarck] = useState(false);

    useEffect(() => {

        setDarck(dark)

    }, [darck, dark]);


    return (
        <Row className={` 
            ${styles.explainer} 
            justify-content-md-center
            ${darck === true ? (styles.dark) : (styles.light)}
        `}

        >
            <Col md={10}
                className={`
                    ${styles.main}
                    `}>

                <Row className={``}>
                    <Col className={`${styles.title}`} xs={12} md={4} data-aos="zoom-out">
                        <h2 className={styles.heroText}>
                            <span dangerouslySetInnerHTML={{ __html: sanitizer(title) }} />
                            <span className={`${styles.spanText}`} dangerouslySetInnerHTML={{ __html: sanitizer(titleSpan) }} />
                        </h2>
                    </Col>
                    {standarList &&
                        <Col xs={12} md={{ span: 6, offset: 2 }} >
                            <ul className={`${styles.standarList}`}>
                                {standarList.map((li, id) => (
                                    <li
                                        key={id}
                                        dangerouslySetInnerHTML={{ __html: sanitizer(li) }}
                                        data-aos="fade-up"
                                        data-aos-delay={(id + 1) * 200}
                                        data-aos-anchor-placement="top-bottom"
                                    />
                                ))}
                            </ul>
                            {hihligthList &&
                                <Col className={`${styles.higligthList}`}>
                                    {higligthListTitle.map((title, id) => (
                                        <p key={id} className={`${styles.higligthListTitle}`} dangerouslySetInnerHTML={{ __html: sanitizer(title) }} />
                                    ))}
                                    <ul className={`${styles.standarList}`}>
                                        {hihligthList.map((li, id) => (
                                            <li key={id} dangerouslySetInnerHTML={{ __html: sanitizer(li) }} />
                                        ))}
                                    </ul>
                                </Col>
                            }
                            <Row>
                                <Col lg={5} >
                                    <Row style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                                        <CTAButton text='Consulta gratis' />
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    }
                </Row>
            </Col>
        </Row>
    )
}
