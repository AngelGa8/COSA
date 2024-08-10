/*Juego:
    1.Pedir al usuario un numero entero de 1 al 10.
    2.evaluar el numero del usuario:
        .si no esta entre 1 y 10, imprimir: "El numero ingresado debe estar entre 1 y 10"
        .de lo contrario:
            3.generar un numero entero aleatorio entre 1 y 10.
            4.evaluar ambos numeros:
                .si son iguales, imprimir: numUsuario - Ganaste - numSistema
                .de lo contrario, imprimir: numUsuario - Perdiste - numSistema*/

function juego(){
    var num = parseInt(prompt("Dame un numero entre el 1 al 10","Numero"));
    
    if (num<1 || num>10){
        document.write("El numero ingresado debe estar entre 1 y 10");
        
    }else{
        var ale= Math.floor(Math.random() * 10);
        if (num==ale){
            document.write(num+"- Ganaste -"+ale);
        }else{
            document.write(num+"- Perdiste -"+ale);
        }
    }
}