function premium() {
    document.write("Tu producto es premium"+"</br>"+"Envio gratis");
}

function estandar() {
    document.write("Tu producto es estandar");
}

function economico() {
    document.write("Tu producto es economico"+"</br>");
}

function precios() {
    var precio= parseFloat(prompt("Cual es el valor de tu producto: ","Costo"));
    var tipo;
    
    if (precio>=100) {
        tipo="Premium";

    }else if (precio>=50 && precio<=99.99) {
        tipo="Estandar";

    }else if (precio<50) {
        tipo="Economico";
    }

    if (tipo=="Premium" || tipo=="Estandar") {
        document.write("Disponible"+"</br>");

        if (tipo=="Premium") {
            premium();

        }else{
            estandar();

        }
    }else if (tipo=="Economico") {
        document.write("No disponible"+"</br>");

    }
}