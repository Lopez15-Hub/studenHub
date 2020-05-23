$(document).ready(function () {

    $('#list').hide();
    //toggle button text
    $('button').click(function () {
        $('span',this).toggle();
    });
    //toggle list
    $('button').click(function () {
        $('#list').toggle('fast');
    });
});