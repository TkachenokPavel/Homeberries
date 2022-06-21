import { initSlider } from './components/Slider.js';
import { renderProducts } from './components/productCard.js';

const init = () => {
	initSlider();
	renderProducts();
};

document.addEventListener('DOMContentLoaded', init);