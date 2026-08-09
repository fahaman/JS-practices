// let url = `https://api.openweathermap.org/data/4.0/weather?${city}&appid=${apikey}`


async function getWeather(city){
    let apikey=`721eeb0764c273694b5994ca56e08410`;
    let raw = await fetch(`https://api.openweathermap.org/data/4.0/weather?${city}&appid=${apikey}`);
    let realdata =await raw.json();
    // .then((raw)=>raw.json)
    // .then((result)=>{
        console.log(realdata);
    }


getWeather("India")