import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ultimo-grafico',
  templateUrl: './ultimo-grafico.component.html',
  styleUrls: ['./ultimo-grafico.component.css']
})
export class UltimoGraficoComponent implements OnInit {
  options: any;
 
  constructor() {}

  ngOnInit(): void {
    this.iniciarGrafico()
  }
  iniciarGrafico(){
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 31; i++) {
      xAxisData.push('data' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
        
          animationDelay: (idx: number) => idx * 10,
        },
    
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 5,
    };
  }
  }

