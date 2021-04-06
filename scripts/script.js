mapboxgl.accessToken = 'pk.eyJ1IjoiYXNlZnZhbm9tbWVyZW4iLCJhIjoiY2ttbHRyNXM0MWVsajJvbnphaWJkN2J1byJ9.XJIUHE1YOYgZrzTVCXB5eA';

// MAPBOX
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [4.30965, 52.080329], //Long, Lat
  zoom: 11
});

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })
);

// ZOEKBALK
var searchInput = document.getElementById(“searchbar_plaats”);

searchInput.onkeyup = zoekbalk;

function zoekbalk() {

  var searchValue =         document.getElementById(‘searchbar_plaats’).value.toUpperCase();

  var table = document.getElementById(‘gottable’);
  var allCharacters = table.getElementsByTagName(‘tr’);

   for (var i=1; i < allCharacters.length; i++) {
          var cellData = allCharacters[i].getElementsByTagName(‘td’)

          for (var j=0; j < cellData.length; j++) {
                  if(cellData[j].innerHTML.toUpperCase().indexOf(searchValue) > -1) {
                           var hit = true;
                  }
          }

          if(hit) {
                  allCharacters[i].style.display = “”;
                   hit = false;
          }
          else {
                  if(i>0){
                          allCharacters[i].style.display = “none”;
                  }
          }
  }
}
