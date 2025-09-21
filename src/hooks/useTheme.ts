import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '~/store';
import { updateIconTheme } from '~/store/slices/themeSlices';

const useTheme = () => {
    const theme = useSelector((state: RootState) => state.theme.iconTheme);
    const dispatch = useDispatch();

    const setTheme = (theme: 'light' | 'dark') => {
        const html = document.documentElement;
        html.classList.remove('light', 'dark');
        html.classList.add(theme);
        dispatch(updateIconTheme(theme));
    };

    return { theme, setTheme };
};

export default useTheme;
