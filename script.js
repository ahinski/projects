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