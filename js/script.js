document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        this.parentElement.classList.toggle("open");
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024 && nav) {
      nav.classList.remove("active");
      document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("open"));
    }
  });
  
  // ===== DESTINATION MODAL =====
  const destinationModal = document.getElementById("destinationModal");
  const destinationModalImg = document.getElementById("modalImg");  
  const destinationModalTitle = document.getElementById("modalTitle");
  const destinationModalText = document.getElementById("modalText");

  window.openDestinationModal = function (index) {
    const place = destinations[index];
    if (!destinationModal || !destinationModalImg || !destinationModalTitle || !destinationModalText) return;

    destinationModalImg.src = place.img;
    destinationModalTitle.innerText = place.title;
    destinationModalText.innerText = place.text;

    destinationModal.style.display = "flex";
  };

  window.closeDestinationModal = function () {
    if (destinationModal) {
      destinationModal.style.display = "none";
    }
  };

  if (destinationModal) {
    destinationModal.addEventListener("click", function (event) {
      if (event.target === destinationModal) {
        closeDestinationModal();
      }
    });
  }
  const infoModal = document.getElementById("infoModal");

  window.openModal = function (title, desc, img) {
    if (!infoModal) return;

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;

    const modalImg = document.getElementById("modalImg");
    if (modalImg && img) {
      modalImg.src = img;
      modalImg.style.display = "block";
    }
    infoModal.style.display = "flex";
  };

  window.closeModal = function () {
    if (infoModal) {
      infoModal.style.display = "none";
    }
  };

  if (infoModal) {
    infoModal.addEventListener("click", function (event) {
      if (event.target === infoModal) {
        closeModal();
      }
    });
  }

});
function openFoodModal(index) {
  document.getElementById('modalImg').src = indiafood[index].img;
  document.getElementById('modalTitle').textContent = indiafood[index].title;
  document.getElementById('modalText').textContent = indiafood[index].text;
  document.getElementById('indiafoodModal').style.display = 'flex';
}

function closeFoodModal() {
  document.getElementById('indiafoodModal').style.display = 'none';
}

window.onclick = function (event) {
  if (event.target.id === "indiafoodModal") {
    closeFoodModal();
  }
};
