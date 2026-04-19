import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Utility component that handles scrolling to an anchor (hash)
 * when the URL changes or the page is first loaded.
 */
const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            // Give the DOM a tiny bit of time to render the content
            const timeoutId = setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);

            return () => clearTimeout(timeoutId);
        } else {
            // If no hash, scroll to top on page change with smooth animation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
