import React from "react"
import {getIcon} from "../weatherService"
function Forecast({days, air}) {
  
    const getDays = (days) =>{
        const elements = []
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
        var day;
        var date = new Date();
        let d = date.getDay()
        for(const [key, value] of Object.entries(days)) {
            day = week[d]
            d++
            elements.push(
                <div key = {key} className = "flex flex-col items-center justify-center">
                      <p>{day}</p>
                    <img src = {getIcon(value.weather[0].icon)} alt = "" className = "w-20"/>
                    
                      <p>{`${value.main.temp.toFixed()}°F`}</p>
                </div>)
                
        }
        return (elements)
      

    }

    const otherConditions = (days) => {
        return(
            <div className = "flex flex-row items-center justify-center space-x-2 text-l text-white py-3">
                <p className = "mx-1">{`Pressure: ${days['dayOne'].main.pressure} PSI`}</p>
                <p className = "font-medium">|</p>
                <p className = "mx-1">{`Sea Level: ${days['dayOne'].main.sea_level} PSI`}</p>
                <p className = "font-medium">|</p>
                <p className = "mx-1">{`Ground Level: ${days['dayOne'].main.grnd_level} PSI`}</p>
            </div>
            
            )
    }

    const airConditions = (air) => {
        const aqi = air.main.aqi
        var air_status;
        if (aqi == '1'){
            air_status = 'Good'
        }
        if (aqi == '2'){
            air_status = 'Fair'
        }if (aqi == '3'){
            air_status = 'Moderate'
        }if (aqi == '4'){
            air_status = 'Poor'
        }
        if (aqi == '5'){
            air_status = 'Very Poor'
        }
        

        return (
            <div className = "flex flex-col items-center justify-start text-white">
                <div className = "flex flex-row space-x-2 text-l text-white">
                    <p>{`NO2: ${air.components.no2} ppb`}</p>
                    <p className = "font-medium">|</p>
                    <p>{`O3: ${air.components.o3} ppb`}</p>
                    <p className = "font-medium">|</p>
                    <p>{`PM10: ${air.components.pm10} ppb`}</p>
                </div>
                <hr className = "my-2" />

                <div className = "flex flex-row space-x-2 text-l text-white">
                    <p>{`CO: ${air.components.co} ppb`}</p>
                    <p className = "font-medium">|</p>
                    <p>{`NO: ${air.components.no} ppb`}</p>
                    <p className = "font-medium">|</p>

                    <p>{`SO2: ${air.components.so2} ppb`}</p>
                    <p className = "font-medium">|</p>

                    <p>{`NH3: ${air.components.no2} ppb`}</p>
                </div>
                <hr className = "my-2" />

                <div className = "flex flex-row items-center justify-center space-x-2 text-l text-white">
                    <p>{`AQI Scale: ${air.main.aqi}`}</p>
                    <p className = "font-medium">|</p>
                    <p>{`Air Quality Status: ${air_status}`}</p>
                </div>
                
            </div>

        )
    }
    
    return(
        <div>
            <div className = "flex items-center justify-start">
                <h1 className = "text-white font-medium uppercase">Air Conditions</h1>
            </div>
            <hr className = "my-2" />
            <div className = "flex flex-col items-center justify-between text-white py-4">
                {
                    airConditions(air)
                }
            </div>
            <div className = "flex items-center justify-start">
                <h1 className = "text-white font-medium uppercase">Other Conditions</h1>
                
            </div>
            <hr className = "my-2" />
            
            <div className = "flex flex-col items-center justify-between text-white">
                {
                    otherConditions(days)
                }
            </div>
            <div className = "flex items-center justify-start">
                <h1 className = "text-white font-medium uppercase">Daily Forecast</h1>
            </div>
            <hr className = "my-2" />
            <div className = "flex flex-row items-center justify-between text-white">
                {
                    getDays(days)
                }
            </div>
        </div>    
        )
}

export default Forecast;