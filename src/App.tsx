// import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-screen bg-blue-700">
        <Header title="Whirl Weather App" />
      </div>
    </>
  );
}

export default App;
{
  /* <div className=" flex flex-col  justify-center items-center min-h-screen w-screen bg-gray-700 ">
        <div className="flex items-center justify-center">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="p-5 font-bold underline">Vite + React</h1>
        <div className="card flex flex-col font-bold p-5">
          <button
            className="border-2 mx-23 border-amber-600 bg-amber-700"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs font-bold underline">
          Click on the Vite and React logos to learn more
        </p>
      </div> */
}
