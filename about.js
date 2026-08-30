```javascript
document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     GALLERY ELEMENTS
     ========================================= */

  const galleryImages =
    document.querySelectorAll(".gallery img");

  const modal =
    document.getElementById("gallery-modal");

  const modalImage =
    document.getElementById("gallery-modal-image");

  const modalTitle =
    document.getElementById("galleryTitle");

  const modalCredit =
    document.getElementById("galleryCredit");

  const closeButton =
    document.getElementById("gallery-close");

  const previousButton =
    document.getElementById("gallery-prev");

  const nextButton =
    document.getElementById("gallery-next");


  /* =========================================
     CURRENT IMAGE
     ========================================= */

  let currentIndex = 0;


  /* =========================================
     OPEN IMAGE
     ========================================= */

  function openImage(index) {

    if (!galleryImages.length) {
      return;
    }

    currentIndex = index;

    const image =
      galleryImages[currentIndex];

    modalImage.src = image.src;

    modalImage.alt =
      image.alt || "Alianna Waggoner";

    modalTitle.textContent =
      image.dataset.caption || "";

    modalCredit.textContent =
      image.dataset.credit
        ? "Photo: " + image.dataset.credit
        : "";

    modal.classList.add("active");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

  }


  /* =========================================
     CLOSE IMAGE
     ========================================= */

  function closeImage() {

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

  }


  /* =========================================
     NEXT IMAGE
     ========================================= */

  function nextImage() {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {
      currentIndex = 0;
    }

    openImage(currentIndex);

  }


  /* =========================================
     PREVIOUS IMAGE
     ========================================= */

  function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = galleryImages.length - 1;
    }

    openImage(currentIndex);

  }


  /* =========================================
     IMAGE CLICK
     ========================================= */

  galleryImages.forEach(function (image, index) {

    image.setAttribute("tabindex", "0");


    image.addEventListener("click", function () {

      openImage(index);

    });


    /* Keyboard accessibility */

    image.addEventListener("keydown", function (event) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        openImage(index);

      }

    });

  });


  /* =========================================
     BUTTONS
     ========================================= */

  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeImage
    );

  }


  if (nextButton) {

    nextButton.addEventListener(
      "click",
      nextImage
    );

  }


  if (previousButton) {

    previousButton.addEventListener(
      "click",
      previousImage
    );

  }


  /* =========================================
     CLICK OUTSIDE IMAGE
     ========================================= */

  modal.addEventListener("click", function (event) {

    if (event.target === modal) {

      closeImage();

    }

  });


  /* =========================================
     KEYBOARD CONTROLS
     ========================================= */

  document.addEventListener("keydown", function (event) {

    if (
      !modal.classList.contains("active")
    ) {
      return;
    }


    if (event.key === "Escape") {

      closeImage();

    }


    if (event.key === "ArrowRight") {

      nextImage();

    }


    if (event.key === "ArrowLeft") {

      previousImage();

    }

  });


  console.log(
    "Alianna About page JavaScript loaded successfully."
  );

});
```
