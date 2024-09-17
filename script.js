document.getElementById("toggleButton").addEventListener("click", function () {
  var myDiv = document.getElementById("myDiv");
  var backgrouPurpleImage = document.getElementById("purpleImage");
  var teamTwoContainer = document.getElementById("teamTwoContainer");
  var buttonText = this.querySelector(".more-projects"); // Select the text inside the button
  if (myDiv.style.display === "none") {
    myDiv.style.display = "flex"; // Show the div as a flex container
    myDiv.style.flexDirection = "column"; // Show the div as a flex container
    myDiv.style.gap = "2rem"; // Show the div as a flex container
    buttonText.textContent = "View Less"; // Change button text to "View Less"
  } else {
    myDiv.style.display = "none"; // Hide the div
    buttonText.textContent = "View More"; // Change button text to "View More"
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerEl = document.querySelector(".line-parent");

  hamburgerEl.addEventListener("click", () => {
    hamburgerEl.classList.toggle("hamburger--open");
  });

  navEl.addEventListener("click", () => {
    hamburgerEl.classList.remove("hamburger--open");
  });
});

function myFunction() {
  var x = document.getElementById("hamburger-div-content");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

// swiper

var swiper = new Swiper(".swiper", {
  loop: true, // Enables infinite loop
  autoplay: {
    delay: 2000, // Auto transition every 2 seconds
    disableOnInteraction: false, // Keep autoplay even after interaction
  },
  speed: 1000, // Speed of slide transition (in ms)
  breakpoints: {
    640: {
      // For mobile screens (640px and below)
      slidesPerView: 1, // Show 1 slide on mobile
    },
    768: {
      // For tablets and larger screens (above 640px)
      slidesPerView: 2, // Show 2 slides on larger screens
    },
  },
  spaceBetween: 20, // Space between slides
});
