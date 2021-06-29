const carrito = [];
let totalProductos = 0;
function agregarProducto(nombre,precio) {
const producto = {
    nombre: nombre,
    precio: precio
};

console.info('Agregado producto' + nombre + precio)
carrito.push(producto);

totalProductos ++; 
document.getElementById('total-productos').innerHTML = totalProductos;
}

function mostrarProductos(){
 const contenedorProductos  =  document.getElementById("contenedor-productos");

 let listado = '';
 carrito.forEach(function (elementoCarrito) {
     listado += '<li>' + elementoCarrito.nombre+ '' +  elementoCarrito.precio + '</li>';
    });

    contenedorProductos.innerHTML = ' <ul> ' + listado + ' </ul> ';
}