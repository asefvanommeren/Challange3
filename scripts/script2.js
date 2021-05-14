mapboxgl.accessToken = 'pk.eyJ1IjoiYXNlZnZhbm9tbWVyZW4iLCJhIjoiY2ttbHRyNXM0MWVsajJvbnphaWJkN2J1byJ9.XJIUHE1YOYgZrzTVCXB5eA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [5.5759651, 52.0404333], //Long, Lat
  zoom: 5
});

//get coords zoekbalk
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'country,region,place,postcode,locality,neighborhood'
});

//MARKER
var search = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
});


//Plaats
var features = [];

geocoder.addTo('#geocoder');

// Add geocoder result to container.
geocoder.on('result', function (e) {
    let coords = e.result.geometry.coordinates;

    //update map, go to coordinates
    map.flyTo({
        center: coords,
        zoom: 10
    });

    features = [];
});


map.on('load', function () {
            	// Listen for the `geocoder.input` event that is triggered when a user
            	// makes a selection
            	geocoder.on('result', function (ev) {

            	  console.log(ev.result.center);
                //document.getElementById('coordinaten').innerHTML = ev.result.center[0] + '-' + ev.result.center[1];
                getAPIdata(ev.result.center[0], ev.result.center[1]);
            	});
            });


  function getAPIdata(lonInput, latInput) {

  	// construct request
  	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=98abf897ca9d44ac264037787f4a13ea&lang=nl&lon=' +lonInput+ '&lat=' +latInput;

    // get current weather
  	fetch(request).then(function(response) {
      return response.json();
    })

    .then(function(response){

      var locationName = document.getElementById('landnaam');
           locationName.innerHTML = response.name;

     var temperatuurData = document.getElementById('temperatuur');
     // weatherBox.innerHTML = response;
     temperatuurData.innerHTML = (response.main.temp - 273.15).toFixed(1) + ' &#176;C </br>';

    })

  	.then(function(response) {
    		// show full JSON object
    		console.log(response);//response.main.temp --komt het in de console.
    		var weatherBox = document.getElementById('temperatuur');
    		// weatherBox.innerHTML = response;
    		weatherBox.innerHTML = (response.temp - 273.15).toFixed(1) + ' &#176;C </br>';

  	});
}



function landNaam() {
  var input = document.getElementById("landnaam").textContent;
  console.log(input);
  return input;

}

    //VERKRIJGEN GEOLOCATIE VAN INVOERVELD
  document.getElementsByClassName('mapboxgl-ctrl-geocoder--input')[0].onblur = function(){
    landNaam()
    // coronaGevallen();
    }


$.ajax({
  url:'https://api.nasa.gov/planetary/apod?api_key=AnXFK6npxMpnIgBxCprH2GaLhRk6J345ZjQLIMfQ',
  success: function(whatyougot){
    document.getElementById("img").innerHTML="<img src="+whatyougot.url+" />";

  }
});
//bron YouTube
