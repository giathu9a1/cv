import React, { useRef } from 'react';
import { inf } from '~/assets/images';
import './basic_info.scss';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { lib } from '~/constants/data';

const BasicInfo = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    // motion values
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // spring để mượt
    const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    // map từ 0→1 sang góc xoay -10° → 10°
    const rotateX = useTransform(springY, [0, 1], [20, -20]);
    const rotateY = useTransform(springX, [0, 1], [-20, 20]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const posX = (e.clientX - rect.left) / rect.width;
        const posY = (e.clientY - rect.top) / rect.height;
        mouseX.set(posX);
        mouseY.set(posY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    return (
        <div id="skills">
            <div className="flex gap-5 max-md:justify-center">
                <div className="w-4/7 max-md:hidden"></div>
                <h2 data-aos="zoom-in" className="text-5xl font-semibold">
                    What I do
                </h2>
            </div>
            <div className="flex gap-10 mt-5 max-md:flex-col">
                <div className="w-4/7 space-y-10 max-md:w-full">
                    <div data-aos="fade-up">
                        <h3 className="text-xl font-semibold">DEVELOP</h3>
                        <p className="max-w-lg max-full mt-2">
                            I have studied and worked with React.js and Next.js, along with modern UI libraries such as
                            Tailwind CSS, Shadcn, and Ant Design.
                        </p>
                        {/* <p className="text-[var(--primary-color)] font-semibold mt-2">Technology Expertise</p> */}
                        <div className="flex gap-3 mt-4 flex-wrap max-w-lg max-full">
                            {lib.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex flex-col items-center gap-2 border border-[var(--border-item)] hover:text-[var(--primary-color)] px-3 py-1 rounded-2xl duration-200 hover:border-[var(--primary-color)] hover:shadow-[0_0_5px_var(--primary-color)] hover:scale-102"
                                >
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <h3 className="text-xl font-semibold uppercase">design tool</h3>
                        <p className="max-w-lg max-full mt-2">
                            I have basic knowledge of Figma and Canva. In particular, I have experience working with
                            Figma on real projects.
                        </p>
                        <div className="flex gap-3 mt-4 flex-wrap max-w-lg max-full">
                            {['Figma', 'Canva'].map((item) => (
                                <div
                                    key={item}
                                    className="flex flex-col items-center gap-2 border border-[var(--border-item)] hover:text-[var(--primary-color)] px-3 py-1 rounded-2xl duration-200 hover:border-[var(--primary-color)] hover:shadow-[0_0_5px_var(--primary-color)] hover:scale-102"
                                >
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-3/7 img-inf max-md:w-full">
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX,
                            rotateY,
                            transformPerspective: 2000,
                        }}
                        className="rounded-2xl"
                    >
                        <img
                            src={inf}
                            data-aos="fade-up"
                            alt=""
                            className="rounded-2xl shadow-sm block mx-auto"
                            style={{
                                boxShadow: 'var(--shadow-img)',
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
