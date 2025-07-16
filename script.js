let temperaturefield = document.querySelector('.temp p');
let locationfield = document.querySelector('.location p');
let timefield = document.querySelector('.time p');
let conditionfieldText = document.querySelector('.condition-text');
let searchbar = document.querySelector('.search_field');
let form = document.querySelector('form');

let searchForLocation = (e) => {
    e.preventDefault(); 
    let location = searchbar.value;
    fetchdata(location);
};


form.addEventListener('submit', searchForLocation); 

const fetchdata = async (location)=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=e7c4caedf10d4adfb8e62142250906&q=${location}&aqi=yes`

    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    updatedata(locationName, time, temp, condition);
}

function updatedata(locationName, time, temp, condition, icon){
    console.log('locationfield:', locationfield);
    console.log('timefield:', timefield);
    console.log('temperaturefield:', temperaturefield);
    console.log('conditionfieldText:', conditionfieldText);

    locationfield.innerText = locationName;
    timefield.innerText = time;
    temperaturefield.innerText = `${temp}°C`;
    conditionfieldText.innerText = condition;
}






