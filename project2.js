const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value);
    
    if(isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid numbers for height and width.');
        return;
    }
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    const result = document.querySelector('#result');
    result.textContent = `Your BMI is ${bmi}`;
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }
    result.textContent += ` (${category})`;

});