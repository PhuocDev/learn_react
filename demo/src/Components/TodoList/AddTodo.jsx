import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddTodo(props) {
  return (
    <>
        <form onSubmit={props.handleSubmit} >
            <div className="row p-2">
                <h2>Todo list app</h2> 
            </div>
            <div className="row d-flex justify-content-start">
                <div className="col-auto">
                    <input onChange={props.handleChangeInput} required value={props.input} type="text" placeholder='Enter caption here' />
                </div>
                <div className="col-auto ">
                    <button className='btn btn-primary '> 
                     {
                        (props.isUpdating) ? 'Update' : 'Add'
                     }
                    </button>
                </div>
            </div>
        </form>
    </>
  )
}
