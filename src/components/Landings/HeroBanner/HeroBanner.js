import React from "react";

import { Button, Col, Image, Row } from "react-bootstrap";
import DOMPurify from "dompurify";
import { vectorCircle } from "../../../assets";
import useIsIOS from "../../../hooks/useIsIOS";
import useScreenSize from "../../../hooks/useScreenSize";

import styles from "./HeroBanner.module.scss";
import useScrollTo from "../../../hooks/useScrollTo";

export const HeroBanner = ({
  heroTex,
  spanText,
  smallText,
  explainer,
  video,
  videoMp4,
  videoMobile,
  videoMobileMp4,
  poster,
}) => {
  const sanitizer = DOMPurify.sanitize;

  // const navigate = useDynamicNavigation({ subject: `${process.env.REACT_APP_CIUDADANIA_SUBJECT}` });

  const scrollTo = useScrollTo();

  const isMobile = useScreenSize();

  return (
    <Row className={styles.main}>
      <Col className={`${styles.mainColumn}`}>
        <Col className={`${styles.textConatiner}`}>
          {smallText && <small>{smallText}</small>}
          <h1 className={styles.heroText}>
            <span dangerouslySetInnerHTML={{ __html: sanitizer(heroTex) }} />
            <span
              className={`${styles.spanText}`}
              dangerouslySetInnerHTML={{ __html: sanitizer(spanText) }}
            />
          </h1>
          {explainer && <p>{explainer}</p>}
          <Col className={`${styles.ctaContainer}  h-100 `}>
            <Col className="d-flex">
              <Button
                className="rounded-pill"
                // onClick={navigate({ newTab: true })}
                onClick={() => scrollTo("espanola")}
              >
                Ver precios
              </Button>
              <Image
                className={`${styles.vectorColor}`}
                src={vectorCircle}
                alt="flecha hacia la derecha"
              />
            </Col>
          </Col>
        </Col>
        <Col className={`${styles.shadow} h-100`}></Col>
        {isMobile ? (
          <Col className={`${styles.videoBack}`}>
            {useIsIOS === true ? (
              <video
                className={`${styles.videoStyle}`}
                playsInline
                muted
                autoPlay
                loop
                poster={poster}
                src={videoMobileMp4}
                type="video/mp4"
              />
            ) : (
              <video
                className={`${styles.videoStyle}`}
                playsInline
                muted
                autoPlay
                loop
                poster={poster}
                src={videoMobile}
                type="video/webm"
              />
            )}
          </Col>
        ) : (
          <Col className={`${styles.videoBack}`}>
            {useIsIOS === true ? (
              <video
                className={`${styles.videoStyle}`}
                playsInline
                muted
                autoPlay
                loop
                poster={poster}
                src={videoMp4}
                type="video/mp4"
              />
            ) : (
              <video
                className={`${styles.videoStyle}`}
                playsInline
                muted
                autoPlay
                loop
                poster={poster}
                src={video}
                type="video/webm"
              />
            )}
          </Col>
        )}
      </Col>
    </Row>
  );
};
