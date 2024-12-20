
let arr = [];
const today_weather = document.querySelector('.today-weather');
const weather = document.querySelector('.weather');
const search = document.querySelector('#search');
const mainCont = document.querySelector('.main-container');

let searchText = "london";
search.addEventListener('input', (e) => {
     searchText = e.target.value;
     weather.innerHTML = ' ';
     mainCont.innerHTML = ' ' 
     getWeather();
     console.log(searchText);    
});

async function getWeather() {
    console.log("search text",searchText);
    weather.innerHTML = ' ';
    mainCont.innerHTML = ' '
if(searchText === "" ){
    searchText = "london"
}
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchText}?unitGroup=metric&key=XBT5ZFAFMN7MF25BEG5XFUVDQ&contentType=json`);
    
    const res = await response.json();

    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; 
console.log(todayString);

    const todayWeather = res.days.find(day => day.datetime === todayString);
     arr = await todayWeather.hours;

    createUiWeatherDetails(todayWeather.sunrise , "Sunrise" , "./sunrise.png");
    createUiWeatherDetails(todayWeather.sunset, "Sunset" , "./sunset.png");
    createUiWeatherDetails(todayWeather.feelslike, "Feels Like" , "./like.png");
    createUiWeatherDetails(todayWeather.precip, "Rain" , "./rain.png");
    createUiWeatherDetails(todayWeather.visibility, "Visiblity" , "./eye.png" );
    createUiWeatherDetails(todayWeather.windspeed, "Wind" , "./weather.png");
    createUiWeatherDetails(todayWeather.pressure, "Pressure" , "./pressure-gauge.png");
    createUiWeatherDetails(todayWeather.cloudcover, "Cloud Cover" , "./cloudy.png");

    arr.forEach((data,index)=>{
        console.log(data);
        
        const formattedTime = data.datetime.split(':').slice(0, 2).join(':');
        createUiTodaysWeather(formattedTime ,data.icon ,data.temp);
        console.log(data.datetime);     
    })
    
    console.log( arr.length);
    
    if (todayWeather) {
        console.log('Weather data for today:', todayWeather);
    } else {
        console.log('No weather data found for today');
    }
}

function createUiTodaysWeather(time , sourceimage , temprature ){
    const weatherContent = document.createElement('div');
    weatherContent.classList.add('weather-content');

    const weatherContainer = document.createElement('div');
    weatherContainer.classList.add('weather-container');

    const p = document.createElement('p');
    p.textContent = time;
    
    const img = document.createElement('img');
    
    img.src = `${sourceimage}.png`;

    const h5 = document.createElement('h5');
    h5.textContent = `${temprature} `;


    weatherContainer.appendChild(p);
    weatherContainer.append(img);
    weatherContainer.append(h5);
    weatherContent.appendChild(weatherContainer);
    weather.appendChild(weatherContent);
}

function createUiWeatherDetails(sunrise , text , imgsrc , rain , visiblity, wind , preasure){
    const container = document.createElement('div');
    container.classList.add('container');

    const col = document.createElement('div');
    col.classList.add('col');

    const p = document.createElement('h5');
    p.textContent = text;
    
    const h5 = document.createElement('h5');
    h5.textContent = sunrise;

    const img = document.createElement('img');
    img.src = imgsrc;

    col.appendChild(p);
    col.append(h5);
    container.appendChild(col);
    container.append(img)
    mainCont.appendChild(container)  
}

getWeather();

