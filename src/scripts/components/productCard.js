import { createElement, calculateDiscount } from "../utils/helpers.js";
import { getProducts } from "../services/mockApi.js";
import { storageKeys, getStorageData, setStorageData } from "../services/localStorageApi.js";

const createProductCard = (product) => {
	const { id, discount, name, category, photo, price } = product;
	const productCard = createElement("li", "product__card");
	const cardImage = createElement("a", "card__link");
	cardImage.id = "img-" + id;
	cardImage.setAttribute("herf", "#");

	const image = createElement("img", "card__image");
	image.setAttribute("src", photo);
	image.setAttribute("alt", "product photo");

	const enlargeImage = createElement("span", "card__image-background", "Увеличить");
	enlargeImage.id = "img-b-" + id;
	enlargeImage.dataset.modal = 'card';
	cardImage.append(image, enlargeImage);

	const cardDiscount = createElement("span", "card__discount", `${"-" + discount + " %"}`);
	const cardNewPrice = createElement("span", "card__price-new", `${calculateDiscount(price, discount) + " руб"}`);
	const cardStandartPrice = createElement("span", "card__price-old", `${price + " pуб"}`);
	const cardProductName = createElement("span", "card__name", `${category + " " + name}`);
	const addToCartButton = createElement("button", "card__button");
	addToCartButton.id = 'btn-add-cart';
	addToCartButton.setAttribute("type", "button");

	productCard.append(cardImage, cardDiscount, cardNewPrice, cardStandartPrice, cardProductName, addToCartButton);
	productCard.id = id;

	return productCard;
};

const onCardClick = ({ target, currentTarget }) => {
	if (target.id === 'btn-add-cart') {
		const cartData = getStorageData(storageKeys.CART);

		new Promise((resolve, reject) => {
			resolve(getProducts());
		})
			.then(products => {
				if (!cartData.find(item => item.id === currentTarget.id)) {
					const currentCardData = products.find(item => item.id === currentTarget.id);
					return currentCardData;
				}
			})
			.then(product => {
				if (product) {
					product.amount = 1;
					cartData.push(product);
				}
			})
			.then(setStorage => setStorageData(storageKeys.CART, cartData));
	}

	if (target.id === `${"img-b-" + currentTarget.id}`) {
		const modalProduct = document.querySelector(".modal-product");
		modalProduct.classList.add("modal__open");
		new Promise((resolve, reject) => {
			resolve(getProducts());
		})
			.then(products => {
				const cardPhoto = products.find(item => item.id === currentTarget.id).photo;
				const modalImage = document.querySelector(".modal-product__image");
				modalImage.src = cardPhoto;
			});
	}

};

const renderProducts = () => {
	const productList = document.querySelector('.product__list');

	while (productList.firstElementChild) {
		productList.firstElementChild.remove();
	}

	new Promise((resolve, reject) => {
		resolve(getProducts());
	})
		.then(products => products.forEach(item => {
			const newCard = createProductCard(item);

			newCard.addEventListener('click', onCardClick);
			productList.append(newCard);
		}));
};

export { createProductCard, renderProducts };