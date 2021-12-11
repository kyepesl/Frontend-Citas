import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MascotaComponent } from './mascota/mascota.component';
import { CitaComponent } from './cita/cita.component';

const routes: Routes = [
  {
    path: "",
    component: MascotaComponent
  },
  {
    path: "mascotas",
    component: MascotaComponent
  },
  {
    path: "citas",
    component: CitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
