import { createProductCard } from "../components/productCard.js"
import { getProducts } from "../services/mockApi.js";

const renderProducts = () => {
	const productList = document.querySelector('.product__list');
	const products = getProducts()

	setTimeout(render, 500)
	function render() {
		products.forEach(productItem => {
			const product = createProductCard(productItem)
			productList.append(product)

		})
	}



}

export { renderProducts }