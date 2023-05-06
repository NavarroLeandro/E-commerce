document.addEventListener("DOMContentLoaded", function () {
  // Obtener el formulario y elementos necesarios
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("pass");

  // Función para validar el inicio de sesión
  function validateLogin(event) {
    event.preventDefault();

    // Verificar si el correo electrónico y la contraseña son "admin"
    if (
      emailInput.value === "admin@rolling.com" &&
      passwordInput.value === "admin123"
    ) {
      alert("Inicio de sesión exitoso");
      // Redirigir a la página principal o el panel de administración aquí, si es necesario
    } else {
      alert("Correo electrónico o contraseña incorrectos");
    }
  }

  // Agregar un evento al formulario para validar el inicio de sesión al enviar
  form.addEventListener("submit", validateLogin);
});
