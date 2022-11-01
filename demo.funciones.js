
var listaTexto = [
    "¿Y ahora?<br>¿Qué hago?",
    "¿Y ahora?<br>¿Qué hago?<br><b>Al principio todo es lo mismo</b>",
    "¿Qué hago?<br>Al principio todo es lo mismo<br><b>y al final también.</b>",
    "Al principio todo es lo mismo<br>y al final también.<br><b>Separar una cosa de otra</b>",
    "y al final también.<br>Separar una cosa de otra<br><b>es imaginación.</b>",
    "La marea ya está bajando.<br>Me duermo y vuelvo a soñar ~",
    "Tuve un sueño hecho de jarabe",
    "Tuve un sueño hecho de jarabe<br><b>y no desperté nunca.</b>",
    "Tuve un sueño hecho de jarabe<br>y no desperté nunca.<br><b>Ya no pienso. Ya no recuerdo.</b>",
    "y no desperté nunca.<br>Ya no pienso. Ya no recuerdo.<br><b>Soy un impulso, imaginación</b>",
    "ya no pienso. ya no recuerdo.<br>Soy un impulso, imaginación<br><b>que sube y baja con la marea.</b>",
    "Soñé con:<br>[un gato] [una flor] [un cuchillo]",
    "Soñé con<br><b>una flor que nace,</b>",
    "Soñé con<br>una flor que nace,<br><b>una mañana que abre,</b>",
    "una flor que nace,<br>una mañana que abre,<br><b>mil colores bailando.</b>",
    "una mañana que abre,<br>mil colores bailando.<br><b>Se escapan, quieren volar.</b>",
    "mil colores bailando.<br>Se escapan, quieren volar.<br><b>Nos vamos y no volvemos.</b>",
    "Se escapan, quieren volar.<br>Nos vamos y no volvemos.<br><b><i>Nada detiene al amanecer.</i></b>",
];

//!________________________________________________________________________________________

var numeroPuroImagen = 6;
var numeroStrImagen;
var ruta_base;

function swapSig()
{
    ruta_base = document.getElementById("img_a").src;

    if (ruta_base.endsWith(numeroPuroImagen + ".png") == true) //Comparar
    {      
        if (numeroPuroImagen == 17)
        {
            numeroPuroImagen = 0;
        }
        else
        {
            numeroPuroImagen++; // Incrementar
        }
        numeroStrImagen = numeroPuroImagen + "";
        document.getElementById("img_a").src = ("img/_" + numeroStrImagen + ".png"); //Asignar imagen
        document.getElementById("pie_texto").innerHTML = (listaTexto[numeroPuroImagen]); //Asignar pie
        document.getElementById("num_pagina").innerHTML = (numeroPuroImagen); //Asignar num pagina
        showElement()
        if (numeroPuroImagen == 6) {hideElement()}
    }

    else
    {
        alert("gg")
    }
}

//!________________________________________________________________________________________

function swapAnt()
{
    ruta_base = document.getElementById("img_a").src;

    if (ruta_base.endsWith(numeroPuroImagen + ".png") == true) //Comparar
    {      
        if (numeroPuroImagen == 0)
        {
            numeroPuroImagen = 17;
        }
        else
        {
            numeroPuroImagen--; // Decrementar
        }
        numeroStrImagen = numeroPuroImagen + "";
        document.getElementById("img_a").src = ("img/_" + numeroStrImagen + ".png"); //Asignar imagen
        document.getElementById("pie_texto").innerHTML = (listaTexto[numeroPuroImagen]); //Asignar pie
        document.getElementById("num_pagina").innerHTML = (numeroPuroImagen); //Asignar num pagina
        if (numeroPuroImagen == 6) {hideElement()}
    }

    else
    {
        alert("grrrr")
    }
}

//!________________________________________________________________________________________

function showElement() {
    element = document.querySelector('#guia_id');
    element.style.visibility = 'visible';
    
    element = document.querySelector('#bot_ant');
    element.style.visibility = 'visible';

    element = document.querySelector('#inv-vis1');
    element.style.visibility = 'visible';

    element = document.querySelector('#inv-vis2');
    element.style.visibility = 'visible';
}

function hideElement() {
    element = document.querySelector('#bot_ant');
    element.style.visibility = 'hidden';
    
    element = document.querySelector('#inv-vis1');
    element.style.visibility = 'hidden';

    element = document.querySelector('#inv-vis2');
    element.style.visibility = 'hidden';
}

//!________________________________________________________________________________________

function preloadImages()
{
  var doc = document;

  if (doc.images)
  {
    if (!doc.imagesList)
    {
      doc.imagesList = new Array();
    }

    var j = doc.imagesList.length;
    var arguments = preloadImages.arguments;

    for (var i = 0; i < arguments.length; i++)
    {
      if (arguments[i].indexOf("#") != 0)
      {
        doc.imagesList[j] = new Image;
        doc.imagesList[j++].src = arguments[i];
      }
    }
  }
}
