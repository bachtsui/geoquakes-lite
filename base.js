var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;

$(document).ready(function(){

  var inputUrl;

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.4292, lng: -122.1381},
    zoom: 8
  });

  $.ajax({
  	method: "GET",
  	url: weekly_quakes_endpoint,
  	success: function (response){
    // console.log(response.features[0].properties.title); //title
    // console.log(response.features[0].geometry.coordinates[1]); //lat
    // console.log(response.features[0].geometry.coordinates[0]); //long
    // console.log(response.features[0].properties.time); //time
		for (var i=0; i < response.features.length; i++){ 
    		// console.log(response.features[i].properties.title); //title
    		// console.log(response.features[i].geometry.coordinates[1]); //lat
    		// console.log(response.features[i].geometry.coordinates[0]); //long
    		// console.log(response.features[i].properties.time); //time
		$("#info").append("Title: " + response.features[i].properties.title + " ");	
    	$("#info").append("Lat: " + response.features[i].geometry.coordinates[1] + " ");	
    	$("#info").append("Long: " + response.features[i].geometry.coordinates[0] + " ");	
    	$("#info").append("Time: " + response.features[i].properties.time + " ");	
    	$("#info").append("<br><br>");	

    	new google.maps.Marker({
  		position: new google.maps.LatLng(response.features[i].geometry.coordinates[1],response.features[i].geometry.coordinates[0]),
  		map: map,
  		title: response.features[i].properties.title
		});
    	//Think about how you would do this with a forEach loop
		}
	}
});

// new google.maps.Marker({
//   position: new google.maps.LatLng(37.4292,-122.1381),
//   map: map,
//   title: "title"
// });

});

// This is a code snippet that will place a pin at the coordinates lat & lng
/*
new google.maps.Marker({
  position: new google.maps.LatLng(lat,lng),
  map: map,
  title: title
});
*/
