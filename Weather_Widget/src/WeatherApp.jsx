import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from './SearchBox'

export default function WeatherApp(){
    const [weatherInfo, setweatherInfo] =useState({
        city: "Delhi",
        feelsLike: 32.65,
        humidity: 27,
        pressure: 1003,
        temp: 33.88,
        tempMax: 33.88,
        tempMin: 33.88,
        weather: "clear sky"
    })

    let updateInfo = (info)=>[
        setweatherInfo(info)
    ]

    return(
        <>
        <div className="" style={{textAlign: "center"}}>
            <h1>Weather Application</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        </>
    )
}