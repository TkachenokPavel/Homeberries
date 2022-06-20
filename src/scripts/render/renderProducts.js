import { createProductCard } from "../components/createProductCard.js";

const renderProducts = () => {
	const productList = document.querySelector('.product__list');
	return new Promise((resolve, reject) => {
		fetch("https://62ab3aecbd0e5d29af0b2ef2.mockapi.io/product")
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					reject(new Error("Ошибка получения данных... Наши обезьяны уже работают над исправлением ошибки"));
				}
			})
			.then(products => products.forEach(product => {
				const { id, discount, name, category, photo, price } = product;
				const productCard = createProductCard(id, name, category, price, photo, discount);
				productList.append(productCard);
			}));
		resolve();
	})
		.catch(error => {
			console.log('Error', error);
		});
};

export { renderProducts };
