import React from "react";
import { whatsAppCTA } from "../../assets";

import "./WhatsAppButton.scss";

export const WhatsAppButton = () => {
  const whatsAppData =
    "https://api.whatsapp.com/send?phone=+5491122529837&text=Hola!%20Quisiera%20consultar%20por%20sus%20servicios.";

  return (
    <div className="row justify-content-end">
      <a
        href={whatsAppData}
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
        onClick={window.dataLayer.push({
          event: "WhatsApp",
          sent: true,
        })}
      >
        <img alt="WhatsApp" src={whatsAppCTA} />
      </a>
    </div>
  );
};
