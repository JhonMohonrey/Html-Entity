let rightHeader = document.querySelector('.right-header-hide');

const menu = () => {
    rightHeader.classList.toggle('unHide')
}

let boxes = document.querySelectorAll('.boxes');
let leftScroll = document.querySelector('.left-scroll');

boxes.forEach(click => {
    click.addEventListener('click', () => {
        leftScroll.classList.add('click');
    })
})

const mobileExit = () => {
    leftScroll.classList.remove('click');
}