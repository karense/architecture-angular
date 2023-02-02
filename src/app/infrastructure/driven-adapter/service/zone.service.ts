import { HttpHeaders, HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';
import { IZoneModel } from "src/app/domain/models/zone/zone.model";
import { IZoneRequest } from "../user/zone.model";

@Injectable({
  providedIn: 'root'
})
export class ZoneService extends ZoneGateway{

  API_URL : string = 'http://localhost:8087/zone';
  private httpHeaders = new HttpHeaders({"Content-Type":"application/json"})

  constructor(private http: HttpClient) {
    super();
  }

  create(zone: IZoneRequest): Observable<IZoneModel> {
    return this.http.post<any>(this.API_URL, zone, {
      headers: this.httpHeaders,
    })
   }  
  
  update(zone: IZoneRequest): Observable<IZoneModel> {
    return this.http.put<any>(this.API_URL, zone, {
      headers: this.httpHeaders,
    })
  }  

   getAll(): Observable<IZoneModel[]> {
    return this.http.get<any>(this.API_URL)
   }  

   delete(id:number): Observable<boolean> {
    return this.http.delete<any>(`${this.API_URL}/${id}`)
   }  
}
