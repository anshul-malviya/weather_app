import React, { useState, useEffect } from "react";


const App = () => {

  const [search, setSearch] = useState("Mumbai");
  const [city, setCity] = useState(null);

  useEffect(() => {
    foreCast(search);
  }, [search])

  const foreCast = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=511dcda4cab78272eba8ac7e872115de`
    const response = await fetch(url);
    const resjson = await response.json();
    setCity(resjson.main);
  }

  const inputHandler = (e) => {
    setSearch(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="center_div">
          <input type="search" placeholder="Search..." onChange={inputHandler} vlaue={search} />
          <h1>{search}</h1>
          {!city ?
            (<h2>No data found</h2>) : (
              <div>
                <h3>Temp : {city.temp}°C</h3><br />
                <h4>Max-temp : {city.temp_max}°C || Min-temp : {city.temp_min}°C</h4>
              </div>)}
        </div>
      </div>

    </>
  )
}
export default App;