import './ResortConditionsPage.css';

export default function ResortConditionsPage({resort, curCon, fiveDay}) {
    let dateOne = (fiveDay[0].date).substring(5)
    let dateTwo = (fiveDay[1].date).substring(5)
    let dateThree = (fiveDay[2].date).substring(5)
    let dateFour = (fiveDay[3].date).substring(5)
    let dateFive = (fiveDay[4].date).substring(5)
    return <div className='conditionspage'>
        <h1>{resort.name} Conditions</h1>
        <h2>Current:</h2>
        <p>
        <img src={curCon.condition.icon} alt='' />
        <br />
        {curCon.condition.text}
        <br />
        Feels Like: {curCon.feelslike_f}°F
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
        Date: {dateOne}
        <br />
        <img src={fiveDay[0].day.condition.icon} alt=''/>
        <br />
        {fiveDay[0].day.condition.text}
        <br />
        Sunrise: {fiveDay[0].astro.sunrise}
        <br />
        Sunset: {fiveDay[0].astro.sunset}
        <br />
        Avg Temp: {fiveDay[0].day.avgtemp_f}°F
        <br />
        High: {fiveDay[0].day.maxtemp_f}°F
        <br />
        Chance of Snow: {fiveDay[0].day.daily_chance_of_snow}%
        <br />
        Chance of Rain: {fiveDay[0].day.daily_chance_of_rain}%
        </p>
        <br />
        <p>
        Date: {dateTwo}
        <br />
        <img src={fiveDay[1].day.condition.icon} alt=''/>
        <br />
        {fiveDay[1].day.condition.text}
        <br />
        Sunrise: {fiveDay[1].astro.sunrise}
        <br />
        Sunset: {fiveDay[1].astro.sunset}
        <br />
        Avg Temp: {fiveDay[1].day.avgtemp_f}°F
        <br />
        High: {fiveDay[1].day.maxtemp_f}°F
        <br />
        Chance of Snow: {fiveDay[1].day.daily_chance_of_snow}%
        <br />
        Chance of Rain: {fiveDay[1].day.daily_chance_of_rain}%
        </p>
        <br />
        <p>
        Date: {dateThree}
        <br />
        <img src={fiveDay[2].day.condition.icon} alt=''/>
        <br />
        {fiveDay[2].day.condition.text}
        <br />
        Sunrise: {fiveDay[2].astro.sunrise}
        <br />
        Sunset: {fiveDay[2].astro.sunset}
        <br />
        Avg Temp: {fiveDay[2].day.avgtemp_f}°F
        <br />
        High: {fiveDay[2].day.maxtemp_f}°F
        <br />
        Chance of Snow: {fiveDay[2].day.daily_chance_of_snow}%
        <br />
        Chance of Rain: {fiveDay[2].day.daily_chance_of_rain}%
        </p>
        <br />
        <p>
        Date: {dateFour}
        <br />
        <img src={fiveDay[3].day.condition.icon} alt=''/>
        <br />
        {fiveDay[3].day.condition.text}
        <br />
        Sunrise: {fiveDay[3].astro.sunrise}
        <br />
        Sunset: {fiveDay[3].astro.sunset}
        <br />
        Avg Temp: {fiveDay[3].day.avgtemp_f}°F
        <br />
        High: {fiveDay[3].day.maxtemp_f}°F
        <br />
        Chance of Snow: {fiveDay[3].day.daily_chance_of_snow}%
        <br />
        Chance of Rain: {fiveDay[3].day.daily_chance_of_rain}%
        </p>
        <br />
        <p>
        Date: {dateFive}
        <br />
        <img src={fiveDay[4].day.condition.icon} alt=''/>
        <br />
        {fiveDay[4].day.condition.text}
        <br />
        Sunrise: {fiveDay[4].astro.sunrise}
        <br />
        Sunset: {fiveDay[4].astro.sunset}
        <br />
        Avg Temp: {fiveDay[4].day.avgtemp_f}°F
        <br />
        High: {fiveDay[4].day.maxtemp_f}°F
        <br />
        Chance of Snow: {fiveDay[4].day.daily_chance_of_snow}%
        <br />
        Chance of Rain: {fiveDay[4].day.daily_chance_of_rain}%
        </p>
        <br />
    </div>
}