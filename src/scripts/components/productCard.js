import { createElement, calculateDiscount } from "../utils/helpers.js";

const createProductCard = (id, name, category, price, photo, discount) => {
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

export { createProductCard };