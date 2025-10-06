import TipoConsulta, { ITipoConsulta } from '../models/tipoConsulta';
import { CrearTipoConsultaDTO } from '../types/TipoConsulta.dto';
import { Types } from 'mongoose';
import { AppError } from '../utils/AppError';

export const crearTipoConsulta = async (
    data: CrearTipoConsultaDTO
): Promise<ITipoConsulta> => {
    try {
        return await TipoConsulta.create(data);
    }catch (err: any) {
        console.error('Error para recibir la consulta', err);
        throw new AppError('Error para crear la consulta' , 400);
    }
};

export const ListarTiposConsulta = async (): Promise<ITipoConsulta[]> => {
    try {
        return await TipoConsulta.find().populate('creadroPor', 'nombre email');
    }catch (err: any) {
        throw new AppError('Error para obtener las consultas', 400);
    }
};

export const obtenerTipoConsulta = async (
    id: Types.ObjectId | string): Promise<ITipoConsulta | null> => {
    try {
        return await TipoConsulta.findById(id);
    }catch (err: any) {
        throw new AppError('Error para obtener la consulta', 400);
    }
};

export const actualizarTipoConsulta = async (
    id: Types.ObjectId | string,
    data: Partial<CrearTipoConsultaDTO>
): Promise<ITipoConsulta | null> => {
    try {
        return await TipoConsulta.findByIdAndUpdate(id, data, { new: true });
    }catch (err: any) {
        throw new AppError('Error para actualizar la consulta', 400);
    }
};

export const eliminarTipoConsulta = async (
    id: Types.ObjectId | string
): Promise<ITipoConsulta | null> => {
    try {
        return await TipoConsulta.findByIdAndDelete(id);
    }catch (err: any) {
        throw new AppError('Error para actualizar la consulta', 400);
    }
};
