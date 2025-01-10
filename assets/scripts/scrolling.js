document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".screen");
    let currentIndex = 0;
  
    function scrollToSection(index) {
      if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: "smooth" });
      }
    }
  
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        currentIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else {
        currentIndex = Math.max(currentIndex - 1, 0);
      }
      scrollToSection(currentIndex);
    });
  });
  