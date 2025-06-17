document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne les iframes com_media
  const iframes = document.querySelectorAll("iframe");

  iframes.forEach((iframe) => {
    if (iframe.src.includes("option=com_media")) {
      iframe.addEventListener("load", function () {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          if (!iframeDoc) return;

          const style = iframeDoc.createElement("style");
          style.innerHTML = `
            .media-breadcrumb,
            .media-disk {
              display: none !important;
            }
          `;
          iframeDoc.head.appendChild(style);
        } catch (e) {
          console.warn("Impossible d'injecter le style dans l'iframe :", e);
        }
      });
    }
  });
});
