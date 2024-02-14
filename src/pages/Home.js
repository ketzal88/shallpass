import React from "react";
import { Container } from "react-bootstrap";
import { logoPassFullColor } from "../assets";
import { LandingForm } from "../components/Form/LandingForm";
import { HeroText } from "../components/HeroText/HeroText";
import { PorqueElegirnos } from "../components/PorqueElegirnos/PorqueElegirnos";
import { Quote } from "../components/Quote/Quote";
import { Rubros } from "../components/Rubros/Rubros";
import { Tips } from "../components/Tips/Tips";
import { quote, rubros, textHero, texts } from "../data/data";
import { WhatsAppButton } from "../components/WhatsAppButton/WhatsAppButton";
import { Footer } from "../components/Footer/Footer";
import { HeaderHome } from "../components/Header/HeaderHome";

export const Home = () => {
  return (
    <Container>
      <HeaderHome logo={logoPassFullColor} />
      <Rubros data={rubros} />
      <HeroText data={textHero} />
      <Tips texts={texts} />
      <PorqueElegirnos />
      <Quote data={quote} />
      <LandingForm />
      <WhatsAppButton />
      <Footer />
    </Container>
  );
};
