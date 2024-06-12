import { useState, useEffect } from 'react';

const useScreenSize = (viewPortW = 769) => {

    console.log(viewPortW)

    const [isMobile, setIsMobile] = useState(
        window.matchMedia(`(max-width: ${viewPortW}px)`).matches
    );
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${viewPortW}px)`);
        const handleMediaChange = (event) => {
            setIsMobile(event.matches);
        };

        const handleResize = () => {
            setViewport({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        mediaQuery.addListener(handleMediaChange);
        window.addEventListener('resize', handleResize);

        // Initial call to set viewport size
        handleResize();

        return () => {
            mediaQuery.removeListener(handleMediaChange);
            window.removeEventListener('resize', handleResize);
        };
    }, [viewPortW]);

    return { isMobile, viewport };
};

export default useScreenSize;


/* Uso

    const { isMobile, viewport } = useScreenSize();

    <p>Is Mobile: {isMobile ? 'Yes' : 'No'}</p>
    <p>Viewport Width: {viewport.width}px</p>
    <p>Viewport Height: {viewport.height}px</p>
    
*/