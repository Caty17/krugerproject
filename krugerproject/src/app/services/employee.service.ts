import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee, IEmployeeApi } from '../models/employee.interface';
import { map } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  urlEmployee = 'https://testtttt45.getsandbox.com/createemployee'
  urlGetEmployee = 'https://testtttt45.getsandbox.com/searchByVaccine'
  
  constructor(private _http: HttpClient) { }
  public create(employee: EmployeeModel){
    
    let body = new URLSearchParams();
      body.set('dni', employee.dni);
      body.set('name', employee.name);
      body.set('lastname', employee.lastname);
      body.set('email', employee.email);
      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this._http.post<IEmployee>(this.urlEmployee, body.toString(),options).pipe(
      map((response:any) => response)
    )

  }

  public getAllEmployee(){
    return this._http.get<IEmployeeApi>(this.urlGetEmployee).pipe(
      map(response => response.employees)
    )

  }
}
