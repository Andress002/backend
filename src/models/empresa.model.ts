import { Document, Schema, model } from "mongoose";


export interface IEmpresa extends Document {
  nit:     number;
  nombre:  string;
  representanteLegal: string;
  tipoDocumento: string;
  documento:   number;
  direccion:  string;
  telefono:   number;
  email:      string;
  password:  string;
  // confirmacion:  string;
  creadoPor?: Schema.Types.ObjectId;
}

const EmpreseSchema = new Schema<IEmpresa>(
  {
    nit: {
      type: Number, 
      required: true, 
      unique: true
    },

    nombre: {
      type: String, 
      required: true
    },

    representanteLegal: {
      type: String, 
      required: true
    },

    documento: {
      type: Number, 
      required: true, 
      unique: true
    },

    tipoDocumento: {
      type: String, 
      required: true, 
      enum: ['CC', 'CE', 'PP']
    },

    direccion: {
      type: String, 
      required: true
    
    },

    telefono: {
      type: Number, 
      required: true
    },

    email: {
      type: String, 
      required: true, 
      unique: true
    },

    password: {
      type: String, 
      required: true
    },

    // confirmacion: {
    //   type: String, 
    //   required: true
    // },

    creadoPor: {
      type: Schema.Types.ObjectId,
      ref: "Nit",
      required: true
    }
  },
  {
    timestamps: true,
  }
)

export default model<IEmpresa>('Empresa', EmpreseSchema);


