//Todo lo que llegue de parte del Cliente con la ruta "http:/localhost:3000/api/productos" lo vamos a trabajar en este archivo.

//Tenemos que importar la librería express al igual que en el index.js:

const express = require('express');

//Ahora vamos a instanciar el router, lo declaramos:

const router = express.Router();

//Importamos el controlador creándolo en el siguiente paso:

const ctrl = require('../controllers/productosController');

//Vamos a agregar unos console.log para validar que se cumpla el flujo 

console.log("ENRUTADOR")

// Cada ruta delega a una función del controlador
// La URL final = /api/productos + lo de acá
//Se coloca raíz (' / ') ya que estamos posicionados en "../api/productos".
//En ->  router.get('/', ctrl.obtenerTodos); decimos que todo todas las peticiones de tipo GET 
// que lleguen a la raíz de ese router (/) van a ser manejadas por la función ctrl.obtenerTodos
//Dos aclaraciones: 
//ctrl.obtenerTodos --> Le das la orden de trabajo a Express para el futuro: "Acá tenés las instrucciones de qué hacer cuando entre un usuario".
// ctrl.obtenerTodos() --> Ejecutás las instrucciones ya mismo, en el momento en que se procesa esa línea de código.
router.get('/', ctrl.obtenerTodos);
router.get('/ultimo', ctrl.obtenerUltimo);

//Tener en cuenta que "obtenerTodos" es una función que va a estar ubicada en el archivo productosController.js

//Finalmente tenemos que exportar el módulo para que el index.js lo use, tal como hacíamos en nuestra App cuando indicamos "export default App"
module.exports = router;

