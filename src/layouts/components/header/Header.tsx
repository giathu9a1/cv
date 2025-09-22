import { useEffect, useState } from 'react';
import './header.scss';
import ButtonTheme from '../button-theme/ButtonTheme';
import { Link, useLocation } from 'react-router-dom';
import { VscListSelection } from 'react-icons/vsc';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '~/components/ui/sheet';
import { logo } from '~/assets/images';

const Header = () => {
    const [isTop, setIsTop] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY <= 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 150;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const menu = (
        <>
            <Link
                to="/#education"
                onClick={(e) => location.pathname === '/' && handleClick(e, 'education')}
                className="nav-item"
            >
                Education
            </Link>
            <Link
                to="/#skills"
                onClick={(e) => location.pathname === '/' && handleClick(e, 'skills')}
                className="nav-item"
            >
                Skills
            </Link>
            <Link
                to="/#experience"
                onClick={(e) => location.pathname === '/' && handleClick(e, 'experience')}
                className="nav-item"
            >
                Work Experiences
            </Link>
            <Link
                to="/#projects"
                onClick={(e) => location.pathname === '/' && handleClick(e, 'projects')}
                className="nav-item"
            >
                Projects
            </Link>
            <Link to="/contact">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none duration-300 hover:shadow-[0_0_10px_var(--primary-color)]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary-color)_0%,#d4f0ff_50%,var(--primary-color)_100%)]" />
                    <span className="inline-flex h-full uppercase w-full cursor-pointer items-center justify-center rounded-full bg-[var(--background)] px-3 py-1 text-sm font-medium backdrop-blur-3xl">
                        Contact
                    </span>
                </button>
            </Link>
            <ButtonTheme />
        </>
    );

    return (
        <div className={`fixed top-0 left-0 right-0 header ${isTop ? '' : 'blur-header'}`}>
            <div className="container flex justify-between">
                <Link to={'/'}>
                    <img src={logo} className="h-20 w-auto" alt="" />
                </Link>
                <div>
                    <div className=" flex gap-8 justify-end items-center uppercase py-5 max-lg:hidden">{menu}</div>
                    <div className="lg:hidden py-5">
                        {/* <Button variant="ghost"> */}
                        <Sheet>
                            <SheetTrigger>
                                <VscListSelection size={28} className="cursor-pointer" />
                            </SheetTrigger>
                            <SheetContent side="left" className="p-5 w-[250px]">
                                <SheetHeader>
                                    <SheetTitle></SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-5">{menu}</div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
