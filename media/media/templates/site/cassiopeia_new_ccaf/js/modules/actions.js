document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".action-icon");
  const contents = document.querySelectorAll(".action-content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");

      contents.forEach(content => {
        content.style.display = content.id === targetId ? "block" : "none";
      });
    });
  });
});

