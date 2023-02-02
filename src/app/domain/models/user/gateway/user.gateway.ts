import { Observable } from "rxjs";
import { IUserRequest } from "src/app/infrastructure/driven-adapter/user/user.model";
import { IUserModel } from "../user.models";


export abstract class CreateUserGateway {
    abstract createUser(params:IUserRequest): Observable<IUserModel>;
}