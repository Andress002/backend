import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import { mongoDB } from './config/db';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


mongoDB();
const PORT = process.env.PORT_ENV || 3000;




//rutas
import { errorHandler }  from './middlewares/errorHandler';
import TipoConsulta     from './routes/tipoConsulta.routes';
import TipoCita  from './routes/tipoCita.routes';
import administradoraRoutes from './routes/administrador.routes';
import contratoRoutes from './routes/contrato.routes';
import servicioRoutes from './routes/servicios.routes';
import UsuarioRoutes   from './routes/usuario.routes';
import EmpresaRoutes from './routes/empresa.routes';




app.use('/api/usuario',                  UsuarioRoutes);
app.use('/api/tipos-consulta',         TipoConsulta );
app.use('/api/tipos-cita',           TipoCita);
app.use('/api/administradora',     administradoraRoutes);
app.use('/api/tipo-contrato',    contratoRoutes);
app.use('/api/servicios',      servicioRoutes);
app.use('/api/empresa',      EmpresaRoutes);
app.use(errorHandler);
    




app.listen(PORT, () => {
    console.log(`Servidor corriendo en el http://localhost:${PORT}`)
});
