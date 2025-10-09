document.addEventListener("DOMContentLoaded", function () {
  // Botones "Pedir"
  document.querySelectorAll(".pedir-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var product = btn.getAttribute("data-product") || "producto";
      alert(
        "Has pedido: " +
          product +
          "\nPronto nos pondremos en contacto para confirmar."
      );
    });
  });

  // Botones "Ver Más"
  document.querySelectorAll(".btn-producto").forEach(function (btn) {
    btn.addEventListener("click", function () {
      alert("¡Próximamente más detalles de este producto!");
    });
  });
});
