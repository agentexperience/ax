// Defer attaching listeners until the DOM is ready to avoid parser work on first paint.
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".link-to-email-signup");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const form = document.getElementById("email-signup-form");
      if (!form) return;
      form.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const input = form.querySelector("input");
        if (input instanceof HTMLInputElement) {
          input.focus();
        }
      }, 500);
    });
  });

  const form = document.getElementById("email-signup-form");
  const buttonText = document.getElementById("email-signup-btn");
  const checkIcon = document.getElementById("email-signup-check-icon");

  // Keep form UX behavior while running from a deferred script.
  if (!(form instanceof HTMLFormElement) || !buttonText || !checkIcon) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    buttonText.style.opacity = "0";

    const formData = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setTimeout(() => {
          checkIcon.style.opacity = "1";
          setTimeout(() => {
            buttonText.style.opacity = "1";
            checkIcon.style.opacity = "0";
            form.reset();
          }, 3000);
        }, 200);
      })
      .catch((error) => {
        alert(error);
      });
  });
});
