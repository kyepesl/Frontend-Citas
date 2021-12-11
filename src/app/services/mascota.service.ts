import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Mascota } from '../models/mascota.model';

@Injectable({
  providedIn: 'root'
})

export class MascotaService {

  constructor(private http: HttpClient) {  }

  getMascotas(){
    return this.http.get<Mascota[]>(`${environment.URL}/mascota`)
  }

  postMascotas(mascota: Mascota){
    return this.http.post<Mascota>(`${environment.URL}/mascota`, mascota).pipe(
      map((response: any) => response.mascota as Mascota)
    )
  }

  updateMascotas(mascota: Mascota){
    return this.http.put<{mensaje: string}>(`${environment.URL}/mascota`, mascota)
  }

  deleteMascotas(id: number){
    return this.http.delete<Mascota>(`${environment.URL}/mascota/${id}`)
  }

}

