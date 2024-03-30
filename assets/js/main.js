function calculateScore() {
    // Obtener todas las respuestas seleccionadas
    const questions = document.querySelectorAll('#questions .cont_questions');
    let allQuestionsAnswered = true; // Variable para verificar si todas las preguntas tienen respuesta

    questions.forEach(question => {
        const selectedAnswer = question.querySelector('input:checked');
        if (!selectedAnswer) {
            allQuestionsAnswered = false;
            return; // Salir del bucle forEach si una pregunta no tiene respuesta
        }
    });

    // Si hay preguntas sin responder, mostrar un mensaje de error y salir de la función
    if (!allQuestionsAnswered) {
        alert('Por favor, responde todas las preguntas para generar un resultado.');
        return;
    }

    // Si todas las preguntas tienen respuesta, calcular el puntaje
    let score = 0;
    questions.forEach(question => {
        const selectedAnswer = question.querySelector('input:checked');
        score += parseInt(selectedAnswer.value);
    });

    // Determinar respuesta según el puntaje
    let response = '';
    if (score >= 0 && score <= 2) {
        $('.overlay').fadeIn();
        response = 'Bajo';
        
    } else if (score >= 3 && score <= 4) {
        $('.overlay').fadeIn();
        response = 'Medio';
    } else if (score >= 5 && score <= 6) {
        $('.overlay').fadeIn();
        response = 'Alto';
    }

    // Mostrar resultado
    alert(response);
}

