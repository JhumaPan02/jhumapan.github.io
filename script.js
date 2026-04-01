// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

  // Button interaction
  const btn = document.getElementById("helloBtn");
  const msg = document.getElementById("msg");

  if (btn) {
    btn.addEventListener("click", function () {
      msg.innerText = "Thanks for visiting my page!";
    });
  }

  // Smooth scrolling for navigation links
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    });
  });

});
