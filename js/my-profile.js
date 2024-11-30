document.addEventListener("DOMContentLoaded", function () {

    // Mostrar el nombre del usuario en la barra de navegación
    const userInfo = document.getElementById('infoUsuario');
    userInfo.textContent = `Hola, ${username}!`;

    // Completar el email con el valor del username guardado en localStorage
    const emailField = document.getElementById("email");
    emailField.value = username;  // Asumiendo que username es el correo electrónico

    // Cargar datos del perfil si existen
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (userProfile) {
        document.getElementById('nombre').value = userProfile.nombre || '';
        document.getElementById('segundoNombre').value = userProfile.segundoNombre || '';
        document.getElementById('apellido').value = userProfile.apellido || '';
        document.getElementById('segundoApellido').value = userProfile.segundoApellido || '';
        document.getElementById('telefono').value = userProfile.telefono || '';
        
        // Cargar foto de perfil si existe
        if (userProfile.fotoPerfil) {
            document.getElementById('profilePic').src = userProfile.fotoPerfil;
        }
    }

    // Guardar los datos del perfil
    const form = document.getElementById('profileForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validar que los campos obligatorios estén completos
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = emailField.value;

        if (!nombre || !apellido || !email) {
            alert('Por favor, completa los campos obligatorios.');
            return;
        }

        // Guardar los datos en el almacenamiento local
        localStorage.setItem('userProfile', JSON.stringify({
            nombre: nombre,
            segundoNombre: document.getElementById('segundoNombre').value,
            apellido: apellido,
            segundoApellido: document.getElementById('segundoApellido').value,
            telefono: document.getElementById('telefono').value,
            email: email,
            fotoPerfil: document.getElementById('profilePic').src // Guardar imagen en Base64
        }));

        alert('Perfil actualizado correctamente.');
    });
});
    // Cambiar foto de perfil
    const uploadPicInput = document.getElementById('uploadPic');
    const profilePic = document.getElementById('profilePic');
    uploadPicInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                // Actualizar la imagen de perfil con la nueva foto
                profilePic.src = e.target.result;

                // Guardar la nueva imagen de perfil en localStorage
                const updatedUserProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
                updatedUserProfile.fotoPerfil = e.target.result;
                localStorage.setItem('userProfile', JSON.stringify(updatedUserProfile));
            };
            reader.readAsDataURL(file); // Leer la imagen como base64
        }
    });

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const products = document.querySelectorAll('.product');

    toggleButton.addEventListener('click', function () {
        // Alterna entre los modos día y noche
        body.classList.toggle('night-mode');
        body.classList.toggle('day-mode');
        navbar.classList.toggle('night-mode');
        navbar.classList.toggle('day-mode');

        // Cambia el modo de los productos también
        products.forEach(product => {
            product.classList.toggle('night-mode');
            product.classList.toggle('day-mode');
        });

        // Actualiza el texto del botón
        if (body.classList.contains('night-mode')) {
            toggleButton.innerHTML = '<i class="bi bi-sun"></i>';
        } else {
            toggleButton.innerHTML = '<i class="bi bi-moon-stars"></i>';
        }
    });
});
