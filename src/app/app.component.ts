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


  barChartOptions!: ChartOptions;
  barChartLabels!: Label[];

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData!: ChartDataSets[];


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
        this.barChartData = [
            { data: this.alertas(), label: 'Relatorio'}
        ];
        
      })
    }else{
      this.appservice.readAlarms(endpos).subscribe((response) => {
        this.Dados = response
        for (var property in  this.Dados){
          this.dataGps = this.Dados[property]  
        }    
        this.inicializar_grafico();
      })
    }
  }


  alertas(){
    var FadigaN1 = 0;

    var FadigaN2 = 0;
    
    var Bocejo = 0;
    
    var Ausencia = 0;
    
    var Cigarro = 0;
    
    var Celular = 0;
    
    var CameraCoberta = 0;
    
    var Atencao = 0;

      this.dataGps.forEach(function (value) {

        if(value['alert_type']=="105"){
          FadigaN1++;
        }
        if(value['alert_type']=="128"){
          FadigaN2++;
        }
        if(value['alert_type']=="147"){
          Bocejo++;
        }
      });


    return [FadigaN1, FadigaN2, Bocejo, Ausencia, Cigarro, Celular, CameraCoberta, Atencao]

  }



  inicializar_grafico(){

    this.barChartOptions = {
      responsive: true,
    };

    this.barChartLabels = ["FadigaN1","FadigaN2","Bocejo", "Ausencia", "Cigarro", "Celular", "CameraCoberta", "Atencao"]
    this.barChartData = [
      { data: this.alertas(), label: 'Relatorio'}
    ];
  }




}
