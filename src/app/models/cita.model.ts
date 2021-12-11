import { EstadoCita } from "./estado-cita.model";
import { Mascota } from "./mascota.model";
import { TipoCita } from "./tipo-cita.model";

export class Cita {
  id: number;
  fechaCita: string;
  estadoCita: EstadoCita;
  tipoCita: TipoCita;
  mascota: Mascota;
}
