function generateInvoice() {
     let quantity = document.querySelector('#quantity').value;
    let price = document.querySelector('#price').value;
    let tax = document.querySelector('#tax').value;

    if (isNaN(quantity) || isNaN(price) || isNaN(tax)) {
        alert('Please enter valid inputs for quantity, price, and tax.');
        
    };

    let subtotal = quantity * price;
    let taxAmount = (tax / 100) * subtotal;
    let total = subtotal + taxAmount;



    $('#result').fadeIn(500).html(`<div>Quantity: <span id="invoice-quantity">${quantity}</span></div>
    <div>Price per item: $<span id="invoice-price">${price}</span></div>
    <div>Tax: <span id="invoice-tax">${tax}</span>%</div>
    <div class="invoice-total">
      Total: $<span id="invoice-total">${total}</span>
    </div>`)
};

