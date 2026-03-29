// // Controla el menú hamburguesa: lo abre/cierra y lo cierra automáticamente al hacer click en un link.

// // Espera a que todo el HTML esté cargado antes de ejecutar el JS
// document.addEventListener('DOMContentLoaded', () => {

//   // Selecciona el botón hamburguesa por su id
//   const hamburger = document.getElementById('hamburger');

//   // Selecciona el menú desplegable (ul)
//   const menu = document.getElementById('menu');

//   // Evento click en el botón hamburguesa
//   hamburger.addEventListener('click', () => {

//     // Agrega o quita la clase "active" → muestra/oculta el menú
//     menu.classList.toggle('active');

//     // Agrega o quita la clase "open" → anima el botón (hamburguesa a cruz)
//     hamburger.classList.toggle('open');
//   });

//   // Selecciona todos los links dentro del menú
//   const links = document.querySelectorAll('#menu a');

//   // Recorre cada link del menú
//   links.forEach(link => {

//     // Evento click en cada link
//     link.addEventListener('click', () => {

//       // Quita la clase "active" → cierra el menú
//       menu.classList.remove('active');

//       // Quita la clase "open" → vuelve el botón a estado normal
//       hamburger.classList.remove('open');
//     });
//   });

// });

document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const links = document.querySelectorAll('#menu a');

  // 👉 ABRIR / CERRAR MENÚ
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // 👉 CARGAR LINK ACTIVO GUARDADO
  const activoGuardado = localStorage.getItem("menuActivo");

  if (activoGuardado) {
    links.forEach(link => {
      if (link.getAttribute("href") === activoGuardado) {
        link.classList.add("active");
      }
    });
  }

  // 👉 CLICK EN LINKS
  links.forEach(link => {
    link.addEventListener('click', () => {

      // cerrar menú
      menu.classList.remove('active');
      hamburger.classList.remove('open');

      // limpiar activos
      links.forEach(l => l.classList.remove('active'));

      // marcar el actual
      link.classList.add('active');

      // guardar en memoria
      localStorage.setItem("menuActivo", link.getAttribute("href"));
    });
  });

});