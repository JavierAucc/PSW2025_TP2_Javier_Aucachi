// JQuery para cargar footer y header
$(document).ready(function() {
    $("#header").load("../layouts/header.html");
    $("#footer").load("../layouts/footer.html");
});

 //JQuery para efectos del form
 $(document).ready(function() {
                       
    // --- Validación en Tiempo Real (Inputs y Select) ---
    // Escucha eventos 'input' en campos de texto/email y 'change' en el select
    $('#contactForm').on('input change', '.form-control[required], .form-select[required]', function() {
        validateField($(this));
    });

    // Función Refinada para Validar un Campo (Input, Textarea, Select)
    function validateField(field) {
        let isValid = true;
        let value = field.val(); // No usamos trim() aquí para select

        // Comprobación unificada para requerido (funciona para input, textarea y select)
        // Un select requerido es inválido si su valor es "" (la opción "Selecciona...")
        if (field.prop('required') && (value === null || value.trim() === '')) {
             isValid = false;
        }

        // Validación específica para formato de email (si aplica)
        if (isValid && field.attr('type') === 'email' && value.trim() !== '') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value.trim())) {
                isValid = false;
            }
        }

        // Aplica clases de Bootstrap basado en la validez
        if (!isValid) {
            field.removeClass('is-valid').addClass('is-invalid');
        } else {
            field.removeClass('is-invalid').addClass('is-valid');
        }
        return isValid;
    }

    // --- Envío del Formulario ---
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Previene el envío normal

        let form = $(this);
        let isValidForm = true;

        // Resetea estados visuales previos
        form.removeClass('was-validated');
        form.find('.form-control, .form-select').removeClass('is-invalid is-valid'); // Limpia clases antes de validar

        // Valida TODOS los campos requeridos (incluyendo select) antes de enviar
        form.find('.form-control[required], .form-select[required]').each(function() {
            // Ejecuta la validación y actualiza isValidForm si algún campo falla
            if (!validateField($(this))) {
                isValidForm = false;
            }
        });

        // Añade la clase para que Bootstrap muestre todos los mensajes de feedback
        form.addClass('was-validated');

        // Si algún campo falló la validación, detiene el proceso
        if (!isValidForm) {
             console.log("Formulario inválido.");
            return;
        }
        const submitButton = $('#submitButton');
        const spinner = $('#loadingSpinner');
        const buttonText = $('#buttonText');

        // Mostrar Spinner y deshabilitar botón
        submitButton.prop('disabled', true);
        spinner.removeClass('d-none'); // Muestra el spinner (equivalente a .show() para d-none)
        if(buttonText.length) buttonText.text('Enviando...'); // Cambia texto si el span existe

        // Simulación de envío (reemplazar con tu llamada AJAX)
        setTimeout(function() {
            // Ocultar Spinner y rehabilitar botón
            spinner.addClass('d-none'); // Oculta el spinner
             if(buttonText.length) buttonText.text('Enviar Mensaje'); // Restaura texto
            submitButton.prop('disabled', false);

            // Mostrar Modal de Confirmación
            // Asegúrate que tu modal tenga id="confirmationModal"
            var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
            confirmationModal.show();

            // Resetear formulario y estados de validación
            form[0].reset();
            form.removeClass('was-validated');
            form.find('.form-control, .form-select').removeClass('is-valid is-invalid');

        }, 1500); // Simula 1.5 segundos de espera
    });
 });
//efecto hover
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
})