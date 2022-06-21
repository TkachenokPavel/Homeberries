import { createElement, calculateDiscount } from "../utils/helpers.js";
import { getProducts } from "../services/mockApi.js";
import { storageKeys, getStorageData, setStorageData } from "../services/localStorageApi.js";
import { initCart } from "./cart.js";

const onHeaderClick = ({ target, currentTarget }) => {
    if (target.id === 'header-cart') {
        document.getElementById('cart-modal').classList.add('modal__open');

        initCart();
    }
};

const initHeader = () => {
    document.querySelector('header').addEventListener('click', onHeaderClick);
};

export { initHeader };