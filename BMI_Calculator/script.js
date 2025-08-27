function calculateBMI(){
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if(!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0){
        const bmi = weight / (height * height)
        let category = '';

        if(bmi < 18.5){
            category = "Underweight"
        } else if(bmi < 25){
            category = "Normal weight"
        } else if(bmi < 30){
            category = 'Overweight'
        } else {
            category = 'obese'
        }

        document.getElementById('result').innerHTML = `Your BMI: ${bmi.toFixed(2)} <br> Category: ${category}`
    } else {
        document.getElementById('result').innerHTML = `Please enter vaild positive numbers`
    }
}