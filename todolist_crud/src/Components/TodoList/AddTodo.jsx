import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Proptypes from 'prop-types'
export default function AddTodo(props) {
  return (
    <>
        <form onSubmit={props.handleSubmit} >
            <div className="row p-2 m-2">
                <h2>SIMPLE TODO APP</h2> 
            </div>
            <div className="row">
                <div className="col-10 d-flex justify-content-start">
                    <input onChange={props.handleChangeInput} 
                    required 
                    value={props.input} 
                    type="text" 
                    placeholder='Enter caption here'
                    className='fs-5 w-100'
                     />
                </div>
                <div className="col-2 d-flex justify-content-start">
                    <button className='btn btn-primary btn-rounded fs-5'> 
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
AddTodo.propTypes = {
    handleChangeInput: Proptypes.func.isRequired,
    handleSubmit: Proptypes.func.isRequired,
    input: Proptypes.string
}