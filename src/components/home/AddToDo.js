import React from 'react';

const AddToDo = () => {
    return (
        <div className='bdr p-10'>
            <form>
                <label htmlFor="">
                    Task Title :
                    <input type="text" />
                </label>
                <label htmlFor="">
                    Task Entry Time :
                    <input type="text" value={new Date()} />
                </label>
                <label htmlFor="">
                    Task Detail :
                    <textarea name="" id="" cols="30" rows="10">

                    </textarea>
                </label>
            </form>
        </div>
    );
};

export default AddToDo;