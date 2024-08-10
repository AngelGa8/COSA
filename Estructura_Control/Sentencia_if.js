//Ejercicio: Pedirle al usuario que ingrese su edad y con base en este decirle si puede tramitar o no su licencia de manejo

function sentanciaSencilla(){
    var edad= parseInt(prompt("Ingresa tu edad: ", "Edad"));

    if(edad>=18){
        document.write("Puedes tramitar tu licencia");
    }else{
        document.write("No puedes tramitar tu licencia");
    }

}
//Ejercicio: Pedirle al usuario que dependiendo su estado civil ponga una letra y con ella decirle que tipo de porcentaje de apoyo economico se le dara

function sentanciaMultiple(){
    var estadoCivil = prompt("A.Soltera\nB.Casada\nC.Viuda\nD.Divorciada","estado civil");
    var min=estadoCivil.toUpperCase();
    
    if (min=="C" || min=="D") {
        document.write("Recibiras el 100% de apoyo economico");
    }else if(min=="A"){
        document.write("Recibiras el 50% de apoyo economico");
    }else{
        document.write("Recibiras el 10% de apoyo economico");
    }
}
//Ejercicio: Pedirle al usuario que ingrese el numero de terminacion de su placa y con base en este decirle que dia no circula

function sentanciaAnidad(){
    var placa = parseInt(prompt("Ingresa el numero de terminacion de tu placa: ","Ter. Placa"));

    if (placa>=0 && placa<=9){
        if (placa==5 || placa==6){
            document.write("Tu auto no circula el dia Lunes");
        }else if (placa==7 || placa==8){
            document.write("Tu auto no circula el dia Martes");
        }else if (placa==3 || placa==4){
            document.write("Tu auto no circula el dia Miercoles");
        }else if (placa==1 || placa==2){
            document.write("Tu auto no circula el dia Jueves");
        }else{
            document.write("Tu auto no circula el dia Viernes");
        }
    }else{
        document.write("El numero ingresado es incorrecto");
    }
}

