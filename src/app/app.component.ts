import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 dataGps:[] = [];
 req: any;
 form!: FormGroup;
Dados:any; 

barChartOptions: ChartOptions = {
  responsive: true,
};
barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
barChartType: ChartType = 'bar';
barChartLegend = true;
barChartPlugins = [];

barChartData: ChartDataSets[] = [
  { data: [this.dataGps], label: 'Best Fruits' }
];
constructor(
  public formBuilder: FormBuilder,
  public appservice: AppService,
  ){}

  ngOnInit() {
    this.form = this.formBuilder.group({
      data:null,
      req:null,
    });

  

}
salvar(){
  const dataReq = this.form.value.data +"T00:00:00"
  const requisicao = this.form.value.req;
  const endpos = requisicao + '?date_start='+dataReq
   if (requisicao == 'gps') {
    this.appservice.readGps(endpos).subscribe(( data  ) => {
    this.Dados = data
   for (var property in  this.Dados){
      this.dataGps = this.Dados[property]  
      }    
    })
   }else{
    this.appservice.readAlarms(endpos).subscribe((response) => {
      this.Dados = response
      for (var property in  this.Dados){
         this.dataGps = this.Dados[property]  
         }    
        console.log(this.dataGps)
     })

   }
}

}
