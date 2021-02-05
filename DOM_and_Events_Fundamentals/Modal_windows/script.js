"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const hideModalAndOverlay = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const showModalAndOverlay = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// show window
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", showModalAndOverlay);
}

// close window
btnCloseModal.addEventListener("click", hideModalAndOverlay);
overlay.addEventListener("click", hideModalAndOverlay);

// close window with Escape button
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModalAndOverlay();
  }
});
