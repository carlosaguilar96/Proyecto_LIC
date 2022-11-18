let comentarioFull = [{userName:null, comentario:null}];

const Enviar = document.getElementById("botonEnviar");

let comentarios = document.getElementById("SeccionComentarios");

let usuario = document.getElementById("UserName");
let comentario = document.getElementById("Comentario"); 

let individual = document.getElementById("individualComentario");
    
Enviar.addEventListener("click", enviarComentario);

window.onload = function cargar(){
    if(comentarioFull[1] == undefined && comentarioFull[1] == undefined){
        individual.className = "m-4 mt-0";
        individual.innerText = "No hay comentarios ...";
    }
}

function enviarComentario(){
    comentarioFull.push({userName: usuario.value, comentario: comentario.value});

            const fecha = new Date();
            const p1 = document.createElement("P");
            const spanFecha = document.createElement("span");
            spanFecha.setAttribute("id","idFechaC");
            const p2 = document.createElement("P");
            const hr = document.createElement("hr");
            const br = document.createElement("br");
            p1.className = "m-3";
            p2.className = "m-4";

            if(usuario.value == ""){
                usuario.value = "Anónimo";
            }else if (usuario.value == "" || comentario.value == ""){
                swal("Error!", "Debe ingresar un comentario!", "error");
            }else if(comentario.value.length  < 11){
                swal("Error!", "El comentario debe ser mayor a 10 carateres!", "error");
            }
            else{
            const nodo1 = document.createTextNode("@ " + usuario.value);
            const nodo2 = document.createTextNode(comentario.value);
            const nodo3 = document.createTextNode(fecha);
            
            p1.appendChild(nodo1);
            p2.appendChild(nodo2);
            spanFecha.appendChild(nodo3);
            p2.appendChild(br);
            p2.appendChild(spanFecha);
            document.getElementById("SeccionComentarios").appendChild(p1);
            document.getElementById("SeccionComentarios").appendChild(p2);
            document.getElementById("SeccionComentarios").appendChild(hr);
            individual.innerHTML = "Comentarios ...";
            usuario.value = "";
            comentario.value = "";
            $('#exampleModal').modal('hide');
            }

}

