import logo from './logo.svg';
import './App.css';
import { BareButton } from './Components/BareButton';
import SimpleCounter from './Components/SimpleCounter';
import FilterBox from './Components/Filter/FilterBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <BareButton isHidden = {false} isLogged = {false}/> */}
        {/* <SimpleCounter /> */}
        <FilterBox />
      </header>
    </div>
  );
}

export default App;
