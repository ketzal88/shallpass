import React from 'react'

import styles from './HeroBanner.module.scss'
import { Button, Col, Image, Row } from 'react-bootstrap'
import DOMPurify from 'dompurify';
import { vectorCircle } from '../../../assets';
import { useDynamicNavigation } from '../../../hooks/useDynamicNavigation ';
import useIsIOS from '../../../hooks/useIsIOS';

export const HeroBanner = ({ heroTex, spanText, smallText, explainer, video, videoMp4, poster }) => {

    const sanitizer = DOMPurify.sanitize;

    const navigate = useDynamicNavigation();

    return (
        <Row className={styles.main} >
            <Col style={{ position: 'relative', padding: '0px' }}>
                <Col
                    className={`${styles.textConatiner}`}
                >
                    {smallText && <small>{smallText}</small>}
                    <h1 className={styles.heroText}>
                        <span dangerouslySetInnerHTML={{ __html: sanitizer(heroTex) }} />
                        <span className={`${styles.spanText}`} dangerouslySetInnerHTML={{ __html: sanitizer(spanText) }} />
                    </h1>
                    {explainer && <p>{explainer}</p>}
                    <Col className={`${styles.ctaContainer}  h-100 `}>
                        <Col className='d-flex'>
                            <Button
                                className="rounded-pill"
                                onClick={navigate({ newTab: true })}
                            >
                                Enviar consulta
                            </Button>
                            <Image className={`${styles.vectorColor}`} src={vectorCircle} />
                        </Col>
                    </Col>
                </Col>

                <Col className={`${styles.videoBack}`}>
                    {
                        useIsIOS === true
                            ? <video className={`${styles.videoStyle}`} playsInline muted autoPlay loop poster={poster} src={videoMp4} type="video/mp4" />
                            : <video className={`${styles.videoStyle}`} playsInline muted autoPlay loop poster={poster} src={video} type="video/webm" />
                    }
                </Col>
            </Col>
        </Row>
    );
}
