const { createClient } = require('@supabase/supabase-js');

// Crear el cliente usando las variables de entorno
// Las credenciales vienen del .env, nunca hardcodeadas
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Exportar para usar en los servicios
module.exports = supabase;