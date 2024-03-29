import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { circleGrad, reunion, reunionAlternate } from "../../assets";
import { ImageSelector } from "../ImageSelector/ImageSelector";
import "./Tips.scss";

export const Tips = ({ texts }) => {
  return (
    <Row id="Tips">
      <Col className="cont">
        <Row>
          <Col md={6}>
            {texts.map(({ title, titleSpan, text, header }, i) => (
              <Col key={i}>
                <h3>
                  {header} <br />
                  {title}
                  <span>{titleSpan}</span>
                </h3>
                <p>{text}</p>
              </Col>
            ))}
          </Col>
          <Col md={6} className={"align-self-center d-none d-sm-block"}>
            <ImageSelector
              imgWebP={reunion}
              noWebpImg={reunionAlternate}
              imageAlt="Reunión de trabajo, dos personas y un laptop"
            />
          </Col>
        </Row>
      </Col>
      <Col className="gradientCont">
        <Col>
          <Image className="imageGradient" src={circleGrad} />
        </Col>
      </Col>
    </Row>
  );
};
