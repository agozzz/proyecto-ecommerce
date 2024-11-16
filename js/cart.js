document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
    actualizarBadgeCarrito(); // Llamada para que el badge refleje el estado inicial
    actualizarCostos(); // Calcular los costos iniciales
    configurarTipoEnvio(); // Configurar eventos para los tipos de envío
});

function renderizarCarrito() {
    const cartContainer = document.getElementById("cart-items");

    // Verificar si el contenedor existe
    if (!cartContainer) {
        console.error("Elemento con ID 'cart-items' no encontrado.");
        return;
    }

    // Obtener los productos del carrito desde el localStorage
    const products = JSON.parse(localStorage.getItem("selectedProducts")) || [];

    // Limpiar el contenido antes de renderizar
    cartContainer.innerHTML = ""; 

    // Verificar si hay productos en el carrito
    if (products.length === 0) {
        // Si no hay productos, mostrar un mensaje de carrito vacío
        cartContainer.innerHTML = "<p>No hay ningún producto en el carrito.</p>";
        document.getElementById("subtotal").innerText = "0.00";
            document.getElementById("shipping-cost").innerText = "0.00";
            document.getElementById("total").innerText = "0.00";
    } else {
        products.forEach(product => {
            const price = Number(product.price) || 0;
            const quantity = Number(product.quantity) || 1; // Cantidad predeterminada
            const subtotal = calcularSubtotal(price, quantity);
            const productElement = document.createElement("div");
            productElement.classList.add("cart-item");

            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="cost">Costo: UYU ${product.price}</p>
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="actualizarCantidad('${product.name}', -1)">-</button>
                        <span class="quantity">${quantity}</span>
                        <button class="quantity-btn" onclick="actualizarCantidad('${product.name}', 1)">+</button>
                    </div>
                    <p class="subtotal">Subtotal: UYU ${subtotal}</p>
                    <a href="#" class="remove-link" onclick="eliminarProducto('${product.name}')">Eliminar</a>
                </div>
            `;

            cartContainer.appendChild(productElement);
        });
    }
    actualizarCostos(); // Recalcular costos cada vez que se renderiza el carrito
    actualizarBadgeCarrito();// Actualizar el badge después de renderizar
}

// Función para calcular el subtotal de un producto
function calcularSubtotal(price, quantity) {
    return price * quantity;
}

// Función para actualizar la cantidad de un producto
function actualizarCantidad(nombreProducto, cambio) {
    const products = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const product = products.find(p => p.name === nombreProducto);

    if (product) {
        product.quantity = (product.quantity || 1) + cambio;
        if (product.quantity < 1) product.quantity = 1;
        localStorage.setItem("selectedProducts", JSON.stringify(products));
        renderizarCarrito();
    }
}

// Función para eliminar un producto del carrito
function eliminarProducto(nombreProducto) {
    const products = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const updatedProducts = products.filter(p => p.name !== nombreProducto);

    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    renderizarCarrito();
}

// Configurar eventos para los tipos de envío
function configurarTipoEnvio() {
    const shippingOptions = document.querySelectorAll('input[name="shipping"]');
    shippingOptions.forEach(option => {
        option.addEventListener("change", actualizarCostos);
    });
}

// Calcular y actualizar los costos en tiempo real
function actualizarCostos() {
    const products = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const subtotal = products.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0);

    const shippingRate = Number(document.querySelector('input[name="shipping"]:checked')?.value) || 0;
    const shippingCost = subtotal * shippingRate;
    const total = subtotal + shippingCost;

    // Actualizar en el HTML
    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("shipping-cost").innerText = shippingCost.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}
// Función para actualizar el badge del carrito
function actualizarBadgeCarrito() {
    const products = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const totalProducts = products.reduce((total, product) => total + (product.quantity || 1), 0);
    
    const badge = document.getElementById("badge-carrito"); 
    if (badge) {
        badge.innerText = totalProducts; // Actualizar el contenido del badge
    }
}
// Función para mostrar el popup de dirección de envío
document.addEventListener("DOMContentLoaded", function () {
    const addAddressBtn = document.querySelector(".add-address-btn");
    const addressPopup = document.querySelector(".address-popup");
    const cancelBtn = document.querySelector(".cancel-btn");

    // Mostrar el popup al hacer clic en "Agregar dirección"
    addAddressBtn.addEventListener("click", function () {
    addressPopup.style.display = "block";
    });

    // Ocultar el popup al hacer clic en "Cancelar"
    cancelBtn.addEventListener("click", function () {
    addressPopup.style.display = "none";
    });
});

