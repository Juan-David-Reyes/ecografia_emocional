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
    if (score >= 0 && score <= 2) {
    response = 'Bajo';
    } else if (score >= 3 && score <= 4) {
    response = 'Medio';
    } else if (score >= 5 && score <= 6) {
    response = 'Alto';
    }

    // Mostrar resultado
   alert(response);
}
