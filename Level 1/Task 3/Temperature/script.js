document.getElementById('convertButton').addEventListener('click', function () {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitSelect = document.getElementById('unitSelect');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    let result;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number.");
        return;
    }

    if (selectedUnit === 'celsius') {
        // Convert to Celsius
        result = temperatureInput;
    } else if (selectedUnit === 'fahrenheit') {
        // Convert to Fahrenheit
        result = (temperatureInput * 9/5) + 32;
    } else if (selectedUnit === 'kelvin') {
        // Convert to Kelvin
        result = temperatureInput + 273.15;
    }

    document.getElementById('result').innerHTML = `${temperatureInput} ${selectedUnit} is ${result.toFixed(2)} ${selectedUnit === 'celsius' ? '°C' : selectedUnit === 'fahrenheit' ? '°F' : 'K'}`;
});
