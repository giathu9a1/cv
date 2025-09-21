import { CiLocationOn } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';

const AboutMe = () => {
    return (
        <div>
            <div data-aos="fade-up">
                <div className="relative duration-300 hover:scale-101">
                    <span className="absolute top-0 left-0 w-6 h-6 border-t-1 border-l-1 border-foreground"></span>
                    <div className="p-6">
                        <p className="text-lg font-semibold">Hi, I'm Thu.</p>
                        <div className="flex md:gap-5 gap-2 mt-2 max-md:flex-col">
                            <div className="flex items-center gap-1">
                                <FiPhone className="text-[var(--primary-color)]" />
                                <span>0833307204</span>
                            </div>
                            <p>
                                <span className="text-[var(--primary-color)]">@</span> nguyenbachgiathu2002@gmail.com
                            </p>

                            <div className="flex items-center gap-1">
                                <CiLocationOn className="text-[var(--primary-color)]" />
                                <span>District 3, Ho Chi Minh City</span>
                            </div>
                        </div>
                        <div className="my-5 h-[1px] w-[200px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
                        <p className="text-justify mt-2">
                            With a passion for technology, I have designed several web projects during my studies and
                            also had the opportunity to work at a software company. With the knowledge I have gained, I
                            am confident in my ability to contribute to the development and growth of relevant fields.
                        </p>
                        <p className="text-justify pb-2">
                            In the near future, my goal is to continue seeking new opportunities and join a company,
                            where I can apply my programming skills and gain more work experience. I look forward to
                            long-term development with the next company and growing together for the mutual benefit of
                            both parties.
                        </p>
                    </div>
                    <span className="absolute bottom-0 right-0 w-6 h-6 border-r-1 border-b-1 border-foreground"></span>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
