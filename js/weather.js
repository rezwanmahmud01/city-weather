const loadData = () => {
    const inputValue = document.getElementById('input-field');
    const inputText = inputValue.value;
    const myApiKey = 'a98c7b5437bfa3128c207f1def382f5e';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${myApiKey}`)
        .then(res => res.json())
        .then(data => displayWeather(data))
    inputValue.value = '';
}

const displayWeather = (weather) => {
    // console.log(weather);
    const maxTemp = Math.round(weather.main.temp - 273.15);
    const divContainer = document.getElementById('div-container');
    divContainer.innerHTML = `
    <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
            <div class="col ">
                <p class="text-center text-white">City</p>
                <div class="p-3 border rounded container-height d-flex align-items-center justify-content-center">
                    <h3 class="text-center text-warning" style="text-transform: uppercase">${weather.name}</h3>
                </div>
            </div>
            <div class="col ">
                <p class="text-center text-white">Country</p>
                <div class="p-3 border rounded container-height d-flex align-items-center justify-content-center">
                    <h3 class="text-center text-white" style="text-transform: uppercase">${weather.sys.country}</h3>
                </div>
            </div>
            <div class="col">
                <p class="text-center text-white">Temperature</p>
                <div class="p-3 border rounded container-height d-flex align-items-center justify-content-center">
                    <h3 class="text-center text-warning" style="text-transform: uppercase">${maxTemp} °C</h3>
                </div>
            </div>
            <div class="col ">
                <p class="text-center text-white">Wind</p>
                <div class="p-3 border rounded container-height d-flex align-items-center justify-content-center">
                    <h3 class="text-center text-white" style="text-transform: uppercase">${weather.wind.speed} km/h</h3>
                </div>
            </div>
        </div>
    `;
}