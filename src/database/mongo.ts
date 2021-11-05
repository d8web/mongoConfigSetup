import { connect } from 'mongoose';
import db from './database';

export const mongoConnect = async () => {
    try {

        console.log("Conectando ao MongoDB...");
        await connect(db.url);
        console.log("MongoDB conectado com sucesso");

    } catch(error) {
        console.log("Erro na conexão com o mongo db:", error);
    }
}