import { createProductCard } from "../components/productCard.js"
import { getProducts } from "../services/mockApi.js";

const renderProducts = () => {
	const productList = document.querySelector('.product__list');
	.forEach(product => {
		const productCard = createProductCard(product)
		productList.append(productCard);
		console.log('123')
	})


}

export { renderProducts }