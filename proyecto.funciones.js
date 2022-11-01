function agrandar_contenedor(){
    document.getElementsByIde('cont_texto_proyecto').style.height = '512px';
}

function escucharEventos() {
    var cont_texto_proyecto = document.getElementById('cont_texto_proyecto');
    cont_texto_proyecto.addEventListener('scroll', agrandar_contenedor) 
}
  
escucharEventos();