let variablesCarrito = (producto = " ", precioTotal = 0, cantidadTotal = 0, agregarProducto = false, precioTotalAcumulativo = 0, cantidadValidada = 0, cantidadTotalProducto = 0, precioTotalProducto = 0);


const carrito = [
    {producto: "Gorra", precio: 20000},
    {producto: "Remera", precio: 30000},
    {producto: "Ambas", precio: 50000}
];

let mensajeCatalogo = "Nuestro catalogo es: \n";    // Mensaje que muestra el producto con su respectivo precio
carrito.forEach((item) => {
    mensajeCatalogo += item.producto + ": " + item.precio + "$" + "\n"
})

const nombresProductos = carrito.map((productosNombres) => productosNombres.producto);  // Nombres de los productos
const nombresProductosMinusc = carrito.map((productosNombres) => productosNombres.producto);  // Nombres de los productos convertidos a minuscula
const precioProductos = carrito.map((productosPrecio) => productosPrecio.precio);  // Precio de los productos

const productosAgregadosPorElUsario = [             // Aarray que guarda lo que compra el usuario
    {cantidadDelUsuario: 0, productoDelUsario: "", precioDelUsario: 0},
    {cantidadDelUsuario: 0, productoDelUsario: "", precioDelUsario: 0},
    {cantidadDelUsuario: 0, productoDelUsario: "", precioDelUsario: 0}
];



let cantidadCorrecta = (cantidadTotal) => {                   // Valida si la cantidad que ingresa el usuario es correcta
    while (Number.isNaN(cantidadTotal) || cantidadTotal === 0 || cantidadTotal < 0) {
        if (cantidadTotal !== 0) {
            alert("Debes agregar una cantidad valida.");
        }
        else {
            alert("Debes agregar una cantidad valida.");
        }
        cantidadTotal = parseInt(prompt("Cantidad a comprar: "));
    }
    return cantidadTotal;
}

function cantidadTotalDeProducto () {        // Por si el usuario agrega mas de un producto del mismo tipo luego de haberle preguntado si queria agregar un nuevo producto
    for (b = 0; b <= cantidadValidada; b++) {
        cantidadTotalProducto = 0;
        cantidadTotalProducto += cantidadValidada;
    }
    return cantidadTotalProducto;
}                                  

function precioTotalDeProducto () {             // Calcula el precio total de un mismo producto
    for (b = 0; b <= cantidadValidada; b++) {
        precioTotalProducto = 0;
        precioTotalProducto += precioTotal;
    }
    return precioTotalProducto;
}                                  

function agregarValoresDeUsarioAUnArray () {                  // Agrega los valores que ingresa el usuario al array creado anteriormente
        for (i = 0; i <= 2; i++) {
            if (producto === nombresProductosMinusc[i]) {
            productosAgregadosPorElUsario[i].productoDelUsario = producto;
            productosAgregadosPorElUsario[i].cantidadDelUsuario += cantidadTotalProducto;
            productosAgregadosPorElUsario[i].precioDelUsario += precioTotalProducto;
        }
    }
}


function convertirNombreEnMinusculas(nombresProductosMinusc) {
    for (let d = 0; d < nombresProductosMinusc.length; d++) {
        nombresProductosMinusc[d] = nombresProductosMinusc[d].toLowerCase()
    }
    return nombresProductosMinusc
}




do {
    alert(mensajeCatalogo)
    producto = prompt("Que producto desea comprar? " + nombresProductos.join("-"));
    producto = producto.toLowerCase(producto);
    convertirNombreEnMinusculas(nombresProductosMinusc);
    if (nombresProductosMinusc.includes(producto)) {
        switch (producto) {
            case nombresProductosMinusc[0]:
                cantidadTotal = parseInt(prompt("Cantidad a comprar: "));
                cantidadValidada =  cantidadCorrecta(cantidadTotal);
                precioTotal = precioProductos[0] * cantidadValidada;
                cantidadTotalDeProducto()
                precioTotalDeProducto()
                break;
            case nombresProductosMinusc[1]:
                cantidadTotal = parseInt(prompt("Cantidad a comprar: "));
                cantidadValidada =  cantidadCorrecta(cantidadTotal);
                precioTotal = precioProductos[1] * cantidadValidada;
                cantidadTotalDeProducto()
                precioTotalDeProducto()
                break;
            case nombresProductosMinusc[2]:
                cantidadTotal = parseInt(prompt("Cantidad a comprar: "));
                cantidadValidada =  cantidadCorrecta(cantidadTotal);
                precioTotal = precioProductos[2] * cantidadValidada;
                cantidadTotalDeProducto()
                precioTotalDeProducto()
                break;
        }
        agregarValoresDeUsarioAUnArray();
    }
    else{
        alert("Producto no disponible!");
    }
    

    agregarProducto = confirm("Desea agregar otro producto?");
} while (agregarProducto);


let finalizarCompra = confirm("Desea finalizar su compra?");


if (finalizarCompra){
        const eliminarObjetoVacioDelArray = (cantidadDelUsuario) => {          // Elimina los objetos vacios de un array. Asi en el mensaje de resumen de compra, solo se muestra lo que compro.         
            productosAgregadosPorElUsario.forEach((objeto, index) => {
                if (objeto.cantidadDelUsuario == cantidadDelUsuario) {
                    productosAgregadosPorElUsario.splice(index, 1);
                }
            })
        }
        eliminarObjetoVacioDelArray(0);
        eliminarObjetoVacioDelArray(0);

        let calculoPrecioTotal = 0;                                                 // Calcula el precio total de TODOS los productos
        productosAgregadosPorElUsario.forEach((precios) => {
        calculoPrecioTotal += precios.precioDelUsario
        })
        
        let calculoCantidadTotal = 0;                                                 // Calcula la cantidad total de TODOS los productos
        productosAgregadosPorElUsario.forEach((cantidades) => {
            calculoCantidadTotal += cantidades.cantidadDelUsuario
        })

        let mensajeDespedida = "Resumen de compra: \n";
        productosAgregadosPorElUsario.forEach((itemsUsuario) => {                // Un mensaje con el resumen de compra del ususario
            mensajeDespedida += itemsUsuario.cantidadDelUsuario + " " + itemsUsuario.productoDelUsario + ": " + itemsUsuario.precioDelUsario + "$" + "\n";
        }) 
         const eliminarAlgoDelCarrito = confirm(mensajeDespedida + "En total serian " + calculoCantidadTotal + " productos = " + calculoPrecioTotal + "$" + "\nDesea eliminar algo del carrito?")  // Esto de que elimine algo del carrito lo hare para la proxima entrega jajaja
    }
else{
    alert("Aqui nos despedimos.")
}



