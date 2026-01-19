import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { heroVideo, heroVideoMp4, posterVideoHero } from "../assets";
import { HerroVideoBanner } from "../components/HerroVideoBanner/HerroVideoBanner";
import { Destacados } from "../components/Destacados/Destacados";
import { Confia } from "../components/Confia/Confia";
import { Reviews } from "../components/Reviews/Reviews";
import { PlatformLogos } from "../components/PlatformLogos/PlatformLogos";
import { PasosLLC } from "../components/PasosLLC/PasosLLC";
import { VideosEducativos } from "../components/VideosEducativos/VideosEducativos";
import { Servicios } from "../components/Servicios/Servicios";
// import { Consultas } from "../components/Consultas/Consultas";
import { FAQ } from "../components/FAQ/FAQ";
import { FooterLanding } from "../components/Landings/FooterLanding/FooterLanding";
import { Atencion } from "../components/Landings/Atencion/Atencion";
import { HeaderCTA } from "../components/Landings/HeaderCTA/HeaderCTA";

import styles from "./Home.module.scss";

export const LLCLandings = () => {
  return (
    <>
      {/* <Atencion /> */}
      <Col className={`${styles.bgR}`}>
        <Row className={`justify-content-md-center`}>
          <Col className={`${styles.main}`}>
            <HeaderCTA idTo="llc" />
          </Col>
        </Row>
        <HerroVideoBanner
          video={heroVideo}
          videoMp4={heroVideoMp4}
          poster={posterVideoHero}
        />
        <Destacados />
        {/* <Confia /> */}
        {/* <Reviews /> */}
        <PlatformLogos />
        <PasosLLC />
        {/* Sección de videos - Ocultar hasta que los videos estén listos */}
        {/* <VideosEducativos /> */}
      </Col>
      <Servicios id={"llc"} />
      <Col className={`${styles.bgL}`}>
        {/* <Consultas /> */}
        <FAQ />
        {/* <FormSection id={'llc'} submitText={'Contactanos'} /> */}
        <Container>
          <FooterLanding />
        </Container>
      </Col>
    </>
  );
};
