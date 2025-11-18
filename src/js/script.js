const carousel = document.querySelector('.carousel__container');
const nextButton = document.querySelector(".carousel__button--next");
const prevButton = document.querySelector(".carousel__button--prev");
const premierItem = document.querySelector(".carousel__item");

if (carousel) {
    prevButton.addEventListener("click", (evt) => {
        carousel.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
    })
    nextButton.addEventListener("click", (evt) => {
        carousel.scrollBy({ left: +premierItem.clientWidth, behavior: "smooth" });
    })
}