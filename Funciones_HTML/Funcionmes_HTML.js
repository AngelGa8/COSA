/*function areaTriangulo(){
    
    var base = 5;
    var altura = 6;

    var areaT = base * altura / 2;

    document.write("Base:" + base + "<br/>");
    document.write("Altura:" + altura + "<br/>");
    document.write("Area Triangulo:" + areaT + "<br/>");
}

function areaCuadrado(){

    var lado = 4;

    var areaC = lado * lado;

    document.write("Lado:" + lado + "<br/>");
    document.write("Area Cuadrado:" + areaC + "<br/>");
}*/
//variables globales
var base, altura;

function datos(){
    base = 5;
    altura = 6;

    imprimir();
}

function imprimir(){
    //variable local
    var areaT = base * altura / 2;

    document.write("Base:" + base + "<br/>");
    document.write("Altura:" + altura + "<br/>");
    document.write("Area Triangulo:" + areaT + "<br/>");
}