// Controla el scroll: oculta la topbar y sube el navbar cuando bajás,
// y vuelve a mostrar la topbar solo cuando estás arriba del todo.


// Espera a que todo el HTML esté cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

  // Selecciona el elemento con clase "topbar"
  const topbar = document.querySelector('.topbar');

  // Selecciona el elemento con clase "navbar"
  const navbar = document.querySelector('.navbar');

  // Escucha el evento de scroll (cuando el usuario se desplaza en la página)
  window.addEventListener('scroll', () => {

    // Obtiene la posición actual del scroll vertical (en píxeles desde arriba)
    const currentScroll = window.scrollY;

    // Si estamos en la parte más alta de la página (scroll = 0)
    if (currentScroll <= 0) {

      // Quita la clase "hide" → muestra la topbar
      topbar.classList.remove('hide');

      // Quita la clase "topbar-hidden" → baja la navbar (debajo de la topbar)
      navbar.classList.remove('topbar-hidden');

    } else {

      // Si el usuario hizo scroll (aunque sea un poco)

      // Agrega la clase "hide" → oculta la topbar
      topbar.classList.add('hide');

      // Agrega la clase "topbar-hidden" → sube la navbar a la parte superior
      navbar.classList.add('topbar-hidden');
    }

  });
});