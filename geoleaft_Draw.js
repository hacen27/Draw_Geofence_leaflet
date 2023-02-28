var map;
 map = L.map('map').setView([18.0928, -15.9611], 13);

var osm=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

})
osm.addTo(map);

//leaflet draw
var drawnFeatures=new L.FeatureGroup();
map.addLayer(drawnFeatures);

var drawControl= new L.Control.Draw({
  edit: {
     featureGroup:drawnFeatures,
     remove:false
  }
});
map.addControl(drawControl);


map.on("draw:created",function(e){
  var type=e.layerType;
  var layer=e.layer;
  console.log(e)
  drawnFeatures.addLayer(layer);
  document.getElementById('info').innerHTML = type
});

map.on('draw:edited', function (e) {
  var layers = e.layers;
  var type=e.layerType;
  layers.eachLayer(function (layer) {
    console.log(layer)  //do whatever you want; most likely save back to db
  });
});



