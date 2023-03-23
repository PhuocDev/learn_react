import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TodoList(props) {
    const {todos, handleCheckbox, handleUpdate, handleDelete } = props;
  return (
    <>
        <h4 className="row p-2 m-2">
            Uncompleted tasks:
        </h4>
        <div className='container'>
            {
                todos.filter((todo) => {if(!todo.done) return todo;}).map((todo) => 

                    <div key={todo.id} className='row border border-bottom-dark d-flex align-items-center justify-content-between'>
                        <div className="col-1 fs-4">
                            <input checked={todo.done} onClick={handleCheckbox(todo.id)} type="checkbox" />
                        </div>
                        <div className="col-7 fs-4 text-truncate">
                            {todo.name}
                        </div>
                        <div className='col-4 d-flex justify-content-end'>
                            <button onClick={handleUpdate(todo)}  className='btn btn-secondary m-1'>Fix</button>
                            <button onClick={handleDelete(todo.id)} className='btn btn-danger m-1'>Del</button>
                        </div>
                    </div>
                )
            }
        </div>
        <h4 className="row p-2 m-2">
            Completed tasks:
        </h4>
        <div className='container '>
            {
                todos.filter((todo) => {if(todo.done) return todo;}).map((todo, index) => 

                    <div key={todo.id} className='row border border-bottom-dark d-flex align-items-center justify-content-between'>
                        <div className="col-1 fs-4">
                            <input checked={todo.done} onClick={handleCheckbox(todo.id)} type="checkbox" />
                        </div>
                        <div className="col-7 fs-4 text-truncate" >
                            <del>{todo.name}</del> 
                        </div>
                        <div className='col-4 d-flex justify-content-end'>
                            <button disabled={todo.done}  className='btn btn-secondary m-1'>Fix</button>
                            <button onClick={handleDelete(todo.id)} className='btn btn-danger m-1'>Del</button>
                        </div>
                    </div>
                )
            }
        </div>
    </>
  )
}
