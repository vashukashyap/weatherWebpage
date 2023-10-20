API_KEY = 'your-api-key'
URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search Button')


const checkWeather = async (city) => {
    const response = await fetch(URL + city + `&appid=${API_KEY}`);

    if (response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    let data = await response.json();
    let iconcode = data.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

    console.log(data);


    if(document.querySelector('.error').style.display != 'none'){
    document.querySelector('.error').style.display = 'none';
    }
    document.querySelector('.weather-info').innerHTML = 'Weather : ' + data.weather[0].main
    document.querySelector('.weather-icon').src = iconurl
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/hr';
    document.querySelector('.weather').style.display = 'block';

        
}




searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener('keypress', (e)=>{
    if(e.key=='Enter'){
        checkWeather(searchBox.value);
    }
})


// checkWeather()



