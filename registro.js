const formulario = document.getElementById('registroform');

formulario.addEventListener('submit', function(event) {
   event.preventDefault();
   //  datos de formulario
   const nombre = formulario.nombre.value;
   const email  = formulario.email.value;
   const telefono = formulario.telefono.value;
   const nocontrol = formulario.nocontrol.value;
   const semestre = formulario.semestre.value;
   const grupo = formulario.grupo.value;
   const especialidad = formulario.especialidad.value;
   const contraseña = formulario.contraseña.value;
   const confirmarcontraseña = formulario.confirmarcontraseña.value;

  // condicion de contraseña
  if(contraseña!=confirmarcontraseña)
    {
       alert("Las contraseñas no coinciden, verifica la contraseña")
       return;
    }
     // alert("Datos guardados: "+ nombre)

  // creando el objeto para guardar los datos
  const datosobjeto=
    {
    nombre:nombre,
      email:email,
      telefono:telefono,
      nocontrol:nocontrol,
      semestre:semestre,
      grupo:grupo,
      especialidad:especialidad,
      contraseña:contraseña,
      confirmarcontraseña:confirmarcontraseña,
      
    }
  alert("Datos guardados "+JSON.stringify(datosobjeto,null,2));
      

  
}); 

