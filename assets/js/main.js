document.querySelector('#cta').addEventListener('click', function(event){

    event.preventDefault();

    function cat1(){

        // Obtener todas las respuestas seleccionadas
        const questions = document.querySelectorAll('#questions .cont_questions.cat1');
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
        let modal = document.querySelector('.modalAnswer');
    
        if (score >= 0 && score <= 2) {

            $(modal).fadeIn(300);

            function includePHPFile(filePath) {
                fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    // Insertar el contenido del archivo PHP en el documento HTML
                    document.getElementById('includes1').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar el archivo PHP:', error);
                });
            }
            
            // Llamar a la función para incluir el archivo PHP cuando sea necesario
            includePHPFile('../../App/cat1.baja.php');


            //console.log("Bajo");


        } else if (score >= 3 && score <= 4) {
            $(modal).fadeIn(300);

            function includePHPFile(filePath) {
                fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    // Insertar el contenido del archivo PHP en el documento HTML
                    document.getElementById('includes1').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar el archivo PHP:', error);
                });
            }
            
            // Llamar a la función para incluir el archivo PHP cuando sea necesario
            includePHPFile('../../App/cat1.media.php');

            //console.log("Medio");
        } else if (score >= 5 && score <= 8) {
            $(modal).fadeIn(300);

            function includePHPFile(filePath) {
                fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    // Insertar el contenido del archivo PHP en el documento HTML
                    document.getElementById('includes1').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar el archivo PHP:', error);
                });
            }
            
            // Llamar a la función para incluir el archivo PHP cuando sea necesario
            includePHPFile('../../App/cat1.baja.php');

            //console.log("Alto");
        }
    }

    function cat2(){

        // Obtener todas las respuestas seleccionadas
        const questions = document.querySelectorAll('#questions .cont_questions.cat2');
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
        let modal = document.querySelector('.modalAnswer');
    
        if (score >= 0 && score <= 2) {
            //response = 'Bajo';
            $(modal).fadeIn(300);
            
            function includePHPFile(filePath) {
                fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    // Insertar el contenido del archivo PHP en el documento HTML
                    document.getElementById('includes2').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar el archivo PHP:', error);
                });
            }
            
            // Llamar a la función para incluir el archivo PHP cuando sea necesario
            includePHPFile('../../App/cat2.baja.php');
            
            //console.log("Bajo");
        } else if (score >= 3 && score <= 4) {
            $(modal).fadeIn(300);
            
            function includePHPFile(filePath) {
                fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    // Insertar el contenido del archivo PHP en el documento HTML
                    document.getElementById('includes2').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar el archivo PHP:', error);
                });
            }
            
            // Llamar a la función para incluir el archivo PHP cuando sea necesario
            includePHPFile('../../App/cat2.media.php');
            
            //console.log("Medio");
        } else if (score >= 5 && score <= 8) {
            $(modal).fadeIn(300);
            
            function includePHPFile(filePath) {
                fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    // Insertar el contenido del archivo PHP en el documento HTML
                    document.getElementById('includes2').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar el archivo PHP:', error);
                });
            }
            
            // Llamar a la función para incluir el archivo PHP cuando sea necesario
            includePHPFile('../../App/cat2.alta.php');
            
            //console.log("Alto");
        }
    }

    function cat3(){

        // Obtener todas las respuestas seleccionadas
        const questions = document.querySelectorAll('#questions .cont_questions.cat3');
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
        let modal = document.querySelector('.modalAnswer');
    
        if (score >= 0 && score <= 2) {
            //response = 'Bajo';
            $(modal).fadeIn(300);
            
            function includePHPFile(filePath) {
                fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    // Insertar el contenido del archivo PHP en el documento HTML
                    document.getElementById('includes3').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar el archivo PHP:', error);
                });
            }
            
            // Llamar a la función para incluir el archivo PHP cuando sea necesario
            includePHPFile('../../App/cat3.baja.php');
            
            //console.log("Bajo");
        } else if (score >= 3 && score <= 4) {
            $(modal).fadeIn(300);
            
            function includePHPFile(filePath) {
                fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    // Insertar el contenido del archivo PHP en el documento HTML
                    document.getElementById('includes3').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar el archivo PHP:', error);
                });
            }
            
            // Llamar a la función para incluir el archivo PHP cuando sea necesario
            includePHPFile('../../App/cat3.media.php');
            
            //console.log("Medio");
        } else if (score >= 5 && score <= 8) {
            $(modal).fadeIn(300);
            
            function includePHPFile(filePath) {
                fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    // Insertar el contenido del archivo PHP en el documento HTML
                    document.getElementById('includes3').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar el archivo PHP:', error);
                });
            }
            
            // Llamar a la función para incluir el archivo PHP cuando sea necesario
            includePHPFile('../../App/cat3.alta.php');
            
            //console.log("Alto");
        }
    }

    cat1();
    cat2();
    cat3();

});















document.querySelector('.ctaRedirect').addEventListener('click', function(event){
    event.preventDefault();

    let modal = document.querySelector('.modalAnswer');
    const questions = document.querySelectorAll('#questions .cont_questions input');

    if($(modal).is(':visible')){

        $(questions).prop('checked', false);
        $(modal).fadeOut(300);
    }
});