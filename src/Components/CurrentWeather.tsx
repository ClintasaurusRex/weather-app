import type { WeatherData } from "../../mockData";

const CurrentWeather: React.FC<{ data: WeatherData }> = ({ data }) => {
  return (
    <section className="border-2 rounded-2xl bg-black/70 h-1/8 w-2/3  ">
      <h1 className=" ml-2 mt-2 text-white text-bold">
        {data.city}
        °C
      </h1>
      <div className="text-white flex flex-row justify-center items-center ml-2 mt-2">
        <span className="text-6xl flex flex-row mr-4">
          {data.temperature}
          <p className="text-xl">°C</p>
        </span>
        <div className="flex flex-col mb-2">
          <span className="text-xl ">{data.condition}</span>
          <p className="text-xs">Feels Like {data.feelsLike}</p>
          <div className="flex flex-row justify-around  ">
            <p className="text-xs">H:{data.high}</p>
            <p className="text-xs">L: {data.low}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CurrentWeather;
