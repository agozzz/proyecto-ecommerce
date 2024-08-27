document.addEventListener("DOMContentLoaded", function() {
    const url_autos = 'https://japceibal.github.io/emercado-api/cats_products/101.json';
 // Función para obtener los productos de la categoría autos(101)
    function obtenerProductos(){
    fetch(url_autos)
    .then(response => response.json())
    .then(data => mostrarProductos(data.products))
    .catch(error => console.error('Error al mostrar los autos: ', error));
}
 // Función para mostrar los productos en el contenedor
function mostrarProductos(productos) {
    const contenedor = document.getElementById("autos-container");
    contenedor.innerHTML = ""; // Limpiar el contenido previo

    productos.forEach(producto => {
        // Estructura de la tarjeta
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${producto.image}" alt="${producto.name}">
            <div class="card-body">
                <div class="card-sup">
                    <h5 class="card-title">${producto.name}</h5>
                    <p class="card-precio">$${producto.cost}</p>
                </div>
                <div class="card-inf">
                    <p class="card-text">${producto.description}</p>
                    <p class="card-sold">${producto.soldCount} vendidos</p>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// Llamada a la función para obtener productos al cargar la página
obtenerProductos();
});