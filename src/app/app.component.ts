import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { AppService } from './app.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('htmlData') htmlData!:ElementRef;
  
  dataResponse:[] = [];
  req: any;
  form!: FormGroup;
  Dados:any; 
  DadosGrafico:any =[];


  barChartOptions!: ChartOptions;
  barChartLabels!: Label[];

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData!: any [];


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
 

  public openPDF():void {
    var dados = document.getElementById('htmlData') as HTMLCanvasElement;
      
    html2canvas(dados).then(canvas => {
        
        let fileWidth = 350;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a1');
        let position = 0;
        PDF.addImage(FILEURI, 'JPGE', 0, position, fileWidth, fileHeight)
        
        PDF.save('angular-demo.pdf');
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
          this.dataResponse = this.Dados[property]  
        }        
      })
    }else{
      this.appservice.readAlarms(endpos).subscribe((response) => {
        this.Dados = response
        for (var property in  this.Dados){
          this.dataResponse = this.Dados[property]  
        } 
        this.inicializar_grafico();
        this.inicializar_mapa();
      })
    }
  }


  alertas(){

    var response_data:any = [];
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

    this.dataResponse.forEach(function (value) {

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
      console.log();
    

    });

   
    if (uploadArquivo>0){
      response_data.push({ data: [uploadArquivo], label: "Upload de arquivo" })
    }

    if (vibracao>0){
      response_data.push({ data: [vibracao], label:"Vibra????o" })
    }

    if (excessoDeTrafegonoSIMCard>0){
      response_data.push({ data: [excessoDeTrafegonoSIMCard], label:"Excesso de tr??fego no SIM Card" })
    }

    if (restart>0){
      response_data.push({ data: [restart], label:"Restart" })
    }

    if (erroCamera1>0){
      response_data.push({ data: [erroCamera1], label:"Erro c??mera 1" })
    }

    if (erroCamera2>0){
      response_data.push({ data: [erroCamera2], label:"Erro c??mera 2" })
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
      response_data.push({ data: [semCameraUSB], label:"Sem c??mera USB" })
    }

    if (aceleracaoBrusca>0){
      response_data.push({ data: [aceleracaoBrusca], label:"Acelera????o brusca" })
    }

    if (freadaBrusca>0){
      response_data.push({ data: [freadaBrusca], label:"Freada brusca" })
    }

    if (curvaFechada>0){
      response_data.push({ data: [curvaFechada], label:"Curva fechada" })
    }

    if (riscodeColisao>0){
      response_data.push({ data: [riscodeColisao], label:"Risco de Colis??o" })
    }

    if (habilitadoAlertaDeCorteDeCombustivel1>0){
      response_data.push({ data: [habilitadoAlertaDeCorteDeCombustivel1], label:"Habilitado alerta de corte de combust??vel 1" })
    }

    if (habilitadoAlertaDeCorteDeCombustivel2>0){
      response_data.push({ data: [habilitadoAlertaDeCorteDeCombustivel2], label:"Habilitado alerta de corte de combust??vel 2" })
    }

    if (transporteTerrestre>0){
      response_data.push({ data: [transporteTerrestre], label:"Transporte terrestre" })
    }

    if (excecaoDeAmbiente>0){
      response_data.push({ data: [excecaoDeAmbiente], label:"Exce????o de ambiente" })
    }

    if (transporteMaritimo>0){
      response_data.push({ data: [transporteMaritimo], label:"Transporte mar??timo" })
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
      response_data.push({ data: [distracao], label:"Distra????o" })
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
    this.DadosGrafico = this.alertas();
    this.barChartData =   this.DadosGrafico
  }


  inicializar_mapa(){
    var response_data:any = [];
    var category:any = [];
    this.dataResponse.forEach(function (value) {

      if(value['alert_type']=="105"){
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Upload de arquivo'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Upload de arquivo')){
          category.push('Upload de arquivo');
        }
      }

      if(value['alert_type']=="128"){
        // response_data.push({ data: [vibracao], alert:"Vibra????o" })

        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Vibra????o'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Vibra????o')){
          category.push('Vibra????o');
        }
      }
    
      if(value['alert_type']=="129"){
        // response_data.push({ data: [excessoDeTrafegonoSIMCard], alert:"Excesso de tr??fego no SIM Card" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Excesso de tr??fego no SIM Card'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Excesso de tr??fego no SIM Card')){
          category.push('Excesso de tr??fego no SIM Card');
        }
      }

      if(value['alert_type']=="130"){
        // response_data.push({ data: [restart], alert:"Restart" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Restart'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Restart')){
          category.push('Restart');
        }
      }

      if(value['alert_type']=="132"){
        // response_data.push({ data: [erroCamera1], alert:"Erro c??mera 1" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Erro c??mera 1'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Erro c??mera 1')){
          category.push('Erro c??mera 1');
        }
      }

      if(value['alert_type']=="133"){
        // response_data.push({ data: [erroCamera2], alert:"Erro c??mera 2" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Erro c??mera 2'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Erro c??mera 2')){
          category.push('Erro c??mera 2');
        }
      }

      if(value['alert_type']=="134"){
        // response_data.push({ data: [erroSIMCard], alert:"Erro SIM Card" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Erro SIM Card'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Erro SIM Card')){
          category.push('Erro SIM Card');
        }
      }

      if(value['alert_type']=="135"){
        // response_data.push({ data: [excessodeVelocidade], alert:"Excesso de Velocidade" })

        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Excesso de Velocidade'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Excesso de Velocidade')){
          category.push('Excesso de Velocidade');
        }
      }

      if(value['alert_type']=="136"){
        // response_data.push({ data: [corteEnergia], alert:"Corte de energia" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Corte de energia'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Corte de energia')){
          category.push('Corte de energia');
        }
      }

      if(value['alert_type']=="137"){
      //  response_data.push({ data: [semCameraUSB], alert:"Sem c??mera USB" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Sem c??mera USB'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Sem c??mera USB')){
          category.push('Sem c??mera USB');
        }
      }

      if(value['alert_type']=="144"){
        // response_data.push({ data: [aceleracaoBrusca], alert:"Acelera????o brusca" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Acelera????o brusca'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Acelera????o brusca')){
          category.push('Acelera????o brusca');
        }
      }

      if(value['alert_type']=="145"){
        // response_data.push({ data: [freadaBrusca], alert:"Freada brusca" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Freada brusca'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Freada brusca')){
          category.push('Freada brusca');
        }
      }

      if(value['alert_type']=="146"){
        // response_data.push({ data: [curvaFechada], alert:"Curva fechada" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Curva fechada'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Curva fechada')){
          category.push('Curva fechada');
        }
      }

      if(value['alert_type']=="147"){
        // response_data.push({ data: [riscodeColisao], alert:"Risco de Colis??o" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Risco de Colis??o'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Risco de Colis??o')){
          category.push('Risco de Colis??o');
        }
      }

      if(value['alert_type']=="138"){
        // response_data.push({ data: [habilitadoAlertaDeCorteDeCombustivel1], alert:"Habilitado alerta de corte de combust??vel 1" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Habilitado alerta de corte de combust??vel 1'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Habilitado alerta de corte de combust??vel 1')){
          category.push('Habilitado alerta de corte de combust??vel 1');
        }
      }

      if(value['alert_type']=="139"){
        // response_data.push({ data: [habilitadoAlertaDeCorteDeCombustivel2], alert:"Habilitado alerta de corte de combust??vel 2" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Habilitado alerta de corte de combust??vel 2'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Habilitado alerta de corte de combust??vel 2')){
          category.push('Habilitado alerta de corte de combust??vel 2')
        }
      }

      if(value['alert_type']=="141"){
        // response_data.push({ data: [transporteTerrestre], alert:"Transporte terrestre" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Transporte terrestre'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Transporte terrestre')){
          category.push('Transporte terrestre');
        }
      }

      if(value['alert_type']=="142"){
        // response_data.push({ data: [excecaoDeAmbiente], alert:"Exce????o de ambiente" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Exce????o de ambiente'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Exce????o de ambiente')){
          category.includes('Exce????o de ambiente');
        }
      }

      if(value['alert_type']=="149"){
        // response_data.push({ data: [transporteMaritimo], alert:"Transporte mar??timo" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Transporte mar??timo'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Transporte mar??timo')){
          category.push('Transporte mar??timo');
        }
      }

      if(value['alert_type']=="150"){
        // response_data.push({ data: [modoEstacionamento], alert:"Modo estacionamento" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Modo estacionamento'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Modo estacionamento')){
          category.push('Modo estacionamento');
        }
      }

      if(value['alert_type']=="148"){
        // response_data.push({ data: [semMotorista], alert:"Sem motorista" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Sem motorista'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Sem motorista')){
          category.push('Sem motorista');
        }
      }

      if(value['alert_type']=="152"){
        // response_data.push({ data: [capturaAtiva], alert:"Captura ativa" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Captura ativa'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Captura ativa')){
          category.push('Captura ativa');
        }
      }

      if(value['alert_type']=="153"){
        // response_data.push({ data: [trocadeMotorista], alert:"Troca de motorista" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Troca de motorista'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Troca de motorista')){
          category.push('Troca de motorista');
        }
      }

      if(value['alert_type']=="140"){
        // response_data.push({ data: [fadiga], alert:"Fadiga" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Fadiga'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Fadiga')){
          category.push('Fadiga');
        }
      }

      if(value['alert_type']=="151"){
        // response_data.push({ data: [celular], alert:"Celular" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Celular'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Celular')){
          category.push('Celular');
        }
      }

      if(value['alert_type']=="154"){
        // response_data.push({ data: [fumo], alert:"Fumo" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Fumo'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Fumo')){
          category.push('Fumo');
        }
      }

      if(value['alert_type']=="143"){
      //  response_data.push({ data: [distracao], alert:"Distra????o" })
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Distra????o'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Distra????o')){
          category.push('Distra????o');
        }
      }

      if(value['alert_type']=="160"){
        // response_data.push({ data: [bocejo], alert:"Bocejo "})
        response_data.push(
          { position: {lat: parseFloat(value['lat']), lng: parseFloat(value['lng'])}, label: {color:'red', text: 'Bocejo'}, title: 'marker', options:{ animation: google.maps.Animation.BOUNCE }, dados:{imei: value['device_imei'], file: value['file'], data_time: value['gps_time'], velocidade: value['gps_speed']}}
        )
        if(!category.includes('Bocejo')){
          category.push('Bocejo');
        }
      }

    });
    return {mapa:response_data, categoria:category};
  }

}
