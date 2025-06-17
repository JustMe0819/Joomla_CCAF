document.addEventListener('DOMContentLoaded', function () {
  // Toggle affichage détails adhérent
  const toggle = document.getElementById('adhesionToggle');
  const details = document.getElementById('adhesionDetails');
  if (toggle && details) {
    toggle.addEventListener('change', function () {
      if (this.checked) {
        details.classList.remove('adh-hidden');
      } else {
        details.classList.add('adh-hidden');
      }
    });
  }

  // Gestion boutons montants préréglés + champ personnalisé
  const amountButtons = document.querySelectorAll(".amount-btn");
  const customAmount = document.querySelector(".custom-amount");

  if (amountButtons.length && customAmount) {
    amountButtons.forEach(btn => {
      btn.addEventListener("click", function () {
        // Désactive tous les boutons
        amountButtons.forEach(b => b.classList.remove("active"));
        // Active le bouton cliqué
        this.classList.add("active");
        // Vide le champ personnalisé
        customAmount.value = "";
      });
    });

    customAmount.addEventListener("input", () => {
      // Si on écrit un montant perso, désactive tous les boutons
      amountButtons.forEach(b => b.classList.remove("active"));
    });
  }
});
