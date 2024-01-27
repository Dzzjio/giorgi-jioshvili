const slidesContainer = document.querySelector('.slides');
const dotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;

const showSlide = (index) => {
  const slideWidth = document.querySelector('.slide').offsetWidth;
  slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  
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

setInterval(nextSlide, 4000);