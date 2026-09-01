document.addEventListener("DOMContentLoaded", function () {

  console.log("About page JavaScript loaded.");


  /* =====================================================
     GALLERY
     ===================================================== */

  const galleryImages = Array.from(
    document.querySelectorAll(".gallery img")
  );

  const modal = document.getElementById("gallery-modal");
  const modalImage = document.getElementById("gallery-modal-image");
  const modalTitle = document.getElementById("galleryTitle");
  const modalCredit = document.getElementById("galleryCredit");

  const closeButton = document.querySelector(".gallery-close");
  const previousButton = document.querySelector(".gallery-prev");
  const nextButton = document.querySelector(".gallery-next");


  /*
     Make sure the gallery exists.
  */

  if (
    galleryImages.length === 0 ||
    !modal ||
    !modalImage
  ) {

    console.log("Gallery elements not found.");

  } else {

    console.log(
      "Gallery found:",
      galleryImages.length,
      "images"
    );


    let currentIndex = 0;


    /* =====================================================
       OPEN IMAGE
       ===================================================== */

    function openGallery(index) {

      currentIndex = index;

      const image = galleryImages[currentIndex];

      if (!image) {
        return;
      }


      /*
         Set the large image
      */

      modalImage.src = image.src;

      modalImage.alt =
        image.alt || "Alianna Waggoner";


      /*
         Get caption information
      */

      const caption =
        image.dataset.caption || "";

      const credit =
        image.dataset.credit || "";


      /*
         Put caption into modal
      */

      if (modalTitle) {
        modalTitle.textContent = caption;
      }


      /*
         Put photo credit into modal
      */

      if (modalCredit) {

        if (credit) {

          modalCredit.textContent =
            "Photo: " + credit;

        } else {

          modalCredit.textContent = "";

        }

      }


      /*
         Show modal
      */

      modal.style.display = "flex";

      document.body.classList.add("modal-open");

    }


    /* =====================================================
       CLOSE IMAGE
       ===================================================== */

    function closeGallery() {

      modal.style.display = "none";

      document.body.classList.remove("modal-open");

    }


    /* =====================================================
       NEXT IMAGE
       ===================================================== */

    function showNext() {

      currentIndex =
        (currentIndex + 1) %
        galleryImages.length;

      openGallery(currentIndex);

    }


    /* =====================================================
       PREVIOUS IMAGE
       ===================================================== */

    function showPrevious() {

      currentIndex =
        (currentIndex - 1 + galleryImages.length) %
        galleryImages.length;

      openGallery(currentIndex);

    }


    /* =====================================================
       IMAGE CLICK EVENTS
       ===================================================== */

    galleryImages.forEach(function (image, index) {

      /*
         Keyboard accessibility
      */

      image.setAttribute("tabindex", "0");


      /*
         Mouse click
      */

      image.addEventListener("click", function () {

        openGallery(index);

      });


      /*
         Keyboard
      */

      image.addEventListener("keydown", function (event) {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          openGallery(index);

        }

      });

    });


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
       PREVIOUS BUTTON
       ===================================================== */

    if (previousButton) {

      previousButton.addEventListener(
        "click",
        function (event) {

          event.stopPropagation();

          showPrevious();

        }
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

          showNext();

        }
      );

    }


    /* =====================================================
       CLICK BACKGROUND TO CLOSE
       ===================================================== */

    modal.addEventListener(
      "click",
      function (event) {

        /*
           Only close when clicking the dark
           background itself.
        */

        if (event.target === modal) {

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

        /*
           Don't do anything if modal is closed.
        */

        if (
          modal.style.display !== "flex"
        ) {

          return;

        }


        /*
           ESC = close
        */

        if (event.key === "Escape") {

          closeGallery();

        }


        /*
           LEFT ARROW = previous
        */

        if (event.key === "ArrowLeft") {

          showPrevious();

        }


        /*
           RIGHT ARROW = next
        */

        if (event.key === "ArrowRight") {

          showNext();

        }

      }
    );


  }


  /* =====================================================
     CONTACT FORM
     ===================================================== */

  const contactForm =
    document.querySelector(".contact-form");


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      function () {

        console.log(
          "Contact form submitted."
        );

      }
    );

  }

});
