import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[count, setVal] = useState(0);

  function decrement(){
    setVal(count-1);
  }

  function increment(){
    setVal(count+1);
  }

  function reset(){
    setVal(0);
  }
  

  return (
    <div className="h-screen w-screen bg-slate-700 flex justify-center flex-col gap-10 items-center">
      <h3 className='text-blue-400 '>Increment and Decrement</h3>
      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-gray-600'>
        <button onClick={decrement} className='border-r-2 text-center w-20 border-white text-5xl'>
          -
        </button>
        <div className='border-r-2 text-center w-20 border-white text-5xl'>
          {count}
        </div>
        <button onClick={increment} className='border-r-2 text-center w-20 border-white text-5xl'>
          +
        </button>
      </div>

      <button onClick={reset}>
        reset
      </button>

    </div>
  );
}

export default App;
