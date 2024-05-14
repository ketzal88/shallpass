import { useNavigate } from 'react-router-dom';

export const useDynamicNavigation = (number = '+5491134658988') => {
    const navigate = useNavigate();

    const whatsAppNumber = number;
    const whatsAppData = `https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=Hola!%20Quisiera%20consultar%20por%20sus%20servicios.`;

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
