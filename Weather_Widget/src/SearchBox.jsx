import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  './SearchBox.css'
import { useState } from 'react';

// Used for weather API
// https://home.openweathermap.org
// API -> https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");


    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4d5a765a89c54adda8b7fc11499304ee";

    let getInfo = async() =>{
        // let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); // &units=metric -> for celcius 
        // console.log(response);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result ={
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            pressure: jsonResponse.main.pressure,
            weather: jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
    }


    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let info = await getInfo();
        updateInfo(info)
    }

    return(
        <>
            <div className="SearchBox">
                <form onSubmit={handleSubmit}>
                    <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                    <br /><br />
                    <Button variant="contained"  type="submit">Send</Button>
                </form>
            </div>
        </>
    )
}