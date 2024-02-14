import React from "react";
import { whatsAppCTA } from "../../assets";
import "./WhatsAppButton.scss";

export const WhatsAppButton = () => {
  const whatsAppData =
    "https://api.whatsapp.com/send?phone=+5491122529837&text=Hola!%20Quisiera%20consultar%20por%20sus%20servicios.";

  const handleWhatsAppClick = () => {
    window.dataLayer.push({
      event: "WhatsApp",
      sent: true,
    });
  };

  return (
    <div>
      <a
        href={whatsAppData}
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
        onClick={handleWhatsAppClick}
      >
        <img alt="WhatsApp" src={whatsAppCTA} />
      </a>
    </div>
  );
};
