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
      })
    }else{
      this.appservice.readAlarms(endpos).subscribe((response) => {
        this.Dados = response
        for (var property in  this.Dados){
          this.dataGps = this.Dados[property]  
        }
        console.log(this.dataGps.length)    
        this.inicializar_grafico();
      })
    }
  }


  alertas(){

    var response_data:any = []
    var uploadArquivo = 0;
    var vibracao = 0;
    var excessoDeTrafegonoSIMCard = 0;
    var restart = 0;
    var erroCamera1 = 0;
    var erroCamera2 = 0;
    var erroSIMCard = 0;
    var excessodeVelocidade = 0;
    var corteEnergia = 0;
    var semCameraUSB = 0;
    var aceleracaoBrusca = 0;
    var freadaBrusca = 0;
    var curvaFechada = 0;
    var riscodeColisao = 0;
    var habilitadoAlertaDeCorteDeCombustivel1 = 0;
    var habilitadoAlertaDeCorteDeCombustivel2 = 0;
    var transporteTerrestre = 0;
    var excecaoDeAmbiente = 0;
    var transporteMaritimo = 0;
    var modoEstacionamento = 0;
    var semMotorista = 0;
    var capturaAtiva = 0;
    var trocadeMotorista = 0;
    var fadiga = 0;
    var celular = 0;
    var fumo = 0;
    var distracao = 0;
    var bocejo = 0;

    this.dataGps.forEach(function (value) {

      if(value['alert_type']=="105"){
        uploadArquivo++;
      }

      if(value['alert_type']=="128"){
        vibracao++;
      }
    
      if(value['alert_type']=="129"){
        excessoDeTrafegonoSIMCard++;
      }

      if(value['alert_type']=="130"){
        restart++;
      }

      if(value['alert_type']=="132"){
        erroCamera1++;
      }

      if(value['alert_type']=="133"){
        erroCamera2++;
      }

      if(value['alert_type']=="134"){
        erroSIMCard++;
      }

      if(value['alert_type']=="135"){
        excessodeVelocidade++;
      }

      if(value['alert_type']=="136"){
        corteEnergia++;
      }

      if(value['alert_type']=="137"){
        semCameraUSB++;
      }

      if(value['alert_type']=="144"){
        aceleracaoBrusca++;
      }

      if(value['alert_type']=="145"){
        freadaBrusca++;
      }

      if(value['alert_type']=="146"){
        curvaFechada++;
      }

      if(value['alert_type']=="147"){
        riscodeColisao++;
      }

      if(value['alert_type']=="138"){
        habilitadoAlertaDeCorteDeCombustivel1++;
      }

      if(value['alert_type']=="139"){
        habilitadoAlertaDeCorteDeCombustivel2++;
      }

      if(value['alert_type']=="141"){
        transporteTerrestre++;
      }

      if(value['alert_type']=="142"){
        excecaoDeAmbiente++;
      }

      if(value['alert_type']=="149"){
        transporteMaritimo++;
      }

      if(value['alert_type']=="150"){
        modoEstacionamento++;
      }

      if(value['alert_type']=="148"){
        semMotorista++;
      }

      if(value['alert_type']=="152"){
        capturaAtiva++;
      }

      if(value['alert_type']=="153"){
        trocadeMotorista++;
      }

      if(value['alert_type']=="140"){
        fadiga++;
      }

      if(value['alert_type']=="151"){
        celular++;
      }

      if(value['alert_type']=="154"){
        fumo++;
      }

      if(value['alert_type']=="143"){
        distracao++;
      }

      if(value['alert_type']=="160"){
        bocejo++;
      }
    });

    // verificacao de existencia de dados 
    if (uploadArquivo>0){
      response_data.push({ data: [uploadArquivo], label: "Upload de arquivo" })
    }

    if (vibracao>0){
      response_data.push({ data: [vibracao], label:"Vibração" })
    }

    if (excessoDeTrafegonoSIMCard>0){
      response_data.push({ data: [excessoDeTrafegonoSIMCard], label:"Excesso de tráfego no SIM Card" })
    }

    if (restart>0){
      response_data.push({ data: [restart], label:"Restart" })
    }

    if (erroCamera1>0){
      response_data.push({ data: [erroCamera1], label:"Erro câmera 1" })
    }

    if (erroCamera2>0){
      response_data.push({ data: [erroCamera2], label:"Erro câmera 2" })
    }

    if (erroSIMCard>0){
      response_data.push({ data: [erroSIMCard], label:"Erro SIM Card" })
    }

    if (excessodeVelocidade>0){
      response_data.push({ data: [excessodeVelocidade], label:"Excesso de Velocidade" })
    }

    if (corteEnergia>0){
      response_data.push({ data: [corteEnergia], label:"Corte de energia" })
    }

    if (semCameraUSB>0){
      response_data.push({ data: [semCameraUSB], label:"Sem câmera USB" })
    }

    if (aceleracaoBrusca>0){
      response_data.push({ data: [aceleracaoBrusca], label:"Aceleração brusca" })
    }

    if (freadaBrusca>0){
      response_data.push({ data: [freadaBrusca], label:"Freada brusca" })
    }

    if (curvaFechada>0){
      response_data.push({ data: [curvaFechada], label:"Curva fechada" })
    }

    if (riscodeColisao>0){
      response_data.push({ data: [riscodeColisao], label:"Risco de Colisão" })
    }

    if (habilitadoAlertaDeCorteDeCombustivel1>0){
      response_data.push({ data: [habilitadoAlertaDeCorteDeCombustivel1], label:"Habilitado alerta de corte de combustível 1" })
    }

    if (habilitadoAlertaDeCorteDeCombustivel2>0){
      response_data.push({ data: [habilitadoAlertaDeCorteDeCombustivel2], label:"Habilitado alerta de corte de combustível 1" })
    }

    if (transporteTerrestre>0){
      response_data.push({ data: [transporteTerrestre], label:"Transporte terrestre" })
    }

    if (excecaoDeAmbiente>0){
      response_data.push({ data: [excecaoDeAmbiente], label:"Exceção de ambiente" })
    }

    if (transporteMaritimo>0){
      response_data.push({ data: [transporteMaritimo], label:"Transporte marítimo" })
    }

    if (modoEstacionamento>0){
      response_data.push({ data: [modoEstacionamento], label:"Modo estacionamento" })
    }

    if (semMotorista>0){
      response_data.push({ data: [semMotorista], label:"Sem motorista" })
    }

    if (capturaAtiva>0){
      response_data.push({ data: [capturaAtiva], label:"Captura ativa" })
    }

    if (trocadeMotorista>0){
      response_data.push({ data: [trocadeMotorista], label:"Troca de motorista" })
    }

    if (fadiga>0){
      response_data.push({ data: [fadiga], label:"Fadiga" })
    }

    if (celular>0){
      response_data.push({ data: [celular], label:"Celular" })
    }

    if (fumo>0){
      response_data.push({ data: [fumo], label:"Fumo" })
    }

    if (distracao>0){
      response_data.push({ data: [distracao], label:"Distração" })
    }

    if (bocejo>0){
      response_data.push({ data: [bocejo], label:"Bocejo "})
    }

    return response_data;
  }



  inicializar_grafico(){
    this.barChartOptions = {
      responsive: true,
    };

    this.barChartLabels = [""]
    this.barChartData = this.alertas();
  }

}
