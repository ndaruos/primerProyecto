//De momento solo vamos a agregar una lista de objetos hardcodeados. No tenemos la BBDD aún.  

const supabase = require("../config/supabase");

// Los datos — hoy hardcodeados
const productos = [
  { id: 1, nombre: 'Notebook', precio: 500000 },
  { id: 2, nombre: 'Mouse',    precio: 15000  },
  { id: 3, nombre: 'Teclado',  precio: 25000  },
];

console.log("SERVICIO")

// Devolver todos
const obtenerTodos = async() => {
    //return productos
    const { data, error } = await supabase
    .from('producto')
    .select('*');
    if (error) throw error;
    return data;
};



//No olvidar de exportar la función. 
module.exports = { obtenerTodos };