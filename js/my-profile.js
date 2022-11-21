//Aca llamamos a todos los campos donde iran los datos del usuario.
let primerNombre=document.getElementById("primerNombre");
let segundoNombre=document.getElementById("segundoNombre");
let primerApellido=document.getElementById("primerApellido");
let segundoApellido=document.getElementById("segundoApellido");
let telefono=document.getElementById("telefono");
let imgPerfil=document.getElementById("imgPerfil");
let imgFoto=document.getElementById("imgFoto");


//funcion para leer la foto de perfil que ingresamos (codifica la imagen (en la linea 15, gracias al .readAsDataURL) en base 64 para almacenar la imagen en el localstorage)

function cargarFoto() {
    let file = new FileReader();
    file.readAsDataURL(imgPerfil.files[0]);
    file.onload = () => {
         let URLFOTO = file.result;
         
         //Aca guardamos la imagen en localstorage, luego de estar elegida la imagen
         localStorage.setItem("foto", URLFOTO);

         window.location.reload();
    };
};


//Funcion para gurdar datos en localstorage. Agarra todos los valores de los campos y los almacena en el localstorage. 
//A esta funcion la vamos a llamar cuando el formulario se verifique correctamente.
function guardarDatos(){
    //Esto nos permite leer el valor del campo.
    let primerN=document.getElementById("primerNombre").value; 
    let segundoN=document.getElementById("segundoNombre").value;
    let primerA=document.getElementById("primerApellido").value;
    let segundoA=document.getElementById("segundoApellido").value;
    let tel=document.getElementById("telefono").value;

//Esto guarda los datos en el localstorage
localStorage.setItem("primerN",primerN); 
localStorage.setItem("segundoN",segundoN);
localStorage.setItem("primerA",primerA);
localStorage.setItem("segundoA",segundoA);
localStorage.setItem("tel",tel);

}

//function de verificacion de formulario predeterminada de boostraps.
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) { // si el formulario no esta validado no nos deja continuar ni guardar los datos.
            event.preventDefault()
            event.stopPropagation()
          }
          //Si todos los campos requeridos estan llenos, ,llama a la funcion de guardar datos.
          else{
            guardarDatos(); //llamamos a la funcion de guardar datos cuando se verifican los datos del formulario exitosamente.

          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  //DOM. Lo que va a hacer es traer los datos del localstorage y los muestra en los campos correspondientes.
  document.addEventListener("DOMContentLoaded", function(e){
    let emailUser=document.getElementById("emailUsuario");
    let usuario=localStorage.getItem("nombreDeUsuario");
    emailUser.innerHTML=usuario;

    //Llamamos los datos guardados del localstorage y los almacenamos en variables.
    let pNombre=localStorage.getItem("primerN"); 
    let sNombre=localStorage.getItem("segundoN");
    let pApellido=localStorage.getItem("primerA");
    let sApellido=localStorage.getItem("segundoA");
    let telef=localStorage.getItem("tel");

    //En los campos correspondientes se les asigna el valor que les corresponde y los podemos editar en cualquier momento.
    primerNombre.value=pNombre;
    segundoNombre.value=sNombre;
    primerApellido.value=pApellido;
    segundoApellido.value=sApellido;
    telefono.value=telef;

    //Esta funcion nos devuelve la imagen del localstorage
  let fotoPerfil=()=>{
    return localStorage.getItem("foto");
  }

  //El src de la foto recibe los datos de la imagen almacenados del localstorage desde la funcion fotoPerfil
 let mostrarImg=()=>{
    if(fotoPerfil()){
        imgFoto.src=fotoPerfil();
    }
 }
 mostrarImg();

  });