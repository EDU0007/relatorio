import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow,MapMarker } from '@angular/google-maps';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() dataMap:any;
  @ViewChild(MapInfoWindow) infoWindow: any;

  zoom = 12

  pontos:any = [];
  alerts:any = [];

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


  category:any;
  form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    })
  }

  ngOnInit(): void {
    // this.pontos=this.dataMap.mapa;
    // this.center = this.pontos[0].position;
    // if(!this.form.value.checkArray){
    //   this.form.value.checkArray = []
    // }
  }




  onCheckboxChange(e:any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    this.point_category();
  }

  point_category(){
    var new_point:any = []

    this.dataMap.mapa.forEach( (point:any) => {
      if(this.form.value.checkArray.includes(point.label.text)){
        new_point.push(point);
      }
    });
    // falta colocar validações- 1 validar quando tira selecao deixando vazio
    this.pontos=new_point;
    this.center = this.pontos[0]?.position;
    console.log(this.form.value.checkArray)

  }

}
