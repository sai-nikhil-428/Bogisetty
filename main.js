document.addEventListener("DOMContentLoaded", function () {
  // Typed.js Auto Typing
  if (typeof Typed !== "undefined") {
    new Typed(".typing-text", {
      strings: [
        "Sai Nikhil Bogisetty 😎",
        "currently based in Leawood, Kansas",
        "an ETL Automation Test Lead",
        "ISTQB Certified"
      ],
      typeSpeed: 90,
      backSpeed: 90,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      showCursor: false
    });
  }

  // Scroll-hide Header
  let lastScrollTop = 0;
  const header = document.getElementById("site-header");

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    header.style.top = currentScroll > lastScrollTop ? "-100px" : "0";
    lastScrollTop = Math.max(0, currentScroll);
  });

  // Dark Mode Toggle (Updated)
  const toggleCheckbox = document.getElementById("dark-mode-toggle");
  const html = document.documentElement;

  
  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
  };
  

  // Load Theme from Local Storage
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
  toggleCheckbox.checked = savedTheme === "dark";

  // Toggle Theme on Click
  toggleCheckbox.addEventListener("change", () => {
    applyTheme(toggleCheckbox.checked ? "dark" : "light");
  });

  // Resume Download Animation
  const downloadCheckbox = document.getElementById("download-checkbox");
  if (downloadCheckbox) {
    downloadCheckbox.addEventListener("change", () => {
      if (downloadCheckbox.checked) {
        setTimeout(() => {
          const a = document.createElement("a");
          a.href = "Files/Sai_Nikhil_ETL_QA.pdf";
          a.download = "Sai_Nikhil_ETL_QA.pdf";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          downloadCheckbox.checked = false;
        }, 3900);
      }
    });
  }

  // Team Card Reveal on Scroll
  const teamCards = document.querySelectorAll(".teams-container .card");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    teamCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  };
  if (teamCards.length > 0) {
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
  }

  // Intersection Observer for fade-up
  const animatedCards = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  animatedCards.forEach(card => observer.observe(card));
});
