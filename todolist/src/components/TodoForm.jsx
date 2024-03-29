import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    const handleChange = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    }
        
    return (
        <form className='todo-form' onSubmit={handleSubmit} >
            <input type="text" 
            placeholder='Add a todo' 
            value={input} name='text' 
            className='todo-input' 
            onChange={handleChange}/>

            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default TodoForm