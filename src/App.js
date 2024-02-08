import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

const api = {
  key: "1f49c0af5e2ddd1f402a5f6afb0a138b",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {

  const [search, setSearch] = useState(""); //useState is hook, allows to manage storage
  const [weather, setWeather] = useState({});
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
    });

    console.log(weather);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/*HEADER*/}
        <h1>Weather App</h1>
        {/*Search Box*/}
        <div>
         <input type="text" 
                placeholder="Enter Location..."
                onChange={(e) => setSearch(e.target.value)}
         />{/*haves setSearch value*/}
          
          <button onClick={searchPressed}>Search</button>
          </div>
        
        {/*if weather not undefined*/}
          {typeof weather.main !== "undefined" ? (
                <div>
                {/*Location*/}
                <p>{weather.name}</p>
        
                {/*Temperature F/C */}
              <p>{weather.main.temp}°C</p> 
        
                {/*Condition (Sunny) */}
            
                <p>{weather.weather[0].main}</p>
                <p>({weather.weather[0].description})</p>
                </div>
          ) : (
            ""
          )}   
      </header>
      
    </div>
  );
}

export default App;
