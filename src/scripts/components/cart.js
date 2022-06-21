import { createElement, calculateDiscount } from "../utils/helpers.js";
import { getProducts } from "../services/mockApi.js";
import { storageKeys, getStorageData, setStorageData } from "../services/localStorageApi.js";

const createCartItem = (product) => {
    const { id, discount, name, category, photo, price, amount } = product;
    const productCard = createElement("li", "modal-cart__item-goods");
    productCard.id = id;

    const productDetails = createElement('div', 'item-goods__details');
    const productName = createElement('h3', 'item-goods__name', `${name} // ${category}`);
    const productPrice = createElement('p', 'item-goods__price', `${price}`);

    productDetails.append(productName, productPrice);

    const productAmount = createElement('div', 'item-goods__amount');
    const productDecriment = createElement('button', 'item-goods__decrease', `-`);
    const productQuantity = createElement('span', 'item-goods__quantity', `${amount}`);
    const productIncrement = createElement('button', 'item-goods__increase', `+`);

    productDecriment.setAttribute("type", "button");
    productIncrement.setAttribute("type", "button");

    productAmount.append(productDecriment, productQuantity, productIncrement);

    const productCost = createElement('div', 'item-goods__cost');
    const productTotal = createElement('span', 'cost__total', `${price}`);
    const productDiscount = createElement('span', 'cost__discount', `${calculateDiscount(price, discount)}`);

    productCost.append(productTotal, productDiscount);

    const productButtonDelete = createElement('button', 'item-goods__delete');
    const productButtonImage = createElement('img', 'item-goods__delete-icon');

    productButtonDelete.setAttribute('type', 'button');
    productButtonImage.setAttribute('src', './assets/icons/close.svg');
    productButtonImage.setAttribute('alt', 'close button');

    productButtonDelete.append(productButtonImage);

    productCard.append(productDetails, productAmount, productCost, productButtonDelete);

    return productCard;
};