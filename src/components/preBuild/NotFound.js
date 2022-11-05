import React from 'react';
import Error404 from '../../error.gif'

const NotFound = () => {
    return (
        <div className='fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center backdrop-blur-3xl -z-10'>
            <section className='container z-[999]'>
                <img className='mx-auto' src={Error404} alt="" />
                <h3 className='text-red-600 animate-pulse text-center font-medium'>Page not Found</h3>
            </section>
        </div>
    );
};

export default NotFound;