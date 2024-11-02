document.addEventListener("DOMContentLoaded", function() {
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
                <div class="col" style="cursor: pointer;">
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

//Desafiate: simula envio de formulario y lo muestra en las calificaciones
const form = document.getElementById("ratingForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Obtener los datos ingresados en el formulario
    const comentario = document.getElementById("comment-rating").value;
    const estrellas = document.querySelectorAll(".heart.checked").length; // Obtener la cantidad de corazones seleccionados (calificación)
    
    // Simulación de la publicación en la sección de calificaciones
    publicarCalificacion(comentario, estrellas);
});

function publicarCalificacion(comentario, estrellas) {
    const nombreUsuario = localStorage.getItem("username"); // Obtener el nombre del usuario desde localStorage

    const nuevaCalificacion = {
        user: nombreUsuario, // Nombre del usuario logueado
        dateTime: new Date().toISOString(), // Fecha y hora actual
        description: comentario,
        score: estrellas
    };

    // Publicar la nueva calificación en la sección de comentarios
    let calificacionesContainer = document.getElementById('comments');
    let reviewHTML = `
        <div class="review">
            <h5>${nuevaCalificacion.user}</h5>
            <div class="date">${new Date(nuevaCalificacion.dateTime).toLocaleDateString()}</div>
            <div class="rating">${'★'.repeat(nuevaCalificacion.score)}${'☆'.repeat(5 - nuevaCalificacion.score)}</div>
            <p>${nuevaCalificacion.description}</p>
        </div>
    `;
    calificacionesContainer.innerHTML += reviewHTML;

    // Limpiar el formulario después de enviar
    document.getElementById("ratingForm").reset();
    const hearts = document.querySelectorAll(".heart.checked");
    hearts.forEach(heart => heart.classList.remove("checked")); // Desmarcar los corazones
}
//fin :)

    //window.location.reload(); // Recargar la página para mostrar el nuevo producto



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



 document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.querySelector(".boton"); // Seleccionar botón "Comprar"
    buyButton.addEventListener("click", saveProductToLocalStorage);
});

function saveProductToLocalStorage() {
    // Obtener información del producto
    const productName = document.querySelector(".name").textContent;
    const productDescription = document.querySelector(".descripcion").textContent;
    const productPrice = document.querySelector(".precio").textContent;
    const productImage = document.querySelector("#imagen-principal").src;
    const prodID = localStorage.getItem("prodID"); // Obtener el ID de producto almacenado en localStorage

    // Crear un objeto para almacenar en localStorage
    const product = {
        id: prodID,
        name: productName,
        description: productDescription,
        price: productPrice,
        image: productImage
    };

    // Obtener la lista de productos existentes en localStorage
    let existingProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];

    // Verificar si el producto ya existe en la lista
    const productExists = existingProducts.some(existingProduct => existingProduct.id === product.id);

    if (productExists) {
        // Si el producto ya existe, no hacer nada
        alert("El producto ya está en el carrito.");
    } else {
        // Agregar el nuevo producto a la lista
        existingProducts.push(product);
        
        // Guardar la lista actualizada de productos en localStorage
        localStorage.setItem("selectedProducts", JSON.stringify(existingProducts));

        // Redireccionar a cart.html
        window.location.href = "cart.html";
    }
}
 

