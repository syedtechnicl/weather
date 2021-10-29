//selector variable
const inputval = document.querySelector('#cityinput');
const btn = document.querySelector('#add');
const city = document.querySelector('#cityoutput');
const descrip = document.querySelector('#description');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');


// Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
// You don't need an API key for this to work at the moment, but this will change eventually.
apik = "3045dd712ffe6e702e3245525ac7fa38"
//kelvin to celcious
function convertion(val){
    return (val - 273).toFixed(2)
}
//fetch
    btn.addEventListener('click', () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputval.value}&appid=${apik}`)
        .then(res => res.json())
         //.then(data => console.log(data))
        .then(data => {
            const nameval = data['name'];
            const descrip = data['weather']['0']['description'];
            const tempature = data['main']['temp'];
            const wndspd = data['wind']['speed'];

            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
            description.innerHTML = `Conditions: ${descrip}`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`

        })
        .catch(err => alert('You entered Wrong city name'))
    })