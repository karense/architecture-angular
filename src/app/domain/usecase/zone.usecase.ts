import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IZoneRequest } from "src/app/infrastructure/driven-adapter/user/zone.model";
import { ZoneGateway } from "../models/zone/gateway/zone.gateway";
import { IZoneModel } from "../models/zone/zone.model";

@Injectable()
export class ZoneUseCase{
    constructor(private zoneGateway: ZoneGateway){}

    create(zone:IZoneRequest): Observable<IZoneModel | null>{
        return this.zoneGateway.create(zone).pipe(
            catchError(() => {
                return of(null)
            })
        )
    }

    update(zone:IZoneRequest): Observable<IZoneModel | null>{
        return this.zoneGateway.update(zone).pipe(
            catchError(() => {
                return of(null)
            })
        )
    }

    getAll(): Observable<IZoneModel[] | null>{
        return this.zoneGateway.getAll().pipe(
            catchError(() => {
                return of(null)
            })
        )
    }

   

}