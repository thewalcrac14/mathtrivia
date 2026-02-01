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




//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 6){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})