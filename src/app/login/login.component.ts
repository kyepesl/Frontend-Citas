import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  error = false;
  loading = false;

  isRegister = false;
  successRegistre = false;
  registerError = false;


  constructor(private service: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    this.service.login(this.usuario).subscribe(res => {
      this.service.guardarUsuario(res.access_token);
      this.service.guardarToken(res.access_token);
      this.router.navigate(['/mascotas']);
      this.loading = false;
    }, err => {
      this.error = true;
      this.loading = false;
    })
  }

  register() {
    this.loading = true;
    this.service.register(this.usuario).subscribe(res => {
      this.isRegister = false;
      this.loading = false;
      this.successRegistre = true;
    }, err => {
      this.registerError = true;
      this.loading = false;
    })
  }

}
