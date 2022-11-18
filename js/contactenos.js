const nombre = document.getElementById("idNombre");
const correo = document.getElementById("idCorreo");
const asunto = document.getElementById("idAsunto");
const mensaje = document.getElementById("idMensaje");
const btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click",EnviarDatos);

function EnviarDatos(){
    if(nombre.value=="" || correo.value=="" || asunto.value=="" || mensaje.value==""){
        swal("Error!", "Debe completar los campos del formulario!", "error");
    }else{
        let enviar = 0;
        let validarCorreo = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if(!validarCorreo.test(correo.value)){
            enviar++;
            swal("Error!", "La dirección de correo no es válida!","error");
        }
        let validarNombre = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
        if(!validarNombre.test(nombre.value)){
            enviar++;
            swal("Error!", "El nombre no es válido!","error");
        }
        if(enviar==0){
            swal("Bien!","El mensaje ha sido enviado","success");
            nombre.value="";
            correo.value="";
            asunto.value="";
            mensaje.value="";
        }
    }
}