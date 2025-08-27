
function calculateLoan(){
    // Get input values
    const amount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value);
    const months = years * 12;


    // Calcutate monthly payment using formula
    const x = Math.pow(1 + interestRate, months);
    const monthly = (amount * x * interestRate) / (x -1)

    if(!isNaN(monthly)){
        document.getElementById('result').innerHTML = `Monthly Payment R${monthly.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = `Please fill in all fields correctly`
    }
}