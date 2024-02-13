import { useState, useEffect } from 'react';

const useIsIOS = () => {
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        const detectIOS = () => {
            return [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod'
            ].includes(navigator.platform) ||
                // Detectar iPad en iOS 13
                (navigator.userAgent.includes("Mac") && "ontouchend" in document);
        };

        setIsIOS(detectIOS());
    }, []);

    return isIOS;
};

export default useIsIOS;
