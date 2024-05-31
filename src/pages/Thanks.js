import React from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { logoShallPassBaloon, whatsAppBlack } from "../assets";
import { useDynamicNavigation } from "../hooks/useDynamicNavigation ";




import "./Thanks.scss";
import useScreenSize from "../hooks/useScreenSize";



export const Thanks = () => {

  const isMobile = useScreenSize()


  const navigate = useNavigate();

  const navigateWhatsApp = useDynamicNavigation({ subject: `${process.env.REACT_APP_THANKS_SUBJECT}` });

  return (
    <Container id="thanks" fluid>
      <Row className="mesageContainer">
        <Col xs={12} className="col align-self-center">
          <Row>
            <Image src={logoShallPassBaloon} />
          </Row>
          <h1>
            Muchas gracias!
            <br />
          </h1>
          <p>Hemos enviado su consulta con éxito. {!isMobile && <br />}Si estas apurado, podes contactarnos a través de Whatsapp</p>
          <Row>
            <Col xs={12} lg={6} className="btnContainer text-end">
              <Button
                className={`rounded-pill left`}
                variant="outline-primary"
                onClick={() => navigate(-1)}
              >
                Volver a la página anterior
              </Button>
            </Col>
            <Col className="btnContainer text-start">
              <Button
                className="rounded-pill"
                onClick={navigateWhatsApp({ newTab: true })}
              >
                <Row className="justify-content-md-center">
                  <Col className="text-end">Consultar por Whatsapp </Col><Col xs={2} className="text-start p-0"><Image src={whatsAppBlack} /></Col>
                </Row>
              </Button>
            </Col>

          </Row>
        </Col>
      </Row>
    </Container>
  );
};
