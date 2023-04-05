import React from 'react'

export default function TodoItem(props) {
    const {todos, handleCheckbox, handleDelete, handleUpdate} = props;
    
  return (
    <>
        <div className='container'>
            {
                todos.map((todo) => 

                    <div key={todo.id} className='row border border-bottom-dark d-flex align-items-center justify-content-between'>
                        <div className="col-1 fs-4">
                            <input checked={todo.done} onClick={handleCheckbox(todo.id)} type="checkbox" title="Tick here to complete the task" />
                        </div>
                        <div className="col-7 fs-4 text-truncate d-flex justify-content-start">
                            {todo.name}
                        </div>
                        <div className='col-4 d-flex justify-content-end'>
                            <button onClick={handleUpdate(todo)}  className='btn btn-secondary m-1' title="click here to change the caption">Fix</button>
                            <button onClick={handleDelete(todo.id)} className='btn btn-danger m-1' title='Click here to delete the task'>Del</button>
                        </div>
                    </div>
                )
            }
        </div>
    </>
  )
}
