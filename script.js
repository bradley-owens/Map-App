if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (location) {
    console.log(location);

    const { latitude } = location.coords;
    const { longitude } = location.coords;

    console.log(latitude, longitude);

    const currentLocation = [latitude, longitude];

    const map = L.map("map").setView(currentLocation, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(currentLocation)
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  });
}
