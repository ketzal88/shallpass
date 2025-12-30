import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./VideosEducativos.module.scss";

export const VideosEducativos = () => {
  // Placeholder videos - reemplazar con videos reales
  const videos = [
    {
      id: 1,
      title: "Paso 1: Constitución de LLC",
      description: "Aprende cómo constituimos tu LLC en USA",
      videoUrl: "/placeholder-video-1.mp4",
      poster: "/placeholder-poster-1.jpg",
    },
    {
      id: 2,
      title: "Paso 2: Obtención de EIN",
      description: "Proceso de obtención del EIN ante el IRS",
      videoUrl: "/placeholder-video-2.mp4",
      poster: "/placeholder-poster-2.jpg",
    },
    {
      id: 3,
      title: "Paso 3: Apertura de cuenta bancaria",
      description: "Cómo abrimos tu cuenta bancaria comercial",
      videoUrl: "/placeholder-video-3.mp4",
      poster: "/placeholder-poster-3.jpg",
    },
    {
      id: 4,
      title: "Paso 4: Integración de plataformas",
      description: "Activación de Stripe, Wise y Payoneer",
      videoUrl: "/placeholder-video-4.mp4",
      poster: "/placeholder-poster-4.jpg",
    },
  ];

  return (
    <Container className={`${styles.videosEducativos}`}>
      <Row className="justify-content-center">
        <Col md={10}>
          <Row className="mb-5">
            <Col md={12} className="text-center">
              <h2 className={styles.sectionTitle}>
                Informate sobre el proceso paso a paso
              </h2>
              <p className={styles.sectionSubtitle}>
                Videos explicativos sobre el armado de tu LLC
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {videos.map((video, index) => (
              <Col
                key={video.id}
                xs={12}
                md={6}
                lg={3}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={styles.videoCard}>
                  <div className={styles.videoContainer}>
                    <video
                      className={styles.video}
                      poster={video.poster}
                      controls
                      preload="metadata"
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                    <div className={styles.placeholderOverlay}>
                      <div className={styles.placeholderContent}>
                        <span className={styles.playIcon}>▶</span>
                        <p>{video.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.videoInfo}>
                    <h4 className={styles.videoTitle}>{video.title}</h4>
                    <p className={styles.videoDescription}>
                      {video.description}
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
