export class AppError extends Error {
  statusCode: number;
  isOptional: boolean;
  status: string;

  constructor(mensaje: string, statusCode: number, isOptional = true) {
    super(mensaje)
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'error' : 'fail';
    this.isOptional = isOptional
    Error.captureStackTrace(this, this.constructor)
  }
}

