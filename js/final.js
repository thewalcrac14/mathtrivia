const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");
const puntajeFinal = document.querySelector("#puntaje-final");
const totalAcertadas = document.querySelector("#total-acertadas");
const totalNoAcertadas = document.querySelector("#total-no-acertadas");
const btnComenar = document.querySelector("#btn-comenzar");

const nombreLS = localStorage.getItem("nombre") || "Jugador";
const puntajeLS = parseInt(localStorage.getItem("puntaje-total")) || 0;

nombre.innerHTML = nombreLS;
nombreJugador.innerHTML = nombreLS;
txtPuntaje.innerHTML = puntajeLS;
puntajeFinal.innerHTML = puntajeLS + " Puntos";


const correctas = Math.floor(puntajeLS / 100); 
const incorrectas = Math.max(0, 40 - correctas); // Evita números negativos

totalAcertadas.innerHTML = Math.trunc(correctas); // Asegura que no hay decimales
totalNoAcertadas.innerHTML = Math.trunc(incorrectas);

btnComenar.addEventListener("click", () => {
    // Limpiamos los puntos para una nueva partida
    localStorage.setItem("puntaje-total", 0);
    location.href = "index.html";
});
