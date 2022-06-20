import { initSlider } from './components/Slider.js';
import { getProducts } from './services/mockApi.js';
import { renderProducts } from './utils/renderProducts.js';

const init = () => {
	renderProducts();
	initSlider();
	renderProducts(getProducts);

};

document.addEventListener('DOMContentLoaded', init);