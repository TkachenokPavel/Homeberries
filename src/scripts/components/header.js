import { initCart } from "./cart.js";
import { getProducts } from "../services/mockApi.js";
import { createProductCard } from "../components/productCard.js";

const onHeaderClick = ({ target, currentTarget }) => {
    if (target.id === 'header-cart') {
        document.getElementById('cart-modal').classList.add('modal__open');

        initCart();
    }
};

const onSearchClick = () => {
    const searchInputValue = document.getElementById('input-search').value;
    const productList = document.querySelector('.product__list');

    new Promise((resolve, reject) => {
        resolve(getProducts());
    })
        .then(products => products.filter(item => (`${item.name + item.category}`).toLowerCase().includes(searchInputValue.toLowerCase())))
        .then(filteredProducts => {
            while (productList.firstElementChild) {
                productList.firstElementChild.remove();
            }

            filteredProducts.forEach(item => {
                productList.append(createProductCard(item));
            });
        });
};

const initHeader = () => {
    document.querySelector('header').addEventListener('click', onHeaderClick);
    document.getElementById('input-search').addEventListener('keyup', onSearchClick);
};

export { initHeader };