const carousel = document.querySelector('.carousel__container');
const nextButton = document.querySelector(".carousel__button--next");
const prevButton = document.querySelector(".carousel__button--prev");

if (carousel) {
    prevButton.addEventListener("click", (evt) => {
        carousel.scrollBy({ left: -260, behavior: "smooth" });
    })
    nextButton.addEventListener("click", (evt) => {
        carousel.scrollBy({ left: +260, behavior: "smooth" });
    })
}

console.log("prevButton :", prevButton);
console.log("nextButton :", nextButton);