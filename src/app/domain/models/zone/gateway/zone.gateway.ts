import { Observable } from "rxjs";
import { IZoneModel } from "../zone.model";
import { IZoneRequest } from "src/app/infrastructure/driven-adapter/user/zone.model";


export abstract class ZoneGateway {
    abstract create(params:IZoneRequest): Observable<IZoneModel>;
    abstract getAll(): Observable<IZoneModel[]>;
    abstract update(params:IZoneRequest): Observable<IZoneModel>;
    abstract delete(id: number): Observable<boolean>;
}

