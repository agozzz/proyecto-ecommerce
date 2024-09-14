document.addEventListener("DOMContentLoaded", function() {

    const URL_base_productos = "https://japceibal.github.io/emercado-api/cats_products/"; // URL base para después obtener los productos de una categoría específica
    const categoriaId = localStorage.getItem("catID"); // Obtener el ID de categoría almacenado en localStorage
    let productos = []; // Variable global para almacenar los productos

   if (categoriaId) { // Verificar si se ha recuperado un ID de categoría válido
        
        function obtenerProductos(categoriaId) { // Función para obtener productos de una categoría específica
            const URL_categoria = `${URL_base_productos}${categoriaId}.json`; // Construir la URL para obtener los productos de la categoría seleccionada
            
            
            fetch(URL_categoria) // Solicitud fetch para obtener los datos de la categoría
                .then(response => response.json())
                .then(data => {
                    console.log(`Productos de la categoría ${categoriaId}:`, data); // Mostrar los productos obtenidos en la consola
                    productos = data.products; // Asigna los productos a la variable global
                    mostrarProductos(productos); // Llamar a la función para mostrar los productos en la página
                })
                .catch(error => console.error('Error al obtener los productos: ', error));
        }



        function mostrarProductos(data) { // Función para mostrar los productos en el contenedor
            const contenedorProductos = document.getElementById("productos-container");
            contenedorProductos.innerHTML = ""; // Limpiar el contenido previo

            data.forEach(producto => {
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
                card.addEventListener('click', () => setProdID(producto.id)); // Al hacer click en la tarjeta, llama a la función setProdID
                contenedorProductos.appendChild(card);
            });
        }

        function setProdID(id) { // Función para guardar la ID del producto dentro de localStorage y redireccionar a la página de información del producto
            localStorage.setItem("prodID", id); // Aquí guarda la ID
            window.location = "product-info.html" // Aquí redirecciona a product-info.html
        }
        

     // Filtros por rango de precio - hecho por hernandezerica
    document.getElementById("botonFiltro").addEventListener("click", function () {
        const precioMinimo = parseFloat(document.getElementById("minPrice").value) || 0; // Obtiene el valor maximo y lo convierte en numero //
        const precioMaximo = parseFloat(document.getElementById("maxPrice").value) || Infinity; // Obtiene el valor maximo y lo convierte en numero. No hay limite superior para el precio //
        const productosFiltrados = productos.filter(producto => producto.cost >= precioMinimo && producto.cost <= precioMaximo); // devuelve true si el costo del producto esta dentro del rango//
        mostrarProductos(productosFiltrados); 
    });

    // Ordenar por precio ascendente - hecho por hernandezerica
    document.getElementById("ordenarAsc").addEventListener("click", function () {
        const productosOrdenados = [...productos].sort((a, b) => a.cost - b.cost); //se define el criterio de orden//
        mostrarProductos(productosOrdenados);
    });

    // Ordenar por precio descendente - hecho por hernandezerica
    document.getElementById("ordenarDes").addEventListener("click", function () {
        const productosOrdenados = [...productos].sort((a, b) => b.cost - a.cost); //[...productos] crea una copia del array//
        mostrarProductos(productosOrdenados);
    });

    // Ordenar por relevancia - hecho por hernandezerica
    document.getElementById("ordRelevancia").addEventListener("click", function () {
        const productosOrdenados = [...productos].sort((a, b) => b.soldCount - a.soldCount);
        mostrarProductos(productosOrdenados);
    });

    // Función para filtrar los productos en función de la búsqueda (Desafíate - Sofi)
   function filtrarProductos(busqueda) {
    const productosFiltrados = productos.filter(producto => {
        const titulo = producto.name.toLowerCase();
        const descripcion = producto.description.toLowerCase();
        return titulo.includes(busqueda.toLowerCase()) || descripcion.includes(busqueda.toLowerCase());
    });
    mostrarProductos(productosFiltrados); // Mostrar solo los productos filtrados
    }

// Busca el campo de búsqueda y se agrega el evento input para filtrar productos
const campoBusqueda = document.getElementById("search");
if (campoBusqueda) {
    campoBusqueda.addEventListener("input", function() {
        filtrarProductos(campoBusqueda.value);
    });
} else {
    console.error("El campo de búsqueda no fue encontrado.");
};


    obtenerProductos(categoriaId); // Obtener los productos según la categoría seleccionada al cargar la página
    
    } else {
    console.error('No se ha proporcionado un ID de categoría válido.'); // Mostrar un mensaje de error en la consola si no se ha encontrado un ID de categoría válido
    }

});


   


