import { createElement, calculateDiscount } from "../utils/helpers.js";
import { storageKeys, getStorageData, setStorageData } from "../services/localStorageApi.js";

const createCartItem = (product) => {
    const { id, discount, name, category, photo, price, amount } = product;
    const productCard = createElement("li", "modal-cart__item-goods");
    productCard.id = id;

    const productDetails = createElement('div', 'item-goods__details');
    const productName = createElement('h3', 'item-goods__name', `${name}`);
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

const calcTotal = (cartProductsData) => {
    let total = 0;

    cartProductsData.forEach(item => total += +item.price);

    return total;
};

const calcDiscount = (cartProductsData) => {
    let discount = 0;

    cartProductsData.forEach(item => {
        discount += (+item.price - calculateDiscount(+item.price, +item.discount));
    });

    return discount;
};

const renderCartDetails = (cartProductsData) => {
    const valueTotal = document.getElementById('value-total');
    const valueDiscount = document.getElementById('value-discount');
    const valueSum = document.getElementById('value-sum');
    const submitButton = document.getElementById('btn-submit-order');

    valueTotal.textContent = `${calcTotal(cartProductsData)}`;

    valueDiscount.textContent = `${calcDiscount(cartProductsData)}`;

    valueSum.textContent = `${calcTotal(cartProductsData) - calcDiscount(cartProductsData)}`;

    if (cartProductsData.length === 0) {
        submitButton.disabled = true;
    }
};

const initCart = () => {
    const cartList = document.getElementById('cart-list');
    const cartData = getStorageData(storageKeys.CART);

    while (cartList.firstElementChild) {
        cartList.firstElementChild.remove();
    }

    document.getElementById('btn-close-modal').addEventListener('click', function () {
        document.getElementById('cart-modal').classList.remove('modal__open');
    });

    cartData.forEach(item => {
        cartList.append(createCartItem(item));
    });

    renderCartDetails(cartData);
};

export { initCart };