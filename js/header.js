'use strict';

const toggleBurgerIcon = () => {
   document.querySelector('#burger-icon .burger-icon-parts:first-child').classList.toggle('rotate-first');
   document.querySelector('#burger-icon .burger-icon-parts:last-child').classList.toggle('rotate-last');
   document.querySelector('#burger-icon .burger-icon-parts:nth-child(2)').classList.toggle('rotate-middle');
   document.getElementById('overlay').classList.toggle('show-overlay');
}

document.addEventListener('DOMContentLoaded', () => {
   const burgerIcon = document.getElementById('burger-icon');
   const sideMenu = document.getElementById('side-menu');
   const overlay = document.getElementById('overlay');
   let menuOpen = false;

   burgerIcon.addEventListener('click', () => {
      if (menuOpen) {
         sideMenu.style.right = '-62%';
         overlay.style.display = 'none';
      } else {
         sideMenu.style.right = '0';
         overlay.style.display = 'block';
      }
      menuOpen = !menuOpen;
   });

   const header = document.querySelector('header');
   let lastScrollTop = 0;

   window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isSmallScreen = window.innerWidth <= 768; // Adjust the breakpoint as needed
   
      if (isSmallScreen) {
         if (scrollTop > lastScrollTop && !header.classList.contains('hide-header')) {
            // Scrolling down, hide header
            header.classList.add('hide-header');
         } else if (scrollTop < lastScrollTop || scrollTop <= 0) {
            // Scrolling up or at the top, show header
            header.classList.remove('hide-header');
         }
      }
   
      if (scrollTop > lastScrollTop && !header.classList.contains('transparent')) {
         // Scrolling down, make header transparent
         header.classList.add('transparent');
      } else if (scrollTop <= 0) {
         // At the top, remove transparency
         header.classList.remove('transparent');
      }
   
      lastScrollTop = scrollTop;
   });
});