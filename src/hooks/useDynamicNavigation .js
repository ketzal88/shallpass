import { useNavigate } from 'react-router-dom';

export const useDynamicNavigation = ({ number = '+5491134658988', subject = `${process.env.REACT_APP_HOME_SUBJECT}` } = {}) => {
    const navigate = useNavigate();

    // Construir la URL de WhatsApp
    const whatsAppData = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(subject)}`;

    // Función para manejar el click, acepta un objeto como argumento
    const handleNavigation = ({ url = whatsAppData, newTab = false } = {}) => {
        return () => {
            if (newTab) {
                // Abrir en una nueva pestaña
                window.open(url, '_blank');
            } else {
                // Navegación interna normal con React Router
                navigate(url, { replace: true });
            }
        };
    };

    return handleNavigation;
};
