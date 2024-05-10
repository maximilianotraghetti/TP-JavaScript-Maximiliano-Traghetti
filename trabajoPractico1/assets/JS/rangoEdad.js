let edad = parseInt(prompt("Ingrese una edad menor a 120"));

if (edad>=0 && edad<=12){
    console.log("Es un niño")
}else if (edad>=13 && edad<=19){
    console.log("Es un Adolecente")
}else if (edad>=20 && edad<=59){
    console.log("Es un Adulto")
}else if (edad>=60 && edad<=120){
    console.log("Es un Adulto Mayor")
}