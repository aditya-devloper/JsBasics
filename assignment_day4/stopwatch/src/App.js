import logo from './logo.svg';
import './App.css';
import Watch from './component_1/Watch';
import New_watch from './components/New_watch';
import Watch_class from './components/Watch_class';
import { useState } from 'react';


function App() {

  const [change,setchange]=useState(true);
    

  return (
    <div className="App">
            <button class=" my-10   cursor-pointer h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600" onClick={()=>{setchange(!change)}}>Toggle</button>

      {
        change?<Watch_class/>:<New_watch />
      }

     
    
    </div>
  );
}

export default App;
