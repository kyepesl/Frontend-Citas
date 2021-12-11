import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

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
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './auth/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MascotaComponent,
    HomeComponent,
    FooterComponent,
    CitaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MascotaService,CitaService,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
