import express from 'express'; // De esta forma se importa express
const app = express(); // Aquí se crea un objeto de la aplicación del servidor
import fs from 'fs'; // De esta forma se importa un modulo para leer y manipular archivos del sistema
import bodyParser from 'body-parser';

// ENDPOINT
// get es una llamada de red del metodo http
// "/" = ruta principal
// () => = función callback
// req = parámetro de llamada
// res = parámetro de respuesta 

// Función para leer los datos del archivo database.json
const readData = () => {
    try { // Usamos try para poder capturar un error en caso de no encontrar el archivp
        const data = fs.readFileSync('./src/database.json'); // readFileSync espera leer los datos para luego ejecutar el programa
        return JSON.parse(data); // Con JSON.parse convertimos los datos .json
    } catch (error) { // Si la ruta no es correcta podría "romper" la aplicación
        console.log(error);
    }
};

// Función para escribir datos en el archivo database.json
const writeData = () => {
    try { // Usamos try para poder capturar un error en caso de no encontrar el archivp
        fs.writeFileSync('./src/database.json', JSON.stringify(data)); // JSON.stringify sirve para poder convertir los datos .json a datos que la funcion pueda leer
    } catch (error) { // Si la ruta no es correcta podría "romper" la aplicación
        console.log(error);
    }
};

app.get("/", (req, res) => {
// Se usa el objeto de la respuesta y una función send para enviar algo
    res.send('Bienvenido a mi primera API con Node JS'); // la funcion send sólo nos deja enviar texto plano al navegador
});

// Endpoint para obtener todos los clientes
app.get('/clientes', (req, res) => { // El '/clientes' es el nombre de la ruta que vamos a ejecutar en el navegador, puede llamarse como sea
    const data = readData(); // Aqui ejecutamos la funcion readData que sirve para leer el archivo .json
    res.json(data.clientes); // Esto lee especificamente dentro del .json el objeto de "clientes"
});


// para separar los datos cuando sean leidos
app.listen(3000, () => {
    console.log('Citas y fechas pendientes');
});


// Endpoint pra obtener las citas con el id de los clientes
app.get('/citas',(req, res) => {
    const data = readData();
    res.json(data.citas);
});

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Ruta para editar un usuario por su ID
app.put('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    const newData = req.body; // Datos nuevos del usuario
  
  /* Lee la base de datos JSON
  fs.readFile('usuarios.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Fallo del servidor... PERDON!');
    }
    */

    let usuarios = JSON.parse(data);

    // Busca el usuario por su ID
    const usuarioIndex = usuarios.findIndex(user => user.id === userId);

    if (usuarioIndex === -1) {
      return res.status(404).send('Usuario invalido');
    }

    // Actualiza los datos del usuario
    usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...newData };

    // Escribe los cambios en la base de datos JSON
    fs.writeFile('usuarios.json', JSON.stringify(usuarios, null, 2), err => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error interno del servidor');
      }

      res.send('Usuario actualizado correctamente');
    });
  });


// Con la funcion listen "escucha"
app.listen(3000, () => { // Se le pasa un puerto y una función callback
    console.log('Server listening on port 3000');
});