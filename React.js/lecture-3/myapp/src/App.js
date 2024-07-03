import './App.css';
import ComA from './components/ComA'
import ComB from './components/ComB'
import ComC from './components/ComC'

// create  component in react js 

function App() {
    return(
      <div className='App'>
        <ComA/> 
     <div className='bg-slate-600 h-[610px]'> </div>
        <ComB/>
      </div>
    )
} 

export default App;
