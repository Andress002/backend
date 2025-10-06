import { Request, Response } from 'express';
import * as usuariosService from '../services/usuarioService';
import Nit from '../models/Nit.model';
import { AuthRequest } from '../utils/AuthRequest';

// Registro de usuario
export const registroUsuarioController = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const usuarioRegistrado = await usuariosService.registrarUsuarioService(req.body);

    res.status(201).json({
      mensaje: 'Usuario registrado con éxito',
      usuarioRegistrado
    });

  } catch (err: any) {
    console.error('Error al registrar el usuario:', err.message);

    res.status(500).json({
      mensaje: err.message || 'Error interno del servidor',
    });
  }
};

// Login de usuario
export const loginUsuarioController = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    
    const { nit, password } = req.body;
    const loginResponse = await usuariosService.loginUsuarioService({ nit, password });

    res.status(200).json(loginResponse);

  } catch (err: any) {
    console.error('Error al iniciar sesion:', err.message);

    res.status(401).json({
      mensaje: err.message || 'Credenciales inválidas',
    });
  }
};

// Obtener todos los usuarios (solo admin)
export const obtenerUsuariosController = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {

  try {
    const usuarios = await Nit.find().select('-password');
    res.status(200).json({ usuarios });
  } catch (err: any) {
    console.error('Error al obtener usuarios:', err.message);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

export const obtenerUsuarioPorIdController = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {

  const { id } = req.params;

  try {
    const usuario = await Nit.findById(id).select('-password');

    if (!usuario) {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.status(200).json({ usuario });

  } catch (err: any) {
    console.error('Error al obtener usuario:', err.message);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};


// Eliminar un usuario por ID (solo admin)
export const eliminarUsuarioController = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const usuario = await Nit.findByIdAndDelete(id).select('-password');

    if (!usuario) {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.status(200).json({
      mensaje: 'Usuario eliminado correctamente',
      usuario
    });

  } catch (err: any) {
    console.error('Error al eliminar usuario:', err.message);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
