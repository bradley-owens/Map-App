// render map

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.908, lng: 151.212 },
    zoom: 14,
  });
}

window.initMap = initMap;

// Get current location

navigator.geolocation.getCurrentPosition(function (location) {
  console.log(location);
  let { latitude, longitude } = location.coords;

  let marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
    animation: google.maps.Animation.DROP,
    draggable: true,
  });
});

// Get directions

const from = document.getElementById("place-search-start");
const to = document.getElementById("place-search-destination");
const formOfTravel = document.getElementById("input-transit");
const getDirectionsBtn = document.querySelector(".submit");

getDirectionsBtn.addEventListener("click", function () {
  const chosenTravel = formOfTravel.value;

  //reset input fields
  to.value = "";
  from.value = "";
  formOfTravel.value = "";
});
