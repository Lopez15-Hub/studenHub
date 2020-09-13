
function scrollOff(){  
  let head = document.getElementById("titTab");
  let foot = document.getElementsByTagName("footer");
if(navigator.userAgent.match(Android/i)){
   
    window.scrollX.getElementById("btnMen").off;
    window.scrollY.getElementById("btnMen").off;
    
    head.setAttribute("hidden");
    foot.setAttribute("hidden");
}
}//fin programa


//onclick= pf('statusdialog').show()


document.getElementById("prof").style="display:block;margin-left:5%";
document.getElementById("saludo").style="display:block;margin-top:9%;margin-left:10%";
document.getElementById("state").style="margin-top:10%;margin-left:34%;display:inline-flex";

function menOff(){
}
function abrirMen()
 
{
 var menu = document.getElementById("menu").style="display:block";
 document.getElementById("log").style="margin-left:auto";
 menu.addEventListener("click",abrirMen,true);

}




 /*if(document.getElementById("btnMen").onclick)
  {
    document.getElementById("list").style="display:block";
    document.getElementById("head").style="display:none";
    document.getElementById("boxNot").style="display:none";
    document.getElementById("clasf").setAttribute("class=sombra");
  }*/
  
