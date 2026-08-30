document.addEventListener("DOMContentLoaded", function () {

  const galleryImages = document.querySelectorAll(".gallery img");
  const modal = document.getElementById("gallery-modal");
  const modalImage = document.getElementById("gallery-modal-image");
  const modalCaption = document.getElementById("gallery-modal-caption");
  const modalCredit = document.getElementById("gallery-modal-credit");
  const closeButton = document.querySelector(".gallery-modal-close");

  // Make sure the modal exists before continuing
  if (!modal || !modalImage) {
    console.log("Gallery modal elements not found.");
    return;
  }

  galleryImages.forEach(function (image) {

    // Make images keyboard accessible
    image.setAttribute("tabindex", "0");

    function openGalleryImage() {

      // Get information stored on the image
      const imageSrc = image.src;
      const caption = image.dataset.caption || "";
      const credit = image.dataset.credit || "";

      // Put image information into modal
      modalImage.src = imageSrc;
      modalImage.alt = image.alt || "Alianna Waggoner";

      modalCaption.textContent = caption;
      modalCredit.textContent = credit ? "Photo: " + credit : "";

      // Show modal
      modal.classList.add("active");
      document.body.classList.add("modal-open");
    }

    // Mouse click
    image.addEventListener("click", openGalleryImage);

    // Keyboard accessibility
    image.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGalleryImage();
      }
    });

  });


  // =========================
  // CLOSE MODAL
  // =========================

  function closeGallery() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");

    // Clear image after closing
    setTimeout(function () {
      modalImage.src = "";
    }, 300);
  }


  // X button
  if (closeButton) {
    closeButton.addEventListener("click", closeGallery);
  }


  // Click outside the image to close
  modal.addEventListener("click", function (event) {

    if (
      event.target === modal ||
      event.target.classList.contains("gallery-modal-content")
    ) {
      closeGallery();
    }

  });


  // ESC key closes modal
  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeGallery();
    }

  });


  console.log("Gallery JavaScript loaded successfully.");

});
