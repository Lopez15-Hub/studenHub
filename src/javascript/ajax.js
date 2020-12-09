var peticion;
function xhrRequest ()
{
    if(window.XMLHttpRequest){
        peticion = new xhrRequest();

    }else{
        peticion = new ActiveXObject("Microsoft.XMLHTTP");
    }
}
function petrealize (url,metodo,funcion)
{
    peticion.onreadystatechange = funcion;
    peticion.open(metodo,url,true);
    peticion.send(null);
}
function loadPage(){
    xhrRequest ();
    petrealize('tablon.html','GET',accionador);   
}
function accionador ()
{
    if(peticion.readyState==4){
        if(peticion.status==200){
            document.write(peticion.loadPage);
        }
    }
}
window.onload = loadPage;