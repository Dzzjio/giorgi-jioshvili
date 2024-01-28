const slidesContainer = document.querySelector('.slides');
const dotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;

const showSlide = (index) => {
   const slideWidth = document.querySelector('.slide').offsetWidth;
 
   if (window.innerWidth > 768) {
     // Use opacity transition for screens wider than 768px
     slidesContainer.style.transition = 'opacity 0.6s ease-in-out';
     slidesContainer.style.opacity = 0;
 
     setTimeout(() => {
       slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
       slidesContainer.style.opacity = 1;
     }, 600);
   } else {
     // Use translateX transition for screens 768px and below
     slidesContainer.style.transition = 'transform 0.6s ease-in-out';
     slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
   }
 
   currentSlide = index;
 }

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % 3;
  showSlide(currentSlide);
}

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + 3) % 3;
  showSlide(currentSlide);
}

//dots
const createDots = () => {
   for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
   }
}

const updateDots = () => {
   const dots = document.querySelectorAll('.slider-dots span');
   dots.forEach((dot, index) => {
      if (index === currentSlide) {
         dot.classList.add('active');
      } else {
         dot.classList.remove('active');
      }
   });
}

createDots();

//drag functionality
const handleTouchStart = (event) => {
   isDragging = true;
   startPosition = event.touches[0].clientX;
   currentTranslate = 0;
}

const handleTouchMove = (event) => {
   if (!isDragging) return;

   const currentPosition = event.touches[0].clientX;
   const translate = currentPosition - startPosition + currentTranslate;

   slidesContainer.style.transform = `translateX(${translate}px)`;
}

const handleTouchEnd = () => {
   isDragging = false;
   const slideWidth = document.querySelector('.slide').offsetWidth;
   const dragThreshold = slideWidth / 4;

   if (currentTranslate > dragThreshold && currentSlide < 2) {
      nextSlide();
   } else if (currentTranslate < -dragThreshold && currentSlide > 0) {
      prevSlide();
   } else {
      showSlide(currentSlide);
   }
}

slidesContainer.addEventListener('touchstart', handleTouchStart);
slidesContainer.addEventListener('touchmove', handleTouchMove);
slidesContainer.addEventListener('touchend', handleTouchEnd);

//Arrows for desktop slider
document.querySelector('.prev-arrow').addEventListener('click', prevSlide);
document.querySelector('.next-arrow').addEventListener('click', nextSlide);


setInterval(nextSlide, 4000);

// Window resize event listener
window.addEventListener('resize', () => {
   // Reset transition when window is resized
   slidesContainer.style.transition = 'none';
   showSlide(currentSlide);
 });