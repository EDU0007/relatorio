import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
//  position: {
//   lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
//   lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
// },
// label: {
//   color: 'red',
//   text: 'Marker label ' + (this.markers.length + 1),
// },
// title: 'Marker title ' + (this.markers.length + 1),
// options: { animation: google.maps.Animation.BOUNCE },
// }

  zoom = 12
  pontos: any  =  [
    {position: {lat: -2.601593, lng: -44.321242}, label: {color:'red', text: "teste1"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }},
    {position: {lat: -2.601590, lng: -44.321241}, label: {color:'red', text: "teste2"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }},
    {position: {lat: -2.601594, lng: -40.321247}, label: {color:'red', text: "teste3"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }},
    {position: {lat: -2.601590, lng: -46.321240}, label: {color:'red', text: "teste4"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }},
    {position: {lat: -2.201595, lng: -44.321243}, label: {color:'red', text: "teste5"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }},
    {position: {lat: -2.301590, lng: -44.321248}, label: {color:'red', text: "teste6"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }},
    {position: {lat: -2.601592, lng: -44.321243}, label: {color:'red', text: "teste7"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }}
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
  markerPositions: google.maps.LatLngLiteral = this.pontos;


  
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
