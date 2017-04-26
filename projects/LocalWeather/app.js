(function (){
  var fc = {
    description : null,
    tempType: null,
    currentTemp: null,
    windSpeed : null,
    city: null,
    lat: null,
    lon: null,

    convertTemp: function() {
      var tempature =  0; 

      if(fc.tempType === "Kelvin") {
        tempature = Math.round(fc.currentTemp - 273.15);
        fc.currentTemp = tempature;
        fc.tempType = "Celsius";
      } else if (fc.tempType === "Celsius") {
        tempature = fc.currentTemp * 9 / 5 + 32;
        fc.currentTemp = tempature;
        fc.tempType = "Fahrenheit";
      } else if (fc.tempType === "Fahrenheit") {
        tempature = (fc.currentTemp + 459.67) * 5/9;
        fc.currentTemp = tempature.toFixed(2);
        fc.tempType = "Kelvin";
      }
      fc.setConTempDomStr();
    },

    setConTempDomStr: function() {
      var tempDom = $('#temp');
      var str = "Tempature, In " + fc.tempType + ": "+ fc.currentTemp;
      tempDom.text(str);
    },

    getWeather: function(lat, long) {
      $.getJSON( "//api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + 
        "&APPID=696bf43486b64f345705d06d887c950f", function( data ) {
          console.log(data);
          $('#coords').text("Latitutde: " + data.coord.lat + ', Longitude: ' + data.coord.lon);
          $('#temp').text("Tempature, in Kelvin: " + data.main.temp);
          $('#desc').text("Description: " + data.weather[0].description);
          $('#city').text(data.name);
          fc.tempType = "Kelvin";
          fc.currentTemp = data.main.temp;
          fc.description = data.weather[0].description;
          fc.weatherSearchTerm = data.weather[0].main;
          fc.windSpeed = data.wind.speed;
          fc.city = data.name;
          fc.lat = data.coord.lat;
          fc.lon = data.coord.lon;
          fc.changeWeatherPic();
      });
    },

    successCallback : function(position) {
      var x = position.coords.latitude;
      var y = position.coords.longitude;
      fc.getWeather(x,y);
      // fc.changeWeatherPic(fc.weatherSearchTerm);
    },

    changeWeatherPic: function(){
      var searchTerm = fc.description.split(" ")[1];
      var PixaAPI_KEY = '2054716-0eed7587f0023fb4afd03f499',
          PixaURL = "https://pixabay.com/api/?key="+PixaAPI_KEY+"&q=weather+"
          +searchTerm+"&per_page=3";

      $.ajax({
        type: "GET",
        url: PixaURL,
        dataType: "json",
        success: function(data) {
          if (parseInt(data.totalHits) > 0) {
            $.each(data.hits, function(i, hit){
              if(i === 0) {
                $(".body").css('background-image', 'url(' + hit.webformatURL + ')');
                $(".body").css('background-repeat', 'no-repeat');
              } else {
                console.error('i is not zero');
              }
            });
          } else {
            console.error('No hits on ' + fc.description);
          }
        }
      });
    }
  }  

  $('#get-weather').on('click', navigator.geolocation.getCurrentPosition(fc.successCallback)); 
  $('#temp-type').on('click', fc.convertTemp);

window.fc = fc;
})();
