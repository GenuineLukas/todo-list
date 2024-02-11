import React from 'react';
import {addTodo} from "@/lib/actions";

const Form = () => {
    return (
        <form
            action={addTodo}
            className='flex items-center gap-2'>
            <input
                type='text'
                name= 'title'
                className='flex-frwo w-full p-1 text-2xl rounded-lg text-black'
                placeholder='create a new task to do'
                autoFocus
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;