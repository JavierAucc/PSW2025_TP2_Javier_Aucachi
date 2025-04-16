//script para llamar header y footer
$(document).ready(function() {
    $("#header").load("Layouts/header.html");
    
    $("#footer").load("Layouts/footer.html");
});
//script para animar las frases
$(document).ready(function() {
    $(".frase1").hide().fadeIn(4000);
    $(".frase2").hide().fadeIn(4000);
});
//script para el Contador
$(document).ready(function () {
    let count = 0; // Valor inicial del contador
    const target = 500; // Valor final del contador
    const interval = 50; // Tiempo entre incrementos (en ms)
    const increment = Math.ceil(target / (5000 / interval)); // Incremento calculado para 5 segundos

    const counterInterval = setInterval(() => {
        count += increment; // Incrementar el contador
        if (count >= target) {
            count = target; // Asegurarse de no exceder el valor final
            clearInterval(counterInterval); // Detener el contador
        }
        $('#counter').text(`+ ${count}`); // Actualizar el texto del contador
    }, interval);
});
//script para el hover de cards
$(document).ready(function() {
    $('.card').hover(
        function() {
            $(this).addClass('shadow-lg').css({
                transform: 'scale(1.1)', // Agrandar la card
                transition: 'transform 0.3s ease-in-out' // Transición suave
            });
        },
        function() {
            $(this).removeClass('shadow-lg').css({
                transform: 'scale(1)', // Volver al tamaño original
                transition: 'transform 0.3s ease-in-out' // Transición suave
            });
        }
    );
});