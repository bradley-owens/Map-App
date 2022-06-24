const from = document.getElementById("place-search-start");
const to = document.getElementById("place-search-destination");
const formOfTravel = document.getElementById("input-transit");
const getDirectionsBtn = document.querySelector(".submit");
const searchContainer = document.querySelector(".search-container");

//////////////////////////////////////
// render map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.908, lng: 151.212 },
    zoom: 14,
  });

  let options = {
    componentRestrictions: { country: ["au"] },
    fields: ["geometry", "name"],
  };

  let autocompleteTo = new google.maps.places.Autocomplete(to, options);
  let autocompleteFrom = new google.maps.places.Autocomplete(from, options);
}
window.initMap = initMap;

///////////////////////////////////////
// Get current location and add marker
navigator.geolocation.getCurrentPosition(function (location) {
  let { latitude, longitude } = location.coords;

  let marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
    animation: google.maps.Animation.DROP,
    draggable: true,
  });
});

////////////////////////////////////////
// Get directions//////////////////

//return search bar to normal opacity
searchContainer.addEventListener("click", () => {
  document.querySelector(".user-container").style.opacity = 1;
});

//send request for directions
getDirectionsBtn.addEventListener("click", function () {
  const chosenTravel = formOfTravel.value;

  let directionsRequest = {
    origin: String(from.value),
    destination: String(to.value),
    travelMode: String(chosenTravel),
  };
  let directionsService = new google.maps.DirectionsService();
  let directionsDisplay = new google.maps.DirectionsRenderer();

  directionsDisplay.setMap(map);

  if (to === "" || from === "" || chosenTravel === "") {
    alert("Please add your to and from with a mode of travel");
  } else {
    function calcRoute() {
      directionsService.route(directionsRequest, function (result, status) {
        if (status == "OK") {
          directionsDisplay.setDirections(result);

          document.querySelector(".user-container").style.opacity = 0.35;
        } else {
          alert("Failed to get directions! Check your inputted locations");

          // reset input fields

          to.value = "";
          from.value = "";
          formOfTravel.value = "";
        }
      });
    }

    calcRoute();
  }
});
