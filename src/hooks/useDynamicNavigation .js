import { useNavigate } from "react-router-dom";

export const useDynamicNavigation = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    window.dataLayer.push({
      event: "WhatsApp",
      sent: true,
    });
  };

  const whatsAppNumber = "+5491134658988";
  const whatsAppData = `https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=Hola!%20Quisiera%20consultar%20por%20sus%20servicios.`;

  // Función para manejar el click, acepta un objeto como argumento
  const handleNavigation = ({ url = whatsAppData, newTab = false } = {}) => {
    return () => {
      if (newTab) {
        handleWhatsAppClick();
        // Abrir en una nueva pestaña
        window.open(url, "_blank");
      } else {
        handleWhatsAppClick();
        // Navegación interna normal con React Router
        navigate(url, { replace: true });
      }
    };
  };

  return handleNavigation;
};
