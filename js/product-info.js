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
        mostrarProductosRelacionados(producto.relatedProducts); // Mostrar productos relacionados

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

// Mostrar los productos relacionados
function mostrarProductosRelacionados(relatedProducts) {
    console.log("Productos relacionados:", relatedProducts); // Para verificar qué productos llegan
    let productosRelacionadosContainer = document.getElementById('productos-relacionados');
    productosRelacionadosContainer.innerHTML = '';

    // Mostrar todos los productos relacionados que se devuelven desde la API
    if (relatedProducts && relatedProducts.length > 0) {
        relatedProducts.forEach(product => {
            let productoHTML = `
                <div class="col">
                    <div class="card h-100 text-center custom-card cursor-active" onclick="actualizarProducto(${product.id})">
                        <img class="card-img-top img-thumbnail" src="${product.image}" alt="Imagen de ${product.name}" style="height: 150px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                        </div>
                    </div>
                </div>
            `;
            productosRelacionadosContainer.innerHTML += productoHTML;
        });
    } else {
        console.log("No hay productos relacionados.");
    }
}

// Actualizar la página con el nuevo producto seleccionado
function actualizarProducto(productID) {
    localStorage.setItem("prodID", productID); // Guardar el nuevo ID de producto en localStorage
    window.location.reload(); // Recargar la página para mostrar el nuevo producto
}
