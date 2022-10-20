
const { Weather } = require('./weather');
const {UI} = require('./UI');
const {Store} = require('./store');

const store = new Store();
const {city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);
const ui = new UI();

async function fetchWeather(){
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}
document.addEventListener('DOMContentLoaded', fetchWeather);

// se obtiene el elemento del boton, se escucha el evento y se realiza una funcion
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    // se obtiene los elementos de Ciudad y codigo del pais
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('country-code').value;

    weather.changeLocation(city,countryCode);
    store.setlocationData(city,countryCode)
    fetchWeather();

    e.preventDefault();
})