'use strict';

const toggleBurgerIcon = () => {
   document.querySelector('#burger-icon .burger-icon-parts:first-child').classList.toggle('rotate-first');
   document.querySelector('#burger-icon .burger-icon-parts:last-child').classList.toggle('rotate-last');
   document.querySelector('#burger-icon .burger-icon-parts:nth-child(2)').classList.toggle('rotate-middle');
}

document.addEventListener('DOMContentLoaded', () => {
   const burgerIcon = document.getElementById('burger-icon');
   const sideMenu = document.getElementById('side-menu');
   let menuOpen = false;
 
   burgerIcon.addEventListener('click', () => {
      if (menuOpen) {
         sideMenu.style.right = '-62%';
         document.getElementById('nav-links').style.display = 'block';
         //  document.getElementById('side-menu').style.opacity = '1'
      } else {
       sideMenu.style.right = '0';
     }
     menuOpen = !menuOpen;
   });
});
