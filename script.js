

document.getElementById("menuButton").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    // Cambia la visibilidad del menú (si está visible, se oculta, si está oculto, se muestra)
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });

  window.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var button = document.getElementById("menuButton");
  
    // Si el clic es fuera del botón y del menú, lo ocultamos
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.style.display = "none";
    }
  });