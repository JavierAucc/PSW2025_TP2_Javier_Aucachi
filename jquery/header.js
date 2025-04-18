$(document).ready(function () {
    // Cambiar el color del navbar y el ícono del botón
    $("#colorToggle").on("click", function () {
        const navbar = $("#navbar");
        const icon = $("#iconMode");
        const navLinks = $("#navbarNav .nav-link"); // Seleccionar los enlaces del navbar

        // Alternar entre modo oscuro y claro
        if (navbar.hasClass("bg-dark")) {
            // Cambiar a modo claro
            navbar.removeClass("bg-dark navbar-dark").addClass("bg-white navbar-light border border-dark fs-2");
            navLinks.removeClass("hover-fluor").addClass("hover-dark"); // Cambiar efecto hover
            icon.attr("src", "../multimedia/images/icons/luna.png"); // Cambiar a luna
            icon.attr("alt", "Modo oscuro");
        } else {
            // Cambiar a modo oscuro probando
            navbar.removeClass("bg-white navbar-light border border-dark fs-2").addClass("bg-dark navbar-dark");
            navLinks.removeClass("hover-dark").addClass("hover-fluor"); // Cambiar efecto hover
            icon.attr("src", "../multimedia/images/icons/sol.png"); // Cambiar a sol
            icon.attr("alt", "Modo claro");
        }
    });
});

$(document).ready(function () {
    // Efecto hover para enlaces en modo oscuro (fluor)
    $(document).on("mouseenter", ".hover-fluor", function () {
        $(this).addClass("bg-success text-dark"); // Clase de Bootstrap para texto verde
    }).on("mouseleave", ".hover-fluor", function () {
        $(this).removeClass("bg-success text-dark"); // Quitar clase de texto verde
    });
});

$(document).ready(function () {
    // Efecto hover para enlaces en modo claro (oscuro)
     $(document).on("mouseenter", ".hover-dark", function () {
         $(this).addClass(" bg-dark text-white"); // Clase de Bootstrap para texto negro
     }).on("mouseleave", ".hover-dark", function () {
         $(this).removeClass("bg-dark text-white"); // Quitar clase de texto negro
     });
 });

 $(document).ready(function () {
    // Manejar el submenú con hover
    $("#clasesDropdown").parent().hover(
        function () {
            $(this).find('.dropdown-menu').addClass('show'); // Mostrar el submenú
        },
        function () {
            $(this).find('.dropdown-menu').removeClass('show'); // Ocultar el submenú
        }
    );
    
});

$(document).ready(function () {
    // Efecto hover para elementos del submenú
    $(document).on("mouseenter", "#clasesDropdown + .dropdown-menu .dropdown-item", function () {
        $(this).addClass("bg-success text-dark"); // Fondo verde y texto oscuro
    }).on("mouseleave", "#clasesDropdown + .dropdown-menu .dropdown-item", function () {
        $(this).removeClass("bg-success text-dark"); // Quitar fondo verde y texto oscuro
    });
});

$(document).ready(function () {
    // Aplicar efecto fadeIn a la imagen del título
    $(".titulo img").hide().fadeIn(3000); // Ocultar inicialmente y luego mostrar con fadeIn en 2 segundos
    $(".loggym img").hide().fadeIn(3000); // Ocultar inicialmente y luego mostrar con fadeIn en 2 segundos
});