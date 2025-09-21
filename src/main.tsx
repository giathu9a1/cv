import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import '~/styles/globals.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux';
import { persistor, store } from './store/index.ts';
import { PersistGate } from 'redux-persist/integration/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
// Sau khi DOM đã load
AOS.init({
    duration: 3000, // thời gian animation (ms)
    easing: 'ease-out-back', // kiểu easing
    // once: true, // animation chỉ chạy 1 lần khi scroll
    // mirror: false, // animation khi scroll lên
    anchorPlacement: 'center-bottom',
});

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
);
