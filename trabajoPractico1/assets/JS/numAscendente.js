let num_1 = parseInt(prompt("Ingrese un numero: "));
let num_2 = parseInt(prompt("Ingrese un numero: "));
let num_3 = parseInt(prompt("Ingrese un numero: "));

if (num_1>num_2 && num_1>num_3){
    if (num_2>num_3){
        alert("El orden ascendente de los numeros es:" + num_3 + ', ' + num_2 + ', '+ num_1)
    }
    else{
        alert("El orden ascendente de los numeros es:" + num_2 + ', ' + num_3 + ', '+ num_1)
    }
}
else if (num_2>num_3){
    if (num_1>num_3){
        alert("El orden ascendente de los numeros es:" + num_3 + ', ' + num_1 + ', '+ num_2)
    }
    else{
        alert("El orden ascendente de los numeros es:" + num_1 + ', ' + num_3 + ', '+ num_2)
    }
}
else{
    if (num_1>num_2){
        alert("El orden ascendente de los numeros es:" + num_2 + ', ' + num_1 + ', '+ num_3)
    }
    else{
        alert("El orden ascendente de los numeros es:" + num_1 + ', ' + num_2 + ', '+ num_3)
    }
}