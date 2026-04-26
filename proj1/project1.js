 // Handle "Start Now" button click
  const btn1 = document.getElementById("startNow");
  btn1.addEventListener("click", () => {
    alert(" Welcome! Let's start growing your business.");
  });

  // Handle "Contact Us" button click
  const btn2 = document.getElementById("contactUs");
  btn2.addEventListener("click", () => {
    window.location.href = "mailto:gurav.gayatri.r@gmail.com"; 
  });
// Select the footer section by class
const footer = document.querySelector(".footer");

// Select the button inside the footer
const footerBtn = footer.querySelector("button");

// Add click event
footerBtn.addEventListener("click", () => {
  alert("Thank You!");
});