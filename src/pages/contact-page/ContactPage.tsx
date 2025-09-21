import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import SignupFormDemo from '~/components/signup-form-demo';
import { ShootingStars } from '~/components/ui/shooting-stars';
import { StarsBackground } from '~/components/ui/stars-background';
import { SiGmail } from 'react-icons/si';

const ContactPage = () => {
    // const handleSubmit = () => {};

    return (
        <div>
            <div className="py-30 container z-100">
                <h1 className="text-6xl font-extrabold text-center">Get In Touch</h1>
                <div className="flex sm:px-10 md:px-30 mt-17 max-lg:flex-col gap-10">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                            Contact Information
                        </h2>
                        <a href="mailto:nguyenbachgiathu2002@gmail.com">
                            <div className="flex items-center gap-2 mt-5">
                                <MdOutlineMail />
                                <span>nguyenbachgiathu2002@gmail.com</span>
                            </div>
                        </a>
                        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mt-15">
                            Connect with Me
                        </h2>
                        <div className="flex gap-5 mt-5">
                            <a href="https://github.com/giathu9a1" target="_blank">
                                <FaGithub size={30} />
                            </a>
                            <a href="mailto:nguyenbachgiathu2002@gmail.com">
                                <SiGmail size={30} />
                            </a>
                            <a href="https://www.linkedin.com/in/th%C6%B0-nguy%E1%BB%85n-92526334b/" target="_blank">
                                <FaLinkedinIn size={30} />
                            </a>
                        </div>
                    </div>
                    <div className="flex-1">
                        <SignupFormDemo />
                    </div>
                </div>
            </div>
            {/* <ShootingStars />
            <StarsBackground /> */}
        </div>
    );
};

export default ContactPage;
