import { createSlice } from '@reduxjs/toolkit';

type ThemeType = 'light' | 'dark';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        iconTheme: 'light' as ThemeType,
    },
    reducers: {
        updateIconTheme: (state, action) => {
            state.iconTheme = action.payload;
        },
    },
});

export const { updateIconTheme } = themeSlice.actions;
export default themeSlice.reducer;
