class GoogleMap {
  constructor(mapElement) {
    this.mapElement = mapElement;
    this.map = null;
  }

  updateMap(latt, long) {
    var myLatLng = { lat: latt,
                      lng: long };
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      // title: 'Hello World!'
    });
  }

  initMap() {
    var myLatLng = { lat: 28.5618571, lng: -80.577366 };
    var map = new google.maps.Map(this.mapElement.querySelector('#map'), {
      zoom: 8,
      center: myLatLng
    });
    this.map = map;
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      // title: 'Hello World!'
    });
  }
}
