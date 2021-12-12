import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoCita } from '../models/tipo-cita.model';

@Injectable({
  providedIn: 'root'
})
export class TipoCitaService {

  constructor(private http: HttpClient) { }

  getTipoCitas(){
    return this.http.get<TipoCita[]>(`${environment.URL}/tipos-citas`)
  }
}
