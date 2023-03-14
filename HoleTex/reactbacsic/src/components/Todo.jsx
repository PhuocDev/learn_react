import React from 'react'

export default function Todo({todo}) {
  return (

    <div className="row m-2 p-2" style={{border:"1px solid grey", borderRadius:'10px'}}> 
    <p className='col-8' style={{fontSize:'1rem', display:'flex', verticalAlign:'middle'}}>
    {todo.name} 
    </p> 
    <span className='col-4 btn btn-danger' style={{fontSize:'1rem'}}> Done</span>
    </div>
  )
}
