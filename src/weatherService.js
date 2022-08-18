import {DateTime} from "luxon"


const fetchData = () => {
    return(
        fetch('https://api.openweathermap.org/data/2.5/weather?id=5370542&appid=b95b2f591dc9ac992cf7b24942b18383&units=imperial') 
        .then((response)=> (response.json()))
        
    )
    }

const fetchForecastData = () => {
    return(
        fetch('https://api.openweathermap.org/data/2.5/forecast?id=5370542&cnt=5&appid=b95b2f591dc9ac992cf7b24942b18383&units=imperial')
        .then((response)=> (response.json()))
    )

}

const fetchAirData = () => {
    return(
        fetch('https://api.openweathermap.org/data/2.5/air_pollution?lat=33.9803&lon=-118.4517&appid=b95b2f591dc9ac992cf7b24942b18383&units=imperial')
        .then((response)=> (response.json()))
    )
}
const fetchLaData = () => {
    return(
    fetch('https://api.openweathermap.org/data/2.5/weather?id=5368361&appid=b95b2f591dc9ac992cf7b24942b18383&units=imperial')
    .then((response)=> (response.json()))
    )
}

const fetchLaForecastData = () => {
    return(
        fetch('https://api.openweathermap.org/data/2.5/forecast?id=5368361&cnt=5&appid=b95b2f591dc9ac992cf7b24942b18383&units=imperial')
        .then((response)=> (response.json()))
    )

}

const fetchLaAirData = () => {
    return(
        fetch('https://api.openweathermap.org/data/2.5/air_pollution?lat=34.0522&lon=-118.2437&appid=b95b2f591dc9ac992cf7b24942b18383&units=imperial')
        .then((response)=> (response.json()))
    )
}
const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},

    } = data;

    const {main: details, icon} = weather[0];

    return {
        lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed,
    };
};


const formatForecastWeather = (data) => {
   
    const dayOne = data.list[0]
    const dayTwo = data.list[1]
    const dayThree = data.list[2]
    const dayFour = data.list[3]
    const dayFive = data.list[4]

    return {dayOne, dayTwo, dayThree, dayFour, dayFive}
}

const formatAir = (data) => {
    return (data.list[0])
}

const getData = () => {
    const formattedCurrentWeather =  fetchData().then(formatCurrentWeather);
    return {...formattedCurrentWeather}
}

const getForecast = () => {
    const formattedForecast = fetchForecastData().then(formatForecastWeather);
    return {...formattedForecast}
}

const getAir = () => {
    const formattedAir = fetchAirData().then(formatAir);
    return {...formattedAir}
}

const getLaData = () => {
    const formattedLaCurrentWeather = fetchLaData().then(formatCurrentWeather);
    return {...formattedLaCurrentWeather}
}

const getLaForecast = () => {
    const formattedLaForecast = fetchLaForecastData().then(formatForecastWeather);
    return {...formattedLaForecast}
}

const getLaAir = () => {
    const formmattedLaAir = fetchLaAirData().then(formatAir);
    return {...formmattedLaAir}
}

const convertTime = (
    secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const getIcon = (code) => 
    `http://openweathermap.org/img/wn/${code}@2x.png`;

export {getData, getForecast, getAir, getLaData, getLaForecast, getLaAir}
export { getIcon, convertTime}
