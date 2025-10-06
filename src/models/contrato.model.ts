import { Schema, Document, Types, model } from "mongoose";

export interface IContrato extends Document {
  codigoContrato: string;
  HomologoContratoSIOS: string;
  Regimen: string;
  contrato: string;
  creadoPor: Types.ObjectId;
}

const ContratoSchema = new Schema<IContrato>(
  {
    codigoContrato: { type: String, required: true },
    contrato: { type: String, required: true },
    HomologoContratoSIOS: {
      type: String,
      enum: ["Item 1", "Item 2", "Item 3"],
    },
    Regimen: {
      type: String,
      enum: ["Contributivo", "Subsidiado", "Otro"],
    },
    creadoPor: {
      type: Schema.Types.ObjectId,
      ref: "Nit",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IContrato>("Contrato", ContratoSchema);

