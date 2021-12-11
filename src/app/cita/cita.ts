import { Mascota } from "../mascota/mascota";
import { EstadoCita } from "./estadoCita";
import { TipoCita } from "./tipoCita";

export class Cita {
  id: number;
  fechaCita: string;
  estadoCita: EstadoCita;
  tipoCita: TipoCita;
  mascota: Mascota;
}
