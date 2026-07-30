document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupBackToTop();
  setupContactForm();
});

// ---------- Mobile menu toggle ----------

function setupMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close the menu automatically when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// ---------- Back to top button ----------

function setupBackToTop() {
  const backToTopButton = document.getElementById("backToTop");
  if (!backToTopButton) return;

  // Show the button only after scrolling down a bit
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const errorMessage = document.getElementById("formError");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      errorMessage.textContent = "Please fill in all fields.";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return;
    }

    if (message.length < 10) {
      errorMessage.textContent = "Message should be at least 10 characters long.";
      return;
    }

    errorMessage.textContent = "";
    alert("Thanks for reaching out! I'll get back to you soon.");
    form.reset();
  });

  [nameInput, emailInput, messageInput].forEach((field) => {
    field.addEventListener("input", () => {
      errorMessage.textContent = "";
    });
  });
}