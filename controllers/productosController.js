//En esta pantalla, capa intermedia (controlador), tiene como única función GESTIONAR la interacción HTTP: Recibir lo que mandó el Cliente (req) y 
//responderle al Cliente lo que solicitó (res). 
//Importamos el servicio que va a ir a la base de datos para buscar la info solicitada.
const service = require('../services/productosService');

//Vamos a agregar unos console.log para validar que se cumpla el flujo 

console.log("CONTROLADOR")

const obtenerTodos = async (req,res) => {


    //Validación previo a la base de datos, así llevo la info allí con todo OK, verificado. 

    //Aca se Llama a la función obtenerTodos() del archivo productosService.js y La variable productos almacena 
    // el resultado que retorna el servicio (en nuestro caso, el arreglo de objetos de productos).    
    // const productos = service.obtenerTodos();
    // res.json(productos);

    try {
    const data = await service.obtenerTodos();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Error al obtener' });
  }
};

const obtenerPorId = async (req,res) => {

  console.log(req.params)

  try{

    const data = await service.obtenerPorId(req.params.id);
    return res.json(data)
  }
  
  catch(error){

    console.log(error)
    return res.status(500).json({ error: 'Error al obtener por ID' })
  }
  
}

const crear = async (req,res) => {

  console.log(req.body);

  try{

    const data = await service.crear(req.body);
    return res.status(200).json(data);
  }
  
  catch(error){

    console.log(error)
    return res.status(500).json({ error: 'Error al crear registro.' })
  }

}

const eliminar = async (req,res) => {

  console.log(req.body);

  try{

    const data = await service.eliminar(req.body.prod_codigo);
    return res.status(200).json(data);
  }
  
  catch(error){

    console.log(error)
    return res.status(500).json({ error: 'Error al eliminar.' })
  }

}

const actualizar = async (req,res) => {

  console.log(req.body);

  try{

    const data = await service.actualizar(req.body);
    return res.status(200).json(data);
  }
  
  catch(error){

    console.log(error)
    return res.status(500).json({ error: 'Error al actualizar.' })
  }

}

const obtenerUltimo = (req,res) => {

   
}


// Exportar todas las funciones
module.exports = { obtenerTodos, obtenerUltimo, obtenerPorId, crear, eliminar, actualizar };