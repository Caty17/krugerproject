import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ILoggin } from '../models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLogin = 'https://testtttt45.getsandbox.com/logginEmployee/'
  constructor(private _http: HttpClient) { }
  public login(username: string){
    return this._http.get<ILoggin>(this.urlLogin + username).pipe(
      map(response => response)
    )

  }
}

