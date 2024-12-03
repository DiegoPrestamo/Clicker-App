import React, { useState } from 'react';
/* import logo from './logo.svg'; */
/* import './App.css'; */

const App: React.FC = () => {
  // State to keep track of the count using useState as a hook
  const [count, setCount] = useState<number>(0);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center">Welcome to the Clicker Counter!</h1>
      <h2 className="text-xl text-gray-700 text-center mt-4">
        Click on the buttons to add clicks 
      </h2>
      <div className="text-center mt-8">
        <span className="text-2xl font-bold">{count}</span>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setCount(count + 1)} 
        >
          +1 Click 
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => setCount(count + 5)}
        >
          +5 Clicks
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
