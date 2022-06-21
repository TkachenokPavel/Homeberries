import { createElement, calculateDiscount } from "../utils/helpers.js";
import { getProducts } from "../services/mockApi.js";

const createProductCard = (product) => {
	const { id, discount, name, category, photo, price } = product;
	const productCard = createElement("li", "product__card");
	const cardImage = createElement("a", "card__link");
	cardImage.setAttribute("herf", "#");

	const image = createElement("img", "card__image");
	image.setAttribute("src", photo);
	image.setAttribute("alt", "product photo");

	const enlargeImage = createElement("span", "card__image-background", "Увеличить");
	cardImage.append(image, enlargeImage);

	const cardDiscount = createElement("span", "card__discount", `${"-" + discount + " %"}`);
	const cardNewPrice = createElement("span", "card__price-new", `${calculateDiscount(price, discount) + " руб"}`);
	const cardStandartPrice = createElement("span", "card__price-old", `${price + " pуб"}`);
	const cardProductName = createElement("span", "card__name", `${category + " " + name}`);
	const addToCartButton = createElement("button", "card__button");
	addToCartButton.setAttribute("type", "button");

	productCard.append(cardImage, cardDiscount, cardNewPrice, cardStandartPrice, cardProductName, addToCartButton);
	productCard.id = id;

	return productCard;
};

const renderProducts = () => {
	const productList = document.querySelector('.product__list');

	new Promise((resolve, reject) => {
		resolve(getProducts());
	})
		.then(products => products.forEach(item => {
			productList.append(createProductCard(item));
		}));
};

export { createProductCard, renderProducts };