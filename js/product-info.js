document.addEventListener("DOMContentLoaded", function() {
<<<<<<< Updated upstream
    const productID = localStorage.getItem("prodID"); // Obtener el ID de producto almacenado en localStorage
    const URL_info_productos = `https://japceibal.github.io/emercado-api/products/${productID}.json`; // URL del producto seleccionado

    // Obtener los datos del producto
    obtenerProducto(productID);

    // Obtener y mostrar las calificaciones del producto
    obtenerYMostrarCalificaciones(productID);
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

=======
    const URL_info_productos = "https://japceibal.github.io/emercado-api/products/[PRODUCT_ID].json"; // URL base para después obtener los productos de una categoría específica
    const productID = localStorage.getItem("productID"); // Obtener el ID de categoría almacenado en localStorage
let urlParams = new
URLSearchParams(window.location.search);
let productID = urlParams.get("id")};
        
function obtenerProductos(productID) { // Función para obtener productos de una categoría específica
    const URL_categoria = `${URL_info_productos}${productID}.json`;
    fetch (URL_categoria)
     .then (response => response.json())
     .then(data => {
        console.log(`Productos de la categoría ${productID}:`, data); // Mostrar los productos obtenidos en la consola
        productos = data.products; // Asigna los productos a la variable global
        mostrarProductos(productos); // Llamar a la función para mostrar los productos en la página
>>>>>>> Stashed changes
    })
    .catch(error => {
        console.error("Error al obtener el producto", error);
    });
}

<<<<<<< Updated upstream
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

    window.location.href = "product-info.html"; // Redirigir a la misma página para recargar con el nuevo producto
}

// Función para obtener y mostrar las calificaciones del producto
function obtenerYMostrarCalificaciones(productID) {
    const URL_calificaciones = `https://japceibal.github.io/emercado-api/products_comments/${productID}.json`;
    
    fetch(URL_calificaciones)
    .then(response => response.json())
    .then(data => {
        console.log(`Calificaciones del producto ${productID}:`, data); // Para verificar que se obtienen las calificaciones
        let calificacionesContainer = document.getElementById('comments'); // Contenedor de calificaciones
        calificacionesContainer.innerHTML = ''; // Limpiar contenedor antes de agregar nuevas calificaciones
        
        // Mostrar cada comentario
        data.forEach(review => {
            let reviewHTML = `
                <div class="review">
                    <h5>${review.user}</h5>
                    <div class="date">${new Date(review.dateTime).toLocaleDateString()}</div>
                    <div class="rating">${'★'.repeat(review.score)}${'☆'.repeat(5 - review.score)}</div>
                    <p>${review.description}</p>
                </div>
            `;
            calificacionesContainer.innerHTML += reviewHTML;
        });
    })
    .catch(error => {
        console.error("Error al obtener las calificaciones", error);
    });
}
=======
    window.location.reload(); // Recargar la página para mostrar el nuevo producto
}


//Solicitud pintar-despintar estrellas
 const hearts = document.querySelectorAll(".heart")

 hearts.forEach (function (heart, index){
    heart.addEventListener('click',function(){
    for (let i=0; i<=index; i++){
        hearts[i].classList.add('checked');
    }
    for (let i=index+1; i<hearts.length; i++) {
        hearts[i].classList.remove('checked')
    }
    
})
 })
=======
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
 }
// Nueva función para obtener y mostrar las calificaciones
function obtenerYMostrarCalificaciones(productID) {
    const DATA_URL = `https://japceibal.github.io/emercado-api/products_comments/${productID}.json`;
    fetch(DATA_URL)
        .then(response => response.json())
        .then(data => {
            const commentsContainer = document.getElementById('comments');
            data.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.classList.add('review');
                reviewElement.innerHTML = `
                    <h3>${review.user}</h3>
                    <div class="date">${new Date(review.dateTime).toLocaleDateString()}</div>
                    <div class="rating">${'★'.repeat(review.score)}${'☆'.repeat(5 - review.score)}</div>
                        <p>${review.description}</p>
                    `;
                    commentsContainer.appendChild(reviewElement);
                });
            })
            .catch(error => console.error('Error fetching reviews:', error));
    }
    // Llamar a la función para obtener y mostrar las calificaciones
    obtenerYMostrarCalificaciones(productId);
})
>>>>>>> Stashed changes
