import './main_home.scss';

const MainHome = () => {
    const scrollDown = () => {
        const firstSectionHeight = document.querySelector('.main-home')?.clientHeight || window.innerHeight;

        window.scrollTo({
            top: firstSectionHeight,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="h-screen relative flex items-center justify-center flex-col main-home gap-5">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold name bg-clip-text text-transparent bg-gradient-to-b to-neutral-300 from-black dark:from-white dark:to-neutral-900">
                    NGUYEN BACH GIA THU
                </h1>
                <div className="line"></div>
                <h2 className="text-xl fe">ReactJS Developer / Mobile Developer Intern / Tester Intern</h2>

                <div onClick={scrollDown} className="cursor-pointer absolute bottom-10 left-1/2 -translate-x-1/2">
                    <div className="relative">
                        <div className="absolute h-10 w-px bg-[var(--foreground)] left-1/2 -translate-x-1/2 bottom-2"></div>
                        <div className="absolute h-4 w-px rounded-full bg-[var(--primary-color)] left-1/2 -translate-x-1/2 bottom-5"></div>
                    </div>
                    <div className="border relative rounded-xl h-10 w-7 border-[var(--foreground)] mouse">
                        <div className="h-[9px] w-[3px] bg-[var(--foreground)] rounded-full absolute top-2 left-1/2 -translate-x-1/2"></div>
                    </div>
                </div>
            </div>
            {/* <BackgroundBeams /> */}
        </>
    );
};

export default MainHome;
