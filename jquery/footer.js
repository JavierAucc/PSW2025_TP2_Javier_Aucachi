
 $(document).ready(function () {
     $('#subscriptionForm').on('submit', function (e) {
         e.preventDefault(); // Evita el envío del formulario
        // Eliminar cualquier spinner existente para evitar duplicados
     $('#loadingSpinner').remove();
        // Mostrar spinner de carga
        const spinner = `
            <div class="text-center my-3" id="loadingSpinner">
             <div class="spinner-border text-primary" role="status">
                 <span class="visually-hidden">Cargando...</span>
            </div>
            </div>
            `;
    $(this).append(spinner);
    // Simular un retraso de carga antes de mostrar el modal
        setTimeout(() => {
         $('#loadingSpinner').remove(); // Eliminar el spinner
        const modal = new bootstrap.Modal(document.getElementById('thankYouModal')); // Inicializar el modal
         modal.show(); // Mostrar el modal
        }, 2000); // 2 segundos de retraso
     })
});
