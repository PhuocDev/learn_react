import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TodoApp() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Add function called")
    }
    const [input, setInput] = useState('');

    const [todos, setTodos] = useState([]);

    const handleChangeInput = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit} >
            <div className="row p-2">
                <h2>Todo list app</h2> 
            </div>
            <div className="row d-flex justify-content-start">
                <div className="col-6 ml-4">
                    <input onChange={handleChangeInput} type="text" placeholder='Enter caption here' />
                </div>
                <div className="col-6">
                    <button className='btn btn-primary'>Thêm</button>
                </div>
            </div>
        </form>
        <h4 className="row p-3">
            Chưa hoàn thành
        </h4>
        <div className='container'>
            <div className='row border border-bottom-dark d-flex align-items-center justify-content-between'>
                <div className="col-1 fs-4">
                    <input type="checkbox" />
                </div>
                <div className="col-7 fs-4 text-truncate">
                    Việc làm 1
                </div>
                <div className='col-4 d-flex justify-content-end'>
                    <button className='btn btn-secondary m-1'>Fix</button>
                    <button className='btn btn-danger m-1'>Del</button>
                </div>
            </div>
            <div className='row border border-bottom-dark d-flex align-items-center justify-content-between '>
                <div className="col-1 fs-4">
                    <input type="checkbox" />
                </div>
                <div className="col-7 fs-4 text-truncate">
                    Việc làm 2 hôm rồi mà chưa xong
                </div>
                <div className='col-4 d-flex justify-content-end'>
                    <button className='btn btn-secondary m-1'>Fix</button>
                    <button className='btn btn-danger m-1'>Del</button>
                </div>
            </div>
        </div>

        <h4 className="row p-3">
            Đã hoàn thành
        </h4>
        <div className='container '>
            <div className='row border border-bottom-dark d-flex align-items-center justify-content-between'>
                <div className="col-1 fs-4">
                    <input type="checkbox" checked='true'/>
                </div>
                <div className="col-7 fs-4 text-truncate">
                    <del>Việc làm đã hoàn thành</del>
                </div>
                <div className='col-4 d-flex justify-content-end'>
                    <button className='btn btn-secondary m-1' disabled>Fix</button>
                    <button className='btn btn-danger m-1'>Del</button>
                </div>
            </div>
        </div>
    </div>
  )
}
