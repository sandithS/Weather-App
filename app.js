function loadWeatherData(searchValue) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=8c38826aa6454b5b9a7163638251707&q=${searchValue}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("root").innerHTML = `
                
                    <img src="${data.current.condition.icon}" alt="" width="150" class="img1">
              
            `

            document.getElementById("details").innerHTML = `
            <section>
            <p style="font-size:3vw;">${data.location.name}</p>
            <p style="font-size:4vw;" class="temp">${data.current.temp_c}</p>
            <p class="condition">${data.current.condition.text}</p>
            </section>
            `

            document.getElementById("country").innerHTML = `
            <p style="font-size:4vw;">${data.location.country}</p>
            `
            document.getElementById("humidity").innerHTML = `
            <p>${data.current.humidity}</p>
            `
            document.getElementById("pressure").innerHTML = `
            <p>${data.current.pressure_mb}</p>
            `
            document.getElementById("windSpeed").innerHTML = `
            <p>${data.current.wind_kph}</p>
            `

            console.log(data);


        })
}


function searchByCity() {

    let searchValue = document.getElementById("search-bar").value;
    loadWeatherData(searchValue);

}


function getGeoLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}


function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    loadWeatherData(position.coords.latitude + "," + position.coords.longitude)
}


getGeoLocation();


//---------------------------------------------------------------------------------------------------


