import express from 'express'; // Importar express en lugar de importar solo el Router
const app = express(); // Crear una instancia de la aplicación Express
import morgan from 'morgan';
//
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


// Definir rutas o configuración adicional aquí...


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
import ClientesRouter from './routes/clientes.js';
app.use(ClientesRouter);
import indexRouter from './routes/index.js';
app.use(indexRouter);


// Iniciar el servidor
const PORT = 3000;
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${PORT}`);
});