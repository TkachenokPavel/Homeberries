const storageKeys = {
    CART: 'cart',
};

function getStorageData(key) {
    const storageData = JSON.parse(localStorage.getItem(key));

    if (!storageData) {
        return [];
    }

    return storageData;
}

function setStorageData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export { storageKeys, getStorageData, setStorageData };