let menuBtn = document.querySelector('.menu-btn');
let exitBtn = document.querySelector('.exit-btn');

let rightRender = document.querySelector('.right-header-hide');

menuBtn.addEventListener('click', () => {
    rightRender.classList.add('right-header');
    rightRender.classList.remove('right-header-hide');
})

exitBtn.addEventListener('click', () => {
    rightRender.classList.remove('right-header');
    rightRender.classList.add('right-header-hide');
})