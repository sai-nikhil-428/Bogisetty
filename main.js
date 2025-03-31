document.addEventListener("DOMContentLoaded", function () {
  // === Typed.js Auto Typing ===
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

  // === Scroll-hide Header ===
  let lastScrollTop = 0;
  const header = document.getElementById("site-header");

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    header.style.top = currentScroll > lastScrollTop ? "-100px" : "0";
    lastScrollTop = Math.max(0, currentScroll);
  });

  // === Dark Mode Toggle + Persistence ===
  const toggleCheckbox = document.getElementById("dark-mode-toggle");
  const html = document.documentElement;

  if (localStorage.getItem("theme") === "light") {
    html.setAttribute("data-theme", "light");
    toggleCheckbox.checked = false;
  } else {
    html.setAttribute("data-theme", "dark");
    toggleCheckbox.checked = true;
  }

  toggleCheckbox.addEventListener("change", () => {
    const theme = toggleCheckbox.checked ? "dark" : "light";
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });

  // === Resume Download Animation + Trigger ===
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
        }, 3900); // Matches animation delay
      }
    });
  }

  // === Reveal Team Cards on Scroll (Optional Animation Feature) ===
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

  // If team cards exist, run scroll animation
  if (teamCards.length > 0) {
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
  }
});


document.addEventListener("DOMContentLoaded", function () {
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

