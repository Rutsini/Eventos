

let boton1 = document.getElementById("ingresar");
boton1.addEventListener("click", ingresarClick);
function ingresarClick(){
  nombre()
};

function nombre(){
  let nombre = prompt ("Ingrese su nombre");

  let nombrePersona = document.createElement("h1");
nombrePersona.innerHTML = "Nombre : " + nombre;
document.body.append(nombrePersona);
apellido()
};

function apellido(){
  let apellido = prompt ("Ingrese su apellido");

  let apellidoPersona = document.createElement("h2");
apellidoPersona.innerHTML = "Apellido : " + apellido;
document.body.append(apellidoPersona);
edad()
};

function edad(){
  let edad = prompt ("Ingrese su edad");

  let edadPersona = document.createElement("h3");
edadPersona.innerHTML = "Edad : " + edad;
document.body.append(edadPersona);
altura()
};

function altura(){
  let altura= prompt ("Ingrese su altura");

  let alturaPersona = document.createElement("h4");
alturaPersona.innerHTML = "Altura : " + altura;
document.body.append(alturaPersona);
};



let boton2 = document.getElementById("aceptar");
boton2.addEventListener("click", respuestaClick);
function respuestaClick(){
  nombre()
};




