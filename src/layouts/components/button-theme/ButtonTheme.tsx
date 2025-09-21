import { CiCloudMoon } from 'react-icons/ci';
import { IoSunnyOutline } from 'react-icons/io5';
import './button_theme.scss';
import useTheme from '~/hooks/useTheme';

const ButtonTheme = () => {
    const { theme, setTheme } = useTheme();
    console.log(theme);

    return (
        // <div className="button-theme" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        //     <div className={`them ${theme === 'dark' ? 'dark-select' : ''}`}></div>
        //     <IoSunnyOutline
        //         className={`icon text-yellow-500 duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
        //     />
        //     <CiCloudMoon
        //         className={`icon text-sky-500 duration-300 ${theme !== 'dark' ? 'opacity-0' : 'opacity-100'}`}
        //     />
        // </div>
        <div className="cursor-pointer" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <IoSunnyOutline size={25} className={`${theme === 'dark' ? '' : 'hidden'}`} />
            <CiCloudMoon size={25} className={`${theme === 'dark' ? 'hidden' : ''}`} />
        </div>
    );
};

export default ButtonTheme;
