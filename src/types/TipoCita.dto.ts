import { Types } from "mongoose";

export interface CrearTipoCitaDTO {
  codigo: string;
  nombre: string;
  homologosios?: string;
  creadoPor? : Types.ObjectId
}
