
function getInputValueAndDisplay(product, price, isIncress) {
    const inputField = document.getElementById(product +'-input');
    let inputValue = inputField.value;
    if (isIncress) {
        inputValue++;
    }
    else if(inputValue > 0) {
        inputValue--;
    }
    inputField.value = inputValue;
    document.getElementById(product + '-output').innerText = inputValue * price;
    updateBalance();
}
function getProductQuantity(product) {
    return document.getElementById(product + '-input').value;
}
function updateBalance() {
    const phoneTotal = getProductQuantity('phone') * 1219;
    const caseTotal = getProductQuantity('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const vat = (subTotal * 10) / 100;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = vat;
    document.getElementById('total').innerText = subTotal + vat;
}



document.getElementById('phone-plus').addEventListener('click', function () {
    getInputValueAndDisplay('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    getInputValueAndDisplay("phone", 1219, false);

})

document.getElementById('case-plus').addEventListener('click', function () {
    getInputValueAndDisplay("case", 59, true);
    

})

document.getElementById('case-minus').addEventListener('click', function () {
    getInputValueAndDisplay("case", 59, false);

})