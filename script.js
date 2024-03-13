const apiKey = "03a285d67f4bed7d17c49d39f2b39a47";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
}