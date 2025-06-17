document.addEventListener("DOMContentLoaded", function () {
  // Gérer l'ouverture et la fermeture des thèmes
  document.querySelectorAll(".faq-theme-toggle").forEach(theme => {
    const questionsBlock = theme.nextElementSibling;

    theme.addEventListener("click", () => {
      const isOpen = theme.classList.contains("active");

      // Fermer tous les autres thèmes
      document.querySelectorAll(".faq-theme-toggle").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".faq-questions").forEach(q => q.classList.remove("open"));

      if (!isOpen) {
        theme.classList.add("active");
        questionsBlock.classList.add("open");
      }
    });
  });

  // Gérer les réponses individuelles (questions)
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const isActive = btn.classList.contains("active");

      // Fermer toutes les autres réponses
      document.querySelectorAll(".faq-question").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".faq-answer").forEach(ans => ans.style.maxHeight = '0');

      // Ouvrir si pas déjà actif
      if (!isActive) {
        btn.classList.add("active");
        const answer = btn.nextElementSibling;
        answer.style.maxHeight = "300px"; // ou 'fit-content' si tu gères auto
      }
    });
  });
});
