import { environment } from '../../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  mobile: boolean;
  map: mapboxgl.Map;
  style = "mapbox://styles/aragonezr/ckhhyjann0feo19k4twgnvv2h";
  // Groningen coordinates
  lat = 53.331028;
  lng = 6.5665;

  constructor() {
    this.mobile = false;
  }

  ngOnInit() {
    let topl_map= this.map;
    if (window.screen.width <= 425) { // 768px portrait
      this.mobile = true;
    }

    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    //mapboxgl.accessToken = environment.mapbox.accessToken;
    topl_map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 6,
        center: [this.lng, this.lat]
    });

    // Add map controls
    //this.map.addControl(new mapboxgl.NavigationControl());

    // Places marker onClick within map view
    topl_map.on('click', addMarker);

    function addMarker(e){
      //console.log(e);
      new mapboxgl.Marker().setLngLat(e.lngLat.wrap()).addTo(topl_map);
    }
  }
}
