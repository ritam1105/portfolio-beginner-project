// 1. Typing effect in the hero section
const words = ["Frontend Developer", "Web Designer", "Fast Learner"];
let wordIndex = 0;
let letterIndex = 0;
let deleting = false;
const typingEl = document.getElementById("typing");

function type() {
  const word = words[wordIndex];

  if (deleting) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  typingEl.textContent = word.substring(0, letterIndex);

  let speed = deleting ? 50 : 100;

  if (!deleting && letterIndex === word.length) {
    deleting = true;
    speed = 1500; // wait before deleting
  } else if (deleting && letterIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(type, speed);
}
type();

// 2. Mobile menu
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("show");
});

// close the menu when a link is clicked
document.querySelectorAll("#menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("show");
  });
});

// 3. Dark / light mode
const themeBtn = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// 4. Skill bars fill when you scroll to them
const skillSection = document.getElementById("skills");
let filled = false;

function fillBars() {
  const top = skillSection.getBoundingClientRect().top;

  if (!filled && top < window.innerHeight - 100) {
    document.querySelectorAll(".fill").forEach(function (bar) {
      bar.style.width = bar.dataset.width + "%";
    });
    filled = true;
  }
}
window.addEventListener("scroll", fillBars);
fillBars();

// 5. Contact form check
const form = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMsg.textContent = "Please fill in all the fields.";
    formMsg.style.color = "crimson";
  } else if (!email.includes("@")) {
    formMsg.textContent = "Please enter a valid email.";
    formMsg.style.color = "crimson";
  } else {
    formMsg.textContent = "Thanks " + name + "! Your message was sent.";
    formMsg.style.color = "green";
    form.reset();
  }
});

// 6. Footer year
document.getElementById("year").textContent = new Date().getFullYear();
