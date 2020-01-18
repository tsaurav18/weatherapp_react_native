
const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b"
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

function zipUrl(zip){
    return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
    
}

function fetchForecast(zip){
    return fetch(zipUrl(zip))
    .then(response=>response.json())
    .then(responseJSON=>{
        return{ main:responseJSON.weather[0].main,
            description:responseJSON.weather[0].description,
            temp:responseJSON.main.temp
        };
    })
    .catch(error=>{
        console.error(error);
    });
}


// _getForecastForZip: function(zip){
// this._getForecast(
//     `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`);
// }
// _getForecastForCoords: function(lat, lon){
//     this._getForecast(
//         `${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`)
// }
// _getForecast: function(url, cb){
//     fetch(url)
//         .then(response=>response.json())
//         .then(responseJSON=>{
//             this.setState({
//                 forecast:{ 
//                 main:responseJSON.weather[0].main,
//                 description:responseJSON.weather[0].description,
//                 temp:responseJSON.main.temp
//         }
//     })
// })
//     .catch((error)=>{
//         console.warn(error);
//     });
// }



export default {fetchForecast:fetchForecast};
