import { initSlider } from './components/Slider.js';
import { renderProducts } from './render/renderProducts.js';

const init = () => {
	renderProducts();
	initSlider();
};

document.addEventListener('DOMContentLoaded', init);

