import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import useScreenSize from "../../hooks/useScreenSize";
import { celphone, confia01, confia02, confia03, confia04 } from "../../assets";
import styles from "./Confia.module.scss";
import { Reviews } from "../Reviews/Reviews";

export const Confia = () => {
  const { isMobile } = useScreenSize();

  return (
    <Container className={`${styles.confia}`}>
      <Row className={`mb-5`}>
        <Col></Col>
        <Col md={7} data-aos="zoom-out" data-aos-delay="500">
          <h1>
            Más de 150 LLC legalmente registradas en USA.
            {/* {!isMobile && <br />} */}
            {/* <span>
              ¿Por qué no deberías confiar en nosotros? {isMobile && <br />}
            </span> */}
          </h1>
        </Col>
        <Col></Col>
      </Row>
      <Reviews />
      <Col
        style={{ position: "relative", border: "1px solid transparent" }}
        className="h-100 w-100"
      >
        <Row className={`${styles.row2} mt-5 justify-content-md-center`}>
          <Col md={2}>
            <Col className={`${styles.itemContainer}`}>
              <Col
                className={`${styles.itemLeft}`}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                <span style={{ fontSize: "2em", lineHeight: "1" }}>💼</span>
                {/* <Image src={confia01} /> */}
                <p>
                  <b>Pensada para negocios digitales</b>
                  <br />
                  <span>
                    Agencias, freelancers, Amazon, SaaS y servicios al exterior.
                  </span>
                </p>
              </Col>
            </Col>
            <Col className={`${styles.itemContainer}`}>
              <Col
                className={`${styles.itemLeft}`}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="1"
              >
                <span style={{ fontSize: "2em", lineHeight: "1" }}>🌍</span>
                {/* <Image src={confia02} /> */}
                <p>
                  Pagá y recibí desde cualquier país
                  <br />
                  <span>
                    Transferencias internacionales simples y ordenadas.
                  </span>
                </p>
              </Col>
            </Col>
          </Col>
          {!isMobile && (
            <>
              <Col md={6} className={`${styles.imagenPhone} h-100`}>
                <Image src={celphone} />
              </Col>
            </>
          )}
          <Col md={2}>
            <Col className={`${styles.itemContainer}`}>
              <Col
                className={`${styles.itemRight}`}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="2"
              >
                <span style={{ fontSize: "2em", lineHeight: "1" }}>💳</span>
                {/* <Image src={confia03} /> */}
                <p>
                  <b>Cobrá online como empresa</b>
                  <br />
                  <span>
                    Stripe, Wise y Payoneer integrados para ventas globales.
                  </span>
                </p>
              </Col>
            </Col>
            <Col className={`${styles.itemContainer}`}>
              <Col
                className={`${styles.itemRight}`}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="400"
                data-aos-offset="3"
              >
                <span style={{ fontSize: "2em", lineHeight: "1" }}>💳</span>
                {/* <Image src={confia04} /> */}
                <p>
                  Tarjeta de débito empresarial
                  <br />
                  <span>
                    Usala para gastos operativos y suscripciones del negocio.
                  </span>
                </p>
              </Col>
            </Col>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};
