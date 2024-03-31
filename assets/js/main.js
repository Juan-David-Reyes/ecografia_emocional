document.querySelector('#cta').addEventListener('click', function(event){
    event.preventDefault();

    // Función para procesar una categoría
    function procesarCategoria(selector, includeFiles) {
        // Obtener todas las respuestas seleccionadas
        const questions = document.querySelectorAll(selector);
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
        let modal = document.querySelector('.modalAnswer');
        $(modal).fadeIn(300);

        let includeFile;
        if (score >= 0 && score <= 2) {
            includeFile = includeFiles[0];
        } else if (score >= 3 && score <= 4) {
            includeFile = includeFiles[1];
        } else if (score >= 5 && score <= 8) {
            includeFile = includeFiles[2];
        }

        includePHPFile(includeFile);
    }

    // Función para incluir un archivo PHP
    function includePHPFile(filePath) {
        fetch(filePath)
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del archivo PHP en el documento HTML
            const categoryId = filePath.match(/cat(\d+)/)[1];
            document.getElementById(`includes${categoryId}`).innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el archivo PHP:', error);
        });
    }

    // Procesar cada categoría
    procesarCategoria('#questions .cont_questions.cat1', ['../../App/cat1.baja.php', '../../App/cat1.media.php', '../../App/cat1.alta.php']);
    procesarCategoria('#questions .cont_questions.cat2', ['../../App/cat2.baja.php', '../../App/cat2.media.php', '../../App/cat2.alta.php']);
    procesarCategoria('#questions .cont_questions.cat3', ['../../App/cat3.baja.php', '../../App/cat3.media.php', '../../App/cat3.alta.php']);
    procesarCategoria('#questions .cont_questions.cat4', ['../../App/cat4.baja.php', '../../App/cat4.media.php', '../../App/cat4.alta.php']);
});



// Restablecer las respuestas y ocultar el modal al hacer clic en un botón de redireccionamiento
document.querySelector('.ctaRedirect').addEventListener('click', function(event){
    event.preventDefault();

    let modal = document.querySelector('.modalAnswer');
    const questions = document.querySelectorAll('#questions .cont_questions input');

    if($(modal).is(':visible')){
        $(questions).prop('checked', false);
        $(modal).fadeOut(300);
        window.location.href = 'index.php';
    }
});
