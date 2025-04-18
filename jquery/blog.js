 // JQuery para cargar footer y header
 $(document).ready(function() {
    $("#header").load("../layouts/header.html");
    $("#footer").load("../layouts/footer.html");
});

// Scroll Reveal con IntersectionObserver
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null, // usar el viewport
        threshold: 0.1, // cuando al menos 10% del elemento es visible
        rootMargin: '0px' // sin margen
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // dejar de observar después de revelar
            }
        });
    }, observerOptions);

    // Elementos a observar
    const elementsToReveal = [
        '.article-title',
        '.card',
        '.comment-thread',
        'article',
        '.card-body'
    ];

    // Añadir clase reveal y observar elementos
    elementsToReveal.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('reveal');
            observer.observe(element);
        });
    });
});

// Inicialización de AOS
AOS.init({
    duration: 800,
    once: true
});

// Filtrado por tags
$(document).ready(function() {
    $('.tag').click(function() {
        let selectedTag = $(this).data('tag');
        
        // Actualizar estados activos de los tags
        $('.tag').removeClass('active');
        $(this).addClass('active');
        
        // Filtrar artículos
        if(selectedTag === 'todos') {
            $('[data-tag]').parent().fadeIn();
        } else {
            $('[data-tag]').parent().hide();
            $('[data-tag="' + selectedTag + '"]').parent().fadeIn();
        }
    });

    // Sistema de comentarios
    $('.reply-btn').click(function() {
        let commentThread = $(this).closest('.comment-thread');
        let replyForm = `
            <div class="nested-comment mt-3">
                <div class="d-flex gap-3">
                    <img src="avatar-default.jpg" class="comment-avatar">
                    <div class="flex-grow-1">
                        <textarea class="form-control mb-2" placeholder="Escribe tu respuesta..."></textarea>
                        <button class="btn btn-primary btn-sm">Enviar</button>
                        <button class="btn btn-light btn-sm cancel-reply">Cancelar</button>
                    </div>
                </div>
            </div>
        `;
        
        // Remover formulario existente si hay uno
        commentThread.find('.reply-form').remove();
        // Añadir nuevo formulario
        $(this).closest('.d-flex').after(replyForm);
    });

    // Manejo de likes
    $('.like-btn').click(function() {
        $(this).toggleClass('btn-outline-secondary btn-secondary');
    });

    // Cancelar respuesta
    $(document).on('click', '.cancel-reply', function() {
        $(this).closest('.nested-comment').remove();
    });
});

$(document).ready(function() {
    // Envolver imágenes en contenedor y aplicar clases
    $('img:not(.rounded-circle)').each(function() {
        if (!$(this).parent().hasClass('img-hover-container')) {
            $(this).wrap('<div class="img-hover-container"></div>');
        }
        $(this).addClass('img-hover-effect');
    });

    // Efecto hover
    $('.img-hover-effect').hover(
        function() {
            $(this)
                .addClass('shadow-lg')
                .css({
                    transform: 'scale(1.1) rotate(2deg)',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer',
                    filter: 'brightness(1.1)'
                });
            
            // Añadir overlay con efecto de brillo
            $(this).parent().append('<div class="img-hover-overlay"></div>');
            $('.img-hover-overlay').fadeIn(300);
        },
        function() {
            $(this)
                .removeClass('shadow-lg')
                .css({
                    transform: 'scale(1) rotate(0deg)',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'default',
                    filter: 'brightness(1)'
                });
            
            // Remover overlay
            $('.img-hover-overlay').fadeOut(300, function() {
                $(this).remove();
            });
        }
    );
});