let weight = parseFloat(prompt("Enter your weight in pounds: "));
let height = parseFloat(prompt("Enter your height in inches: "));
let bmi = (weight / (height * height)) * 703;
bmi = bmi.toFixed(2); 
if (bmi < 16) {
    alert(`Your BMI of ${bmi} makes you Severely Underweight`);
} else if (bmi >= 16 && bmi <= 18.4) {
    alert(`Your BMI of ${bmi} makes you Underweight`);
} else if (bmi >= 18.5 && bmi <= 24.9) {
    alert(`Your BMI of ${bmi} makes you Normal`);
} else if (bmi >= 25 && bmi <= 29.9) {
    alert(`Your BMI of ${bmi} makes you Overweight`);
} else if (bmi >= 30 && bmi <= 34.9) {
    alert(`Your BMI of ${bmi} makes you Moderately Obese`);
} else if (bmi >= 35 && bmi <= 39.9) {
    alert(`Your BMI of ${bmi} makes you Severely Obese`);
} else if (bmi > 39.9) {
    alert(`Your BMI of ${bmi} makes you Morbidly Obese`);
} else {
    alert(`Your BMI of ${bmi} is not a valid number`);
}