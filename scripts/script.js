mapboxgl.accessToken = 'pk.eyJ1IjoiYXNlZnZhbm9tbWVyZW4iLCJhIjoiY2ttbHRyNXM0MWVsajJvbnphaWJkN2J1byJ9.XJIUHE1YOYgZrzTVCXB5eA';

// MAPBOX
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [5.5759651, 52.0404333], //Long, Lat
  zoom: 5
});


// MAPBOX ZOEKVELD
var bob = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
});

map.addControl(
  bob
);


//VERKRIJGEN GEOLOCATIE VAN INVOERVELD
document.getElementsByClassName('mapboxgl-ctrl-geocoder--input')[0].onchange = function(){
  //  alert('hoi');
  console.log(bob.mapMarker._lngLat);

  // document.getElementById('div1-data').innerHTML = Number(bob.mapMarker._lngLat.lng) + ' | ' + Number(bob.mapMarker._lngLat.lat);
  //   console.log(bob.mapMarker._lngLat.lng);
  //   console.log(bob.mapMarker._lngLat.lat);
};

GET /geocoding/v5/mapbox.places-permanent/bob.mapMarker._lngLat.lng,bob.mapMarker._lngLat.lat.json

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
