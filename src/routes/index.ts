import HomePage from '~/pages/home-page/HomePage';
import PATHS from './paths';
import ContactPage from '~/pages/contact-page/ContactPage';

const publicRoutes = [
    {
        path: PATHS.HOME,
        component: HomePage,
    },
    {
        path: PATHS.CONTACT,
        component: ContactPage,
    },
];

export { publicRoutes };
