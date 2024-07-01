import React from 'react'

import styles from './HeroBannerV2.module.scss'
import { Col, Image, Row, Button } from 'react-bootstrap'
import useScreenSize from '../../../hooks/useScreenSize';
import DOMPurify from 'dompurify';
import { vectorCircle } from '../../../assets';
import useScrollTo from '../../../hooks/useScrollTo';

export const HeroBannerV2 = ({ heroTex, spanText, smallText, explainer, video, videoMp4, videoMobile, videoMobileMp4, poster, pageId }) => {

    const { isMobile, viewport } = useScreenSize();

    const sanitizer = DOMPurify.sanitize;

    const scrollTo = useScrollTo();

    return (
        <Row className={`${styles.main}`}>
            <Col className={`${styles.heroContainer}`} >
                <Col className={`${styles.heroText}`}>
                    {smallText && <small>{smallText}</small>}
                    <h1 >
                        <span dangerouslySetInnerHTML={{ __html: sanitizer(heroTex) }} />
                        <span className={`${styles.spanText}`} dangerouslySetInnerHTML={{ __html: sanitizer(spanText) }} />
                    </h1>
                    {explainer && <p>{explainer}</p>}
                    <Col className={`${styles.ctaContainer}  h-100 `}>
                        <Col className='d-flex'>
                            <Button
                                className="rounded-pill"
                                onClick={() => scrollTo(pageId)}
                            >
                                Enviar consulta
                            </Button>
                            <Image className={`${styles.vectorColor}`} src={vectorCircle} alt='flecha hacia la derecha' />
                        </Col>
                    </Col>

                </Col>
                <Col className={`${styles.videoContainer}`}>
                    {
                        isMobile && viewport.height > viewport.width
                            ? <video playsInline muted autoPlay loop poster={poster} src={videoMobileMp4} type="video/mp4" />
                            : <video playsInline muted autoPlay loop poster={poster} src={videoMp4} type="video/mp4" />
                    }
                    <Col className={`${styles.sombra}`}>
                    </Col>
                </Col>

            </Col>
        </Row>
    )
}
