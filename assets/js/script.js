const selectElement = (selector) => {
     const element = document.querySelector(selector);
     if(element) return element;
     throw new Error(`Something Went Wrong! Make Sure that ${selector} Exists/is Typed Correctly.`);
};
const scrollHeader = () => {
     const navbarElement = selectElement('#header');
     if(this.scrollY >= 15){
          navbarElement.classList.add('activated');
     }else{
          navbarElement.classList.remove('activated');
     }
}
window.addEventListener('scroll',scrollHeader);
const menuToggleIcon = selectElement('#menu-toggle-icon');
const formOpenButton = selectElement('#search-icon');
const formCloseButton = selectElement('#form-close-button');
const searchContainer = selectElement('#search-form-container');
const toggleMenu = () => {
     const mobileMenu = selectElement('#menu');
     mobileMenu.classList.toggle('activated');
     menuToggleIcon.classList.toggle('activated');
}
menuToggleIcon.addEventListener('click',toggleMenu);
formOpenButton.addEventListener('click',() => searchContainer.classList.add('activated'));
formCloseButton.addEventListener('click',() => searchContainer.classList.remove('activated'));
window.addEventListener('keyup',event => {
     if(event.key === 'Escape'){
          searchContainer.classList.remove('activated');
     }
});
const body = document.body;
const themeToggleButton = selectElement('#theme-toggle-button');
const currentTheme = localStorage.getItem('currentTheme');
if(currentTheme){
     body.classList.add('light-theme');
}
themeToggleButton.addEventListener('click',function(){
     body.classList.toggle('light-theme');
     if(body.classList.contains('light-theme')){
          localStorage.setItem('currentTheme','themeActive');
     }else{
          localStorage.removeItem('currentTheme');
     }
});
const swiper = new Swiper('.swiper',{
     slidesPerView: 1,
     spaceBetween: 20,
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
     },
     pagination: {
          el: '.swiper-pagination',
     },
     breakpoints: {
          700: {
               slidesPerView: 2,
          },
          1200: {
               slidesPerView: 3,
          },
     },
});