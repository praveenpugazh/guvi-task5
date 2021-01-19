//Open weather api key
const key = "050163317b090e3fc1f7e82d746dd313";

//restcountries api
let countryapi = "https://restcountries.eu/rest/v2/all";
//fetching restcountires data
try {
  fetch(countryapi)
    .then((response) => {
      return response.json();
    })
    //storing lat&long co-ordinates in latlong variable
    .then((data) => {
      let latlong = data.map((item) => item.latlng);
      //for each lat and long data fetching temp from openweather api
      latlong.forEach((item) => {
        let api = `http://api.openweathermap.org/data/2.5/weather?lat=${item[0]}&lon=${item[1]}&appid=${key}`;
        fetch(api)
          .then((response) => {
            return response.json();
          })
          //printing countryname followed by its current temp
          .then((data) => {
            console.log(data.name, data.main.temp);
          });
      });
    });
} catch (err) {
  console.error(err);
}
