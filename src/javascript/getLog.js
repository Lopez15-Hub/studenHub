
function login(){ //EJECUTAR ENVÍO DE INFORMACIÓN
  //CONSTRUCTOR DE USUARIOS
  function GetUser(email,password){
   
    this.email=email;
    this.password=password;
   
  }
  //OBTENER VALORES DEL FORMULARIO
 
  var email=document.getElementById("email").value;
  var contraseña=document.getElementById("password").value;
  //ALMACENAR VALORES
  getUser= new GetUser(email,contraseña);
  getLog();
}
 
 saveUser = []; //ARRAY PARA ALMACENAR DATOS  
  function getLog() //Añade la información del formulario al objeto
  {
    saveUser.push(getUser); //plasma información al objeto
  }
