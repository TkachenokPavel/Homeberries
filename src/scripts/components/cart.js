import { createElement, calculateDiscount } from "../utils/helpers.js";
import { storageKeys, getStorageData, setStorageData } from "../services/localStorageApi.js";

const createCartItem = (product) => {
    const { id, discount, name, price, amount } = product;
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
    productDecriment.setAttribute("data-btn", "decrement");
    productIncrement.setAttribute("type", "button");
    productIncrement.setAttribute("data-btn", "increment");

    productAmount.append(productDecriment, productQuantity, productIncrement);

    const productCost = createElement('div', 'item-goods__cost');
    const productTotal = createElement('span', 'cost__total', `${price * amount}`);
    const productDiscount = createElement('span', 'cost__discount', `${calculateDiscount(price, discount) * amount}`);

    productCost.append(productTotal, productDiscount);

    productCard.append(productDetails, productAmount, productCost);

    return productCard;
};

const calcTotal = (cartProductsData) => {
    let total = 0;

    cartProductsData.forEach(item => total += (+item.price * +item.amount));

    return total;
};

const calcDiscount = (cartProductsData) => {
    let discount = 0;

    cartProductsData.forEach(item => {
        discount += (+item.price - calculateDiscount(+item.price, +item.discount)) * +item.amount;
    });

    return discount;
};

const onCartItemClick = ({ target, currentTarget }) => {
    if (target.dataset.btn === 'decrement') {
        const cartData = getStorageData(storageKeys.CART);

        cartData.forEach(item => {
            if (item.id === currentTarget.id) {
                item.amount--;
            }
        });

        const newCartData = cartData.filter(item => item.amount > 0);

        renderCardItems(newCartData);
        renderCartDetails(newCartData);
        setStorageData(storageKeys.CART, newCartData);
    } else if (target.dataset.btn === 'increment') {
        const cartData = getStorageData(storageKeys.CART);

        cartData.forEach(item => {
            if (item.id === currentTarget.id) {
                item.amount++;
            }
        });

        renderCardItems(cartData);
        renderCartDetails(cartData);
        setStorageData(storageKeys.CART, cartData);
    }
};

const renderCartDetails = (cartProductsData) => {
    const valueTotal = document.getElementById('value-total');
    const valueDiscount = document.getElementById('value-discount');
    const valueSum = document.getElementById('value-sum');
    const submitButton = document.getElementById('btn-submit-order');

    valueTotal.textContent = `${calcTotal(cartProductsData)}`;

    valueDiscount.textContent = `${calcDiscount(cartProductsData)}`;

    valueSum.textContent = `${calcTotal(cartProductsData) - calcDiscount(cartProductsData)}`;
};

const renderCardItems = (cartProductsData) => {
    const cartList = document.getElementById('cart-list');

    while (cartList.firstElementChild) {
        cartList.firstElementChild.remove();
    }

    cartProductsData.forEach(item => {
        const newCartItem = createCartItem(item);

        newCartItem.addEventListener('click', onCartItemClick);
        cartList.append(newCartItem);
    });
};

const initCart = () => {
    const cartData = getStorageData(storageKeys.CART);

    document.getElementById('btn-close-modal').addEventListener('click', function () {
        document.getElementById('cart-modal').classList.remove('modal__open');
    });

    document.getElementById('btn-submit-order').addEventListener('click', function () {
        const cartData = getStorageData(storageKeys.CART);

        document.getElementById('cart-modal').classList.remove('modal__open');
        cartData.length = 0;

        setStorageData(storageKeys.CART, cartData);
    });

    renderCardItems(cartData);
    renderCartDetails(cartData);
};

export { initCart };