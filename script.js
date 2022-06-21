const myKey = "AbHsodLTgCWRPCW4viifoUjHtdJVVmj1";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (location) {
    //current location variables lat/long
    const { latitude } = location.coords;
    const { longitude } = location.coords;
    const currentLocation = [latitude, longitude];

    //setting map at current location
    const map = L.map("map").setView(currentLocation, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(currentLocation).addTo(map).bindPopup("You are here").openPopup();

    const displayClickedLocation = function (e) {
      L.marker(e.latlng)
        .addTo(map)
        .bindPopup(
          "Would you like directions here?",
          L.popup({
            autoClose: true,
          })
        )
        .openPopup();
    };

    map.on(
      "click",
      displayClickedLocation
      // const { lat, lng } = clickedLocation.latlng;
      // console.log(lat, lng);
    );
  });
}
