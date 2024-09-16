document.addEventListener("DOMContentLoaded", function() {
    const URL_info_productos = "https://japceibal.github.io/emercado-api/products/[PRODUCT_ID].json"; // URL base para después obtener los productos de una categoría específica
    const productId = localStorage.getItem("prodID"); // Obtener el ID de categoría almacenado en localStorage
})
let urlParams = new
URLSearchParams(window.location.search);
let productId = urlParams.get("id");
        
function obtenerProductos(productID) { // Función para obtener productos de una categoría específica
    const URL_categoria = `${URL_info_productos}${productID}.json`;
    fetch (URL_categoria)
     .then (response => response.json())
     .then(data => {
        console.log(`Productos de la categoría ${productID}:`, data); // Mostrar los productos obtenidos en la consola
        productos = data.products; // Asigna los productos a la variable global
        mostrarProductos(productos); // Llamar a la función para mostrar los productos en la página
    })
     .catch (error =>{console.error("Error al obtener producto", error)})
}

 function mostrarProducto(productID){
    document.querySelector('.descripcion').textContent = producto.descripcion;
    document.querySelector('.precio').textContent = 'Precio: $${producto.precio}';
    document.querySelector('.vendidos').textContent = '${producto.vendidos} vendidos';
 
    let imageneschicas = document.querySelectorAll(".imagenes-chicas img")
    imageneschicas[0].src = producto.imagenes [0];
    imageneschicas[1].src = producto.imagenes [1];
    imageneschicas[2].src = producto.imagenes [2];
 
    function seleccionarProducto(id) {
        localStorage.setItem('productID', id);
        window.location.href = 'product-info.html';
 }}