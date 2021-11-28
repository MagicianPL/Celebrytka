console.log("Main js");

/* For displaying opinions on page */
const slide = document.querySelector(".slides");
let slides = document.querySelectorAll(".opinion");
let index = 1;
const interval = 7000;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
  setInterval(() => {
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = "1s";
  }, interval);
};

slide.addEventListener("transitionend", () => {
  let slides = document.querySelectorAll(".opinion");
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

startSlide();
