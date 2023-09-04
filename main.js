function toggleMenu() {
  console.log('toggled');
  let navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');

  let menuBtnIcon = document.querySelector('.menu-btn i'); // Select the icon element

  // Toggle the FontAwesome classes based on the open/close state
  if (navLinks.classList.contains('active')) {
    menuBtnIcon.classList.remove('fa-bars');
    menuBtnIcon.classList.add('fa-times');
  } else {
    menuBtnIcon.classList.remove('fa-times');
    menuBtnIcon.classList.add('fa-bars');
  }
  navLinks.classList.toggle('slide-in');
  menuBtn.classList.toggle('rotate');
}

let menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', toggleMenu);

const gallerySlider = document.querySelector('.gallery-slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let slideIndex = 0;

function moveSlider(direction) {
  slideIndex += direction;
  if (slideIndex < 0) {
    slideIndex = gallerySlider.children.length - 1;
  } else if (slideIndex >= gallerySlider.children.length) {
    slideIndex = 0;
  }
  const translateX = -slideIndex * 33.33; // Adjust for the number of product items
  gallerySlider.style.transform = `translateX(${translateX}%)`;
}

// Automatic sliding
setInterval(() => {
  moveSlider(1);
}, 3000); // Change slide every 5 seconds (adjust as needed)
