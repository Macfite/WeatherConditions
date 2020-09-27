
const iamgeState = document.querySelector('.img');
const temperature = document.querySelector('.temperature');
const city = document.querySelector('.city');
const cityCard = document.querySelector('[data-js="city-card"]');

const cityNameInput = (cityname) => cityname = document.querySelector('.city-name').value;
const tempConvert = (temp) => Math.round(temp -= 273.15);

const getWeatherUrl = (cityname) =>{
    cityname = cityNameInput();
    const apiKey = 'e46ef90aec602a56d6724fcd82b4c26d';
    let lang = 'pt-br'

    return `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=${apiKey}&lang=${lang}`
}

const generateWeatherPromise = () =>  {
    return fetch(getWeatherUrl())
    .then(response => response.json());
}

const generateHTML = (Weather) => {

    cityCard.innerHTML = 
        `<img src="./icons/${Weather.weather[0].icon}.png" class="img"/>
        <p>${Weather.weather[0].description}</P>
        <h2 class="temperature">${tempConvert(Weather.main.temp)} °C</h2>
        <p class="city">${Weather.name}</p>`;
}

const weatherConsult = () => {
    generateWeatherPromise()
    .then(generateHTML);
}