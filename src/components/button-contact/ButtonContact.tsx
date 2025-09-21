import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const ButtonContact = () => {
    return (
        <div className="fixed z-10 bottom-8 right-8 border border-dotted rounded-full p-3">
            <div className="flex flex-col gap-5">
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
    );
};

export default ButtonContact;
