import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	nombre: string = ""
	interval: any = null;

	constructor(private service: AuthService) {
		console.log(service.usuario);
		this.nombre = service.usuario.nombre;

		this.interval = setInterval(() => {
			this.nombre = service.usuario.nombre;
			if (this.nombre) {
				clearInterval(this.interval);
      }
		}, 1000)
	}

	ngOnInit(): void {
	}

}
