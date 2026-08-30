document.addEventListener("DOMContentLoaded", function () {

  console.log("about.js is connected");

  const images = document.querySelectorAll(".arc-gallery img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");

document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll(".gallery img");

  const modal = document.getElementById("galleryModal");
  const modalImage = document.getElementById("galleryModalImage");

  const title = document.getElementById("galleryTitle");
  const credit = document.getElementById("galleryCredit");

  const closeButton = document.getElementById("galleryClose");
  const previousButton = document.getElementById("galleryPrev");
  const nextButton = document.getElementById("galleryNext");

  let currentIndex = 0;


  /* =========================
     SHOW IMAGE
     ========================= */

  function showImage(index) {

    if (index < 0) {
      index = images.length - 1;
    }

    if (index >= images.length) {
      index = 0;
    }

    currentIndex = index;

    const image = images[currentIndex];

    modalImage.src = image.src;
    modalImage.alt = image.alt;

    title.textContent = image.dataset.title || "";
    credit.textContent = image.dataset.credit || "";

  }


  /* =========================
     OPEN GALLERY
     ========================= */

  images.forEach(function (image, index) {

    image.addEventListener("click", function () {

      currentIndex = index;

      showImage(currentIndex);

      modal.style.display = "flex";

      document.body.style.overflow = "hidden";

    });

  });


  /* =========================
     CLOSE GALLERY
     ========================= */

  function closeGallery() {

    modal.style.display = "none";

    document.body.style.overflow = "";

  }


  closeButton.addEventListener("click", closeGallery);


  /* Click outside image */

  modal.addEventListener("click", function (event) {

    if (event.target === modal) {
      closeGallery();
    }

  });


  /* =========================
     NEXT / PREVIOUS
     ========================= */

  nextButton.addEventListener("click", function (event) {

    event.stopPropagation();

    showImage(currentIndex + 1);

  });


  previousButton.addEventListener("click", function (event) {

    event.stopPropagation();

    showImage(currentIndex - 1);

  });


  /* =========================
     KEYBOARD CONTROLS
     ========================= */

  document.addEventListener("keydown", function (event) {

    if (modal.style.display !== "flex") {
      return;
    }

    if (event.key === "Escape") {
      closeGallery();
    }

    if (event.key === "ArrowRight") {
      showImage(currentIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      showImage(currentIndex - 1);
    }

  });

});

});
