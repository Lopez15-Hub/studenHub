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
}

