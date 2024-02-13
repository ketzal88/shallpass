import { useState, useEffect } from 'react';

const useIsIOS = () => {
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Las plataformas iOS incluyen 'iPhone', 'iPad' y 'iPod'
        const platform = navigator.platform || navigator.userAgent;
        const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
        setIsIOS(iosPlatforms.some(p => platform.includes(p)));
    }, []);

    return isIOS;
};

export default useIsIOS;
