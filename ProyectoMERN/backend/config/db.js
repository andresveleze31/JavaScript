import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const db = await mongoose.connect(
          "mongodb+srv://root:root@cluster0.tbhpc5a.mongodb.net/apv?retryWrites=true&w=majority", {
          }
        );
        
        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`Conectado en ${url}`);

    } catch (error) {
        console.log(error.message);
        process.exit(1);        
    }
}

export default conectarDB