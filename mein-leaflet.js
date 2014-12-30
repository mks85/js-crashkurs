"use strict";

$(document).ready(function(){
  // Create Map
  var map = L.map('map').setView([50.739, 7.117], 13);
  
  // Connect osm with leaflet
  var osmUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  var osmLayer = new L.TileLayer(osmUrl, {maxZoom:18, attribution:"OpenStreetmap"});
  osmLayer.addTo(map);
  
});
