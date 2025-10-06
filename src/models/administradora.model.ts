import mongoose, { Schema, Document, Types } from "mongoose";

export interface IAdministradora extends Document {
  erp: string;
  homologoContratoSIOS: string;
  homologoERP: string;
  contrato: Types.ObjectId;   // referencia al contrato
  creadoPor?: Types.ObjectId;
}

const administradoraSchema = new Schema<IAdministradora>(
  {
    erp: { type: String, required: true },
    homologoContratoSIOS: [{ type: String, required: true }],
    homologoERP: { type: String, required: true },
    contrato: {
      type: Schema.Types.ObjectId,
      ref: "Contrato",   // usa el contrato.model.ts
      required: true,
    },
    creadoPor: {
      type: Schema.Types.ObjectId,
      ref: "Nit",
      required: true,
    },  
  },
  { timestamps: true }
);

const Administradora = mongoose.model<IAdministradora>(
  "Administradora",
  administradoraSchema
);

export default Administradora;