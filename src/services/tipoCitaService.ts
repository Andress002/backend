import TipoCita, { ITipoCita } from "../models/tipoCita";
import { CrearTipoCitaDTO } from "../types/TipoCita.dto";
import { Types } from "mongoose";
import { AppError } from "../utils/AppError";

export const crearTipoCita = async (
  data: CrearTipoCitaDTO
): Promise<ITipoCita> => {
  try {
    return TipoCita.create(data);
  }catch (error) {
    throw new AppError("Error al crear la cita", 404);
  }
};

export const ListarTiposCita = async (): Promise<ITipoCita[]> => {
  try {
    return await TipoCita.find();
  }catch (error) {
    throw new AppError("Error al obtener los tipos de cita: ", 404);
  }
};

export const obtenerTipoCita = async (
  id: Types.ObjectId | string
): Promise<ITipoCita | null> => {
  try {
    return await TipoCita.findById(id);
  }catch (error) {
    throw new AppError("Error al obtener la cita: ", 400);
  }
};

export const actualizarTipoCita = async (
  id: Types.ObjectId | string,
  data: Partial<CrearTipoCitaDTO>
): Promise<ITipoCita | null> => {
  try {
    return await TipoCita.findByIdAndUpdate(id, data, { new: true });
  }catch (error) {
    throw new AppError("Error al actualizar la cita: ", 400);
  }
};

export const eliminarTipoCita = async (
  id: Types.ObjectId | string
): Promise<ITipoCita | null> => {
  try {
    return await TipoCita.findByIdAndDelete(id);
  }catch (error) {
    throw new AppError("Error al eliminar la cita: ", 400);
  }
};
