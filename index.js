//Vamos a importar nuestra librería de Express 
const express = require('express');
const cors = require('cors'); // Librería CORS.

//Del siguiente modo declaramos app como un server, lo instanciamos. Esto permite a express manejar las rutas y peticiones HTTP que le enviamos. 
//Para instalar cors hay que ir a la ruta donde tenemos nuestro proyecto y ejecutar: npm i cors
const app = express();

//Habilitamos CORS para que acepte peticiones desde cualquier origen (Web o Mobile). 
app.use(cors()); 

//Habilitamos dotenv para las variables de entorno o globales donde tendremos nuestras credenciales que NO viajarán a GitHub por el .gitignore. 
require('dotenv').config();

//A través de la función express.json() trabajamos la información en formato JSON.
app.use(express.json());

//Ahora vamos a crear una API sencilla, del siguiente modo:
//app.get ->  app(es nuestro server)  get(es el método)
//En la raíz de nuestro proyecto ( '/' ) vamos a trabajar con req (request, todo lo que me llega al server) y res (resolve, todo lo que el server/API resuelve) y
//quiere devolver a la aplicación mobile.
app.get('/', (req, res) => {
  res.json({ mensaje: 'Servidor funcionando ✅' });
});

//Del siguiente modo puedo crear una API que devuelva un listado de productos:

// Registrar el enrutador de productos
// Todo lo que llegue a /api/productos
// lo maneja productosRoutes
app.use(
  '/api/productos',
  require('./routes/productosRoutes')
);

//Creamos otra categoría más.
// app.use(
//   '/api/catergorias',
//   require('./routes/categoriasRoutes')
// );


//A continuación definimos que el server app trabaje en el puerto 3000 en nuestra PC.
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});



//Finalmente vamos a terminal y levantamos el server mediante el comando: npm run dev
//Si queremos guardar cualquier cambio vamos a ver que el server se reinicia y guarda los cambios (esto gracias al nodemon).