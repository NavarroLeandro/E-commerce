//Uso DOMContentLoaded para asegurarme de que el código del buscador se ejecute después de que se cargue completamente el DOM
document.addEventListener("DOMContentLoaded", () => {
  //obtengo la entrada de texto del buscador
  const filtro = document.getElementById("filtro");
  //en la constante card guardo todas las cards
  const cards = document.querySelectorAll(".card");

  //Agrego un evento de escucha para cuando se escriba algo en el campo de texto de busqueda
  filtro.addEventListener("keyup", () => {
    //Obtengo el valor del campo de texto de búsqueda, convierto a minúsculas y se elimino los espacios al inicio y al final
    const textoFiltro = filtro.value.toLowerCase().trim();

    //Recorro todas las tarjetas obtenidas en la constante cards
    cards.forEach((card) => {
      const titulo = card
        .querySelector(".card-title")
        .textContent.toLowerCase();

      //Si el título de la tarjeta incluye el texto de búsqueda, se muestra la tarjeta. Si no, se oculta
      if (titulo.includes(textoFiltro)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
