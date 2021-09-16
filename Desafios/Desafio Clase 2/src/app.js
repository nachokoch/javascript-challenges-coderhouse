let nombre = prompt(`Cual es tu nombre?`)

let numero = prompt (`Hola ${nombre}! Decime un numero entre 1 y 300`)
let numeroParseado = parseInt(numero)

if(numeroParseado >= 1 && numeroParseado <= 300){
    alert(`Muy bien ${nombre}, podes seguir instrucciones basicas!`)
}else{
    alert(`Uhhhh ${nombre}, estas fuera de rango! Proba nuevamente.`)
};



