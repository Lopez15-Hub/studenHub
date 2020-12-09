import jwt_decode from 'jwt-decode';

var token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluIiwiaWF0Ijo5MDA2MX0.t-MKc4uqzgsO75oEV45Fveq_ABJXec-MykndSQ2xDr4;

var decoded = jwt_decode(token);
var coded = 
console.log(decoded);
GetUser=token;

function saveReg(){ //EJECUTAR ENVÍO DE INFORMACIÓN
    //CONSTRUCTOR DE USUARIOS
    function GetUser(name,sirName,user,email,password,passRepeat,userType,terms){
      this.name=name;
      this.sirName=sirName;
      this.user=user;
      this.email=email;
      this.password=password;
      this.passRepeat=passRepeat;
      this.userType=userType;
      this.terms=terms;
    }
    //OBTENER VALORES DEL FORMULARIO
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("sirName").value;
    var nombreUsuario = document.getElementById("user").value;
    var email=document.getElementById("email").value;
    var contraseña=document.getElementById("password").value;
    var repetirContra=document.getElementById("passRepeat").value;
    var typoUsuario=document.getElementById("userType").value;
    var terminos=document.getElementById("terms").value;
    //ALMACENAR VALORES
    newUser= new GetUser(nombre,apellido,nombreUsuario,email,contraseña,repetirContra,typoUsuario,terminos);
    add();
  }
   
   saveUser = []; //ARRAY PARA ALMACENAR DATOS  
    function add() //Añade la información del formulario al objeto
    {
      saveUser.push(newUser); //plasma información al objeto
    }
    /*https://solidgeargroup.com/refresh-token-autenticacion-jwt-implementacion-nodejs/
    https://www.epochconverter.com/
    https://www.freeformatter.com/hmac-generator.html#ad-output
    https://www.w3schools.com/jsref/dom_obj_text.asp
    
    https://reactjsexample.com/tag/slider/
    https://solidgeargroup.com/refresh-token-autenticacion-jwt-implementacion-nodejs/
    https://developer.mozilla.org/es/docs/Web/Guide/HTML/Canvas_tutorial/Basic_animations


    https://programacion.net/articulo/como_crear_un_modal_a_pantalla_completa_responsive_con_bootstrap_1598
    https://reactjsexample.com/the-easiest-way-to-slide-react-routes/
    https://reactjsexample.com/tag/slider/*/