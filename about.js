document.addEventListener("DOMContentLoaded", function () {

  console.log("about.js loaded successfully");


  /* =====================================================
     GALLERY ELEMENTS
  ===================================================== */

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
    document.getElementById("gallery-modal-close");

  const previousButton =
    document.getElementById("gallery-prev");

  const nextButton =
    document.getElementById("gallery-next");


  /* =====================================================
     CHECK THAT GALLERY EXISTS
  ===================================================== */

  if (!galleryImages.length) {

    console.log("No gallery images found.");

    return;
  }


  if (!modal || !modalImage) {

    console.log("Gallery modal not found.");

    return;
  }


  /* =====================================================
     CURRENT IMAGE
  ===================================================== */

  let currentIndex = 0;



  /* =====================================================
     OPEN GALLERY
  ===================================================== */

  function openGallery(index) {

    currentIndex = index;

    const image =
      galleryImages[currentIndex];

    if (!image) {
      return;
    }


    /* Image */

    modalImage.src =
      image.src;

    modalImage.alt =
      image.alt || "Alianna Waggoner";


    /* Caption */

    modalTitle.textContent =
      image.dataset.caption || "";


    /* Photo credit */

    const credit =
      image.dataset.credit || "";


    if (credit) {

      modalCredit.textContent =
        "Photo: " + credit;

    } else {

      modalCredit.textContent =
        "";

    }


    /* Show modal */

    modal.classList.add("active");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );


    /* Prevent page scrolling */

    document.body.style.overflow =
      "hidden";
  }



  /* =====================================================
     CLOSE GALLERY
  ===================================================== */

  function closeGallery() {

    modal.classList.remove("active");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );


    document.body.style.overflow =
      "";


    setTimeout(function () {

      modalImage.src = "";

    }, 250);
  }



  /* =====================================================
     NEXT IMAGE
  ===================================================== */

  function nextImage() {

    currentIndex++;

    if (
      currentIndex >=
      galleryImages.length
    ) {

      currentIndex = 0;

    }


    openGallery(currentIndex);
  }



  /* =====================================================
     PREVIOUS IMAGE
  ===================================================== */

  function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {

      currentIndex =
        galleryImages.length - 1;

    }


    openGallery(currentIndex);
  }



  /* =====================================================
     IMAGE CLICK
  ===================================================== */

  galleryImages.forEach(
    function (image, index) {

      /* Keyboard accessibility */

      image.setAttribute(
        "tabindex",
        "0"
      );


      /* Click */

      image.addEventListener(
        "click",
        function () {

          openGallery(index);

        }
      );


      /* Keyboard */

      image.addEventListener(
        "keydown",
        function (event) {

          if (
            event.key === "Enter" ||
            event.key === " "
          ) {

            event.preventDefault();

            openGallery(index);

          }

        }
      );

    }
  );



  /* =====================================================
     CLOSE BUTTON
  ===================================================== */

  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeGallery
    );

  }



  /* =====================================================
     NEXT BUTTON
  ===================================================== */

  if (nextButton) {

    nextButton.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

        nextImage();

      }
    );

  }



  /* =====================================================
     PREVIOUS BUTTON
  ===================================================== */

  if (previousButton) {

    previousButton.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

        previousImage();

      }
    );

  }



  /* =====================================================
     CLICK BACKGROUND TO CLOSE
  ===================================================== */

  modal.addEventListener(
    "click",
    function (event) {

      if (
        event.target === modal
      ) {

        closeGallery();

      }

    }
  );



  /* =====================================================
     KEYBOARD CONTROLS
  ===================================================== */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        !modal.classList.contains("active")
      ) {

        return;

      }


      /* ESC */

      if (
        event.key === "Escape"
      ) {

        closeGallery();

      }


      /* RIGHT ARROW */

      if (
        event.key === "ArrowRight"
      ) {

        nextImage();

      }


      /* LEFT ARROW */

      if (
        event.key === "ArrowLeft"
      ) {

        previousImage();

      }

    }
  );



  /* =====================================================
     TOUCH SWIPE
  ===================================================== */

  let touchStartX = 0;

  let touchEndX = 0;


  modal.addEventListener(
    "touchstart",
    function (event) {

      touchStartX =
        event.changedTouches[0].screenX;

    }
  );


  modal.addEventListener(
    "touchend",
    function (event) {

      touchEndX =
        event.changedTouches[0].screenX;


      const swipeDistance =
        touchEndX - touchStartX;


      if (
        Math.abs(swipeDistance) < 50
      ) {

        return;

      }


      if (swipeDistance < 0) {

        nextImage();

      } else {

        previousImage();

      }

    }
  );



  console.log(
    "Gallery initialized with " +
    galleryImages.length +
    " images."
  );

});
