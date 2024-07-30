var plantel = "Grupo Codesi";
var alumno = prompt("Ingresa el nombre del alumno :", "nombre del alumno");

//parseInt()
var calificacion1 = parseFloat(prompt("Ingresa la primera calificación de "+ alumno + ": ", "calificación 1"));
var calificacion2 = parseFloat(prompt("Ingresa la primera calificación de "+ alumno + ": ", "calificación 2"));
var calificacion3 = parseFloat(prompt("Ingresa la primera calificación de "+ alumno + ": ", "calificación 3"));

//+, -, *, /, %
var promedio = (calificacion1 + calificacion2 + calificacion3)/3; 

document.write(plantel + "<br/>");
document.write("Alumno: " + alumno + "<br/>");
document.write("Calificación 1: " + calificacion1 + "<br/>");
document.write("Calificación 2: " + calificacion2 + "<br/>");
document.write("Calificación 3: " + calificacion3 + "<br/>");
document.write("Promedio: " + promedio);