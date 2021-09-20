var productos = [];

function Product(codigo,nombre,precio){
    this.codigo = codigo,
    this.nombre = nombre,
    this.precio = precio
}

function addProductArray(){

    var codigo = document.getElementById("idCodigo").value;
    var nombre = document.getElementById("idNombre").value;
    var precio = document.getElementById("idPrecio").value;

    var product = new Product(codigo,nombre,precio);

    productos.push(product);

}

function populateTable(){

    debugger;

    var scriptTable = "";

    for (let index = 0; index < productos.length; index++) {
        scriptTable += "<tr>";
        scriptTable += "<td>" + productos[index].codigo + "</td>" ;
        scriptTable += "<td>" + productos[index].nombre + "</td>" ;
        scriptTable += "<td>" + productos[index].precio + "</td>" ;
        scriptTable += "</tr>";
    }

    document.getElementById("idTableBody").innerHTML = scriptTable

}


function validateFields(){


    if (document.getElementById("idCodigo").value == "") {
        alert("El campo CODIGO no debe quedar vacío");
        return false;
    }

    if (document.getElementById("idNombre").value == "") {
        alert("El campo NOMBRE no debe quedar vacío");
        return false;
    }

    if (document.getElementById("idPrecio").value == "") {
        alert("El campo PRECIO no debe quedar vacío");
        return false;
    }

}

function cleanControls(){

    document.getElementById("idCodigo").value = "";
    document.getElementById("idNombre").value = "";
    document.getElementById("idPrecio").value = "";

}


function addProduct(){

    // Validar campos

    if (validateFields() == false){
        return false;
    }

    // Agregamos el producto a un arreglo

    addProductArray();


    // Poblamos la tabla

    populateTable();


    // Limpiamos los campos
    cleanControls();


}