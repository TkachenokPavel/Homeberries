const onModalWindowClick = ({ target }) => {
	const modalWindow = document.querySelector("#product-modal");
	const modalWindowImage = document.querySelector(".modal-product__image");
	const closeButton = document.querySelector(".modal-product__btn-close-icon");
	if (target === closeButton || target != modalWindowImage) {
		modalWindow.classList.remove("modal__open");
		modalWindowImage.setAttribute("src", "");
	}
};

const productModal = () => {
	const modalWindow = document.querySelector("#product-modal");
	modalWindow.addEventListener("click", onModalWindowClick);
};

export { productModal };