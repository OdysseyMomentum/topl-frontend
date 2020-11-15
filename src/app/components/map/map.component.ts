import { environment } from '../../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  mobile: boolean;
  map: mapboxgl.Map;
  style = "mapbox://styles/aragonezr/ckhhyjann0feo19k4twgnvv2h";
  missions: Array<any>;

  // Nigeria coordinates
  lat = 8.142269910795562;
  lng = 9.492261139763059;

  constructor(private api: ApiService) {
    this.mobile = false;
  }

  ngOnInit() {

    // let topl_map= this.map;
    if (window.screen.width <= 425) { // 768px portrait
      this.mobile = true;
    }

    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 6,
        center: [this.lng, this.lat]
    });

    // Add map controls
    //this.map.addControl(new mapboxgl.NavigationControl());
    
    this.getWhiteflagMessages();



    // Places marker onClick within map view
    // this.map.on('click', addMarker);

    // let topl_map = this.map;

    // function addMarker(e){

    //   var el = document.createElement('div');
    //   el.className = 'marker';
    //   el.style.backgroundImage = 'url(../../../assets/wf-icons/M60.png)';

    //   el.style.width = '40px';
    //   el.style.height = '40px';
    //   el.style.backgroundSize = 'cover';
    //   console.log(e.lngLat.wrap());// {lng: 9.35153417968661, lat: 54.4269708864399}
    //   // add marker to map
    //   new mapboxgl.Marker(el)
    //   .setLngLat(e.lngLat.wrap())
    //   .addTo(topl_map);
    // }

  }

  placeMissionMarkers() {
    if(this.missions){
      this.missions.forEach(element => {
        //check for longitude as well
        console.log("test", element.MessageBody.ObjectLatitude)
        if(element.MessageBody && element.MessageBody.ObjectLatitude){
          this.addMissionMarker(element.MessageBody);
        }

      });
    }
  }

  addMissionMarker(e:any){
    //console.log(e);
    //new mapboxgl.Marker().setLngLat(e.lngLat.wrap()).addTo(topl_map);

    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(../../../assets/wf-icons/M'+e.SubjectCode+'.png)';

    el.style.width = '40px';
    el.style.height = '40px';
    el.style.backgroundSize = 'cover';

    // el.addEventListener('click', function () {
    //   console.log("you clicked me!!");
    //   //window.alert(marker.properties.message);
    // });
    let latLong = {lng: e.ObjectLongitude, lat: e.ObjectLatitude};
    //let latLong = {lng: 9.35153417968661, lat: 54.4269708864399};
    console.log(latLong);// {lng: 9.35153417968661, lat: 54.4269708864399}
    // add marker to map
    new mapboxgl.Marker(el)
    .setLngLat(latLong)
    .addTo(this.map);
  }

  // get messages to whiteflag/topl-bifrost
  getWhiteflagMessages() {
    this.api.Request('/messages?blockchain=topl-testnet')
      .subscribe(res => {
        console.log("data received...", res);
        this.missions = res.data;
        this.placeMissionMarkers();
        // this.peaceCredits = res.data.length;
        // this.loading = false
      });
  }
}
