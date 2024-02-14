import React from "react";
import { logoPassFullColor } from "../assets";
import { LandingForm } from "../components/Form/LandingForm";
import { HeaderLanding } from "../components/HeaderLanding/HeaderLanding";
import { HeroText } from "../components/HeroText/HeroText";
import { PorqueElegirnos } from "../components/PorqueElegirnos/PorqueElegirnos";
import { Quote } from "../components/Quote/Quote";
import { Rubros } from "../components/Rubros/Rubros";
import { Tips } from "../components/Tips/Tips";
import { quote, rubrosLLC, textHeroLLC, textsLLC } from "../data/data";
import { WhatsAppButton } from "../components/WhatsAppButton/WhatsAppButton";

export const LLCLandingsRes = () => {
  return (
    <>
      <HeaderLanding logo={logoPassFullColor} />
      <Rubros data={rubrosLLC} />
      <HeroText data={textHeroLLC} />
      <Tips texts={textsLLC} />
      <PorqueElegirnos />
      <Quote data={quote} />
      <LandingForm />
      <WhatsAppButton />
    </>
  );
};
