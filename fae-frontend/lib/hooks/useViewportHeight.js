import { useState, useEffect } from 'react';

export function useViewportHeight() {
    const [viewportHeight, setViewportHeight] = useState();

    useEffect(() => {
        function handleResize() {
            setViewportHeight(window.innerHeight);
        }

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return viewportHeight;
}
