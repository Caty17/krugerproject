import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { ErrorComponent } from './components/error/error.component';
import { ListemployeeComponent } from './components/listemployee/listemployee.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'error' , component: ErrorComponent},
  {path: 'access' , component: LoginComponent},
  {path: 'addemployee', component: AddemployeeComponent},
  {path: 'listemployee', component: ListemployeeComponent},
  {path: '' , pathMatch: 'full', redirectTo: 'access'},
  {path: '**' , pathMatch: 'full', redirectTo: 'error'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
