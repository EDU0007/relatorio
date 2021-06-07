import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-primeiro-grafico',
  templateUrl: './primeiro-grafico.component.html',
  styleUrls: ['./primeiro-grafico.component.css']
})
export class PrimeiroGraficoComponent implements OnInit {

  pieChartOptions !: ChartOptions;

  pieChartLabels: Label[] = [];
  pieChartData: number[] = [] ;
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
  changeLegendPosition(): void {
    //this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }

  iniciarGrafico() {
    this.pieChartOptions = {
      responsive: true,

    };
    this.pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
    this.pieChartData = [300, 500, 100];

    this.pieChartColors = [
      {
        backgroundColor: ['rgb(255, 191, 0)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
      },
    ];

  }

}