import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import FormTodo from './components/FormTodo';
import Todo from './components/Todo';
import axios from 'axios';  
function App() {
  const [data, setData] = useState('');
  const [todos, setTodos] = useState([{
      id: Math.random() * 10000000,
      text: "this is a sample todo",
      isDone: false
    }
  ]);
  const addTodo = todo => {
    const newTodos = [ ...todos, todo];
    console.log(newTodos);
    setTodos(newTodos);
  };
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

    // axios.delete('https://calm-plum-jaguar-tutu.cyclic.app/todos/' )
    // .then(response => console.log("da xoa thanh cong"))
    // .catch(error => {
    //     console.error('There was an error!', error);
    // });
  };
  useEffect(() => {
      const fetchData = async () => {
          const response = await axios.get('https://calm-plum-jaguar-tutu.cyclic.app/todos');
          const rawData = response.data.data;
          const newTodo = rawData.map(item =>{
            return {
              id: item._id,
              text: item.todoName,
              isDone: item.isCompleted,
            }
          })
          setTodos(newTodo);
      };
      fetchData();
  }, []);

  return (
    <div className="App">
      <div className='container'>
        <h1 className='text-center mb-4'>Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            // Nên để key ở ngoài đối tượng được render
            <Card className='m-3' key={index}>   
              <Card.Body>
                <Todo
                  
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo= {removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
