import { Component, OnInit,Input} from '@angular/core';
@Component({
  selector: 'app-ultimo-grafico',
  templateUrl: './ultimo-grafico.component.html',
  styleUrls: ['./ultimo-grafico.component.css']
})
export class UltimoGraficoComponent implements OnInit {
  @Input() dataMap:any;
  response : any = [];
  constructor(){

  }
  ngOnInit(){
    this.acumulada()
  }

  acumulada(){
    this.dataMap.forEach((item:any) =>{
      console.log(item.gps_speed)
    })
    }
  
  

   isLoading = false;
  options: any = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#bdbf1f'
        }
      }
    },
    legend: {
      data: ['sonolencia']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'sonolencia',
        type: 'line',
        stack: 'counts',
        color:'#f1f332',
        areaStyle: { normal: {} },
        data: [10, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230]
      },
      {
        name: 'Bocejo',
        type: 'line',
        stack: 'counts',
        color:'#707042',
        areaStyle: { normal: {} },
        data: [10, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230]
      },
      {
        name: 'Distração',
        type: 'line',
        stack: 'counts',
        color:'#285237',
        areaStyle: { normal: {} },
        data: [10, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230]
      },
      
    ]
  };
}