temp = document.querySelector('.temp')
hum = document.querySelector('.hum')
wind = document.querySelector('.wind')
but = document.querySelector('.but')
async function logJSONData() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=7b4f5cceb1e65adb013e08bc2f1149c0");
    const jsonData = await response.json();
    console.log(jsonData)
    console.log(jsonData.main.temp)
    console.log(jsonData.main.humidity)
    console.log(jsonData.wind.speed)
    but.addEventListener("click", cl)
    function cl(){    
        temp.innerHTML=`<span>${jsonData.main.temp} градусів</span>`
        hum.innerHTML=`<span>${jsonData.main.humidity} %</span>`
        wind.innerHTML=`<span>${jsonData.wind.speed} м/с</span>`
        }
  }
  logJSONData()
