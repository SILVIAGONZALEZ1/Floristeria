












document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.pedir-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var product = btn.getAttribute('data-product') || 'producto';
      alert('Has pedido: ' + product + '\nPronto nos pondremos en contacto para confirmar.');
    });
  });
});
