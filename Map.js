function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8446119, lng: -87.6285002 },
    zoom: 12,
  });

  new google.maps.Marker({
    position: { lat:42.0597222, lng: -87.7563554,17 },
    map,
    title: "Niles North",
  });
  
  new google.maps.Marker({
    position: { lat: 42.0633881, lng:-87.8824113 },
    map,
    title: "Oakton Community College!",
  });

  new google.maps.Marker({
    position: { lat:41.8474754, lng: -87.64679},
    map,
    title: "IIT",
  });
}

window.initMap = initMap;