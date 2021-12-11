import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../services/mascota.service';
import { Mascota } from './mascota';

declare var bootstrap: any;

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})

export class MascotaComponent implements OnInit {

  mascotas: Mascota[] = [];
  mascota: Mascota = new Mascota();
  idParaEliminar: number = 0;
  accionCompletada: boolean = false;
  mensaje: string = "";
  myModal: any;
  deleteModal: any;

  constructor(private service: MascotaService){

  }

  editar(mascota: Mascota){
    this.mascota = {...mascota};
  }

  cerrarModal(){
    this.myModal.hide();
    this.deleteModal.hide();
     setTimeout(()=>{
       this.accionCompletada = false;
     }, 3000)
  }

  reiniciarDatosModal(){
    this.mascota = new Mascota();
  }

  eliminar(id: number){
    this.idParaEliminar = id;
  }

  confirmarEliminar(){
    if(this.idParaEliminar){
      this.service.deleteMascotas(this.idParaEliminar).subscribe(res => {
        this.obtener();
        this.accionCompletada = true;
        this.mensaje = "La mascota ha sido eliminada con éxito!";
        this.cerrarModal();
      })
    }
  }

  guardar(){
    if(this.mascota!=null && this.mascota.id){
      this.service.updateMascotas(this.mascota).subscribe(res => {

        this.obtener();
        this.accionCompletada = true;
        this.mensaje = "La mascota ha sido actualizada con éxito!";
        this.cerrarModal()

      })
    }
    else{
      this.service.postMascotas(this.mascota).subscribe(res => {
        console.log(res);
        this.obtener();
        this.accionCompletada = true;
        this.mensaje = "La mascota ha sido creada con éxito!";
        this.cerrarModal()
      })
    }
  }

  ngOnInit(): void {
    this.obtener();

    this.myModal = new bootstrap.Modal(document.getElementById('crearModal') as any)
    this.deleteModal = new bootstrap.Modal(document.getElementById('eliminarModal') as any)
  }

  private obtener() {
    this.service.getMascotas().subscribe(res => {
      this.mascotas = res.map(m => {
        const d = new Date(m.fechaNacimiento);
        m.fechaNacimiento = d.toISOString().split('T')[0];
        return m;
      });

    });
  }
}
