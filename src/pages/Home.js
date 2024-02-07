import React from "react";
import { Col } from "react-bootstrap";
import { heroVideo, logoPassFullColor } from "../assets";
import { Header } from "../components/Header/Header";
import { HerroVideoBanner } from "../components/HerroVideoBanner/HerroVideoBanner";
import { Destacados } from "../components/Destacados/Destacados";
import { Confia } from "../components/Confia/Confia";
import { Servicios } from "../components/Servicios/Servicios";
import { Consultas } from "../components/Consultas/Consultas";
import { Proceso } from "../components/Proceso/Proceso";
import { FormSection } from "../components/FormSection/FormSection";
import { FooterLanding } from "../components/FooterLanding/FooterLanding";

import styles from './Home.module.scss'


export const Home = () => {
  
  console.log(process.env.REACT_APP_SERVICE_ID)
  return (
    <>
      <Header logo={logoPassFullColor} />
      <Col className={`${styles.bgR}`}>
        <HerroVideoBanner video={heroVideo} />
        <Destacados />
        <Confia />
      </Col>
      <Servicios />
      <Col className={`${styles.bgL}`}>
        <Consultas />
        <Proceso />
        <FormSection />
      </Col>
      <FooterLanding />
    </>
  );
};
