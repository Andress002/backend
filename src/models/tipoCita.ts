import { Schema, Document, model, Types } from 'mongoose';




export interface ITipoCita extends Document {
  codigo: string;
  nombre: string;
  homologosios?: string;
  creadoPor?: Types.ObjectId;
}


const tipoCitaSchema = new Schema<ITipoCita>(
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
      enum: ['item1', 'item2']},
      
    creadoPor: {
      type: Schema.Types.ObjectId,
      ref: 'Nit',
      required: true
    }
  },
  { timestamps: true }
);

export default model<ITipoCita>('TipoCita', tipoCitaSchema);



