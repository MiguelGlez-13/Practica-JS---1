//CONDICIONALES y VARIABLES
/*
let estudiando = false;

if (estudiando == true) {
    console.log("estoy estudiando")
}

if (!estudiando) {
    console.log("no estoy estudiando")
}

if (estudiando === true) {
    console.log("estoy estudiando")
}
if (estudiando !== false) {
    console.log("no estoy estudiando")
} else {
    console.log("estoy estudiando")
}
*/

/*
let hora = 8
if (hora <= 10){
    console.log("Estoy durmiendo")
}else
    if (hora>10 && hora<=18) {
    console.log("no hago na")
    }else
        if (hora>18 || hora<=21) {
        console.log("estoy paseando")
        }   
*/

/*
let edad1 = 60
let mensaje;

switch (edad1) {
    case 10:
        console.log("estás en primaria")
        break;
    case 20:
        console.log("estás en la uni")
        break;
    case 30:
        console.log("estás viajando")
        break;
    default:
        console.log("mueveté")
}
*/

//otra forma

/*
let edad2 = 30
let mensaje;

switch (edad2) {
    case 10:
        mensaje = "estás en primaria"
        break;
    case 20:
        mensaje = "estás en la uni"
        break;
    case 30:
        mensaje = "estás viajando"
        break;
    default:
       mensaje ="mueveté"
}
console.log(mensaje);
*/

//BUCLES
/*
sumando + 1
for (let index1 = 0; index1 <= 10; index1++){
    console.log("ejecuta", index1)
}
*/
/*
Se puede escribir "i", en vez de index
for (let i = 0; index <= 10; i++){
    console.log("ejecuta", index)
}
*/

//sumando +5 hasta el 100
/*
for (let index1 = 0; index1 <= 100; index1 +=5) {
    console.log("ejecuta", index1)
}
*/

// otras formas: +=5 o i = i + 5

//ARRAY´s
//length realiza la sumatoria de la variable

/*
let verduras = ["tomate","pepino","zanahoria","lechuga","alcachofa"]
    console.log(verduras.length)

for (let i = 0; i < verduras.length; i++){
    console.log("posicion " + i + ":" + verduras [i])
}
*/


//Uso de FOR, con una constante "const"
/*
let verduras = ["tomate", "pepino", "zanahoria", "lechuga", "alcachofa"]
let frutas =["fresa", "manzana", "mandarina", "melón","pomelo"]
for (const verdura of verduras) {
    console.log("verdura: " + verdura)
}
for (const fruta of frutas) {
    console.log("fruta: " + fruta)
}
*/

//forEach extra uno a uno --- por cada uno muestrame uno

/*let verduras = ["tomate", "pepino", "zanahoria", "lechug", "alcachofa"]
verduras.forEach( (verdura, i) => {
    console.log("posicion " + i, verdura)
})
*/

//Ejercicios:

//Precio medio.
/*
var p1 = 3;
var p2 = 5;
var p3 = 13;
var calculo = (p1 + p2 + p3) / 3;
console.log("precio medio "+ calculo)
*/

//IVA
/*
let precio = 13
console.log(precio * 1.21)
*/

//Nombre y Apellido
/*
let nombres = "Pedro Miguel"
let apellidos = "González Méndez"
console.log(nombres+" "+apellidos)
*/

//Platos.
/*
let sillas =["silla 1", "silla 2", "silla 3", "silla 4","plato 5"]
sillas.forEach((silla, posicion)=>{
    console.log(silla  + "hay un plato")
})
*/

//Contraseña
/*
let pass1 = 012345
var pass2= 01235
if (pass2 == pass1) {
    console.log("clave correcta")
} else if (pass2 !== pass1) {
    console.log("clave erronea")
}
*/

//Solicitud de clave y verificacion con sms

let pass1 = 012345
var pass2 = 012345 //este valor se realiza por el usuario con el comando "prompt"
let smsident = 5656
var smssent = 5656 //este valor se realiza por el usuario con el comando "prompt"

if (pass2 !== pass1) {
    console.log("Clave de acceso erronea. Introduce nuevamente la clave.")
    end
} else 
    if (pass2 === pass1) {
        console.log("Clave correcta... Verificacion por SMS.... Introduzca el código de control SMS.")
    }
        if (smssent !== smsident) {
            console.log("Código de control SMS erroneo. Necesario volver a realizar login.")
        } else
            if (smsident === smssent) {
                console.log("Código de control SMS correcto. Acceso al servicio.")
            }


/*
let pass1 = 012345
let mensaje1;
switch (pass1) {
    default:
        console.log("Clave de acceso erronea. Introduce nuevamente la clave")
        end;
    case 012345:
        console.log("Clave correcta... Verificacion por SMS.... Introduzca la clave SMS.")
}
let smsident = 5656
let mensaje2;
switch (smsident) {
    default:
        console.log("Clave SMS erronea")
        break;
    case 5656:
        console.log("Clave SMS correcta")
}
*/