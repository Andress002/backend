import Joi from "joi";

export const registrarSchema = Joi.object({
  nit: Joi.number().max(999999999999999999999999999999).required(),
  password: Joi.string().min(6).required(),
  rol: Joi.string().required()
});

export const loginSchema = Joi.object({
  nit: Joi.number().required(),
  password: Joi.string().min(6).required(),
});



export const empresaSchema = Joi.object({
  nit: Joi.number().max(9999999999999999999999999999).required(),
  nombre: Joi.string().required(),
  representanteLegal: Joi.string().required(),
  tipoDocumento: Joi.string().valid('CC', 'CE', 'PP').required(),
  documento: Joi.number().max(9999999999999999999999999999999).required(),
  direccion: Joi.string().required(),
  telefono: Joi.number().max(999999999999999999999999999999999).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  creadoPor: Joi.string().optional(),
})