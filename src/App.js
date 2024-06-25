import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [input, setInput] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(null);
  const [date,setDate] = useState([]);
  const [icon,setIcon] = useState('');

  const coordinatesData = () => {
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
    console.log(lat, lon);
  };

  const getWeather = () => {
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

        const iconCode = resList[index]?.weather[0].icon;
        const icon = `http://openweathermap.org/img/wn/${iconCode}.png`;

       
        setIcon(icon);
      })
      .catch((error) => console.log(error));
    console.log(data);
  };

  var options = {
    timeZone: "Asia/Ho_Chi_Minh", // Đặt múi giờ Việt Nam
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
  
  const weatherToday = () => {
    setIndex(0);
    var time = new Date();
    var formattedDate = formatter.format(time);
    setDate(formattedDate);
  };

  const weatherTomorrow = () => {
    setIndex(5);
    var time = new Date();
    time.setDate(time.getDate() + 1);
    var formattedDate = formatter.format(time);
    setDate(formattedDate);
  };

  const weatherTomorrowAfter = () => {
    setIndex(13);
    var time = new Date();
    time.setDate(time.getDate() + 2);
    var formattedDate = formatter.format(time);
    setDate(formattedDate);
  };
 
  // useEffect(() => {
  //   if(!input){
  //     return;
  //   }

  //   coordinatesData()
  // },[input]);

  return (
    <div className="vh-100">
      <div className="container py-5 h-100">
        <div className="d-flex justify-content-center align-items-center  ">
          <div className="flex-1">
            <h3 className="mb-4 pb-2 fw-normal">Thời tiết theo tọa độ</h3>
            <div className="input-group rounded mb-3">
              <input
                className="form-control rounded"
                type="text"
                id="city"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Thành phố"
              />
              <button
                id="getCoordinates"
                className="btn btn-primary"
                onClick={() => coordinatesData()}
              >
                Lấy tọa độ
              </button>
              <div>
                <p>Vĩ độ Bắc: {lat}</p>
                <p>Kinh độ Đông: {lon}</p>
              </div>
              <button
                id="weatherToday"
                className="btn btn-primary"
                onClick={() => getWeather()}
              >
                Lấy dữ liệu thời tiết
              </button>

              <button
                id="weatherToday"
                className="btn btn-primary"
                onClick={() => weatherToday()}
              >
                Thời tiết hôm nay
              </button>

              <button
                id="weatherToday"
                className="btn btn-primary"
                onClick={() => weatherTomorrow()}
              >
                Thời tiết ngày mai
              </button>

              <button
                id="weatherToday"
                className="btn btn-primary"
                onClick={() => weatherTomorrowAfter()}
              >
                Thời tiết ngày kia
              </button>
              </div>
              </div>
              <div className="flex-2 card shadow-0 border">
                <div key={index} className="card-body p-4">
                <img src={icon} alt="weather icon" />
                  <p className="mb-2">
                    {date}
                  </p>
                  <p className="mb-2">
                    Nhiệt độ hiện tại: {data[index]?.main.temp} °C
                  </p>
                  <p className="mb-2">
                    Nhiệt độ cao nhất: {data[index]?.main.temp_max} °C
                  </p>
                  <p className="mb-2">
                    Nhiệt độ thấp nhất: {data[index]?.main.temp_min} °C
                  </p>
                  <p className="mb-2">Độ ẩm: {data[index]?.main.humidity} %</p>
                  <p className="mb-2">Tầm nhìn:{data[index]?.visibility} m</p>
                  <p className="mb-2">
                    Tốc độ gió: {data[index]?.wind.speed} m/s
                  </p>
                  <p className="mb-2">
                    Độ che phủ mây: {data[index]?.clouds.all}
                  </p>
                </div>
              </div>
            
          
        </div>
      </div>
    </div>
  );
}

export default App;
