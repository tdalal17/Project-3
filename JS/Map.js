function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8446119, lng: -87.6285002 },
    zoom: 12,
  });

  new google.maps.Marker({
    position: { lat:42.0597222, lng: -87.7563554},
    map,
    title: "Niles North",
  });
  
  new google.maps.Marker({
    position: { lat: 42.0633881, lng:-87.8824113 },
    map,
    title: "Oakton Community College!",
  });

  new google.maps.Marker({
    position: { lat: 41.8348731, lng: -87.6291946},
    map,
    title: "IIT",
  });
}

window.initMap = initMap;