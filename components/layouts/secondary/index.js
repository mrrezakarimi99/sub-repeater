import React, {useEffect, useState} from 'react';

const SecondaryLayout = ({children}) => {
    return (
        <>
            <header id='header'>
                {children}
            </header>
        </>
    );
};
export default SecondaryLayout;
