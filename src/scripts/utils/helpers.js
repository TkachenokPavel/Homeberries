function createElement(tag, className, text = "") {
	const element = document.createElement(tag);
	element.className = className;
	element.textContent = text;
	return element;
}

const calculateDicsount = (price, discount) => {
	return Math.floor((price / 100) * (100 - discount))
}
export { createElement, calculateDicsount };