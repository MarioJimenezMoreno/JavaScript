import { Quiz } from "./24_EjPOOclass.js";

const quizContainer = document.getElementById("quizContainer");
const preguntaElement = document.getElementById("pregunta");
const opcionElements = Array.from(document.querySelectorAll(".opcion"));
const siguienteBtn = document.getElementById("nextBtn");

const preguntas = [
    new Quiz("De que color es el caballo blanco de santiago", ["Blanco", "Negro", "Rojo", "Azul"], "Blanco"),
    new Quiz("De que color es el caballo rojo de santiago", ["Blanco", "Negro", "Rojo", "Azul"], "Rojo"),
    new Quiz("De que color es el caballo negro de santiago", ["Blanco", "Negro", "Rojo", "Azul"], "Negro")
]


let preguntaActual = 0;

// Función para mostrar la pregunta actual
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];

    preguntaElement.textContent = pregunta.pregunta;

    pregunta.opciones.forEach((opcion, index) => {
        const opcionElement = opcionElements[index];
        opcionElement.textContent = opcion;
        opcionElement.classList.remove("seleccionada");

        opcionElement.onclick = () => {
            opcionElements.forEach((opcionEl, i) => {
                if (i === index) {
                    opcionEl.classList.add("seleccionada");
                } else {
                    opcionEl.classList.remove("seleccionada");
                }
            });
        };
    });
}

siguienteBtn.onclick = () => {
    const opcionSeleccionadaIndex = opcionElements.findIndex(opcionElement =>
        opcionElement.classList.contains("seleccionada")
    );

    if (opcionSeleccionadaIndex > -1) {
        const opcionSeleccionada = preguntas[preguntaActual].opciones[opcionSeleccionadaIndex];
        console.log("Respuesta seleccionada:", opcionSeleccionada);

        // Aquí puedes hacer lo que necesites con la respuesta seleccionada

        preguntaActual++;

        if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            quizContainer.innerHTML = "¡Quiz completado!";
            siguienteBtn.disabled = true;
        }
    }
};
// Evento click del botón "Siguiente"


// Mostrar la primera pregunta al cargar la página
mostrarPregunta();