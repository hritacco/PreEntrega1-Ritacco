function calcularIMC (peso, altura){
    return peso/ (altura*altura);
    }

alert ("Hola! este es un pequeño programa para calcular tu indice de masa corporal (IMC)");

let peso = prompt ("Cual es tu peso en kilogramos (KG)?: ");
//Ei el dato no es numerico sigo preguntando
while (isNaN(peso)){
    peso = prompt ("El valor ingresado no es correcto, ingrese su peso en KG: ");
    }

let altura = prompt ("Cual es tu altura en metros (m)?: ");
//Si el dato no es numerico sigo preguntando
while (isNaN(altura)){
    altura = prompt ("El valor ingresado no es correcto, ingrese su altura en metros: ");
    }

//Le paso los valores a una funcion y almaceno el resultado en una variable para hacer las comparaciones.
imc = calcularIMC(peso, altura);

if (imc<=18.5){
    alert ("Tu indice de masa corporal es "+imc+"\nTenes bajo peso!!");
} else if (imc < 18.5 && imc < 25){
    alert(`Tu indice de masa corporal es ${imc} \nTu peso es normal!`);
} else if (imc <=25 && imc<30){
    alert ("Tu indice de masa corporal es "+imc+"\nTenes sobrepeso!");
} else { alert ("Tu indice de masa corporal es "+imc+"\nTenes obesidad!");}
