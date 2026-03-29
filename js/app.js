// Maneja un modal dinámico: al hacer click en "ver más" muestra contenido según el servicio, y permite cerrarlo con la X o haciendo click fuera.

// Espera a que todo el HTML esté cargado antes de ejecutar el JS
document.addEventListener("DOMContentLoaded", () => {

  // Selecciona TODOS los botones con clase "ver-mas"
  const botones = document.querySelectorAll(".ver-mas");

  // Selecciona el contenedor del modal (fondo oscuro)
  const modal = document.getElementById("modal");

  // Selecciona el título del modal
  const titulo = document.getElementById("modal-titulo");

  // Selecciona el contenedor donde se insertará el contenido dinámico
  const texto = document.getElementById("modal-texto");

  // Selecciona el botón de cerrar (la X)
  const cerrar = document.querySelector(".cerrar");


  // "Base de datos" de servicios
  // Cada objeto representa un servicio distinto
  const servicios = {

    impositivo: {
      titulo: "Impositivo",
      icono: "fa-solid fa-dollar-sign",
      color: "#32dbc6", // color principal (bien que lo unificaste 👍)
      contenido: `
        <ul>
          <li>Asesoramiento impositivo integral.</li>
          <li>Inscripciones Inicio de Actividad.</li>
          <li>Liquidaciones mensuales y anuales.</li>
        </ul>
      `
    },

    contable: {
      titulo: "Contable",
      icono: "fa-solid fa-calculator",
      color: "#32dbc6",
      contenido: `
        <ul>
          <li>Estados contables.</li>
          <li>Balances.</li>
        </ul>
      `
    },

    laboral: {
      titulo: "Laboral",
      icono: "fa-solid fa-users",
      color: "#32dbc6",
      contenido: `
        <ul>
          <li>Sueldos.</li>
          <li>Cargas sociales.</li>
        </ul>
      `
    },

    societario: {
      titulo: "Societario",
      icono: "fa-solid fa-building",
      color: "#32dbc6",
      contenido: `
        <ul>
          <li>Constitución de sociedades.</li>
          <li>Asesoramiento legal societario.</li>
          <li>Actas y documentación.</li>
        </ul>
      `
    },

    industrias: {
      titulo: "Radicación de Industrias",
      icono: "fa-solid fa-industry",
      color: "#32dbc6",
      contenido: `
        <ul>
          <li>Asesoramiento para radicación.</li>
          <li>Gestión de trámites.</li>
          <li>Acompañamiento integral.</li>
        </ul>
      `
    },

    otros: {
      titulo: "Otros Servicios",
      icono: "fa-solid fa-briefcase",
      color: "#32dbc6",
      contenido: `
        <ul>
          <li>Consultas personalizadas.</li>
          <li>Soluciones a medida.</li>
        </ul>
      `
    }
  };


  // Recorre todos los botones "Ver más"
  botones.forEach(boton => {

    // Evento click en cada botón
    boton.addEventListener("click", () => {

      // Obtiene el valor del atributo data-servicio del botón
      const tipo = boton.dataset.servicio;

      // Si no existe ese servicio → evita error
      if (!servicios[tipo]) return;

      // Inserta el título + icono en el modal
      titulo.innerHTML = `
        <i class="${servicios[tipo].icono}"></i>
        ${servicios[tipo].titulo}
      `;

      // Aplica color al título
      titulo.style.color = servicios[tipo].color;

      // Inserta el contenido HTML dinámicamente
      texto.innerHTML = servicios[tipo].contenido;

      // Muestra el modal
      modal.style.display = "flex";

      // Bloquea el scroll del fondo
      document.body.style.overflow = "hidden";
    });

  });


  // Función para cerrar el modal
  function cerrarModal() {

    // Oculta el modal
    modal.style.display = "none";

    // Habilita nuevamente el scroll
    document.body.style.overflow = "auto";
  }


  // Click en la X → cierra modal
  cerrar.addEventListener("click", cerrarModal);


  // Click fuera del contenido → cierra modal
  window.addEventListener("click", (e) => {

    // Si se hace click en el fondo (no en el contenido)
    if (e.target === modal) {
      cerrarModal();
    }

  });

});