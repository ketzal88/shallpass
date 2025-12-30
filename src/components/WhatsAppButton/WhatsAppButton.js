import React, { useEffect, useState } from "react";
import { whatsAppCTA } from "../../assets";
import "./WhatsAppButton.scss";
import { useLocation } from "react-router-dom";

export const WhatsAppButton = ({ page }) => {
  const location = useLocation();

  const [visible, setVisible] = useState(true);
  const [newMsg, setNewMsg] = useState("No msg");

  useEffect(() => {
    switch (location.pathname) {
      case "/monotributo":
        setNewMsg(process.env.REACT_APP_MONOTRIBUTO_MSG);
        break;
      case "/llc":
        setNewMsg(process.env.REACT_APP_LLC_MSG);
        break;
      case "/ciudadania-espanola":
        setNewMsg(process.env.REACT_APP_ESPANOLA_MSG);
        setVisible(false);
        break;

      default:
        setNewMsg(process.env.REACT_APP_HOME_MSG);
        break;
    }
  }, [location.pathname]);

  const number = process.env.REACT_APP_WP_PHONE;

  // Validate and sanitize phone number and message
  const safeNumber = number ? encodeURIComponent(String(number).trim()) : "";
  const safeMessage = newMsg ? encodeURIComponent(String(newMsg).trim()) : "";

  const whatsAppData = `https://api.whatsapp.com/send?phone=${safeNumber}&text=${safeMessage}`;

  const handleWhatsAppClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "WhatsApp",
        sent: true,
      });
    }
  };

  return (
    <>
      {visible && (
        <div
          className="whatsapp-tooltip-container"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
          }}
        >
          <div className="whatsapp-tooltip">Chatea con nosotros!</div>
          <a
            href={whatsAppData}
            className="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            aria-label="Contactar por WhatsApp"
            style={{ display: "inline-block" }}
          >
            <img alt="WhatsApp" src={whatsAppCTA} />
          </a>
        </div>
      )}
    </>
  );
};
