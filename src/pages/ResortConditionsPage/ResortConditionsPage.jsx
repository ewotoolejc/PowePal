export default function ResortConditionsPage({resort, curCon, fiveDay}) {
    return <div>
        <h1>{resort.name} Conditions</h1>
        <h2>Current:</h2>
        <p>
        <img src={curCon.condition.icon} alt='' />
        <br />
        {curCon.condition.text}
        <br />
        {curCon.feelslike_f}°F
        <br />
        Wind: {curCon.wind_mph} mph
        <br />
        Wind Gust: {curCon.gust_mph} mph
        <br />
        Wind Direction: {curCon.wind_dir}
        <br />
        Humdity: {curCon.humidity}
        <br />
        Visibility: {curCon.vis_miles} miles
        </p>
        <h2>5 Day Forecast</h2>
        <p>
        
        </p>  
    </div>
}