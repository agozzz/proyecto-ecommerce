document.addEventListener("DOMContentLoaded", function() {
    const productID = localStorage.getItem("prodID"); // Obtener el ID de producto almacenado en localStorage
    const URL_info_productos = `https://japceibal.github.io/emercado-api/products/${productID}.json`; // URL del producto seleccionado

    // Obtener los datos del producto
    obtenerProducto(productID);
});

function obtenerProducto(productID) {
    const URL_info_productos = `https://japceibal.github.io/emercado-api/products/${productID}.json`;
    
    fetch(URL_info_productos)
    .then(response => response.json())
    .then(data => {
        let producto = data;
        console.log(`Producto seleccionado:`, producto); // Mostrar los productos obtenidos en la consola
        mostrarProducto(producto); // Mostrar los detalles del producto
    })
    .catch(error => {
        console.error("Error al obtener el producto", error);
    });
}

function mostrarProducto(producto) {
    // Mostrar la imagen principal
    document.getElementById('imagen-principal').src = producto.images[0];

    // Mostrar el resto de las imágenes
    let imagenesChicas = document.querySelectorAll(".imagenes-chicas img");
    for (let i = 0; i < imagenesChicas.length; i++) {
        imagenesChicas[i].src = producto.images[i];
    }

    // Mostrar otros datos del producto
    document.querySelector('.name').textContent = producto.name;
    document.querySelector('.descripcion').textContent = producto.description;
    document.querySelector('.precio').textContent = `Precio: $${producto.cost}`;
    document.querySelector('.vendidos').textContent = `${producto.soldCount} vendidos`;    
}

// Función para seleccionar imagen pequeña y mostrarla como imagen principal
function seleccionarImagen(imagen) {
    let imagenPrincipal = document.getElementById('imagen-principal');
    imagenPrincipal.src = imagen.src;
}
