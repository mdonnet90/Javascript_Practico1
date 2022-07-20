var contador = 0;

while (contador != 5) {
    if ( contador == 0) {
        console.log(" Estamos por empezar a contar");
    }
        
        else if (contador == 1 || contador == 3) {
        console.log("Iteracion insignificante, no nos gustan los numero impar");
    }
    else {
        console.log("Iteracion Numero :" + contador);
    }
    contador = contador + 1;
    
}

console.log("Prueba con for")


for (contador = 0; contador != 5; contador++) {
    if (contador == 0) {
        console.log(" Estamos por empezar a contar revenge");
    }

    else if (contador == 1 || contador == 3) {
        console.log("Iteracion insignificante, no nos gustan los numero impar revenge");
    }
    else {
        console.log("Iteracion Revenge Numero :" + contador);
    }


}


// JavaScript source code
