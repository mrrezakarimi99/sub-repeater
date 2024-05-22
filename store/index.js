import {configureStore} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import languageReducer from '@/store/languageReducer';
import iframeReducer from "@/store/iframeReducer";

const reducer = {
    language: languageReducer,
    iframe: iframeReducer
};

export const makeStore = () => configureStore({reducer});
