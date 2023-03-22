import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function TodoApp() {
    const [input, setInput] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

    const [todos, setTodos] = useState([
        // {
        // id: Math.floor(Math.random()* 10000),
        // name: 'sample',
        // done: false
        // }
    ]);


    const handleSubmit = (e) => {
        e.preventDefault();
        //setInput(e.target.value);
        if (!isUpdating) {
            console.log("Add function clicked: ", input);
            if (input!= '' && input!= null) {
                if (nameIsDuplicated(input) ) {
                    alert('Caption is existed!')
                    setInput('');
                    e.target.reset();  //clear input
                } else {
                    const newTodo = {
                        id: Math.floor(Math.random()* 10000),
                        name: input,
                        done: false
                    }
                    const newTodos = [...todos, newTodo];
                    setTodos(newTodos);
                    setInput('');
                    e.target.reset();  //clear input
                }
            } else console.log("input is null")
        } else {
            if (input!= '' && input!= null) {
                if (nameIsDuplicated(input) ) {
                    alert('Choose another caption!');
                    //e.target.reset();  //clear input
                } else {
                    //update todo
                    const newTodos = todos.filter((todo) => {
                        if (todo.id === currentTodo.id) {
                            todo.name = input;
                            return todo;
                        } return todo;
                    })
                    setTodos(newTodos);
                    setInput('');
                    setIsUpdating(false);
                }
            } else console.log("input is null");

            
        }
        
    }
    const nameIsDuplicated = (name) => {
        let result = false;
        todos.forEach((todo) => {
            // console.log(todo.name);
            if (todo.name === name && todo.done == false) {
                console.log("co trung lap");
                result = true;
            }
        })
        return result;
    }

    const handleChangeInput = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }
    const handleDelete = (id) => () => {
        const newTodos = todos.filter((todo) => {
            if (todo.id != id) {
                return todo;
            }
        })
        setTodos(newTodos);
    }
    const handleCheckbox = (id) => () => {
        const newTodos = todos.filter((todo) => {
            if (todo.id === id) {
                todo.done = true;
                return todo;
            } return todo;
        })
        setTodos(newTodos);
    }
    const handleUpdate = (todo) => ()  => {
        console.log('current todo: ', todo );
        setInput(todo.name);
        setCurrentTodo(todo);
        setIsUpdating(true);
    }

  return (
    <div className='container'>
        <AddTodo isUpdating={isUpdating} input={input} handleSubmit={handleSubmit}  handleChangeInput={handleChangeInput}/>
        <TodoList 
            handleDelete={handleDelete}
            handleCheckbox={handleCheckbox}
            handleUpdate={handleUpdate}
            todos={todos}
        />
    </div>
  )
}
