import React, { useEffect } from "react";
import { Card, Row } from "react-bootstrap";

// import Aos, { init } from 'aos'
// import 'aos/dist/aos.css'


import "./Rubros.scss";


export const Rubros = ({ data }) => {

  // useEffect(() => {
  //   Aos.init();
  // }, []);
  const rubros = data;
  return (
    <Row id="rubros" xs={1} sm={2} md={2} lg={4} className="g-5">
      {rubros.map(({ icon, title, sTitle, body, delay}, i) => (
        <Card key={i} data-aos="fade-up" data-aos-delay={delay} >
          <Card.Img src={icon} />
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{sTitle}</Card.Subtitle>
          <Card.Body> {body} </Card.Body>
        </Card>
      ))}
    </Row>
  );
};
