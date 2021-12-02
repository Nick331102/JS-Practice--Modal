const modalOpen = document.querySelector(".open")
const modalContainer = document.querySelector(".modal-container")
const close = document.querySelector(".modal-btn")

modalOpen.addEventListener("click", () => {
    modalContainer.classList.add("show")
})