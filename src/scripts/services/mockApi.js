const getProducts = () => {
	let productsData = []
	new Promise((resolve, reject) => {
		fetch("https://62ab3aecbd0e5d29af0b2ef2.mockapi.io/product")
			.then(response => {
				if (response.ok) {
					return response.json();

				} else {
					reject(new Error("Ошибка получения данных... Наши обезьяны уже работают над исправлением ошибки"));
				}
			})
			.then(products => products.forEach(product => {
				productsData.push(product)
			}));
		resolve();
	})
		.catch(error => {
			console.log('Error', error);
		});



	return productsData;
}

export { getProducts }