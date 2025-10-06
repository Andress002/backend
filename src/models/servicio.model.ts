import mongoose, { Schema, Document, model, Types } from "mongoose";

export interface Iservice extends Document {
  codigoServicio: string;           
  homologoServicioSIOS: string;
  nombre: string;
  creadoPor?: Types.ObjectId;
}

const ServicioSchema = new Schema<Iservice>(
  {
    codigoServicio: { type: String, required: true },   
    nombre: { type: String, required: true },           
    homologoServicioSIOS: {
      type: String,
      enum: ["Item 1", "Item 2", "Item 3"],
      required: true,
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

export default model<Iservice>("Servicio", ServicioSchema);