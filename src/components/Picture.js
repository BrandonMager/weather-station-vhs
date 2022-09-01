import React from "react";
import Details from "../weather-components/Weather"
import Forecast from "../weather-components/Forecast"
import LaDetails from "../weather-components/LA-Weather"
import LaForecast from "../weather-components/LA-Forecast"
import {useEffect, useState} from "react"
import {getAir, getData, getForecast, getLaData, getLaForecast, getLaAir}  from "../weatherService"

//import {venice} from '../data'

export default function Picture() {
    const [weather, setWeather] = useState(null);
    const [days, setDays] = useState(null);
    const [air, setAir] = useState(null);

    const [LaWeather, setLaWeather] = useState(null);
    const [LaDays, setLaDays] = useState(null);
    const [LaAir, setLaAir] = useState(null);

    useEffect( () => {
        if (weather === null){
        const fetchWeather = () => {

        
        getData().then((data) => {
            setWeather(data);
        })
        }
        fetchWeather()
       
    }

    if(days === null){
        const fetchForecast = () =>
            getForecast().then((data) => {
                setDays(data);
           })
           fetchForecast()
    }

    if (air === null){
        const fetchAir = () => {
            getAir().then((data) => {
                setAir(data)
            })

        }
        fetchAir()
    }
    
    if(LaWeather === null){
        const fetchLaWeather =  () => {
            getLaData().then((data) => {
                setLaWeather(data)
            })
        }
        fetchLaWeather()
    }

    if(LaDays === null){
        const fetchLaDays = () => {
             getLaForecast().then((data) => {
                setLaDays(data)
            })
        }
        fetchLaDays()

    }

    if(LaAir === null){
        const fetchLaAir = () => {
            getLaAir().then((data) => {
                setLaAir(data)
            })
        }
        fetchLaAir()
    }
    
    })
       
    
    const getBackground = () => {
        
        if (weather.temp >= 80){
            return 'from-yellow-500 to-orange-500'
        }
        if (weather.temp <= 65){
            return 'from-blue-900 to-gray-900'
        }
        return 'from-cyan-500 to-blue-600'
        
    }

    const getLaBackground = () => {
        if (LaWeather.temp >= 80){
            return 'from-yellow-500 to-orange-500'
        }
        if (LaWeather.temp <= 60){
            return 'from-blue-900 to-gray-900'
        }
        return 'from-cyan-500 to-blue-600'
    }

    if (weather && LaWeather && days && air && LaDays && LaAir ){
    return (
    
        <div className = "bg-[#1881ab] flex flex-col">
            
        <section className = {`mx-auto max-w-screen-md py-5 my-5 px-10 bg-gradient-to-r w-full ${getBackground()}`}>
            {weather && (
                <Details weather = {weather}/>
            )
            }   
            {days && (
                <Forecast days = {days} air = {air}/>
            )
            }
        </section>
        <section className = {`mx-auto max-w-screen-md py-5 my-5 px-10 bg-gradient-to-r w-full ${getLaBackground()}`}>
            {LaWeather && (
                <LaDetails LaWeather = {LaWeather}/>
            )}
            {LaDays && (
                <LaForecast LaDays = {LaDays} LaAir = {LaAir}/>
            )}
    
        </section>

        </div>
     )
    }
}