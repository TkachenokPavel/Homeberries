import { nextSlide, prevSlide } from './components/slider.js';

const init = () => {
    document.getElementById('btn-prev').addEventListener('click', prevSlide);
    document.getElementById('btn-next').addEventListener('click', nextSlide);

    setInterval(nextSlide, 4000);
};

init();