import { useState, useEffect } from 'react';

export function useViewportWidth() {
    const [viewportWidth, setViewportWidth] = useState();

    useEffect(() => {
        function handleResize() {
            setViewportWidth(window.innerWidth);
        }

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return viewportWidth;
}
