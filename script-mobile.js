educationBtn.addEventListener("click", () => {
    if (educationBtnList.classList.contains('education-open')) {
        educationArrow.innerHTML = "&#11167;";
        educationBtnList.classList.remove('education-open');
        let list = document.getElementsByClassName('education-btn-list-element');
        for (let item of list) {
            item.classList.remove('education-open');
        }
    }
    else {
        educationArrow.innerHTML = "&#11165;";
        educationBtnList.classList.add('education-open');
        let list = document.getElementsByClassName('education-btn-list-element');
        for (let item of list) {
            item.classList.add('education-open');
        }
    }
});

let startX = 0;
let startY = 0;
let distX = 0;
let distY = 0;

let startTime = 0;
let swipeTime = 0;

let xLimit = 50;
let yLimit = 100;
let allowedTime = 400;
let clickTime = 100;

var top_item = document.getElementsByClassName('slider-top')[0];
var bottom_item = document.getElementsByClassName('slider-bottom')[0];

function start (elem) {
    let touchObj = elem.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
    elem.preventDefault();
}

function end (elem) {
    let touchObj = elem.changedTouches[0];
    distX = touchObj.pageX - startX;
    distY = touchObj.pageY - startY;
    swipeTime = new Date().getTime() - startTime;
    console.log(swipeTime);
    if (swipeTime <= allowedTime && swipeTime >= clickTime) {
        if (Math.abs(distX) >= xLimit && Math.abs(distY) < yLimit) {
            if (distX > 0) {
                toLeft();
                let now = new Date().getTime();
                while(new Date().getTime() <= now + 400);
            } 
            else {
                toRight();
                let now = new Date().getTime();
                while(new Date().getTime() <= now + 400);
            }
        }
    }
    else if (swipeTime < clickTime) {
        console.log(top_item.children[0]);
        if (top_item.children[0].classList.contains('description-open')) {
            top_item.children[0].classList.remove('description-open');
        } else top_item.children[0].classList.add('description-open');
    }
    elem.preventDefault();
}

function changeItems() {
    top_item.classList.add('slider-bottom');
    top_item.classList.remove('slider-top');
    bottom_item.classList.remove('slider-bottom');
    bottom_item.classList.add('slider-top');
    if (top_item.classList.contains('slider-toRight')) {
        top_item.classList.remove('slider-toRight');
    } else {
        top_item.classList.remove('slider-toLeft');
    }
    top_item = document.getElementsByClassName('slider-top')[0];
    bottom_item = document.getElementsByClassName('slider-bottom')[0];
    bottom_item.removeEventListener('touchstart', start);
    bottom_item.removeEventListener('touchend', end);
    swipeDetector(top_item);
}

function toRight() {
    top_item.classList.add('slider-toRight');
}

function toLeft() {
    top_item.classList.add('slider-toLeft');
}

function swipeDetector(el) {
    let element = el;

    element.addEventListener('touchstart', start);

    element.addEventListener('touchend', end);
    element.addEventListener('touchend', changeItems);
}
swipeDetector(top_item);