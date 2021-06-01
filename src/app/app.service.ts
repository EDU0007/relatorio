import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


import { Gps } from './app.model';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${'13|gFWEuV1KjKgvDjvhZ1VGu4iILpEuB0C9CeNkyB1e'}` });
  baseUrl = "https://dealer.foconavia.com.br/api/";

  constructor(
    private http: HttpClient
  ) { }

  readGps(endpos: string): Observable<Gps[]> {
    return this.http.get<Gps[]>(this.baseUrl+endpos,{headers: this.header})
  }
 
  readAlarms(endpos:string): Observable<Gps[]> {
    return this.http.get<Gps[]>(this.baseUrl+endpos,{headers: this.header})
  }


  

}
