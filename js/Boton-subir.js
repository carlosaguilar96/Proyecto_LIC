window.onscroll = function(){
    if(document.documentElement.scrollTop >100){
        document.querySelector('.subir-contenedor').classList.add('Mostrar');
    }else{
        document.querySelector('.subir-contenedor').classList.remove('Mostrar');
    }
}

document.querySelector('.subir-contenedor').addEventListener('click',() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});