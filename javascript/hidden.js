/*$(document).ready(function () {

    $('#list').hide();
    //toggle button text
    $('button').click(function () {
        $('span',this).toggle();
    });
    //toggle list
    $('button').click(function () {
        $('#list').toggle('fast');
    });
});*/
//FUNCIÓN PARA ABRIR Y CERRAR EL MENÚ
$(document).ready(function () {

    $('#menu').hide();
    //toggle button text
    $('button').click(function () {
        $('span',this).toggle();
    });
    //toggle list
    $('button').click(function () {
        $('#menu').toggle('fast');
    });
});

function cerrar(){
    document.getElementById("menu").style="display:none";
    document.getElementById("vent").style="display:none";
    document.getElementById("caja").style="display:block";
 
}
function menClose(){
    document.getElementById("menu").style="display:none";
}

//FUNCIÓN PARA ABRIR POP UP


function abrirVent(){
    document.getElementById("caja").style="display:none";
    document.getElementById("vent").style="display:block";
}
