const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const messageInput = document.querySelector(".text");

const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const messageError = document.querySelector(".message-error");
const alert = document.querySelector(".alert");

const checkIcon = document.querySelector(".check-icon");
const clearBtn = document.querySelector(".clear-btn");

nameInput.addEventListener("input", () => {
  if (nameInput.value.length > 0) {
    const cursorPos = nameInput.selectionStart;
    nameInput.value =
      nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1);

    nameInput.setSelectionRange(cursorPos, cursorPos);
  }

  if (nameInput.value.trim() !== "") {
    nameError.textContent = "";
    nameError.classList.remove("error-active");
    checkIcon.classList.add("check-icon-show");
    clearBtn.classList.add("clear-btn-show");
  } else {
    checkIcon.classList.remove("check-icon-show");
    clearBtn.classList.remove("clear-btn-show");
  }
});

nameInput.addEventListener("keypress", (event) => {
  const char = event.key;

  if (/[0-9]/.test(char)) {
    event.preventDefault();
  }
});

nameInput.addEventListener("paste", (event) => {
  const pasted = (event.clipboardData || window.clipboardData).getData("text");

  if (/\d/.test(pasted)) {
    event.preventDefault();
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim() !== "") {
    emailError.textContent = "";
    emailError.classList.remove("error-active");
    clearBtn.classList.add("clear-btn-show");
    alert.textContent =
      "Make sure you've provided a valid email address so I can contact you";
    alert.classList.add("alert-active");
  } else {
    clearBtn.classList.remove("clear-btn-show");
    alert.textContent = "";
    alert.classList.remove("alert-active");
  }
});

emailInput.addEventListener("input", () => {
  const checkIcon = document.querySelector(".check-icon-email");
  let value = emailInput.value.trim();
  if (value !== "" && value.includes("@") && value.includes(".")) {
    checkIcon.classList.add("check-icon-show");
  } else {
    checkIcon.classList.remove("check-icon-show");
  }
});

messageInput.addEventListener("input", () => {
  if (messageInput.value.trim() !== "") {
    messageError.textContent = "";
    messageError.classList.remove("error-active");
    clearBtn.classList.add("clear-btn-show");
  } else {
    clearBtn.classList.remove("clear-btn-show");
  }
});

document.addEventListener("keydown", (event) => {
  const submitBtn = document.querySelector(".send-btn");

  if (event.key === "Enter") {
    event.preventDefault();

    if (submitBtn) {
      validateForm(event);
    }
  }
});

function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "This field is required";
    nameError.classList.add("error-active");
    checkForErrors();
    isValid = false;
  } else {
    nameError.textContent = "";
    nameError.classList.remove("error-active");
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "This field is required";
    emailError.classList.add("error-active");
    checkForErrors();
    isValid = false;
  } else {
    emailError.textContent = "";
    emailError.classList.remove("error-active");
  }

  let emailValue = emailInput.value.trim();
  const alert = document.querySelector(".alert");

  if (!emailValue.includes("@") && emailValue !== "") {
    emailError.textContent = 'Email address must contain "@"';
    emailError.classList.add("error-active");
    isValid = false;

    if (alert) {
      alert.textContent = "";
      alert.classList.remove("alert-active");
    }
  } else if (emailValue.includes("@") && emailValue !== "") {
    emailError.textContent = "";
    emailError.classList.remove("error-active");
    if (alert) {
      alert.textContent =
        "Make sure you've provided a valid email address so I can contact you";
      alert.classList.add("alert-active");
    }
  } else {
    if (alert) {
      alert.textContent = "";
      alert.classList.remove("alert-active");
    }
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "This field is required";
    messageError.classList.add("error-active");
    checkForErrors();
    isValid = false;
  } else {
    messageError.textContent = "";
    messageError.classList.remove("error-active");
  }

  if (isValid) {
    document.querySelector(".form").submit();
  }

  return isValid;
}

const inputs = document.querySelectorAll("input");
const checkIcons = document.querySelectorAll(".check-icon");
const errors = document.querySelectorAll(".error");

function checkForErrors() {
  let hasError = false;

  errors.forEach((error) => {
    if (error.classList.contains("error-active")) {
      hasError = true;
    }
  });

  if (hasError) {
    clearBtn.classList.add("clear-btn-show");
  } else {
    clearBtn.classList.remove("clear-btn-show");
  }
}

clearBtn.addEventListener("click", () => {
  if (clearBtn) {
    inputs.forEach((input) => {
      input.value = "";
    });
    messageInput.value = "";

    checkIcons.forEach((icon) => {
      icon.classList.remove("check-icon-show");
    });

    errors.forEach((error) => {
      error.textContent = "";
      error.classList.remove("error-active");
    });

    alert.textContent = "";
    alert.classList.remove("alert-active");

    clearBtn.classList.remove("clear-btn-show");
  }
});

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes} ${meridiem}`;

  document.querySelector(".time").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

document.addEventListener("scroll", () => {
  const headers = document.querySelectorAll(".header > *");
  const triggerOffset = 100;

  headers.forEach((header) => {
    const rect = header.getBoundingClientRect();
    const top = rect.top;

    if (top <= triggerOffset) {
      header.classList.add("fade-out");
    } else {
      header.classList.remove("fade-out");
    }
  });
});

document.addEventListener("scroll", () => {
  const details = document.querySelectorAll(".details > *");
  const triggerOffset = 100;

  details.forEach((detail) => {
    const rect = detail.getBoundingClientRect();
    const top = rect.top;

    if (top <= triggerOffset) {
      detail.classList.add("fade-out");
    } else {
      detail.classList.remove("fade-out");
    }
  });
});

document.addEventListener("scroll", () => {
  const socialLinks = document.querySelectorAll(".social-links > *");
  const triggerOffset = 100;

  socialLinks.forEach((link) => {
    const rect = link.getBoundingClientRect();
    const top = rect.top;

    if (top <= triggerOffset) {
      link.classList.add("fade-out");
    } else {
      link.classList.remove("fade-out");
    }
  });
});

// SIDEBAR
const sidebar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const overlay = document.getElementById("overlay");

const media = window.matchMedia("(width  < 650px)");

media.addEventListener("change", (e) => updateNavbar(e));

function updateNavbar(e) {
  const isMobile = e.matches;
  console.log(isMobile);

  if (isMobile) {
    sidebar.setAttribute("inert", "");
  } else {
    sidebar.removeAttribute("inert");
  }
}

updateNavbar(media);

menuBtn.addEventListener("click", () => {
  if (menuBtn) {
    sidebar.classList.add("sidebar-active");
    menuBtn.setAttribute("aria-expanded", "true");
    sidebar.removeAttribute("inert");
  }
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-active");
  menuBtn.setAttribute("aria-expanded", "false");
  sidebar.setAttribute("inert", "");
  portfolioCheckbox.checked = false;
  socialsCheckbox.checked = false;
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-active");
  portfolioCheckbox.checked = false;
  socialsCheckbox.checked = false;
});

const dropdownOverlay = document.getElementById("dropdown-overlay");
const portfolioCheckbox = document.getElementById("portfolio-active");
const socialsCheckbox = document.getElementById("socials-active");

const portfolioDropdown = document.querySelector(".portfolio-dropdown");
const socialsDropdown = document.querySelector(".socials-dropdown");

dropdownOverlay.addEventListener("click", () => {
  portfolioCheckbox.checked = false;
  socialsCheckbox.checked = false;
  updateDropdownInert();
});

function updateDropdownInert() {
  if (portfolioCheckbox.checked) {
    portfolioDropdown.removeAttribute("inert");
  } else {
    portfolioDropdown.setAttribute("inert", "");
  }

  if (socialsCheckbox.checked) {
    socialsDropdown.removeAttribute("inert");
  } else {
    socialsDropdown.setAttribute("inert", "");
  }
}

document.addEventListener('DOMContentLoaded', updateDropdownInert)
portfolioCheckbox.addEventListener("change", updateDropdownInert);
socialsCheckbox.addEventListener("change", updateDropdownInert);
