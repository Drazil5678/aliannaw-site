document.addEventListener("DOMContentLoaded", function () {

  console.log("about.js is connected");

  const images = document.querySelectorAll(".arc-gallery img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");

  // When gallery image is clicked
  images.forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
    });
  });

  // Close button click
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Click outside image closes modal
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});
