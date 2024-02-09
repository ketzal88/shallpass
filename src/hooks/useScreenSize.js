import { useState, useEffect } from 'react';

const useScreenSize = () => {
    // Inicializa el estado basado en el media query
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 420px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 420px)");
        const handleMediaChange = (event) => {
            setIsMobile(event.matches);
        };

        // Añade un listener para cambios en el media query
        mediaQuery.addListener(handleMediaChange);

        // Limpieza del componente
        return () => mediaQuery.removeListener(handleMediaChange);
    }, []);

    return isMobile;
};

export default useScreenSize;
