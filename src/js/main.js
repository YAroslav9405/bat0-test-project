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
    } else {
        header.classList.add('active');
    }
});


