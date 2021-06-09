import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { AppService } from './app.service';
import { ChartsModule } from 'ng2-charts';
import {MatButtonModule} from '@angular/material/button';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { PrimeiroGraficoComponent } from './primeiro-grafico/primeiro-grafico.component';
import { UltimoGraficoComponent } from './ultimo-grafico/ultimo-grafico.component'
import { NgxEchartsModule } from 'ngx-echarts';
import { GraficoFinalComponent } from './grafico-final/grafico-final.component';
import { MENSAISUNIDADESComponent } from './mensaisunidades/mensaisunidades.component';
import { TiposAlertaComponent } from './tipos-alerta/tipos-alerta.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PrimeiroGraficoComponent,
    UltimoGraficoComponent,
    GraficoFinalComponent,
    MENSAISUNIDADESComponent,
    TiposAlertaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    MatButtonModule,
    GoogleMapsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
