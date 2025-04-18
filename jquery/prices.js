  // JQuery para cargar footer y header
  $(document).ready(function() {
    $("#header").load("../layouts/header.html");
    $("#footer").load("../layouts/footer.html");
});

// Script para Toggle Mensual/Anual
$(document).ready(function() {
    $('#planToggle').on('change', function() {
        if ($(this).is(':checked')) {
            $('.price-monthly').hide();
            $('.price-annual').show();
        } else {
            $('.price-annual').hide();
            $('.price-monthly').show();
        }
    });
});

 // Script para Resaltado de Tabla
 $(document).ready(function() {
    let lastHighlightedCol = null;
    // Resaltar columna completa
    $('.table td, .table th').hover(
        function() {
            let index = $(this).index();
            if (lastHighlightedCol !== null) {
                $('.table tr').each(function() {
                    $(this).find('td, th').eq(lastHighlightedCol)
                        .css('background-color','');
                });
            }
            $('.table tr').each(function() {
                $(this).find('td, th').eq(index)
                    .css('background-color', 'rgba(50, 255, 50, 0.3)');
            });
            lastHighlightedCol = index;
        },
        function() {
            if (!$(this).is(':hover')) {
                let index = $(this).index();
                $('.table tr').each(function() {
                    $(this).find('td, th').eq(index)
                        .css('background-color', '');
                });
                lastHighlightedCol = null;
            }
        }
    );
});

//Script para Tooltips
$(document).ready(function() {
    // Inicializar todos los tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});