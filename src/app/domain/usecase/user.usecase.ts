import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators"
import { IUserRequest } from "src/app/infrastructure/driven-adapter/user/user.model";
import { CreateUserGateway } from "../models/user/gateway/user.gateway";
import { IUserModel } from "../models/user/user.models";


@Injectable()
export class PostCreateUserCase {
    constructor(private createUserGateway: CreateUserGateway){}

    invoke(params:IUserRequest): Observable<IUserModel |  null> {
        return this.createUserGateway.createUser(params).pipe(
            catchError(() => {
                return of(null)
            })
        )
    }

}