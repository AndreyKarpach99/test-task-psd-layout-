// slider

let sliderIndex = 1,
    slides = document.querySelectorAll('.F3_slider-item'),
    dotsWrapp = document.querySelector('.F3_slider-dots'),
    dots = document.querySelectorAll('.F3_slider-dot');

function showSlides(n) {

    if (n > slides.length) {
        sliderIndex = 1;
    }

    if (n < 1) {
        sliderIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('active'));
    slides[sliderIndex - 1].style.display = 'block';
    dots[sliderIndex - 1].classList.add('active');
}

function currentSlide(n) {
    showSlides(sliderIndex = n);
}

dotsWrapp.addEventListener('click', function () {
    for (i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('F3_slider-dot') && event.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
});

showSlides(sliderIndex);