function calculateScore() {
    let score = 0;

    // Obtener todas las respuestas seleccionadas
    const questions = document.querySelectorAll('#questions div');
    questions.forEach(question => {
    const selectedAnswer = question.querySelector('input:checked');
    if (selectedAnswer) {
        score += parseInt(selectedAnswer.value);
    }
    });

    // Determinar respuesta según el puntaje
    let response = '';
    if (score >= 1 && score <= 9) {
    response = 'Respuesta para puntajes de 1 a 9';
    } else if (score >= 10 && score <= 19) {
    response = 'Respuesta para puntajes de 10 a 19';
    } else if (score >= 20 && score <= 27) {
    response = 'Respuesta para puntajes de 20 a 27';
    }

    // Mostrar resultado
   alert(response);
}
