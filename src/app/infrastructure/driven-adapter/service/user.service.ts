import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from "@angular/common/http"
import { CreateUserGateway } from 'src/app/domain/models/user/gateway/user.gateway';
import { IUserModel } from 'src/app/domain/models/user/user.models';
import { IUserRequest } from '../user/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CreateUserGateway{
  API_USERS : string = 'https:/jsonplaceholder.typicode.com/users';
  private httpHeaders = new HttpHeaders({"Content-Type":"application/json"})

  constructor(private http: HttpClient) {
    super()
   }

  createUser(params: IUserRequest): Observable<IUserModel> {
   return this.http.post<any>(this.API_USERS, params, {
    headers: this.httpHeaders,
   })
  }
}
