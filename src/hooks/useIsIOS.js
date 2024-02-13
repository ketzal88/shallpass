import { useState, useEffect } from 'react';

const useIsIOS = () => {
    const [isIOS, setIsIOS] = useState(true);

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
    }, [isIOS]);

    return isIOS;
};

export default useIsIOS;
