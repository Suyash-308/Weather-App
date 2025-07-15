 const apiKey="c5208a10a03e8ea615284c70ab604e9f";

const city=document.getElementById("city-name");
const cityInput=document.getElementById("city-input")
const time=document.getElementById("time");
const weatherDescription=document.getElementById("weatherDescription");
const humidity=document.getElementById("humidity");
const visibility=document.getElementById("visibility");






async function getWeatherData(){


    if(!cityInput.value){
        alert( "Enter city");
        return;
    }
    try{
    const res = await fetch(`https://api.weatherstack.com/current?access_key=${apiKey}&query=${cityInput.value}`)

    const data=await res.json()
    console.log(data);

    if(data.success === false){
        alert("Enter correct city name")
        return;
    }

    const name=data.location.name;
    const region=data.location.region;
    const country=data.location.country;
    const localtime=data.location.localtime;
    const temp=data.current.temperature;
    const weather=data.current.weather_descriptions;
    const hum=data.current.humidity;
    const visible=data.current.visibility;

      city.innerText=`City : ${name} , ${region} , ${country}`;
      time.innerText=`Date & time : ${localtime}`;
      temperature.innerText=`Temperature : ${temp} °C`;
      weatherDescription.innerText=`Weather : ${weather}`
      humidity.innerText=`Humidity : ${hum}`;
      visibility.innerText=`Visibility : ${visible}`;

}catch(error){
  console.log(error);
  alert("Something went wrong")
}
}