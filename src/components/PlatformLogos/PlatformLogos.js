import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./PlatformLogos.module.scss";

export const PlatformLogos = () => {
  // Logos de plataformas - ubicar en public/
  const platforms = [
    { name: "Stripe", logo: "/stripe-logo.png" },
    { name: "Kraken", logo: "/Kraken-Emblem.png" },
    { name: "Wise", logo: "/wise-2.svg" },
    {
      name: "PayPal",
      logo: "/PayPal.png",
    },
  ];

  const partners = [
    { name: "Mercury", logo: "/mercury-logo.png" },
    { name: "Payoneer", logo: "/Payoneer_logo.png" },
    { name: "Relay", logo: "/relay-logo.png" },
  ];

  return (
    <Container fluid className={`${styles.platformLogos}`}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={10} xl={10} className="mx-auto">
            {/* Partners destacados */}
            <Row className={`${styles.partnersSection} mb-5`}>
              <Col md={12} className="text-center mb-4">
                <h2 className={styles.partnersTitle}>Somos partners de:</h2>
              </Col>
              <Col
                md={12}
                className="d-flex justify-content-center gap-4 flex-wrap"
              >
                {partners.map((partner, index) => (
                  <Col
                    key={index}
                    xs={6}
                    md={3}
                    className={`${styles.partnerLogo} d-flex justify-content-center align-items-center`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className={styles.logoPlaceholder}>
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        onError={(e) => {
                          e.target.style.display = "none";
                          const placeholder =
                            e.target.parentElement.querySelector(
                              `.${styles.placeholderText}`
                            );
                          if (placeholder) placeholder.style.display = "flex";
                        }}
                      />
                      <div className={styles.placeholderText}>
                        {partner.name}
                      </div>
                    </div>
                  </Col>
                ))}
              </Col>
            </Row>

            {/* Plataformas con las que trabajamos */}
            <Row className={styles.platformsSection}>
              <Col md={12} className="text-center mb-4">
                <h3 className={styles.platformsTitle}>
                  Plataformas con las que trabajamos
                </h3>
              </Col>
              <Col
                md={12}
                className="d-flex justify-content-center gap-4 flex-wrap"
              >
                {platforms.map((platform, index) => (
                  <Col
                    key={index}
                    xs={6}
                    md={2}
                    className={`${styles.platformLogo} d-flex justify-content-center align-items-center`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className={styles.logoPlaceholder}>
                      <img
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        onError={(e) => {
                          e.target.style.display = "none";
                          const placeholder =
                            e.target.parentElement.querySelector(
                              `.${styles.placeholderText}`
                            );
                          if (placeholder) placeholder.style.display = "flex";
                        }}
                      />
                      <div className={styles.placeholderText}>
                        {platform.name}
                      </div>
                    </div>
                  </Col>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
