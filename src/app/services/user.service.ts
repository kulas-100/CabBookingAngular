import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  userLogin(loginDto: UserLogin): Observable<any> {
    return this.httpClient.post("http://localhost:8090/account/login", loginDto);
  }
}
