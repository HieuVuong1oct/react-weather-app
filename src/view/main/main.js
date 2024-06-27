import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "../../components/Input/input";
import Btn from "../../components/Button/btn";
import DisplayInfo from "../../components/DisplayInfomation/displayInfo";
import Coordinates from "../../components/Coordinates/coordinates";

const Main = ({input, setInput, lat, lon, weatherToday, weatherTomorrow, weatherTomorrowAfter , city, index, icon, date, indexData}) => {
  return(
<div className="vh-100">
      <div className="container py-5 h-100">
        <div className="d-flex justify-content-center align-items-center  ">
          <div className="flex-1">
            <h3 className="mb-4 pb-2 fw-normal">Dự báo thời tiết</h3>
            <div className="input-group rounded mb-3">
              <Input input={input} setInput={setInput} />
              <Coordinates lat={lat} lon={lon} />
              <Btn
                id="weatherToday"
                className="btn btn-primary"
                onClick={weatherToday}
                text="Thời tiết hôm nay"
              />
              <Btn
                id="weatherTomorrow"
                className="btn btn-primary"
                onClick={weatherTomorrow}
                text="Thời tiết ngày mai"
              />
              <Btn
                id="weatherTomorrowAfter"
                className="btn btn-primary"
                onClick={weatherTomorrowAfter}
                text="Thời tiết ngày kia"
              />
            </div>
          </div>
          <div className="flex-2 card shadow-0 border">
            <DisplayInfo
              city={city}
              index={index}
              icon={icon}
              date={date}
              indexData={indexData}
            />
          </div>
        </div>
      </div>
    </div>
  )
    
}

export default Main;