import mongoose from "mongoose";


export const mongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('La conexion a mongoose fue exitosa')
    } catch (error) {
        console.error('Error para conectar a mongoose', error)
        process.exit(1);
    }
};


