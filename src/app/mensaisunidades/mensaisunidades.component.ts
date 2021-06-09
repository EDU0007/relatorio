
import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions,  } from 'chart.js';

import { Label } from 'ng2-charts';
@Component({
  selector: 'app-mensaisunidades',
  templateUrl: './mensaisunidades.component.html',
  styleUrls: ['./mensaisunidades.component.css']
})
export class MENSAISUNIDADESComponent implements OnInit {
  @Input() data:any;

  pieChartOptions !: ChartOptions;

  pieChartLabels: Label[] = [];
  pieChartData: any [] = [];
  pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  pieChartPlugins = [];
  pieChartColors: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.iniciarGrafico()
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  iniciarGrafico() {
    console.log(this.data)
    var data_grafico:any = []
    var label_grafico:any = []
    this.data.forEach(function (value:any) {
      label_grafico.push(value.label)
      data_grafico.push(value.data[0])
    })

    this.pieChartOptions = {
      responsive: true,

    };

  
    console.log(data_grafico)
    this.pieChartLabels = label_grafico;
    this.pieChartData = data_grafico
   
    this.pieChartColors = [
      {
        backgroundColor: ['rgb(255, 191, 0)', 'rgba(0,255,0,0.3)', 'rgba(120,28,129)' ,'rgba(64,67,153)', 'rgba(72,139,194)','rgba(159,190,87)','rgba(107,178,140)','rgba(231,126,49])'],
      },
    ];
   
  }

}