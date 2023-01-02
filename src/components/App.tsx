import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const sum = () => { setCount(count + 1)}
  const rest = () => { if(count > 0) setCount(count - 1)}

  useEffect( ()=>{
    console.log("mounted")
  },[]);

  return (
    <div className="flex flex-row w-full justify-center">
      <div className="flex-col m-2 text-center">
        <h1 className="text-xl">title</h1>
        <div className="flex flex-row bg-slate-600 text-white p-2 rounded-sm">
          <div className="flex flex-col space-y-2">
            <strong>{count} score</strong>
            <div className="flex flex-row space-x-2 font-bold">
              <button onClick={sum} type="button" className="bg-green-600 active:bg-green-800 hover:bg-green-700 hover:duration-300 transition p-2 rounded-sm">Click to sum!</button>  
              <button onClick={rest} type="button" className="bg-red-600 active:bg-red-800 hover:bg-red-700 hover:duration-300 transition p-2 rounded-sm">Click to rest!</button>
            </div>
          </div>
        </div>
        <a href="/Formulario" className='text-black font-bold'>Hacia Formulario</a>
      </div>
    </div>
  );
}

export default App;
