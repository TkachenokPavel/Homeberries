const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');

let index = 0;

const activeSlide = i => {
    for (let slide of slides) {
        slide.classList.remove('slider__item--active');
    }
    slides[i].classList.add('slider__item--active');
};

const activeDot = i => {
    for (let dot of dots) {
        dot.classList.remove('slider__dot--active');
    }
    dots[i].classList.add('slider__dot--active');
};

const prepareCurrentSlide = index => {
    activeSlide(index);
    activeDot(index);
};

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

export { nextSlide, prevSlide };