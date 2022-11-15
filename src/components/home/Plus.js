import React from 'react';
import { TiPlusOutline } from 'react-icons/ti';
import { ShowModalBtn } from '../preBuild/Modal'

const Plus = () => {
    return (
        <ShowModalBtn className='bg-green-400/80 border border-green-500 rounded-2xl h-20 w-20 flex justify-center items-center hover:bg-green-400 active:scale-95 transition' showInModal={<h1 className='text-rose-500 text-2xl font-bold text-center'> ki hoise tomar, sotti kore boloto?? </h1>}>

            <TiPlusOutline className='h-16 w-16 text-black'/>

        </ShowModalBtn>
    );
};

export default Plus;