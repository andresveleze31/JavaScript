//CONFIGURACION EXPRESS

//Importamos Express
import express from "express";
//Importamos Router
import router from "./routes/router.js";
//Importamos Base de datos
import db from "./config/db.js";

//Conectar DB
db.authenticate()
    .then(() => {
        console.log("DB Conectada");
    })
    .catch((error) => {
        console.log(error);
    })

//Ejecutamos Express
const app = express();

//Definir Puerto
const port = process.env.PORT || 4000;

//Habilitar PUG.
app.set('view engine', 'pug');

//Agregar Body Parse para leer Datos del Formulario
app.use(express.urlencoded({extended:true}));

//Definir carpeta PUBLIC
app.use(express.static('public'));

//Agregar el Router.
app.use('/', router);

//Arranca el Servidor
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})

