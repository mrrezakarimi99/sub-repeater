import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'en',
  theme: '',
  flag: 'https://flagicons.lipis.dev/flags/4x3/gb.svg'
};

const language = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      if (state.lang === 'fa') {
        state.lang = 'en';
        state.theme = '';
        state.flag = 'https://flagicons.lipis.dev/flags/4x3/gb.svg';
      } else {
        state.lang = 'fa';
        state.theme = 'rtl';
        state.flag = 'https://flagicons.lipis.dev/flags/4x3/ir.svg';
      }
    }
  }
});
export const { toggleLanguage } = language.actions;
export default language.reducer;
