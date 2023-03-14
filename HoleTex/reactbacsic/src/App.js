import { useCallback, useState } from "react";
import Todolist from "./components/Todolist";
import { v4 } from "uuid"
function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');  //set input
  const handleInputText = useCallback((e) => {

    setTodo(e.target.value);
    //console.log(e.target.value);
  }, [])

  //add button
  const handleAddBtn = useCallback((e) => {
    //console.log(todoList);
    //setTodoList([...todoList], {id: v4(), name: todo, isCompleted: false});
    const newTodos  = [{id: v4(), name: todo, isCompleted: false}, ...todoList]; //tạo một list mới chứa todo vừa được tạo ra
    setTodoList(newTodos);
    setTodo('');
    //console.log(todo,...todoList);
  }, [todo, todoList]) // khi text todo thay đổi, function này mới được hoạt động

  return (
    <div className="App">
      <div className='row m-2 p-2'>Danh sách việc cần làm: </div>
      <div className="input-group">
          <input 
          value={todo} 
          onChange={handleInputText}
          type="text" className="form-control" placeholder="Thêm việc cần làm"/>
          <button disabled={!todo} onClick={handleAddBtn} type="button" className="btn btn-outline-secondary">Thêm</button>
      </div>
      <Todolist todoList={todoList}/>
    </div>
  );
}

export default App;
