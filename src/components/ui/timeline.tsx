'use client';
import { useScroll, useTransform, motion, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
    time: string;
    company: string;
    address: string;
    content: string;
    logo: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 100%', 'end 0%'],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    const smoothHeight = useSpring(heightTransform, {
        stiffness: 50, // nhỏ hơn thì chậm hơn
        damping: 20, // giảm độ rung lắc
    });

    return (
        <div className="w-full font-sans md:px-10" ref={containerRef}>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        data-aos="fade-up"
                        key={index}
                        className={`flex justify-start max-md:ml-15 pt-30 md:pt-40 max-md:p-10 md:gap-25 max-md:flex-col ${
                            index % 2 === 0 ? 'flex-row-reverse' : ''
                        }`}
                    >
                        {/* <div className="relative pl-20 pr-4 md:pl-4 w-full"> */}
                        <div
                            className={`flex-1 flex flex-col gap-2 block mb-4 ${index % 2 !== 0 ? 'md:text-end' : ''}`}
                        >
                            <div
                                className={`p-2 rounded-full bg-white h-10 w-10 shadow-sm ${
                                    index % 2 !== 0 ? 'md:block md:ml-auto' : ''
                                }`}
                            >
                                <img src={item.logo} alt="" />
                            </div>
                            <h3 className="font-bold text-neutral-500 dark:text-neutral-500 text-xl sm:text-2xl">
                                {item.company}
                            </h3>
                            <p className="text-[var(--primary-color)]">{item.time}</p>
                            <p>{item.address}</p>
                        </div>
                        <div className={`flex-1 ${index % 2 === 0 ? 'md:flex justify-end' : ''}`}>
                            <div className="md:max-w-md" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                        </div>
                        {/* </div> */}
                    </div>
                ))}
                <div
                    style={{
                        height: height + 'px',
                    }}
                    className="absolute left-0 top-0 overflow-hidden w-full bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: smoothHeight,
                            opacity: opacityTransform,
                        }}
                        className="absolute left-6 translate-x-[5px] md:left-1/2 md:-translate-x-1/2 inset-x-0 top-0  w-[6px] bg-gradient-to-t from-[var(--primary-color)] via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                    <motion.div
                        style={{
                            y: smoothHeight, // vị trí di chuyển theo thanh
                            opacity: opacityTransform,
                        }}
                        className="absolute left-6 md:left-1/2 -top-1 md:-translate-x-1/2 w-4! h-4! rounded-full bg-[var(--primary-color)] shadow-[0_0_20px_7px_var(--primary-color)]"
                    />
                </div>
            </div>
        </div>
    );
};
