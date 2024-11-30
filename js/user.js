document.addEventListener("DOMContentLoaded", function () {
    let menuDeUsuario = document.getElementById("infoUsuario");
    let dropdownMenu = document.querySelector("#infoUsuarioContainer .dropdown-menu");
    let usuario = localStorage.getItem("username");
    let carrito = JSON.parse(localStorage.getItem("selectedProducts")) || []; // Obtén el carrito de localStorage
    let totalItems = carrito.length; // Cuenta los artículos en el carrito

    menuDeUsuario.innerHTML = `Hola, ${usuario}!`;

    // Crear el HTML del menú desplegable con el ícono de inicio, modo noche y el carrito
    dropdownMenu.innerHTML = `
        <li>
            <a class="dropdown-item d-flex align-items-center" href="index.html">
                <i class="bi bi-house-fill me-2"></i> Inicio
            </a>
        </li>
        <li>
            <button class="dropdown-item btn btn-primary d-flex align-items-center" id="toggleButton">
                <i class="bi bi-moon-stars me-2"></i> Modo Noche
            </button>
        </li>
        <li>
            <a class="dropdown-item d-flex align-items-center" href="cart.html">
                <i class="bi bi-cart me-2"></i> Carrito 
                <span id="badge-carrito" class="badge" style="background-color: #6c757d; color: white; padding: 0.6em;">${totalItems}</span>
            </a>
        </li>
        <li>
            <a class="dropdown-item" href="sell.html">Vender</a>
        </li>
        <li>
            <a class="dropdown-item" href="my-profile.html">Mi perfil</a>
        </li>
        <li>
            <a class="dropdown-item" href="#" id="logout">Cerrar sesión</a>
        </li>
    `;

    // Funcionalidad para cerrar sesión
    document.getElementById("logout").addEventListener("click", function () {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        window.location.href = "login.html";
    });
});

// Acá agregamos la funcionalidad para cambiar a Modo Noche o Modo día
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const products = document.querySelectorAll('.product');

    // Cargar la preferencia del modo desde localStorage
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'night') {
        body.classList.add('night-mode');
        body.classList.remove('day-mode');
        navbar.classList.add('night-mode');
        navbar.classList.remove('day-mode');
        products.forEach(product => {
            product.classList.add('night-mode');
            product.classList.remove('day-mode');
        });
        toggleButton.innerHTML = '<i class="bi bi-sun"></i>'; // Cambia el icono
    } else {
        body.classList.add('day-mode');
        body.classList.remove('night-mode');
        navbar.classList.add('day-mode');
        navbar.classList.remove('night-mode');
        products.forEach(product => {
            product.classList.add('day-mode');
            product.classList.remove('night-mode');
        });
        toggleButton.innerHTML = '<i class="bi bi-moon-stars"></i>'; // Cambia el icono
    }

    toggleButton.addEventListener('click', function () {
        // Alterna entre los modos día y noche
        body.classList.toggle('night-mode');
        body.classList.toggle('day-mode');
        navbar.classList.toggle('night-mode');
        navbar.classList.toggle('day-mode');

        products.forEach(product => {
            product.classList.toggle('night-mode');
            product.classList.toggle('day-mode');
        });

        // Actualiza el texto del botón
        if (body.classList.contains('night-mode')) {
            toggleButton.innerHTML = '<i class="bi bi-sun"></i>';
            localStorage.setItem('mode', 'night'); // Guardar la preferencia de Modo Noche en localStorage
        } else {
            toggleButton.innerHTML = '<i class="bi bi-moon-stars"></i>';
            localStorage.setItem('mode', 'day'); // Guardar la preferencia de Modo Día en localStorage
        }
    });
});
