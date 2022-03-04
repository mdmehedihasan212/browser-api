const addItem = () => {
    const inputText = document.getElementById('input-text');
    const value = inputText.value;
    // add Item
    displayProduct(value)

    inputText.value = '';
}

const displayProduct = value => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = value;
    ul.appendChild(li);

}
