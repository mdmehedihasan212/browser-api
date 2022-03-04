const displayStorageProduct = () => {
    const card = getCard();
    for (const name in card) {
        displayProduct(name)
    }
}

const addItem = () => {
    const inputText = document.getElementById('input-text');
    const value = inputText.value;
    if (!value) {
        return;
    }
    // add Item
    displayProduct(value)
    // add browser
    addToCard(value);

    inputText.value = '';
}

const displayProduct = value => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = value;
    ul.appendChild(li);

}

const getCard = () => {
    const card = localStorage.getItem('card');
    let cardObj;
    if (card) {
        cardObj = JSON.parse(card);
    }
    else {
        cardObj = {};
    }
    return cardObj;
}

const addToCard = value => {
    const card = getCard();
    if (card[value]) {
        card[value] = card[value] + 1;
    }
    else {
        card[value] = 1;
    }
    // console.log(card);
    const cardStringfi = JSON.stringify(card);
    localStorage.setItem('card', cardStringfi);

}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('card');
}

displayStorageProduct();
