// calculation function 
function updateValueAndTotal(product, price, isAdd) {
  const inputField = document.getElementById(`${product}-input`);
  let productQuantity = parseInt(inputField.value);
  if (isAdd) {
    productQuantity++;
  } else if (productQuantity > 0) {
    productQuantity--;
  }
    inputField.value = productQuantity;
    //product total
    document.getElementById(`${product}-output`).innerText = productQuantity * price;
    updateTotal();
}

// get product quantity 
function getProductQuantity(product) {
    const inputField = document.getElementById(product+'-input');
    return parseInt(inputField.value);
}

// updating total amount 
function updateTotal() {
    const phoneTotal = getProductQuantity('phone') * 1219;
    const caseTotal = getProductQuantity('case') * 58;
    const subTotal = phoneTotal + caseTotal;
    const tax = (subTotal / 10);
    document.getElementById('sub-total').innerText = subTotal ;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = subTotal + tax;
}

//phone plus
document.getElementById("phone-plus").addEventListener("click", function () {
    updateValueAndTotal("phone", 1219, true);
});
//phone minus
document.getElementById("phone-minus").addEventListener("click", function () {
    updateValueAndTotal("phone", 1219, false);
});
// case plus
document.getElementById('case-plus').addEventListener('click', function () {
    updateValueAndTotal("case", 58, true);
})
//case-minus
document.getElementById('case-minus').addEventListener('click', function () {
    updateValueAndTotal("case", 58, false);
    
})






