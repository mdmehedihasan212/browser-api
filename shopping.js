const addItem = () => {
    const inputText = document.getElementById('input-text');
    const value = inputText.value;
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
    card[value] = 1;
    // console.log(card);
    const cardStringfi = JSON.stringify(card);
    localStorage.setItem('card', cardStringfi);

}
