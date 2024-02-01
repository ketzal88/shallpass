import React from "react";
import { heroVideo, logoPassFullColor } from "../assets";
import { LandingForm } from "../components/Form/LandingForm";
import { Header } from "../components/Header/Header";
import { HeroText } from "../components/HeroText/HeroText";
import { PorqueElegirnos } from "../components/PorqueElegirnos/PorqueElegirnos";
import { Quote } from "../components/Quote/Quote";
import { Rubros } from "../components/Rubros/Rubros";
import { Tips } from "../components/Tips/Tips";
import { quote, rubros, textHero, texts } from "../data/data";
import { WhatsAppButton } from "../components/WhatsAppButton/WhatsAppButton";
import { HerroVideoBanner } from "../components/HerroVideoBanner/HerroVideoBanner";

export const Home = () => {
  return (
    <>
      <Header logo={logoPassFullColor} />
      <HerroVideoBanner video={heroVideo} />
      {/* <Rubros data={rubros} /> */}
      {/* <HeroText data={textHero} /> */}
      {/* <Tips texts={texts} /> */}
      {/* <PorqueElegirnos /> */}
      {/* <Quote data={quote} /> */}
      {/* <LandingForm /> */}
      {/* <WhatsAppButton /> */}
    </>
  );
};
