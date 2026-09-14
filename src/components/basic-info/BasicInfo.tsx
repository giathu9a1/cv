import React, { useRef } from 'react';
import { inf } from '~/assets/images';
import './basic_info.scss';
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';

const BasicInfo = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    // Motion values
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Spring để hiệu ứng mượt hơn
    const springX = useSpring(mouseX, {
        stiffness: 100,
        damping: 20,
    });

    const springY = useSpring(mouseY, {
        stiffness: 100,
        damping: 20,
    });

    // Map từ 0 → 1 sang góc xoay
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

    const skillGroups = [
        {
            title: 'Frontend',
            description:
                'Building modern and responsive web and mobile applications with a focus on reusable components and maintainable code.',
            items: [
                'ReactJS',
                'React Native',
                'NextJS',
                'TypeScript',
                'JavaScript',
            ],
        },
        {
            title: 'State, Data & UI',
            description:
                'Managing application state, server-side data, and building consistent user interfaces with modern frontend technologies.',
            items: [
                'Redux',
                'TanStack Query',
                'Tailwind CSS',
                'Shadcn',
                'Ant Design',
                'SCSS',
            ],
        },
        {
            title: 'Backend, Real-time & Tools',
            description:
                'Working with backend technologies, real-time data, interactive visualizations, and development tools.',
            items: [
                'NodeJS',
                'ExpressJS',
                'Socket.IO',
                'ECharts',
                'FlexLayout',
                'Git',
                'GitHub',
                'Postman',
                'Figma',
                'Canva',
            ],
        },
    ];

    return (
        <div id="skills">
            {/* Heading */}
            <div className="flex gap-5 max-md:justify-center">
                <div className="w-4/7 max-md:hidden"></div>

                <h2
                    data-aos="zoom-in"
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold"
                >
                    What I do
                </h2>
            </div>

            {/* Content */}
            <div className="flex gap-10 mt-8 max-md:flex-col">
                {/* Skills */}
                <div className="w-4/7 max-md:w-full space-y-10">
                    {skillGroups.map((group, index) => (
                        <div
                            key={group.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <h3 className="text-xl sm:text-2xl font-semibold">
                                {group.title}
                            </h3>

                            <p className="max-w-lg mt-2">
                                {group.description}
                            </p>

                            <div className="flex gap-3 mt-4 flex-wrap max-w-xl">
                                {group.items.map((item) => (
                                    <div
                                        key={item}
                                        className="
                                            flex
                                            items-center
                                            border
                                            border-[var(--border-item)]
                                            hover:text-[var(--primary-color)]
                                            px-3
                                            py-1
                                            rounded-2xl
                                            duration-200
                                            hover:border-[var(--primary-color)]
                                            hover:shadow-[0_0_5px_var(--primary-color)]
                                            hover:scale-102
                                        "
                                    >
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image */}
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
                            alt="About me"
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
