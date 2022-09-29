import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgCircleProgressModule } from '@rushiraj111/ng-circle-progress';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  {path: 'nuevaexp', component: NewExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgCircleProgressModule.forRoot({})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
