//Arreglo que contiene las preguntas
const preguntas = [
    {
        id:1,
        categoria:"universonumerico",
        titulo:"¿A qué conjunto numérico pertenece el número -5?",
        opcionA:"Naturales",
        opcionB:"Racionales",
        opcionC:"Enteros",
        opcionD:"Reales",
        correcta:"c"
    },
    {
        id:2,
        categoria:"universonumerico",
        titulo:"El número 3/4 pertenece al conjuto de los:",
        opcionA:"Naturales",
        opcionB:"Enteros",
        opcionC:"Racionales",
        opcionD:"Reales",
        correcta:"c"
    },
    {
        id:3,
        categoria:"universonumerico",
        titulo:"¿Cuál de los siguientes números es irracional?",
        opcionA:"1/2",
        opcionB:"-3",
        opcionC:"√2",
        opcionD:"0",
        correcta:"c"
    },
    {
        id:4,
        categoria:"universonumerico",
        titulo:"¿Cuál de las siguientes relaciones entre conjuntos es correcta?",
        opcionA:"Z ⊂ N",
        opcionB:"Q ⊂ Z",
        opcionC:"R ⊂ Q",
        opcionD:"N ⊂ Z",
        correcta:"d"
    },
    {
        id:5,
        categoria:"universonumerico",
        titulo:"El número 0 pertenece al conjunto de los:",
        opcionA:"Naturales",
        opcionB:"Enteros",
        opcionC:"Racionales",
        opcionD:"Reales",
        correcta:"b"
    },
    {
        id: 6,
        categoria: "operacionesmatematicas",
        titulo: "El concepto de número surgió principalmente para",
        opcionA: "Resolver ecuaciones algebraicas",
        opcionB: "Medir ángulos",
        opcionC: "Contar y registrar cantidades",
        opcionD: "Dibujar figuras",
        correcta: "c"
    },
    {
        id: 7,
        categoria: "operacionesmatematicas",
        titulo: "¿Qué civilización desarrolló un sistema numérico posicional con el uso del cero?",
        opcionA: "Romana",
        opcionB: "Egipcia",
        opcionC: "Griega",
        opcionD: "Hindú",
        correcta: "d"
    },
    {
        id: 8,
        categoria: "operacionesmatematicas",
        titulo: "El sistema de numeracion romano se caracterizaba por:",
        opcionA: "Ser posicional",
        opcionB: "Usar el cero",
        opcionC: "Facilitar operaciones complejas",
        opcionD: "Usar letras como simbolos",
        correcta: "d"
    },
    {
        id: 9,
        categoria: "operacionesmatematicas",
        titulo: "¿Cuál fue una limitación del sistema de numeración romano?",
        opcionA: "No tenía símbolos",
        opcionB: "No representaba cantidades",
        opcionC: "Dificultaba las operaciones aritméticas",
        opcionD: "No tenía numeros grandes",
        correcta: "c"
    },
    {
        id: 10,
        categoria: "operacionesmatematicas",
        titulo: "La importancia histórica del cero radica en que:",
        opcionA: "Reemplazó a los números negativos",
        opcionB: "Permitió el desarrollo del sistema posicional",
        opcionC: "Eliminó la necesidad de contar",
        opcionD: "Simplificó los numeros romanos",
        correcta: "b"
    },
    {
        id: 11,
        categoria: "propiedadesnumericas",
        titulo: "¿Qué propiedad se cumple en 6 + 4 = 4 + 6?",
        opcionA: "Asociativa",
        opcionB: "Distributiva",
        opcionC: "Conmutativa",
        opcionD: "Identidad",
        correcta: "c"
    },
    {
        id: 12,
        categoria: "propiedadesnumericas",
        titulo: "La propiedad asociativa se observa en:",
        opcionA: "a+b = b+a",
        opcionB: "(a+b)+c = a+(b+c)",
        opcionC: "a*(b+c) = a*b + a*c",
        opcionD: "a+0 = a",
        correcta: "b"
    },
    {
        id: 13,
        categoria: "propiedadesnumericas",
        titulo: "¿Qué propiedad representa 5(2 + 3) = 5·2 + 5·3?",
        opcionA: "Conmutativa",
        opcionB: "Asociativa",
        opcionC: "Identidad",
        opcionD: "Distributiva",
        correcta: "d"
    },
    {
        id: 14,
        categoria: "propiedadesnumericas",
        titulo: "El elemento neutro de la suma es:",
        opcionA: "1",
        opcionB: "-1",
        opcionC: "0",
        opcionD: "10",
        correcta: "c"
    },
    {
        id: 15,
        categoria: "propiedadesnumericas",
        titulo: "¿Cuál es el inverso aditivo de 7?",
        opcionA: "-7",
        opcionB: "1/7",
        opcionC: "0",
        opcionD: "-1",
        correcta: "a"
    },
    {
        id: 16,
        categoria: "operacionesnumericas",
        titulo: "¿Cuál es el resultado de 12 − 5 + 3?",
        opcionA: "4",
        opcionB: "6",
        opcionC: "10",
        opcionD: "14",
        correcta: "c"
    },
    {
        id: 27,
        categoria: "operacionesnumericas",
        titulo: "¿Cual es el resultado de 3 x (4 + 2)?",
        opcionA: "18",
        opcionB: "12",
        opcionC: "9",
        opcionD: "8",
        correcta: "a"
    },
    {
        id: 28,
        categoria: "operacionesnumericas",
        titulo: "¿Cuál es el resultado de 16 ÷ 4 + 2?",
        opcionA: "1",
        opcionB: "4",
        opcionC: "6",
        opcionD: "10",
        correcta: "c"
    },
    {
        id: 29,
        categoria: "operacionesnumericas",
        titulo: "El resultado de (–3) + 8 es:",
        opcionA: "-11",
        opcionB: "-5",
        opcionC: "5",
        opcionD: "11",
        correcta: "c"
    },
    {
        id: 30,
        categoria: "operacionesnumericas",
        titulo: "¿Cuál es el resultado de 1/2 + 1/4?",
        opcionA: "1/6",
        opcionB: "1/8",
        opcionC: "3/4",
        opcionD: "2/6",
        correcta: "c"
    },
    {
        id: 31,
        categoria: "teoriaconjuntos",
        titulo: "Si A = {1, 2, 3}, entonces 4:",
        opcionA: "Pertenece a A",
        opcionB: "Es subconjunto de A",
        opcionC: "No pertenece a A",
        opcionD: "Es el conjunto Universal",
        correcta: "c"
    },
    {
        id: 32,
        categoria: "teoriaconjuntos",
        titulo: "El conjunto vacío se representa como:",
        opcionA: "{0}",
        opcionB: "{}",
        opcionC: "N",
        opcionD: "U",
        correcta: "b"
    },
    {
        id: 33,
        categoria: "teoriaconjuntos",
        titulo: "El conjunto de los números naturales es:",
        opcionA: "Vacío",
        opcionB: "Finito",
        opcionC: "Infinito",
        opcionD: "Universal",
        correcta: "c"
    },
    {
        id: 34,
        categoria: "teoriaconjuntos",
        titulo: "El conjunto universal representa:",
        opcionA: "Un conjunto sin elementos",
        opcionB: "Todos los conjuntos posibles",
        opcionC: "Todos los elementos del contexto",
        opcionD: "Un subconjunto",
        correcta: "c"
    },
    {
        id: 35,
        categoria: "teoriaconjuntos",
        titulo: "¿Cuál de los siguientes no es un sistema de gestión de bases de datos?",
        opcionA: "Un subconjunto mayor",
        opcionB: "Un elemento",
        opcionC: "Un conjunto contenido en otro",
        opcionD: "El conjunto vacio",
        correcta: "d"
    },
        {
        id: 36,
        categoria: "operacionesconjunto",
        titulo: "La unión de dos conjuntos representa:",
        opcionA: "Los elementos comunes",
        opcionB: "Los elementos que no pertenecen",
        opcionC: "Todos los elementos de ambos conjuntos",
        opcionD: "Solo el conjunto mayor",
        correcta: "c"
    },
    {
        id: 37,
        categoria: "operacionesconjunto",
        titulo: "La intersección de dos conjuntos contiene:",
        opcionA: "Todos los elementos",
        opcionB: "Solo los elementos comunes",
        opcionC: "Los elementos diferentes",
        opcionD: "El conjunto vacío siempre",
        correcta: "b"
    },
    {
        id: 38,
        categoria: "operacionesconjunto",
        titulo: "Si A = {1,2,3} y B = {3,4}, entonces A ∩ B es:",
        opcionA: "{1,2}",
        opcionB: "{4}",
        opcionC: "{1,2,3,4}",
        opcionD: "{3}",
        correcta: "d"
    },
    {
        id: 39,
        categoria: "operacionesconjunto",
        titulo: "Si A = {a,b,c} y B = {b}, entonces A − B es:",
        opcionA: "{b}",
        opcionB: "{a,c}",
        opcionC: "{a,b,c}",
        opcionD: "∅",
        correcta: "b"
    },
    {
        id: 40,
        categoria: "operacionesconjunto",
        titulo: "Un diagrama de Venn se utiliza para: ",
        opcionA: "Resolver ecuaciones",
        opcionB: "Representar operaciones numéricas",
        opcionC: "Mostrar relaciones entre conjuntos",
        opcionD: "Clasificar números reales",
        correcta: "c"
    }
]


nombre.innerHTML = localStorage.getItem("nombre");
const txtPuntaje = document.querySelector("#puntos");
const txtNombre = document.querySelector("#nombre");
const btnSiguiente = document.querySelector("#siguiente");
const btn5050 = document.querySelector("#btn-5050");
const btnX2 = document.querySelector("#btn-x2");
const btnEscudo = document.querySelector("#btn-escudo");

let numPreguntaActual = 0;
let puntajeTotal = 0;

let multiplicadorProximaPregunta = false; // Se activa al presionar el botón
let multiplicadorActivoAhora = false;      // Se activa al cambiar de pregunta
let escudoActivo = false;

txtNombre.innerHTML = localStorage.getItem("nombre") || "Jugador";
if (localStorage.getItem("puntaje-total")) {
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
}
txtPuntaje.innerHTML = puntajeTotal;

const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(p => p.categoria === categoriaActual);

function cargarSiguientePregunta(num) {
    if (num >= preguntasCategoria.length) return;

    const numPreguntaHTML = document.querySelector("#num-pregunta");
    const txtPreguntaHTML = document.querySelector("#txt-pregunta");
    const btnOpciones = document.querySelectorAll(".opcion");

    numPreguntaHTML.innerHTML = (num + 1).toString().padStart(2, '0');
    txtPreguntaHTML.innerHTML = preguntasCategoria[num].titulo;
    
    btnOpciones[0].innerHTML = preguntasCategoria[num].opcionA;
    btnOpciones[1].innerHTML = preguntasCategoria[num].opcionB;
    btnOpciones[2].innerHTML = preguntasCategoria[num].opcionC;
    btnOpciones[3].innerHTML = preguntasCategoria[num].opcionD;

    if (multiplicadorProximaPregunta) {
        multiplicadorActivoAhora = true;
        multiplicadorProximaPregunta = false;
        btnX2.classList.add("activo");
    } else {
        multiplicadorActivoAhora = false;
        btnX2.classList.remove("activo");
    }

    escudoActivo = false;
    if(btnEscudo) btnEscudo.classList.remove("activo");

    btnOpciones.forEach(opcion => {
        opcion.classList.remove("correcta", "incorrecta", "no-events");
        opcion.style.visibility = "visible";
        opcion.onclick = () => validarRespuesta(opcion.id);
    });

    txtPuntaje.classList.remove("efecto");
}

function validarRespuesta(idSeleccionado) {
    const correctaId = preguntasCategoria[numPreguntaActual].correcta;
    const botonSeleccionado = document.getElementById(idSeleccionado);

    if (idSeleccionado === correctaId) {
        botonSeleccionado.classList.add("correcta");
        
        let puntosBase = escudoActivo ? 50 : 100;
        let puntosFinales = multiplicadorActivoAhora ? (puntosBase * 2) : puntosBase;
        
        puntajeTotal += puntosFinales;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");

        finalizarPregunta();
    } else {
        if (escudoActivo) {
            botonSeleccionado.classList.add("incorrecta");
            botonSeleccionado.classList.add("no-events");
            alert("🛡️ Escudo usado. Elige otra opción.");
        } else {
            botonSeleccionado.classList.add("incorrecta");
            document.getElementById(correctaId).classList.add("correcta");
            document.getElementById(correctaId).style.visibility = "visible";
            finalizarPregunta();
        }
    }
}

function finalizarPregunta() {
    document.querySelectorAll(".opcion").forEach(btn => btn.classList.add("no-events"));
}

btn5050.addEventListener("click", () => {
    const correctaId = preguntasCategoria[numPreguntaActual].correcta;
    const opciones = Array.from(document.querySelectorAll(".opcion"));
    let incorrectas = opciones.filter(opt => opt.id !== correctaId);
    incorrectas.sort(() => Math.random() - 0.5);
    incorrectas[0].style.visibility = "hidden";
    incorrectas[1].style.visibility = "hidden";
    btn5050.disabled = true;
    btn5050.style.opacity = "0.4";
});

btnX2.addEventListener("click", () => {
    multiplicadorProximaPregunta = true;
    btnX2.disabled = true;
    btnX2.style.opacity = "0.4";
    alert("✨ ¡Poder x2 activado para la PRÓXIMA pregunta!");
});

btnEscudo.addEventListener("click", () => {
    escudoActivo = true;
    btnEscudo.classList.add("activo");
    btnEscudo.disabled = true;
    btnEscudo.style.opacity = "0.4";
});

btnSiguiente.addEventListener("click", () => {
    numPreguntaActual++;
    if (numPreguntaActual < 5) {
        cargarSiguientePregunta(numPreguntaActual);
    } else {
        location.href = (JSON.parse(localStorage.getItem("categorias-jugadas")) || []).length < 6 
            ? "menu.html" : "final.html";
    }
});

cargarSiguientePregunta(numPreguntaActual);
