import { Types } from "mongoose";

export interface CrearTipoConsultaDTO {
  codigo: string;
  nombre: string;
  homologosios?: string;
  creadoPor?: Types.ObjectId
}
