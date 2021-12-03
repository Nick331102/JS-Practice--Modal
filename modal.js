const modalOpen = document.querySelector(".open")
const modalContainer = document.querySelector(".modal-container")
const modalClose = document.querySelector(".modal-btn")

modalOpen.addEventListener("click", () => {
    modalContainer.classList.add("show")
})
modalClose.addEventListener("click", () => {
    modalContainer.classList.remove("show")
})

