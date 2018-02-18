let updateWidget = function(data) {

  console.log("Got weather data: ", data)
  // YOUR CODE GOES HERE
  let currentTemp = data.main.temp.toFixed(0)
  console.log(currentTemp)
  let icon = data.weather["0"].icon
  console.log(icon)
  let city = data.name
  console.log(city)

  $(".card-text").text("It is " + currentTemp + " degrees outside.")
  $(".card-title").text(city)
  $("img").attr("src", "http://openweathermap.org/img/w/" + icon + ".png")

  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.

}


let getWeather = function(info) {
  console.log(info)
  let latitude = info.coords.latitude.toFixed(4)
  let longitude = info.coords.longitude.toFixed(4)
  let apiKey = 'cb342df68c562dc560830a08448faf9b'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);

}

let handlePosition = function(event) {
  navigator.geolocation.getCurrentPosition(getWeather);
}

$("#get_forecast").on("click", handlePosition);

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
