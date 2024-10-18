//DESAFÍATE de la Entrega N°2 mejorado, con lo agregado del punto 2 de la Entrega N°5.

document.addEventListener("DOMContentLoaded", function() {
    let menuDeUsuario = document.getElementById("infoUsuario"); //Obtenemos el elemento HTML donde se mostrará el nombre de usuario con el menú desplegable
    let dropdownMenu = document.querySelector("#infoUsuarioContainer .dropdown-menu"); //Seleccionamos el menú desplegable que se encuentra dentro del contenedor de usuario
    let usuario = localStorage.getItem("username"); //Obtenemos el nombre de usuario almacenado en LocalStorage
    

    menuDeUsuario.innerHTML = `Hola, ${usuario}!`; //Establecemos el texto del botón de usuario con un saludo y su nombre de usuario

    //Creamos el HTML para el menú desplegable con los enlaces a las secciones correspondientes
    dropdownMenu.innerHTML = `
        <li><button class="dropdown-item" id="toggleButton"><i class="bi bi-moon-stars"></i></button></li>
        <li><a class="dropdown-item" href="cart.html">Carrito</a></li>
        <li><a class="dropdown-item" href="sell.html">Vender</a></li>
        <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
        <li><a class="dropdown-item" href="#" id="logout">Cerrar sesión</a></li>
    `;

    //Acá agregamos la funcionalidad para el cierre de sesión
    document.getElementById("logout").addEventListener("click", function() { //Evento "click" sobre Cerrar sesión, que lleva el id "logout"
        localStorage.removeItem("username"); //Elimina el usuario almacenado en LocalStorage
        window.location.href = "login.html"; //Redirige a la pantalla de inicio de sesión
    });
});


//Acá agregamos la funcionalidad para cambiar a Modo Noche o Modo día
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