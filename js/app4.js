// // Selecciono todos los links del menú
// const links = document.querySelectorAll(".menu li a");

// // Agrego evento click a cada link
// links.forEach(link => {
//   link.addEventListener("click", () => {
//     // Quito la clase activo de todos los links
//     links.forEach(l => l.classList.remove("activo"));

//     // Agrego la clase activo al link clickeado
//     link.classList.add("activo");

//     // Opcional: cerrar el menú en mobile
//     const menu = document.getElementById("menu");
//     const toggle = document.getElementById("menu-toggle");
//     menu.classList.remove("active");
//     toggle.classList.remove("active");
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const hamburger = document.getElementById('hamburger');
//   const menu = document.getElementById('menu');

//   hamburger.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     hamburger.classList.toggle('open');
//   });
// });