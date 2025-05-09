// import { useState } from "react";
import { mockWeatherData } from "../mockData";
import CurrentWeather from "../src/Components/CurrentWeather";

import "./App.css";
import Header from "./Components/Header";

console.log(mockWeatherData);

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex w-screen flex-col bg-blue-700">
      <Header title="Whirly Weather App" />
      <main className="flex flex-1 pt-40 justify-center w-full">
        <CurrentWeather data={mockWeatherData[0]} />
      </main>
    </div>
  );
}

export default App;

// const CurrentWeather: React.FC<{ data: WeatherData }> = ({ data }) => {
//   return (
//     <section className="border-2 h-1/8 w-2/3 ">
//       <h1 className=" ml-2 mt-2 text-white"> {data.city} </h1>
//     </section>
//   );
// };
