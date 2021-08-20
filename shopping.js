

function getInputValueAndUpdate( product, price, isIncedss) {
    const inputField = document.getElementById(product + '-input'); 
    
    let inputValue = parseInt(inputField.value);
    if (isIncedss == true) {
        inputValue++;
    } else if(inputValue > 0) {
        inputValue--;
    }
    inputField.value = inputValue;
    const totalPrice = inputValue * price;
    document.getElementById(product + '-output').innerText = totalPrice;
    updateTotal();
}



function updateTotal() {
    const phoneQuantity = document.getElementById('phone-input').value;
    const caseQuantity = document.getElementById('case-input').value;
    const phoneTotol = phoneQuantity * 1219;
    const caseTotal = caseQuantity * 58;

    const subTotal = phoneTotol + caseTotal;
    const tax = subTotal * 10 / 100;
    const total = subTotal + tax;

    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;


}


document.getElementById("phone-plus").addEventListener('click', function () {
    getInputValueAndUpdate('phone', 1219, true);

});
document.getElementById("phone-minus").addEventListener('click', function () {
    getInputValueAndUpdate('phone', 1219, false);

});

document.getElementById("case-plus").addEventListener('click', function () {
    getInputValueAndUpdate('case', 58, true);

});
document.getElementById("case-minus").addEventListener("click", function () {
    getInputValueAndUpdate('case', 58, false);


});