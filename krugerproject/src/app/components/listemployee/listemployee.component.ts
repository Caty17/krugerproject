import { Component, OnInit } from '@angular/core';
import { IEmployeeModel } from 'src/app/models/employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
  employees: IEmployeeModel[] = [] 
  searchVaccine = ''
  constructor(private service: EmployeeService) {
    this.service.getAllEmployee().subscribe((data: any)=>{
      this.employees = data
    })
   }

  ngOnInit(): void {
  }

}

