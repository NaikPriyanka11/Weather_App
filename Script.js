async function fetchWeatherData(cityName){
    let url='https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid=ea957a7bc1871b1c973b248e8504a3d7'
    
   
    const response=await fetch(url)
    
    const data=await response.json();
    console.log(data);
    let city=document.getElementById("city");
    city.innerHTML=data.name;
    let windSpeed=document.getElementById("Wnd_speed");
    


}

function fetchCity(){
    let cityName=document.getElementById("cityname");
    if(cityName.value==""){
        alert("enter a city name");

    }else{
        fetchWeatherData(cityName.value);
        cityName.value="";
    }
}