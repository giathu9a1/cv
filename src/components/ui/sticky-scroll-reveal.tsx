'use client';
import React, { useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { motion } from 'motion/react';
import { cn } from '~/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGithub } from 'react-icons/fa6';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { EffectCards } from 'swiper/modules';
import { IoCalendarOutline } from 'react-icons/io5';
import { LuExternalLink } from 'react-icons/lu';

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        // content?: React.ReactNode | any;
        time: string;
        imgs: string[];
        tech: string[];
        gits: string[];
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        target: ref,
        // container: ref,
        offset: ['start 33.33%', 'end 33.33%'],
    });
    const cardLength = content.length;
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                return index;
            }
            return acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);
    });

    // const backgroundColors = [
    //     '#0f172a', // slate-900
    //     '#000000', // black
    //     '#171717', // neutral-900
    // ];

    // const linearGradients = [
    //     'linear-gradient(to bottom right, #06b6d4, #10b981)', // cyan-500 to emerald-500
    //     'linear-gradient(to bottom right, #ec4899, #6366f1)', // pink-500 to indigo-500
    //     'linear-gradient(to bottom right, #f97316, #eab308)', // orange-500 to yellow-500
    // ];

    // const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

    // useEffect(() => {
    //     setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    // }, [activeCard]);

    return (
        <div>
            <div>
                <motion.div
                    // animate={{
                    //     backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                    // }}
                    className="relative flex gap-10 xl:gap-20 rounded-md"
                    ref={ref}
                >
                    <div>
                        <div data-aos="fade-up" className="div relative flex items-start px-4">
                            <div className="max-w-xl">
                                {content.map((item, index) => (
                                    <div key={item.title + index} className="my-20">
                                        <motion.h2
                                            initial={{
                                                opacity: 0,
                                            }}
                                            animate={{
                                                opacity: activeCard === index ? 1 : 0.3,
                                            }}
                                            className="text-2xl font-bold"
                                        >
                                            {item.title}
                                        </motion.h2>
                                        <motion.div
                                            animate={{
                                                opacity: activeCard === index ? 1 : 0.3,
                                            }}
                                            className="mt-4 flex items-center gap-2 text-[var(--primary-color)]"
                                        >
                                            <IoCalendarOutline />
                                            <span>{item.time}</span>
                                        </motion.div>
                                        <motion.p
                                            initial={{
                                                opacity: 0,
                                            }}
                                            animate={{
                                                opacity: activeCard === index ? 1 : 0.3,
                                            }}
                                            className="text-kg mt-10 w-full"
                                        >
                                            {item.description}
                                        </motion.p>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                            }}
                                            animate={{
                                                opacity: activeCard === index ? 1 : 0.3,
                                            }}
                                            className="text-kg mt-4 w-full flex gap-2 flex-wrap"
                                        >
                                            {item.tech.map((te) => (
                                                <img src={te} className="h-6 w-auto" alt="" />
                                            ))}
                                        </motion.div>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                            }}
                                            animate={{
                                                opacity: activeCard === index ? 1 : 0.3,
                                            }}
                                            className="text-kg mt-4 w-full sm:ml-3"
                                        >
                                            {item.gits.map((git) => (
                                                <a href={git} target="_blank">
                                                    <div className="flex gap-2 items-center group">
                                                        <FaGithub className="text-inherit" />
                                                        <span className="group-hover:text-[var(--primary-color)] duration-300 break-all">
                                                            {git}
                                                        </span>
                                                        <LuExternalLink className="opacity-0 group-hover:opacity-100 duration-300 group-hover:text-[var(--primary-color)]" />
                                                    </div>
                                                </a>
                                            ))}
                                        </motion.div>
                                    </div>
                                ))}
                                <div className="h-40" />
                            </div>
                        </div>
                    </div>
                    <div
                        // style={{ background: backgroundGradient }}
                        className={cn('sticky top-1/3 hidden h-80 flex-1 lg:block', contentClassName)}
                    >
                        <div data-aos="fade-up">
                            <div className="w-full overflow-hidden">
                                <Swiper
                                    effect={'cards'}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    touchRatio={1}
                                    className="mySwiper"
                                >
                                    <>
                                        {content.map(
                                            (item, index) =>
                                                activeCard === index &&
                                                item.imgs.map((img) => (
                                                    <SwiperSlide>
                                                        <img
                                                            src={img}
                                                            alt=""
                                                            onClick={() => {
                                                                setPhotoIndex(index); // lưu index ảnh
                                                                setOpen(true); // mở lightbox
                                                            }}
                                                        />
                                                    </SwiperSlide>
                                                )),
                                        )}
                                    </>
                                </Swiper>
                            </div>
                            <Lightbox
                                open={open}
                                close={() => setOpen(false)}
                                index={photoIndex}
                                slides={content[activeCard].imgs.map((src) => ({ src }))}
                            />
                        </div>
                        {/* {content[activeCard].content ?? null} */}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
