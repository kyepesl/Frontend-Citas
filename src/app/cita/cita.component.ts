import { Component, OnInit } from '@angular/core';
import { CitaService } from '../services/cita.service';
import { EstadoCitaService } from '../services/estado-cita.service';
import { Cita } from '../models/cita.model';
import { EstadoCita } from '../models/estado-cita.model';
import { MascotaService } from '../services/mascota.service';
import { Mascota } from '../models/mascota.model';
import { TipoCitaService } from '../services/tipo-cita.service';
import { TipoCita } from '../models/tipo-cita.model';

declare var bootstrap: any;

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css'],
})
export class CitaComponent implements OnInit {
  mascotas: Mascota[] = [];
  citas: Cita[] = [];
  estadosCitas: EstadoCita[] = [];
  tiposCitas: TipoCita[] = [];
  cita: Cita = new Cita();
  accionCompletada: boolean = false;
  error: boolean = false;
  mensaje: string = '';
  citaModal: any;
  crearCitaModal: any;
  estadoCita = 0;
  tipoCita = 0;
  idMascota = 0;
  fecha: string = '';

  constructor(
    private serviceCita: CitaService,
    private serviceEstado: EstadoCitaService,
    private serviceMascota: MascotaService,
    private serviceTipo: TipoCitaService
  ) {}

  editar(cita: Cita) {
    this.cita = { ...cita };
  }

  guardarCita() {
    if (this.cita != null && this.cita.id) {
      this.cita.estadoCita.id = this.estadoCita;
      this.serviceCita.updateCitas(this.cita).subscribe(
        (res) => {
          this.obtenerCitas();
          this.accionCompletada = true;
          this.mensaje = 'El estado de la cita ha sido actualizado con éxito!';
          this.estadoCita = 0;
          this.cerrarModal();
        },
        (error) => {
          this.error = true;
          this.mensaje = 'No es permitido modificar el estado de la cita';
          this.cerrarModal();
        }
      );
    } else {
      this.cita.mascota = new Mascota();
      this.cita.tipoCita = new TipoCita();
      this.cita.mascota.id = this.idMascota;
      this.cita.tipoCita.id = this.tipoCita;
      console.log(this.fecha);

      this.cita.fechaCita = this.fecha;
      this.serviceCita.postCitas(this.cita).subscribe((res) => {
        this.obtenerCitas();
        this.accionCompletada = true;
        this.mensaje =
          'La cita ha sido creada con éxito, recuerda que aún debe ser confirmada por el médico!';
        this.tipoCita = 0;
        this.idMascota = 0;
        this.fecha = '';
        this.cerrarModal();
      });
    }
  }

  cerrarModal() {
    this.citaModal.hide();
    this.crearCitaModal.hide();
    setTimeout(() => {
      this.accionCompletada = false;
      this.error = false;
    }, 4000);
  }

  ngOnInit(): void {
    this.obtenerCitas();
    this.obtenerEstadosCitas();
    this.obtenerTiposCitas();
    this.obtenerMascotas();

    this.citaModal = new bootstrap.Modal(
      document.getElementById('editarCitaModal') as any
    );
    this.crearCitaModal = new bootstrap.Modal(
      document.getElementById('crearCitaModal') as any
    );
  }

  private obtenerCitas() {
    this.serviceCita.getCitas().subscribe((res) => {
      this.citas = res.map((m) => {
        const d = new Date(m.fechaCita);
        m.fechaCita = d.toISOString().split('T')[0];
        return m;
      });
    });
  }

  private obtenerEstadosCitas() {
    this.serviceEstado.getEstadoCitas().subscribe((res) => {
      this.estadosCitas = res;
    });
  }

  private obtenerTiposCitas() {
    this.serviceTipo.getTipoCitas().subscribe((res) => {
      this.tiposCitas = res;
    });
  }

  private obtenerMascotas() {
    this.serviceMascota.getMascotas().subscribe((res) => {
      this.mascotas = res;
    });
  }
}
