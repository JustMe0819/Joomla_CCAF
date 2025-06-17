document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(
    ".custom-menu-wrapper .mod-menu li.deeper.parent > a, .custom-menu-wrapper .mod-menu li.deeper.parent > button"
  );

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Empêche la navigation
        e.stopPropagation(); // Empêche les autres handlers de se déclencher

        const parentLi = this.closest("li");
        const isOpen = parentLi.classList.contains("open");

        // Ferme tous les autres menus
        document.querySelectorAll(".mod-menu li.open").forEach(li => {
          if (li !== parentLi) {
            li.classList.remove("open");
          }
        });

        // Bascule l'état du menu cliqué
        parentLi.classList.toggle("open", !isOpen);
      }
    });
  });
});
