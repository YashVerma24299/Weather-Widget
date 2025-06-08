// git karna phele





export default function InfoBox(){
    let info ={
        feelsLike: 32.65,
        humidity: 27,
        pressure: 1003,
        temp: 33.88,
        tempMax: 33.88,
        tempMin: 33.88,
        weather: "clear sky"
    }
    return(
        <>
            <div className="InfoBox">
                <h2>Weather Info</h2>
            </div>
        </>
    )
}