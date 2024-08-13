import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [error, seterror] = useState(false);
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0c06b84562efff52297a715069dba2ff";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                minTemp: jsonResponse.main.temp_min,
                maxTemp: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
        }
        catch(err){
            seterror(true);
        }
        
    };
    return (
        <div style={{ marginBottom: "25px" }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange} /> &nbsp;
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    onSubmit={handleSubmit}> Search</Button>
                    {error && <p style={{color:"red"}}><h2>No such place exist !</h2></p>}
            </form>
        </div>
    )
}