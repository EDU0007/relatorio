import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
 
  zoom = 12
   marca: any  =  [
     {lat: -2.601593, lng: -44.321242},
     {lat: -2.601590, lng: -44.321241},
     {lat: -2.601594, lng: -44.321247},
     {lat: -2.601590, lng: -44.321240},
     {lat: -2.601595, lng: -44.321243},
     {lat: -2.601590, lng: -44.321248},
     {lat: -2.601592, lng: -44.321243},
    
    ]
  center : google.maps.LatLngLiteral = {
    lat :-5.5255,
    lng : -47.477,

  }
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom:  30,
    minZoom: 2,
    
  }


  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    label: 'ausenciad',
  

  };
  markerPositions: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0,
  }


  
  // addMarker() {
  //   this.markerPositions = {

  //   };
  // }
  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

}
