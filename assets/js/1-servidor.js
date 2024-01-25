import express from 'express'; // De esta forma se importa express
const app = express(); // Aquí se crea un objeto de la aplicación del servidor

// ENDPOINT
//get es una llamada de red del metodo http
// "/" = ruta principal
// () => = función callback
// req = parámetro de llamada
// res = parámetro de respuesta 


app.get("/", (req, res) =>{
// Se usa el objeto de la respuesta y una función send para enviar algo
    res.send('Bienvenido a mi primera API con Node JS'); // la funcion send sólo nos deja enviar texto plano al navegador
});

// Con la funcion listen "escucha"
app.listen(3000, () => { // Se le pasa un puerto y una función callback
    console.log('Server listening on port 3000');
});