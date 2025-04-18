 // JQuery para cargar footer y header
 $(document).ready(function() {
    $("#header").load("../layouts/header.html");
    $("#footer").load("../layouts/footer.html");
});

// Script para Filtros
$(document).ready(function() {
    function updateFilters() {
        let activeCategories = [];
        
        // Recolectar categorías activas
        $('.filter-checkbox:checked').each(function() {
            activeCategories.push($(this).val());
        });

        // Mostrar/ocultar cards según filtros
        $('#rotating-cards .card').each(function() {
            let cardCategory = $(this).data('category');
            if (activeCategories.includes(cardCategory)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        // Actualizar layout de Masonry después de filtrar
        msnry.layout();
    }

    // Evento change en checkboxes
    $('.filter-checkbox').on('change', updateFilters);
});

// Script para Masonry
$(document).ready(function() {
    // Inicializar Masonry
    var grid = $('.gallery-grid')[0];
    var msnry = new Masonry(grid, {
        itemSelector: '.card',
        columnWidth: '.card',
        percentPosition: true
    });

    // Reordenar después de que las imágenes carguen
    imagesLoaded(grid).on('progress', function() {
        msnry.layout();
    });

    // Hacer variable msnry global para que los filtros puedan usarla
    window.msnry = msnry;
});
//efecto hover sobre las cards
$(document).ready(function() {
    // Solo selecciona las cards dentro del contenedor específico
    $('#rotating-cards .card').hover(
        function() {
            $(this).addClass('shadow-lg').css({
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease-in-out'
            });
        },
        function() {
            $(this).removeClass('shadow-lg').css({
                transform: 'scale(1)',
                transition: 'transform 0.3s ease-in-out'
            });
        }
    );
});