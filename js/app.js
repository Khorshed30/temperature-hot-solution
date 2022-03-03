const APP_KEY = `894d17fb74a3f52a4f71db3d283de0b7`;
const searchTemperatur = () =>{
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText =(id, text)=>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature =>{
    setInnerText('city',temperature.name);
    setInnerText('temperature',temperature.main.temp);
    setInnerText('condition',temperature.weather[0].main);
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url);
}
