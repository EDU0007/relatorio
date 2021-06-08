import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions,  } from 'chart.js';

import { Label } from 'ng2-charts';

@Component({
  selector: 'app-primeiro-grafico',
  templateUrl: './primeiro-grafico.component.html',
  styleUrls: ['./primeiro-grafico.component.css']
})
export class PrimeiroGraficoComponent implements OnInit {

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
      data_grafico.push(value.data)
    })

    this.pieChartOptions = {
      responsive: true,

    };

    // this.pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
    this.pieChartLabels = label_grafico;
    this.pieChartData = data_grafico
   
    this.pieChartColors = [
      {
        backgroundColor: ['rgb(255, 191, 0)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
      },
    ];

  }

}