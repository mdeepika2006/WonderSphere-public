
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  center: geoLocation.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});
const marker1 = new mapboxgl.Marker()
  .setLngLat(geoLocation.coordinates)
  .setPopup(
    new mapboxgl.Popup({
      offset: 25,
    }).setHTML("<p>Exact location provided after booking!</p>")
  )
  .addTo(map);