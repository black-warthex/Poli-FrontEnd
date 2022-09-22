const formulario = document.forms["formulario"];

const guardar = () => {
  const nombre = formulario.nombre.value; 
  const correo = formulario.correo.value; 
  const clave = formulario.clave.value;
  const codigoRecuperacion = formulario.codigoRecuperacion.value;
  usuarios.push({nombre, correo, clave, codigoRecuperacion});
  console.log(usuarios);
  reiniciarValores();
  alert(`se ha creado el usuario ${nombre}`);
}

const reiniciarValores = () => {
    formulario.nombre.value = '';
    formulario.correo.value = '';
    formulario.clave.value = '';
    formulario.codigoRecuperacion.value = '';
}

