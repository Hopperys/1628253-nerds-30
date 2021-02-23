const slider = document.querySelector(".slider");
const btnOne = slider.querySelector(".slider-btn-one");
const btnTwo = slider.querySelector(".slider-btn-two");
const btnThree = slider.querySelector(".slider-btn-three");
const slideOne = slider.querySelector(".slide-one");
const slideTwo = slider.querySelector(".slide-two");
const slideThree = slider.querySelector(".slide-three");

btnOne.addEventListener("click", function(slideChange) {
    slideOne.classList.add("slide-current");
    slideTwo.classList.remove("slide-current");
    slideThree.classList.remove("slide-current");
    btnOne.classList.add("current");
    btnTwo.classList.remove("current");
    btnThree.classList.remove("current");
})

btnTwo.addEventListener("click", function(slideChange) {
    slideOne.classList.remove("slide-current");
    slideTwo.classList.add("slide-current");
    slideThree.classList.remove("slide-current");
    btnOne.classList.remove("current");
    btnTwo.classList.add("current");
    btnThree.classList.remove("current");
})

btnThree.addEventListener("click", function(slideChange) {
    slideOne.classList.remove("slide-current");
    slideTwo.classList.remove("slide-current");
    slideThree.classList.add("slide-current");
    btnOne.classList.remove("current");
    btnTwo.classList.remove("current");
    btnThree.classList.add("current");
})