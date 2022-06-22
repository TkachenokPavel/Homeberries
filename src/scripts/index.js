import { initSlider } from './components/Slider.js';
import { renderProducts } from './components/productCard.js';
import { initHeader } from './components/header.js';
import { productModal } from './components/productCardModal.js'

const init = () => {
	initSlider();
	renderProducts();
	initHeader();
	productModal();
};

document.addEventListener('DOMContentLoaded', init);