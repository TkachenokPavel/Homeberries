const createElement = (tag, className, text = "") => {
	const element = document.createElement(tag);
	element.className = className;
	element.textContent = text;
	return element;
};

const calculateDiscount = (price, discount) => {
	return Math.floor((price / 100) * (100 - discount));
};

const transformValue = text => {
	let validtext = text.trim();

	return validtext;
};

export { createElement, calculateDiscount, transformValue };