import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 420px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 420px)");
        const handleMediaChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addListener(handleMediaChange);

        return () => mediaQuery.removeListener(handleMediaChange);
    }, []);

    return isMobile;
};

export default useScreenSize;
