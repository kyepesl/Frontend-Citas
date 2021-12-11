import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MascotaComponent } from './mascota/mascota.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MascotaService } from './services/mascota.service';
import { CitaService } from './services/cita.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitaComponent } from './cita/cita.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MascotaComponent,
    HomeComponent,
    FooterComponent,
    CitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MascotaService, CitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
