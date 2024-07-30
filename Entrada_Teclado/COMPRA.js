var empresa= "***CODESI S.A de C.V.***";
var folio= prompt("Ingresa el folio: ","Folio");
var nombre= prompt("Ingresa el producto: ","Nombre del producto");
var piezas= parseInt(prompt("Ingresa las piezas: ","Numero de piezas"));
var precio= parseFloat(prompt("Ingresa el precio del producto: ","Precio de producto"));

var subtotal= piezas*precio;
var iva= subtotal*.16;
var total= subtotal+iva;

document.write(empresa + "<br/>");
document.write("El folio de tu compra es: "+ folio + "<br/>");
document.write("Producto: "+ nombre +"<br/>");
document.write("Piezas: "+ piezas + "<br/>");
document.write("Precio: "+ precio + "<br/>");
document.write("Subtotal: "+ subtotal + "<br/>");
document.write("Iva: "+ iva + "<br/>");
document.write("Total a pagar: "+total);