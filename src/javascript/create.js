boxNews();




function create(){
    document.getElementById("ventNot").style="display:block";
}
function off(){
 document.getElementById("ventNot").style="display:none";
}
function joinClass(){
    document.getElementById("tit").innerHTML="Unirse";
    document.getElementById("tit").style="text-align:center";
    document.getElementById("txt").style="text-align:center";
    //document.getElementById("txt").style="margin-left:36%";
    document.getElementById("txt").innerHTML="Ingresa el identificador del curso: ";
    document.getElementById("vent").setAttribute("class","col-md-12");
    document.getElementById("vent").style="border:solid";
    document.getElementById("caja").style="display:none";
    document.getElementById("vent").style="display:block";
    document.getElementById("vent").style="background-color: whitesmoke;position:absolute;";
    document.getElementById("btn").innerHTML="Unirse al curso ";
}

function cancel(){
    document.getElementById("menu").style="display:none";
    document.getElementById("vent").style="display:none";
    document.getElementById("caja").style="display:block";
 
}

function createClass(){
   document.getElementById("vent").setAttribute("class","sombra");
    document.getElementById("tit").innerHTML="Crear";
    document.getElementById("vent").style="border:solid";
    document.getElementById("vent").style="";
    document.getElementById("vent").style="";
    document.getElementById("tit").style="text-align:center";
    document.getElementById("txt").style="text-align:center";
    document.getElementById("vent").setAttribute("class","container col-md-12");
    document.getElementById("txt").innerHTML="Ingresa el nombre del curso: ";
    document.getElementById("caja").style="display:none";
    document.getElementById("vent").style="display:block";
    document.getElementById("vent").style="background-color: whitesmoke;position:absolute;";
    document.getElementsByTagName("body").style="overflow:hidden";
    document.getElementById("txt").innerHTML="Código de acceso: x34lop0 ";
    document.getElementById("btn").innerHTML="Crear Curso ";
}
function boxNews(){
    let nombre = "Ezequiel ";
    let apellido = "López ";
    let caja = document.getElementById("box");
    let p = document.createElement("p");
    p.innerHTML= nombre + apellido + "Acaba de subir nuevo material: ";
    caja.appendChild(p);
    let a= document.createElement("a");
    a.innerHTML="Introducción a POO";
    p.appendChild(a);
    a.setAttribute("href","#");
}   