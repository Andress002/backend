import { Schema, model, Document, Types } from 'mongoose';


export interface ITipoConsulta extends Document {
  codigo: string;
  nombre: string;
  homologosios?: string;
  creadoPor?: Types.ObjectId;
}

const tipoConsultaSchema = new Schema<ITipoConsulta>(
  {
    codigo: { 
      type: String, 
      required: true 
    },

    nombre: {
      type: String, 
      required: true 
    },

    homologosios: {
      type: String,
      enum: ['item1', 'item2']
    },
    
    creadoPor: {
      type: Schema.Types.ObjectId,
      ref: 'Nit',
      required: true
    }
  },
  { timestamps: true }
);

export default model<ITipoConsulta>('TipoConsulta', tipoConsultaSchema);

