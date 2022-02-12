export interface IEmployee {
    status: string
    message: string
    username: string
    passsword: string
}

export interface IEmployeeApi {
    id: string
    message: string
    employees: IEmployeeModel[]
}

export interface IEmployeeModel {
    id: string
    nombre: string
    apellido: string
    vaccine: string
}