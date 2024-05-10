let primerTrimestre = parseFloat(prompt("Ingrese una nota: "));
let segundoTrimestre = parseInt(prompt("Ingrese una nota: "));
let tercerTrimestre = parseInt(prompt("Ingrese una nota: "));
let promedio = (primerTrimestre+segundoTrimestre+tercerTrimestre)/3;

if(isNaN(primerTrimestre)|| isNaN(segundoTrimestre)|| isNaN(tercerTrimestre)){
    console.log("Ingrese un numero valido")
}
else if (primerTrimestre <0 || segundoTrimestre<0 || tercerTrimestre<0){
    console.log("Nota no valida.")
}
else if (primerTrimestre>10 || segundoTrimestre>10 || tercerTrimestre>10){
    console.log("No puede ser mayor de 10")
    
} else{ 
if (promedio>=1 && promedio<=3){
    alert("Nota Insuficiente")
}
else if (promedio>=4 && promedio<=5){
    alert("Nota Regular")
}
else if (promedio>=6 && promedio<=7){
    alert("Nota Buena")
}
else if (promedio>=8 && promedio<=9){
    alert("Nota Muy Buena")
}
else{
    alert("Nota Sobresaliente")
}
}