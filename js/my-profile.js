document.addEventListener("DOMContentLoaded", function () {
    // Verificar si el usuario está logueado
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    // Si no está logueado, redirigir al login
    if (!username || !password) {
        alert('Debes iniciar sesión para acceder a tu perfil.');
        window.location.href = 'login.html';  // Cambia la ruta si es necesario
        return;
    }

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
            email: email
        }));

        alert('Perfil actualizado correctamente.');
    });
});
