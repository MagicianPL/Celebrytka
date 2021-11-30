/* For hamburger menu */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function mobileMenu() {
  navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);
navMenu.addEventListener("click", mobileMenu);

/* For displaying products on second (products) page */
const firstDiv = document.querySelector(".first-product");
const secondDiv = document.querySelector(".second-product");
const thirdDiv = document.querySelector(".third-product");

const showProducts = () => {
  const firstDivRect = firstDiv.getBoundingClientRect();
  const firstDivY = firstDivRect.top + firstDivRect.height / 2;

  const secondDivRect = secondDiv.getBoundingClientRect();
  const secondDivY = secondDivRect.top + secondDivRect.height / 2;

  const thirdDivRect = thirdDiv.getBoundingClientRect();
  const thirdDivY = thirdDivRect.top + thirdDivRect.height / 2;

  if (firstDivY < window.innerHeight) {
    firstDiv.classList.add("slide-from-side");
  }
  if (secondDivY < window.innerHeight) {
    secondDiv.classList.add("slide-from-side");
  }
  if (thirdDivY < window.innerHeight) {
    thirdDiv.classList.add("slide-from-side");
  }
};
/* ********************************************************* */

/* For slide Gallery */
const galleryUl = document.querySelector(".masonry-gallery");

const slideGallery = () => {
  let galleryY =
    galleryUl.getBoundingClientRect().top +
    galleryUl.getBoundingClientRect().height / 20;

  if (galleryY < window.innerHeight) {
    galleryUl.classList.add("show-gallery");
  }
};

/* For slide information on localization page */
const phoneNumber = document.querySelector(".phone-num");
const messenger = document.querySelector(".messenger");
const address = document.querySelector(".address");
const map = document.querySelector(".map");

const showInfo = () => {
  if (phoneNumber.getBoundingClientRect().top < window.innerHeight) {
    phoneNumber.classList.add("show-info");
  }

  if (messenger.getBoundingClientRect().top < window.innerHeight) {
    messenger.classList.add("show-info");
  }

  if (address.getBoundingClientRect().top < window.innerHeight) {
    address.classList.add("show-info");
  }

  if (map.getBoundingClientRect().top < window.innerHeight) {
    map.classList.add("show-info");
  }
};

/* For displaying opinions on page */
const slide = document.querySelector(".slides");
let slides = document.querySelectorAll(".opinion");
let index = 1;
const interval = 5500;

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
/* ********************************************************************************** */

/* Show fixed arrow */
const arrowUp = document.querySelector(".to-top");

const showArrow = () => {
  arrowUp.classList.add("show-arrow");
};

window.addEventListener("scroll", () => {
  showProducts();
  slideGallery();
  showInfo();
  showArrow();
});
