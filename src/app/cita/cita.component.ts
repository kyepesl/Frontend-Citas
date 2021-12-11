import { Component, OnInit } from '@angular/core';
import { CitaService } from '../services/cita.service';
import { EstadoCitaService } from '../services/estado-cita.service';
import { Cita } from './cita';
import { EstadoCita } from './estadoCita';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  citas: Cita[] = [];
  estadosCitas: EstadoCita[] = [];
  cita: Cita = new Cita();
  accionCompletada: boolean = false;
  mensaje: string = "";
  citaModal: any;

  constructor(private service: CitaService,
    private serviceEstado: EstadoCitaService) {

  }

  editar(cita: Cita){
    this.cita = {...cita};
  }

  guardarCita(){
    if(this.cita!=null && this.cita.id){
      this.service.updateCitas(this.cita).subscribe(res => {

        this.obtenerCitas();
        this.accionCompletada = true;
        this.mensaje = "El estado de la cita ha sido actualizado con éxito!";
      })
    }
    else{
      this.service.postCitas(this.cita).subscribe(res => {

        this.obtenerCitas();
        this.accionCompletada = true;
        this.mensaje = "La cita ha sido creada con éxito, recuerda que aún debe ser confirmada por el médico!";
      })
    }
  }

  cerrarModal(){
    this.citaModal.hide();
     setTimeout(()=>{
       this.accionCompletada = false;
     }, 3000)
  }

  ngOnInit(): void {
    this.obtenerCitas();
    this.obtenerEstadosCitas();
  }

  private obtenerCitas() {
    this.service.getCitas().subscribe(res => {
      this.citas = res.map(m => {
        const d = new Date(m.fechaCita);
        m.fechaCita = d.toISOString().split('T')[0];
        return m;
      });

    });
  }

  private obtenerEstadosCitas() {
    this.serviceEstado.getEstadoCitas().subscribe(res => {
      this.estadosCitas = res
    });
  }

}
