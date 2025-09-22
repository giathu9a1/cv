import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 150;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    }, [location.hash]);

    return null;
}
