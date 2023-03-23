import './App.css';
import TodoApp from './Components/TodoList/TodoApp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container" style={{
      maxWidth:'650px'
    }}>
      <TodoApp />
    </div>
  );
}

export default App;
