import { Document, Schema, model } from "mongoose";


export interface Init extends Document {
  nit: number;
  password: string;
  rol?: 'user' | 'admin';
  createdAt: Date;
}


const userSchema = new Schema<Init>({
    nit: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true,
    },

    rol: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default model<Init>('Nit', userSchema);
