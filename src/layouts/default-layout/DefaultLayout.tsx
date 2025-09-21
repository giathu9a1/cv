import type { ReactNode } from 'react';
import Header from '../components/header/Header';
import { ShootingStars } from '~/components/ui/shooting-stars';
import { StarsBackground } from '~/components/ui/stars-background';
import Footer from '../components/footer/Footer';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 z-10">{children}</main>
                <Footer />
            </div>
            <div className="fixed inset-0 z-0">
                <ShootingStars />
                <StarsBackground />
            </div>
        </>
    );
};

export default DefaultLayout;
