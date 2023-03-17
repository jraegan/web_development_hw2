function initMap(){
  var options = {
    center: { lat: 31.8026, lng: 85.9572 },
      zoom: 8
  }
  map = new google.maps.Map(document.getElementById("map"), options)
}
