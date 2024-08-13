import { useState } from "react"
import InfoBox from "./Infobox"
import SearchBox from "./SearchBox"

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo] = useState({
        city: "Delhi",
        temp: 25,
        humidity: 60,
        minTemp: 25,
        maxTemp: 30,
        feelsLike:24.94,
        weather : "haze",
    });
    let updateInfo = (info) =>{
        setweatherInfo(info);
    }
    return(
        <div>
            <h2>Weather App by Priyanshii</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>  
    )
}