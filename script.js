const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');


 function convert() {
    if (toFahrenheit.checked) {
        result.textContent = `Result: ${(textBox.value * 9 / 5) + 32}°F`;
    } else if (toCelsius.checked) {
        result.textContent = `Result: ${(textBox.value - 32) * 5 / 9}°C`;
    } else{
        result.textContent = 'Please select a conversion';
    }
}