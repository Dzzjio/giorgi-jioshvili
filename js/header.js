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