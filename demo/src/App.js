import logo from './logo.svg';
import './App.css';
import { BareButton } from './Components/Button/BareButton';
import SimpleCounter from './Components/Button/SimpleCounter';
import FilterBox from './Components/Filter/FilterBox';
import TodoApp from './Components/TodoList/TodoApp';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <BareButton isHidden = {false} isLogged = {false}/> */}
        {/* <SimpleCounter /> */}
        {/* <FilterBox /> */}
        <TodoApp />
      </header>
    </div>
  );
}

export default App;
