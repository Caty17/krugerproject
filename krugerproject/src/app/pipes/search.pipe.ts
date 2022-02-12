import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeModel } from '../models/employee.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    const employeeFilter = []
    if (args == "" ){
      return value;
    }
    for (const employee of value){
      if (employee.vaccine.toLowerCase().indexOf(args) > -1){
        employeeFilter.push(employee)
      }
    }
    return employeeFilter;
  }

}
