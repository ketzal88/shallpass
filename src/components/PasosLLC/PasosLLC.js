import React, { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./PasosLLC.module.scss";
import { videoPaso1, videoPaso2, videoPaso3, videoPaso4 } from "../../assets";

export const PasosLLC = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const pasos = [
    {
      id: 1,
      titulo: "Paso 1",
      descripcion: "Constitución de la LLC",
      videoUrl: videoPaso1,
    },
    {
      id: 2,
      titulo: "Paso 2",
      descripcion: "Obtención del EIN",
      videoUrl: videoPaso2,
    },
    {
      id: 3,
      titulo: "Paso 3",
      descripcion: "Apertura de cuenta bancaria",
      videoUrl: videoPaso3,
    },
    {
      id: 4,
      titulo: "Paso 4",
      descripcion: "Integración de plataformas",
      videoUrl: videoPaso4,
    },
  ];

  const handlePlay = (videoId, videoElement) => {
    // Pausar todos los otros videos
    Object.keys(videoRefs.current).forEach((id) => {
      if (id !== videoId.toString() && videoRefs.current[id]) {
        videoRefs.current[id].pause();
      }
    });
    setPlayingVideo(videoId);
  };

  const handlePause = (videoId) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    }
  };

  return (
    <Container className={styles.pasosLLC}>
      <Row className="justify-content-center w-100">
        <Col md={12} className="d-flex flex-column align-items-center">
          <Row className="mb-5 w-100">
            <Col md={12} className="text-center">
              <h2 className={styles.sectionTitle}>
                Pasos para abrir tu <span>LLC</span>
              </h2>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center w-100">
            {pasos.map((paso, index) => (
              <Col
                key={paso.id}
                xs={12}
                sm={6}
                md={6}
                lg={3}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={styles.videoCard}>
                  <div className={styles.stepNumber}>{paso.id}</div>
                  <div className={styles.videoContainer}>
                    <video
                      ref={(el) => {
                        if (el) {
                          videoRefs.current[paso.id] = el;
                        }
                      }}
                      className={styles.video}
                      controls
                      preload="metadata"
                      playsInline
                      loop
                      src={paso.videoUrl}
                      type="video/mp4"
                      onPlay={(e) => handlePlay(paso.id, e.target)}
                      onPause={() => handlePause(paso.id)}
                    />
                    {playingVideo !== paso.id && (
                      <div className={styles.placeholderOverlay}>
                        <div className={styles.placeholderContent}>
                          <span className={styles.playIcon}>▶</span>
                          <p>Video {paso.id}</p>
                          <p className={styles.placeholderSubtitle}>
                            {paso.descripcion}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={styles.videoInfo}>
                    <h4 className={styles.videoTitle}>{paso.titulo}</h4>
                    <p className={styles.videoDescription}>
                      {paso.descripcion}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
