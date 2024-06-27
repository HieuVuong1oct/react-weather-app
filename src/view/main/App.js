import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./main";
function App() {
  const [input, setInput] = useState("Hà Nội");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(null);
  const [date, setDate] = useState([]);
  const [icon, setIcon] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
   const getData =() => {

    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=b475a77ad1eee9360b814683bff76d02`
      )
      .then((response) => {
        const resLat = response.data[0].lat.toString();
        const resLon = response.data[0].lon.toString();
        setLat(resLat);
        setLon(resLon);
      })
      .catch((error) => console.log(error));
    }
    
    if(input !== ''){
      getData();
    }
    
  }, [input]);
 
  useEffect(() => {
   const getCoordinate = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0322ef11d2cadcd44625773b4c6a2427`,
        {
          params: {
            units: "metric",
          },
        }
      )
      .then((response) => {     
        const resList = response.data.list;
        setData(resList);
        const city = response.data.city;
        setCity(city);
        const iconCode = resList[index]?.weather[0].icon;
        const icon = `http://openweathermap.org/img/wn/${iconCode}.png`;
        setIcon(icon)
      })
      .catch((error) => console.log(error));
    }
    if (lat !== '' && lon !== '') {
      getCoordinate();
    }
  }, [lat, lon, index]);

  var options = {
    timeZone: "Asia/Ho_Chi_Minh", 
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  var formatter = new Intl.DateTimeFormat("vi-VN", options);

  useEffect(() => {
    if (index === 0) {
      var time = new Date();
      var formattedDate = formatter.format(time);
    } else if (index === 5) {
      var time = new Date();
      time.setDate(time.getDate() + 1);
      var formattedDate = formatter.format(time);
    } else if (index === 13) {
      var time = new Date();
      time.setDate(time.getDate() + 2);
      var formattedDate = formatter.format(time);
    }
    setDate(formattedDate);
  }, [index]);

  const weatherToday = () => {
    setIndex(0);
  }
  const weatherTomorrow = () => {
    setIndex(5);
  }
  const weatherTomorrowAfter = () => {
    setIndex(13);
  }

  var indexData = data[index];
  return (
      <Main 
      input={input} 
      setInput={setInput} 
      lat={lat} 
      lon={lon} 
      weatherToday={weatherToday} 
      weatherTomorrow={weatherTomorrow} 
      weatherTomorrowAfter={weatherTomorrowAfter} 
      city={city}
      index={index} 
      icon={icon}
      date={date}
      indexData={indexData}
      />
  )
}

export default App;
