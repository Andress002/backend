import { Types } from "mongoose";

export interface CrearEmpresaDTO {
  nit:     string;
  nombre:  string;
  representanteLegal: string;
  documento:   number;
  tipoDocumento: string;
  direccion:  string;
  telefono:   number;
  email:      string;
  contrasena:  string;
  // confirmacion:  string;
  creadoPor?: Types.ObjectId;
}