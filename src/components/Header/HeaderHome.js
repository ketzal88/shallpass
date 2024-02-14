import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { circleGrad } from "../../assets";
import { Form } from "../Form/Form";

import "./Header.scss";

export const HeaderHome = ({ logo }) => {
    const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
        process.env;

    return (
        <Row id="header">
            <Col id="logo" xs={12} md={12} sm={12} lg={6} xl={6}>
                <Image src={logo} />
                <Col>
                    {/* Visible only on sm	.d-none .d-sm-block .d-md-none */}
                    <h1 className="d-block d-lg-none">
                        Nos especializamos en la atención de
                        <span>Comercios, Emprendedores y PyMES.</span>
                    </h1>
                    <h1 className="d-none d-lg-block">
                        Nos especializamos en
                        <br /> la atención de
                        <br />
                        <span>
                            Comercios,
                            <br /> Emprendedores y<br /> PyMES.
                        </span>
                    </h1>
                </Col>
            </Col>
            <Col xs={12} md={12} lg={6} xl={6}>
                <Row className="justify-content-end">
                    <Col className="fromCont">
                        <Form
                            SERVICE_ID={REACT_APP_SERVICE_ID}
                            TEMPLATE_ID={REACT_APP_TEMPLATE_ID}
                            PUBLIC_KEY={REACT_APP_PUBLIC_KEY}
                            id="fromHeader"
                        />
                    </Col>
                </Row>
            </Col>
            <Col className="imageGradient">
                <Image src={circleGrad} />
            </Col>
        </Row>
    );
};
