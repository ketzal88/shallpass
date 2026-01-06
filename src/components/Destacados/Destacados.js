import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import DOMPurify from "dompurify";
import {
  destacadoIcon01,
  destacadoIcon02,
  destacadoIcon03,
  destacadoIcon04,
} from "../../assets";
import styles from "./Destacados.module.scss";

export const Destacados = () => {
  const sanitizer = DOMPurify.sanitize;

  const data = [
    {
      id: "001",
      ico: destacadoIcon01,
      text: `Armamos tu LLC 100%remoto, <br/><span>estes donde estés</span>`,
      delay: 300,
    },
    {
      id: "002",
      ico: destacadoIcon02,
      text: `Cumplís con los requisitos legales<br/><span> desde el primer día.</span>`,
      delay: 500,
    },
    {
      id: "003",
      ico: destacadoIcon03,
      text: `Sin formularios confusos <span><br/>ni demoras innecesarias.</span>`,
      delay: 700,
    },
    {
      id: "004",
      ico: destacadoIcon04,
      text: `Integramos bancos y plataformas de pago<br/><span> para operar global.</span>`,
      delay: 900,
    },
  ];
  return (
    <Container className={`${styles.destacados}`}>
      <Row
        md={4}
        className={`${styles.destacadosRow} align-items-center h-100 g-4`}
      >
        {data.map((data) => (
          <Col
            key={data.id}
            className="h-100"
            data-aos="fade-up"
            data-aos-delay={data.delay}
          >
            <Col className={`${styles.itemDestacado} h-100`}>
              <Image src={data.ico} />
              <p dangerouslySetInnerHTML={{ __html: sanitizer(data.text) }} />
            </Col>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
