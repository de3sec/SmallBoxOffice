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
    backgrouPurpleImage.style.bottom = "363.3rem";
    // teamTwoContainer.style.backgroundImage =
    //   "url(public/vector-130.svg) , url(public/Vector 133.svg), url(public/Vector 133.svg)";
    // teamTwoContainer.style.backgroundRepeat = "no-repeat, no-repeat, no-repeat";
    // teamTwoContainer.style.backgroundPosition =
    //   "top center, center center, bottom center";
  } else {
    myDiv.style.display = "none"; // Hide the div
    buttonText.textContent = "View More"; // Change button text to "View More"
    // teamTwoContainer.style.backgroundImage = "url(public/vector-130.svg)";
    // teamTwoContainer.style.backgroundRepeat = "no-repeat";
    // teamTwoContainer.style.backgroundPosition = "top center";
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
