import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() dataMap:any;
  
  zoom = 12
  // pontos: any  =  [
  //   {position: {lat: -2.584252, lng: -44.331819}, label: {color:'red', text: "teste1"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }},
  //   {position: {lat: -2.584250, lng:-44.331819}, label: {color:'red', text: "teste2"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }},
  //   {position: {lat: -2.584251, lng:-44.331819}, label: {color:'red', text: "teste3"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }},
  //   {position: {lat: -2.584252, lng: -46.321240}, label: {color:'red', text: "teste4"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }},
  //   {position: {lat:-2.584252, lng: -44.331819}, label: {color:'red', text: "teste5"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }},
  //   {position: {lat: -2.584254, lng:-44.331819}, label: {color:'red', text: "teste6"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }},
  //   {position: {lat: -2.584252, lng:-44.331819}, label: {color:'red', text: "teste7"}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }}
  // ]

  pontos:any = []
  center!: google.maps.LatLngLiteral;
  
  options: google.maps.MapOptions = {
    //mapTypeId: 'hybrid',
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

  constructor() { }

  ngOnInit(): void {
    this.pontos=this.data_pontos();
    this.center = this.pontos[0].position;

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = this.pontos
    })  
  }

  data_pontos(){
    // console.log(this.dataMap)
    var pontos:any = []
    this.dataMap.forEach(function (value:any) {
      pontos.push(value.mapa)
    })
    
    return pontos;
  }

}
