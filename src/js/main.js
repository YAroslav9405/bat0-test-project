let subLink = document.getElementById('second-sub');
let subMenu = document.querySelector('.dropdown-content');
let navOpener = document.querySelector('.js-nav-opener');
let header = document.querySelector('.js-header');


let isMouseHover;

subLink.addEventListener(('mouseover') , () => { 
    {do {subMenu.classList.add('active');} while ((subMenu.addEventListener('mouseleave', (event) => {
        isMouseHover = isMouseHover = subMenu.classList.remove('active');
    }, false)) && ( setTimeout(()=> {subLink.addEventListener('mouseleave', (event) => {
        isMouseHover = isMouseHover = subMenu.classList.remove('active');
    }, true)},3)) );}

    }
);

navOpener.addEventListener('click', () => {
    if (header.classList.contains('active')) {
        header.classList.remove('active');
        window.onscroll = null;
    } else {
        header.classList.add('active');
        window.onscroll = function () { window.scrollTo(0, 0); };
    }
});

const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    spaceBetween: 32,
    loop: false,
    slidesPerView: 3,
    initialSlide: 1,
    breakpoints :{
        1440:{
            slidesPerView: 3,
            spaceBetween: 32
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 25
        },

        768:{
            slidesPerView: 2,
            spaceBetween: 24
        },

        375:{
            slidesPerView: 1,
            spaceBetween: 20
        },

        320:{
            slidesPerView: 1,
            spaceBetween: 20
        }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
});
