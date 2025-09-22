import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { useEffect } from 'react';
import useTheme from './hooks/useTheme';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import DefaultLayout from './layouts/default-layout/DefaultLayout';
import ScrollToHash from './components/scroll-to-hash/ScrollToHash';
// import { useEffect } from 'react';

function App() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setTheme(theme as 'light' | 'dark');
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <ScrollToHash />
            <Routes>
                {publicRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <DefaultLayout>
                                <route.component />
                            </DefaultLayout>
                        }
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
