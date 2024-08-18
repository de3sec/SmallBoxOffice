document.getElementById("toggleButton").addEventListener("click", function () {
  var myDiv = document.getElementById("myDiv");
  var backgrouPurpleImage = document.getElementById("purpleImage");
  var buttonText = this.querySelector(".more-projects"); // Select the text inside the button

  console.log("keke" + backgrouPurpleImage);
  if (myDiv.style.display === "none") {
    myDiv.style.display = "flex"; // Show the div as a flex container
    myDiv.style.flexDirection = "column"; // Show the div as a flex container
    myDiv.style.gap = "2rem"; // Show the div as a flex container
    buttonText.textContent = "View Less"; // Change button text to "View Less"
    backgrouPurpleImage.style.bottom = "355.3rem";
  } else {
    myDiv.style.display = "none"; // Hide the div
    buttonText.textContent = "View More"; // Change button text to "View More"
  }
});
