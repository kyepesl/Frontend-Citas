import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MascotaComponent } from './mascota/mascota.component';

const routes: Routes = [
  {
    path: "",
    component: MascotaComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "mascotas",
    canActivate:[AuthGuard],
    component: MascotaComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
