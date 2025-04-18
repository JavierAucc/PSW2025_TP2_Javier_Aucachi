// JQuery para cargar footer y header
$(document).ready(function() {
    $("#header").load("../layouts/header.html");
    $("#footer").load("../layouts/footer.html");
});
//efecto en cards
$(document).ready(function() {
    // Hover para rotar/mostrar info trasera
    $('#rotating-cards .card2-wrapper').hover(
        function() {
            // Mouse enter
            const front = $(this).find('.card2-front');
            const back = $(this).find('.card2-back');

            front.fadeOut(300, function() {
                back.removeClass('d-none').fadeIn(300);
            });
        },
        function() {
            // Mouse leave
            const front = $(this).find('.card2-front');
            const back = $(this).find('.card2-back');

            back.fadeOut(300, function() {
                back.addClass('d-none');
                front.fadeIn(300);
            });
        }
    );
});
//Efecto en cards back
$(document).ready(function() {
    // Esto se puede adaptar al evento que muestra .card2-back (por ejemplo al hacer hover o click)
    $('.card2-back').on('mouseenter', function () {
        $(this).find('.progress-bar').each(function() {
            var $this = $(this);
            var percentage = $this.data('percentage');

            $this.stop().animate({
                width: percentage + '%'
            }, 1000);
        });
    });

    // Opcional: reiniciar al salir
    $('.card2-back').on('mouseleave', function () {
        $(this).find('.progress-bar').stop().animate({
            width: '0%'
        }, 500);
    });
});
//Efecto rotacion en estrellas
$(document).ready(function () {
    $('.star-rating').each(function () {
        const rating = $(this).data('rating');
        const stars = $(this).find('.star');

        stars.each(function (i) {
            const star = $(this);
            setTimeout(() => {
                if (i < rating) {
                    star.text('★')
                        .removeClass('empty')
                        .addClass('filled');
                } else {
                    star.text('☆')
                        .removeClass('filled')
                        .addClass('empty');
                }
                star.css('opacity', 1);
            }, i * 150);
        });
    });
});
