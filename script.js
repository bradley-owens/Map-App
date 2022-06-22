// render map

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.908, lng: 151.212 },
    zoom: 12,
  });
}

window.initMap = initMap;

// Get current location

navigator.geolocation.getCurrentPosition(function (location) {
  console.log(location);
  const { latitude, longitude } = location.coords;
  console.log(latitude, longitude);

  let marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
    animation: google.maps.Animation.DROP,
    draggable: true,
  });
});
