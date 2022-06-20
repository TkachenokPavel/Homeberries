import { initSlider } from './components/Slider.js';
import { renderProducts } from './utils/renderProducts.js';

const init = () => {
	initSlider();
	renderProducts();

};

document.addEventListener('DOMContentLoaded', init);