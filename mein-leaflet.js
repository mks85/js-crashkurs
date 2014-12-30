"use strict";

$(document).ready(function(){
  // Create Map
  var map = L.map('map').setView([50.739, 7.117], 13);
  // Connect osm with leaflet
  var osmUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  var osmLayer = new L.TileLayer(osmUrl, {maxZoom:18, attribution:"OpenStreetmap"});
  osmLayer.addTo(map);
  
  // Create a marker
  var marker = new L.marker([50.739, 7.117]);
  // Connect marker to map
  marker.addTo(map);
  // Add a popup to marker
  marker.bindPopup("Bonn-Beuel").closePopup();
  
  
  
  
  // Create mini worldMap
  var miniWorldMap = L.map('mini-world-map').setView([50.739, 7.117], 0);
  
  // Connect osm with leaflet
  var osmWorldLayer = new L.TileLayer(osmUrl, {maxZoom:3, attribution:"OpenStreetmap"});
  osmWorldLayer.addTo(miniWorldMap);
  
  // create same marker
  var marker = new L.marker([50.739, 7.117]);
  // Connect marker to map
  marker.addTo(miniWorldMap);
});
