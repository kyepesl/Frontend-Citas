import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient) { }

  getCitas(){
    return this.http.get<Cita[]>(`${environment.URL}/cita`)
  }

  postCitas(cita: Cita){
    return this.http.post<Cita>(`${environment.URL}/cita`, cita).pipe(
      map((response: any) => response.mascota as Cita)
    )
  }

  updateCitas(cita: Cita){
    return this.http.put<{mensaje: string}>(`${environment.URL}/cita`, cita)
  }
}
