import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'react-bootstrap';

const Todo = (props) => {
    const {todo, index, markTodo, removeTodo } = props;

    return (  
        <div className="todo">
            <span style={{textDecoration: todo.isDone ? "line-through" : ""}}>{todo.text}</span>
            <div>
                <button  type="button" className="btn btn-primary" onClick={() => markTodo(index)}>Done</button> {'  '}
                <button  type="button" className="btn btn-danger" onClick={() => removeTodo(index)}>Del</button>
            </div>
        </div>
    );
}
 
export default Todo;