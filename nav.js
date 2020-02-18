// NAV BAR con JQUERY para version Mobile.

const cerrarBtn = $(".cerrar-nav");
const abrirBtn = $(".abrir-nav");
const nav = $(".nav");

abrirBtn.on("click", sumarClase);
cerrarBtn.on("click", quitarClase);

function quitarClase() {
  nav.removeClass("nav-abierta");
}

function sumarClase() {
  nav.addClass("nav-abierta");
}
