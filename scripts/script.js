mapboxgl.accessToken = 'pk.eyJ1IjoiYXNlZnZhbm9tbWVyZW4iLCJhIjoiY2ttbHRyNXM0MWVsajJvbnphaWJkN2J1byJ9.XJIUHE1YOYgZrzTVCXB5eA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [5.5759651, 52.0404333], //Long, Lat
  zoom: 5
});

//MARKER
var search = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
});

// MAPBOX ZOEKVELD
map.addControl(
  search
);



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
            	var request = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f8884e5ab426937d101b34d3271a488c' +lonInput+ '&lat=' +latInput;
            	// get current weather
            	fetch(request)

            	// parse response to JSON format
            	.then(function(response) {
            		return response.json();
            	})

            	.then(function(response) {
            		// show full JSON object
            		console.log(response);//response.main.temp --komt het in de console.
            		var weatherBox = document.getElementById('div1-data');
            		//weatherBox.innerHTML = response;
            		//weatherBox.innerHTML = response.weather[0].description;
                // Temperatuur
            		weatherBox.innerHTML = (response.main.temp - 273.15).toFixed(1) + ' &#176;C </br>';

                var weatherBox2 = document.getElementById('div2-data');
                weatherBox2.innerHTML = (response.weather[0].description) + '<br>' + '' + 'Windspeed: ' + response.wind.speed + ' m/s ' + '<br>';
                 // + '' + (response.weather[0].description);
            		// weatherBox.innerHTML = degC + '&#176;C <br>';
            	});
            }


// //VERKRIJGEN GEOLOCATIE VAN INVOERVELD
// document.getElementsByClassName('mapboxgl-ctrl-geocoder--input')[0].onchange = function(){
//   //  alert('hoi');
//   console.log(search);
// }
//
// //VERKRIJGEN GEOLOCATIE VAN INVOERVELD
// document.getElementsByClassName('mapboxgl-ctrl-geocoder--input')[0].onchange

// Plaats ********
// var features = [];
//
// geocoder.addTo('#geocoder');

// // Add geocoder result to container.
// geocoder.on('result', function (e) {
//     let coords = e.result.geometry.coordinates;
//
//     //update map, go to coordinates
//     map.flyTo({
//         center: coords,
//         zoom: 15
//     });
//
//     features = [];
//     getStadiums(coords);
//
// });
//
// //andere api  parameter coords
// function getStadiums(coords) {
//     const openTripMapKey = '5ae2e3f221c38a28845f05b6a22cdc4a0cfb0a132d606ec9a0834be3';
//     let url = 'https://api.opentripmap.com/0.1/en/places/radius',
//         qString = '?radius=1500&lon=' + coords[0] + '&lat=' + coords[1] + '&kinds=stadiums&limit=25&apikey=' + openTripMapKey;
//
//     fetch(url + qString)
//         .then(resp => {
//             return resp.json();
//         }).then(data => {
//         let stadiums = data.features;
//
//         for (let i = 0; i < stadiums.length; i++) {
//             let stadium = stadiums[i];
//
//             let obj = {};
//             obj.id = stadium.id;
//             obj.type = 'Feature';
//             obj.properties = {};
//             obj.properties.description = '<strong>' + stadium.properties.name + '</strong>';
//             obj.properties.icon = 'stadium';
//             obj.geometry = {};
//             obj.geometry.type = 'Point';
//             obj.geometry.coordinates = stadium.geometry.coordinates;
//
//             features.push(obj);
//         }
//         placeMarkers();
//     }).catch((error) => {
//         alert(error);
//     })
// }

























// // Store the marker's longitude and latitude coordinates in a variable
// var lngLat = marker.getLngLat();
// // Print the marker's longitude and latitude values in the console
// console.log('Longitude: ' + lngLat.lng + ', Latitude: ' + lngLat.lat )
//







// // var plaatsNaam = bob.geocoderService.lastSelected("place_name");
//
//
//
//   document.getElementById('div1-data').innerHTML = Number(bob.mapMarker._lngLat.lng) + ' | ' + Number(bob.mapMarker._lngLat.lat);
//   document.getElementById('div2-data').innerHTML = bob.lastSelected;
//
//
// };


// bob.geocoderService,lastSelected("place_name");

// var coords = vraagLand(bob.mapMarker._lngLat.lng, bob.mapMarker._lngLat.lat)
// function vraagLand(a, b) {
//   $.curl("https://api.mapbox.com/geocoding/v5/mapbox.places/" + a,b + ".json?access_token=pk.eyJ1IjoiYXNlZnZhbm9tbWVyZW4iLCJhIjoiY2ttbHRyNXM0MWVsajJvbnphaWJkN2J1byJ9.XJIUHE1YOYgZrzTVCXB5eA")
//
//   return
// }
//
// console.log(vraagLand());





        // var geocoder = new MapboxGeocoder({
        //   accessToken: mapboxgl.accessToken,
        //   mapboxgl: mapboxgl,
        //   types: 'country'
        // });
        //
        // map.addControl(
        //   geocoder
        // );
        //
        // // geocoder.addTo('#geocoder');
        //
        // // Add geocoder result to container.
        // geocoder.on('result', function (e) {
        //     let coords = e.result.geometry.coordinates;
        //
        //     features = [];
        //
        // });
















// --------------------

// http://api.positionstack.com/v1/reverse
//     ? access_key = mapboxgl.accessToken
//     & query = bob.mapMarker._lngLat.lat,bob.mapMarker._lngLat.lng

// lastSelected
//
// lastSelected:
// "{
//   "id":"place.9718548927723970",
//   "type":"Feature",
//   "place_type":["place"],
//   "relevance":1,
//   "properties":{"wikidata":"Q727"},
//   "text_nl-NL":"Amsterdam",
//   "language_nl-NL":"nl",
//   "place_name_nl-NL":"Amsterdam, Noord-Holland, Nederland",
//   "text":"Amsterdam",
//   "language":"nl",
//   "place_name":"Amsterdam, Noord-Holland, Nederland",
//   "bbox":[4.728759,52.318248,5.068426,52.430679],
//   "center":[4.9,52.378],
//   "geometry":{"type":"Point","coordinates":[4.9,52.378]},
//   "context":[{"id":"region.9930807704279220",
//   "wikidata":"Q701",
//   "short_code":"NL-NH",
//   "text_nl-NL":"Noord-Holland",
//   "language_nl-NL":"nl",
//   "text":"Noord-Holland",
//   "language":"nl"},
//
//   {"id":"country.13545879598622050","wikidata":"Q55","short_code":"nl","text_nl-NL":"Nederland","language_nl-NL":"nl","text":"Nederland","language":"nl"}]}"


//   console.log(bob.mapMarker._lngLat.lng);
//   console.log(bob.mapMarker._lngLat.lat);



// var ll =
//   map.on('click', function (e) {
//   document.getElementById('div1').innerHTML =
//     // e.lngLat is the longitude, latitude geographical position of the event
//     // JSON.stringify(e.lngLat.wrap());
//     JSON.stringify(e.lngLat.wrap());
//     //console.log(e.lngLat.lat);
// });

//
// var locatie = new mapboxgl.GeolocateControl();
//
// map.addControl(locatie);
//
// locatie.on('locatie', function(e) {
//   var lon = e.coords.longtitude;
//   var lat = e.coords.latitude
//   var positie = [lon, lat];
//   console.log(positie);
// });







// GEBRUIKERS LOCATIE
// https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol.event:geolocate

// var geolocate = new mapboxgl.GeolocateControl({
//   positionOptions: {
//     enableHighAccuracy: true
//   },
//   trackUserLocation: true
// });
//
// // Add the control to the map.
// map.addControl(geolocate);
// // Set an event listener that fires
// // when a geolocate event occurs.
// geolocate.on('geolocate', function() {
//   console.log('A geolocate event has occurred.')
// });
