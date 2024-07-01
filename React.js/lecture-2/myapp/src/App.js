import './App.css';

// import file default
import Header from './components/Header';
import {name} from './components/Header';

function App() {
  return (
     <div className='App'>
      <Header/>
      <h1>hello</h1>
      <h1>my name is {name}</h1>
     </div> 
  );
}

export default App;
