let map; google.maps.Map;

function initMap(): void {
  var centerMap = {
  zoom: 15,
  center: {lat: 41.948006, lng: 87.688036},
  }
	
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, centerMap);
	
  const DHCinfo = "<h3>Dave's hot chicken is a fast food restaurant chain that has several locations in the U.S. They are famous for their chicken tenders which is one of the very few items they sell on their menu along with their sliders and sides. Their sliders and tenders have a variety of spice levels that you can choose from from no spice to reaper.</h3>"
	
  const DHCMarker = new google.maps.Marker({
    position: new google.maps.LatLng(41.948006, 87.688036),
    title: "Dave's Hot Chicken",
  });
	
  const DHCWindow = new google.maps.InfoWindow({
  content: DHCinfo,
  ariaLabel: "Dave's Hot Chicken",
  )};
	
  DHCMarker.addListner("click", () => {
    DHCWindow.open({
    anchor: DHCMarker,
    map,
    )};
  });
	
  const KBBQMarker = new google.maps.Marker({
  position: new google.maps.LatLng(41.998277, 87.688539),
  title: "Khan BBQ",
  });
	
  const KBBQinfo = "<h3>Khan BBQ is a restaurant located in Chicago. They sell a variety of Pakistani foods such as kebabs, biryani, and chicken tikka.</h3>"
	
  const KBBQWindow = new google.maps.InfoWindow({
  content: KBBQinfo,
  ariaLabel: "Khan BBQ",
  });
	
  KBBQMarker.addListner("click", () => {
    KKBQWindow.open({
      anchor: KBBQMarker,
      map,
      )};
    });
	
  const SMarker = new google.maps.Marker({
  position: new google.maps.LatLng(41.998813, 87.690471),
  label: "Spinzer",
  });
        
  const Sinfo = "<h3>Spinzer is a fast food restaurant located in Chicago. They sell a variety of fast-food BBQ food such as burgers and hot dogs and Pakistani food.</h3>
        
  const SWindow = new google.maps.InfoWindow({
    content: Sinfo,
    map,
  )};
						  
  SMarker.addListner("click", () => {
    SWindow.open({
      anchor: SMarker,
      map,
    )};
  });
}


window.initMap = initMap;