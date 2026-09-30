//De momento solo vamos a agregar una lista de objetos hardcodeados. No tenemos la BBDD aún.  

const supabase = require("../config/supabase");

// Los datos — hoy hardcodeados
// const productos = [
//   { id: 1, nombre: 'Notebook', precio: 500000 },
//   { id: 2, nombre: 'Mouse',    precio: 15000  },
//   { id: 3, nombre: 'Teclado',  precio: 25000  },
// ];

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

const obtenerPorId = async(id) => {

    const {data,error} = await supabase
    .from ('producto')
    .select('*')
    .eq('prod_codigo', id)
    if (error) throw error
    return data;
}

const crear = async(producto) => {

    const {data, error} = await supabase
    .from ('producto')
    .insert(producto)
    .select();

    if (error) throw error;
    return data
}


const eliminar = async(id) => {

    const {data, error} = await supabase
    .from ('producto')
    .delete()
    .eq('prod_codigo', id)
    .select();

    if (error) throw error;
    return data
}

const actualizar = async(producto) => {

    const {data, error} = await supabase
    .from ('producto')
    .update({'prod_precio': producto.prod_precio})
    .eq('prod_codigo', producto.prod_codigo)
    .select();

    if (error) throw error;
    return data
}

//No olvidar de exportar la función. 
module.exports = { obtenerTodos, obtenerPorId, crear, eliminar, actualizar };