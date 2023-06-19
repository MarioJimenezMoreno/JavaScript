export class Quiz {


    constructor(pregunta, opciones, respuesta) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;

    }

    seleccionarRespuesta(indice) {
        this.respuestaSeleccionada = indice;
    }

    verificarRespuesta() {
        if (this.respuestaSeleccionada !== null) {
            const opcionSeleccionada = this.opciones[this.respuestaSeleccionada];
            return opcionSeleccionada.esCorrecta === this.respuesta.esCorrecta;
        }


    }

}
