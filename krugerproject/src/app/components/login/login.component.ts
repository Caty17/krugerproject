import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup= this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  })
  constructor(private fb: FormBuilder, private service: LoginService) { }

  ngOnInit(): void {
  }
  accessUser(){
    if(this.loginForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Error de validacion',
        text: 'Usuario y contraseña requeridos',
        
      })
      return
    }
    this.service.login(this.loginForm.controls["username"].value).subscribe((data:any)=>{
      console.log(data)
    })


  }
}
