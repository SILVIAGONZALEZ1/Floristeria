document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.pedir-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var product = btn.getAttribute('data-product') || 'producto';
      alert('Has pedido: ' + product + '\nPronto nos pondremos en contacto para confirmar.');
// scripts.js para la sección Nuestros Productos
// Aquí puedes agregar interactividad futura para los botones "Ver Más" o cargar productos dinámicamente.

document.addEventListener("DOMContentLoaded", function () {
  // Ejemplo: mostrar alerta al hacer clic en "Ver Más"
  document.querySelectorAll(".btn-producto").forEach(function (btn) {
    btn.addEventListener("click", function () {
      alert("¡Próximamente más detalles de este producto!");
    });
  });
});
    });
  });
  document.querySelectorAll('.btn-producto').forEach(function(btn){
    btn.addEventListener('click', function(){
      alert('¡Próximamente más detalles de este producto!');
    });
  });   
});