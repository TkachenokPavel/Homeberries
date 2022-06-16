import { nextSlide, prevSlide } from './components/slider.js';

const init = () => {
    document.getElementById('btn-prev').addEventListener('click', nextSlide);
    document.getElementById('btn-next').addEventListener('click', prevSlide);

    setInterval(nextSlide, 4000);
};

init();