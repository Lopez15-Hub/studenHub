
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
