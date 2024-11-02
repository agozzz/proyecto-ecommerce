// Ejemplo de productos cargados dinámicamente 
const productosEnCarrito = [
    {
      nombre: "Juego de comedor",
      precio: 4000,
      moneda: "UYU",
      cantidad: 1,
      imagen: "img/prod60801_1.jpg"
    },
  ];
  // Función para renderizar el carrito de compras
  function renderizarCarrito() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ""; // Limpiar el contenido antes de renderizar
  
    productosEnCarrito.forEach(producto => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      
      cartItem.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
        <div class="product-details">
          <h3>${producto.nombre}</h3>
          <p>Costo: <span class="cost">${producto.moneda} ${producto.precio}</span></p>
          <p>Moneda: ${producto.moneda}</p>
          <div class="quantity-control">
            <button class="quantity-btn" onclick="actualizarCantidad('${producto.nombre}', -1)">-</button>
            <span class="quantity">${producto.cantidad}</span>
            <button class="quantity-btn" onclick="actualizarCantidad('${producto.nombre}', 1)">+</button>
          </div>
          <p>Subtotal: <span class="subtotal">${producto.moneda} ${producto.precio * producto.cantidad}</span></p>
          <a href="#" class="remove-link" onclick="eliminarProducto('${producto.nombre}')">Eliminar</a>
        </div>
      `;
      
      cartItemsContainer.appendChild(cartItem);
    });
  }
  
  // Función para actualizar la cantidad de un producto
  function actualizarCantidad(nombreProducto, cambio) {
    const producto = productosEnCarrito.find(p => p.nombre === nombreProducto);
    if (producto) {
      producto.cantidad += cambio;
      if (producto.cantidad < 1) {
        producto.cantidad = 1;
      }
      renderizarCarrito(); // Volver a renderizar el carrito para reflejar el cambio
    }
  }
  
  // Función para eliminar un producto del carrito
  function eliminarProducto(nombreProducto) {
    const index = productosEnCarrito.findIndex(p => p.nombre === nombreProducto);
    if (index > -1) {
      productosEnCarrito.splice(index, 1);
      renderizarCarrito(); // Volver a renderizar el carrito
    }
  }
  
  // Llamar a la función para renderizar el carrito al cargar la página
  document.addEventListener("DOMContentLoaded", renderizarCarrito);
  