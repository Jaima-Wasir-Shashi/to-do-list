
import React from 'react';
import Plus from './Plus';
import AddToDo from './AddToDo';

const Home = () => {
    return (
        <div className='p-10'>
            <Plus/>
            <AddToDo/>
        </div>
    );
};

export default Home;