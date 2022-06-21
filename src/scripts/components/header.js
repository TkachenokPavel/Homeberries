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