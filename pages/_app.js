import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PrimaryLayout from '@/components/layouts/primary';
import React from 'react';
import { makeStore } from '@/store';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';


const App = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={makeStore()}>
        <PrimaryLayout>
          <Component {...pageProps} />
        </PrimaryLayout>
      </Provider>
    </>
  );
};

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
