import { initSlider } from './components/Slider.js';
import { renderProducts } from './components/productCard.js';
import { initHeader } from './components/header.js';

const init = () => {
	initSlider();
	renderProducts();
	initHeader();
};

document.addEventListener('DOMContentLoaded', init);