export class EmployeeModel {
    dni: string = '';
    name: string = '';
    lastname: string = '';
    email: string = '';
    constructor(name: string, dni: string, lastname: string, email: string) {
       this.dni = dni;
       this.name = name;
       this.lastname = lastname;
       this.email = email;
    }
}