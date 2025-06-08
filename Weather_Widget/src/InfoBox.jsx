import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function InfoBox(){
    let IMG_URL = "https://plus.unsplash.com/premium_photo-1667143329632-6cfb18f6fe7f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    let info ={
        city: "Delhi",
        feelsLike: 32.65,
        humidity: 27,
        pressure: 1003,
        temp: 33.88,
        tempMax: 33.88,
        tempMin: 33.88,
        weather: "clear sky"
    }

    let mystyle ={
        display: "flex",
        justifyContent: "center"
    }
    let center ={
        textAlign: "center"
    }

    return(
        <>
            <div className="InfoBox">
                <h2 style={center}> Weather Info - {info.weather}</h2>
            </div>
            <div style={mystyle}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {IMG_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p>The weather can be decribed as <b>{info.weather}</b> and feel like: {info.feelsLike}</p>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Temp Max = {info.tempMax}&deg;C</p>
                        <p>Temp Min = {info.tempMin}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Pressure = {info.pressure}</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </>
    )
}