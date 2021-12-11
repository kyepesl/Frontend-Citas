import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EstadoCita } from '../cita/estadoCita';

@Injectable({
  providedIn: 'root'
})
export class EstadoCitaService {

  constructor(private http: HttpClient) { }

  getEstadoCitas(){
    return this.http.get<EstadoCita[]>(`${environment.URL}/estados-citas`)
  }
}
