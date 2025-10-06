import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Nit, { Init } from "../models/Nit.model";
import { registrarSchema, loginSchema } from "../types/auth.schemas";
import { AppError } from "../utils/AppError";

interface LoginResponse {
  mensaje: string;
  token: string;
  user: {
      _id: string;
      nit: number;
      rol: any;
    }
}

export const registrarUsuarioService = async (data: Partial<Init>) => {
  const { error } = registrarSchema.validate(data);
  if (error) {
    throw new Error(error.details[0].message);
  }

  const { nit, password, rol } = data;

  const usuarioExiste = await Nit.findOne({ nit });
  if (usuarioExiste) {
    throw new AppError("El usuario ya existe", 400);
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password as string, salt);

  const nuevoUsuario = new Nit({
    nit,
    rol,
    password: hashPassword,
  });

  await nuevoUsuario.save();
  return { mensaje: "Usuario registrado con exito" };
};

export const loginUsuarioService = async (data: {
  nit: number;
  password: string;
}): Promise<LoginResponse> => {
  const { error } = loginSchema.validate(data);

  if (error) {
    throw new Error(error.details[0].message);
  }

  const { nit, password } = data;

  const usuario = await Nit.findOne({ nit });
  if (!usuario) {
    throw new AppError("Este usuario no existe", 400);
  }

  const comparePassword = await bcrypt.compare(password, usuario.password);
  if (!comparePassword) {
    throw new AppError("Contrase incorrecta", 400);
  }

  const token = jwt.sign(
    { _id: usuario._id, nit: usuario.nit, rol: usuario.rol },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" }
  );

  return {
    token,
    mensaje: "Login Exitoso",
    user: {
      _id: usuario.id,
      nit: usuario.nit,
      rol: usuario.rol
    }
  };
};
