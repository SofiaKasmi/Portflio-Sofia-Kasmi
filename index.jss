// --- Script d'interaction du portfolio ---

document.addEventListener("DOMContentLoaded", function() {
  const ilepsItem = document.getElementById("ileps-link");

  if (ilepsItem) {
    // Curseur cliquable
    ilepsItem.style.cursor = "pointer";

    // Clique : redirection vers le site officiel
    ilepsItem.addEventListener("click", function() {
      window.open("https://www.ileps.fr", "_blank");
    });

    // Animation visuelle au survol
    ilepsItem.addEventListener("mouseenter", function() {
      ilepsItem.style.backgroundColor = "#EADDF1";
      ilepsItem.style.transform = "scale(1.03)";
      ilepsItem.style.transition = "all 0.3s ease";
    });

    ilepsItem.addEventListener("mouseleave", function() {
      ilepsItem.style.backgroundColor = "transparent";
      ilepsItem.style.transform = "scale(1)";
    });
  }
});
