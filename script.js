educationBtn.addEventListener("click", () => {
    console.log(educationBtnList.classList.contains('education-open'));
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

let currentSibling = document.getElementsByClassName('projects-slider-item_container')[0].firstElementChild;
console.log(currentSibling.nextElementSibling);
console.log(currentSibling.nextElementSibling);

controlLeft.addEventListener("click", () => {
    if (currentSibling.previousElementSibling === null) {
        console.log('A');
        currentSibling.classList.remove("slider-current");
        currentSibling = document.getElementsByClassName('projects-slider-item_container')[0].lastElementChild;
        currentSibling.classList.add("slider-current");
    }
    else {
        currentSibling.classList.remove("slider-current");
        currentSibling = currentSibling.previousElementSibling;
        currentSibling.classList.add("slider-current");
    }
});

controlRight.addEventListener("click", () => {
    if (currentSibling.nextElementSibling === null) {
        currentSibling.classList.remove("slider-current");
        currentSibling = document.getElementsByClassName('projects-slider-item_container')[0].firstElementChild;
        currentSibling.classList.add("slider-current");
    }
    else {
        currentSibling.classList.remove("slider-current");
        currentSibling = currentSibling.nextElementSibling;
        currentSibling.classList.add("slider-current");
    }
});