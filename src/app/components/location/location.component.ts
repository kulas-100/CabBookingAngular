import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


declare var google: any;


@Component({
  selector: 'app-google-maps',
  template: '<div #mapContainer style="height: 800px;"></div>'
})
export class LocationComponent implements OnInit {
  @ViewChild('mapContainer')
  mapContainer!: ElementRef;


  map: any;
  marker: any;
  trafficLayer: any;


  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;


        if (!this.map) {
          this.map = new google.maps.Map(this.mapContainer.nativeElement, {
            center: { lat, lng },
            zoom: 15
          });


          this.trafficLayer = new google.maps.TrafficLayer();
          this.trafficLayer.setMap(this.map);
        } else {
          if (!this.marker) {
            this.marker = new google.maps.Marker({
              position: { lat, lng },
              map: this.map,
              title: 'Live Location'
            });
          } else {
            this.marker.setPosition({ lat, lng });
          }
          this.map.setCenter({ lat, lng });
        }
      });


      const searchBox = new google.maps.places.SearchBox(this.mapContainer.nativeElement);
      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.mapContainer.nativeElement);


      this.map.addListener('bounds_changed', () => {
        searchBox.setBounds(this.map.getBounds());
      });


      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }


        const bounds = new google.maps.LatLngBounds();
        places.forEach((place: { geometry: { location: any; viewport: any; }; }) => {
          if (!place.geometry || !place.geometry.location) {
            return;
          }
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        this.map.fitBounds(bounds);
      });
    }
  }
}


