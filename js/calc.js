// Calc

let sliderCalcIndex = 1,
    slidesCalc = document.querySelectorAll('.F5_slider-item'),
    calcWrapp = document.querySelector('.F5_calc-windows'),
    calcItem = document.querySelectorAll('.F5_calc-window-wrapp');

function showCalcSlides(n) {

    if (n > slidesCalc.length) {
        sliderIndex = 1;
    }

    if (n < 1) {
        sliderIndex = slidesCalc.length;
    }

    slidesCalc.forEach((item) => item.style.display = 'none');
    calcItem.forEach((item) => item.classList.remove('show'));
    slidesCalc[sliderIndex - 1].style.display = 'block';
    calcItem[sliderIndex - 1].classList.add('show');
}

function currentCalcSlide(n) {
    showCalcSlides(sliderIndex = n);
}

calcWrapp.addEventListener('click', function () {
    for (i = 0; i < calcItem.length + 1; i++) {
        if (event.target.classList.contains('F5_calc-window-wrapp') && event.target == calcItem[i - 1]) {
            currentCalcSlide(i);
        }
    }
});

showCalcSlides(sliderCalcIndex);