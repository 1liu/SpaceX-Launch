class GoogleMap {
  constructor(mapElement) {
    this.mapElement = mapElement;
    this.map = null;
    this.marker = null;
  }

  updateMap(latt, long) {

    const myLatLng = {
      lat: latt,
      lng: long
    };
    this.map.setCenter(myLatLng);
    this.clearMarkers();
    this.addMarker(myLatLng);
  }

  initMap() {
    const myLatLng = { lat: 28.5618571, lng: -80.577366 };
    this.map = new google.maps.Map(this.mapElement.querySelector('#map'), {
      zoom: 14,
      center: myLatLng,
      mapTypeId: 'satellite'
    });

  }

  addMarker(location) {
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map
    });
  }


  clearMarkers() {
    if (this.marker != null) {
      this.marker.setMap(null);
      this.marker = null;
    }
  }

}
