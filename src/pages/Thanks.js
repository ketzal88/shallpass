import React, { useEffect, useState } from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { logoShallPassBaloon, whatsAppBlack } from "../assets";
import { useDynamicNavigation } from "../hooks/useDynamicNavigation ";




import "./Thanks.scss";
import useScreenSize from "../hooks/useScreenSize";



export const Thanks = () => {

  const isMobile = useScreenSize()

  const { id } = useParams()


  const [newMsg, setNewMsg] = useState('No msg');

  useEffect(() => {

    switch (id) {
      case 'monotributo':
        setNewMsg("Hola quisiera tener información sobre Monotributo")
        break;
      case 'llc':
        setNewMsg("Hola quisiera tener información sobre LLC")
        break;
      case 'espanola':
        setNewMsg("Hola quisiera tener información sobre las Ciudadanias Españolas")
        break;

      default:
        setNewMsg('Hola quisiera tener información sobre sus servicios')
        break;
    }

  }, [id]);


  const navigate = useNavigate();

  const navigateWhatsApp = useDynamicNavigation({ subject: `${newMsg}` });

  return (
    <Container id="thanks" fluid>
      <Row className="mesageContainer">
        <Col xs={12} className="col align-self-center"
          style={{ maxWidth: '650px' }}
        >
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
            {/* <Col className="btnContainer text-start">
              <Button
                className="rounded-pill"
                onClick={navigateWhatsApp({ newTab: true })}
              >
                <Row className="justify-content-md-center " style={{ border: '1px solid blue' }}>
                  <Col className="text-center">Consultar por Whatsapp <Image src={whatsAppBlack} /></Col>
                </Row>
              </Button>
            </Col> */}
            <Col className="btnContainer text-start">
              <Button className="rounded-pill d-flex align-items-center justify-content-center" onClick={navigateWhatsApp({ newTab: true })}>
                Consultar por Whatsapp <Image src={whatsAppBlack} className="whatsapp-icon" />
              </Button>
            </Col>


          </Row>
        </Col>
      </Row>
    </Container>
  );
};
