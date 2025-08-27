function calculateDiscount(){
    const price = parseFloat(document.getElementById('price').value);
    const discountPercent = parseFloat(document.getElementById('discount').value);

    if(!isNaN(price) && !isNaN(discountPercent)){
        const discountAmount = (price * discountPercent) / 100;
        const discountPrice = price - discountAmount;

        document.getElementById('result').innerHTML = 
                `Discount Amount: R${discountAmount.toFixed(2)}<br>` + `Price After Discount: R${discountPrice.toFixed(2)}`
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid numbers.';
    }
}