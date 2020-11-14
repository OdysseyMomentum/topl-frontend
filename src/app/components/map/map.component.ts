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
  //style = 'mapbox://styles/mapbox/streets-v11';
  style = "mapbox://styles/aragonezr/ckhhyjann0feo19k4twgnvv2h";
  lat = 37.75;
  lng = -122.41;

  constructor() {
    this.mobile = false;
   }

  ngOnInit() {
    if (window.screen.width <= 425) { // 768px portrait
      this.mobile = true;
    }

    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
        //mapboxgl.accessToken = environment.mapbox.accessToken;
          this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: 13,
            center: [this.lng, this.lat]
        });
        // Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());
  }

}
