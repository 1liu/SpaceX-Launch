class GoogleMap {
  constructor(mapElement) {
    this.mapElement = mapElement;
    this.map = null;
    this.marker = null;
  }

  updateMap(latt, long) {
    console.log("lat", latt);
    console.log("lon", long);
    var myLatLng = {
      lat: latt,
      lng: long
    };
    this.map.setCenter(myLatLng);
    this.clearMarkers();
    this.addMarker(myLatLng);
  }

  initMap() {
    var myLatLng = { lat: 28.5618571, lng: -80.577366 };
    this.map = new google.maps.Map(this.mapElement.querySelector('#map'), {
      zoom: 10,
      center: myLatLng
    });



  }
  // Adds a marker to the map and push to the array.
  addMarker(location) {
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map
    });
  }

  // Removes the markers from the map, but keeps them in the array.
  clearMarkers() {
    if (this.marker != null) {
      this.marker.setMap(null);
      this.marker = null;
    }
  }


}
