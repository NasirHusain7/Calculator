// Append value to the display
function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character from the display
function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate the percentage
function per() {
    var display = document.getElementById('display');
    display.value = eval(display.value) / 100;
}





// Evaluate the expression in the display
function calculate() {
    const display = document.getElementById('display');
    if (!display.value) {
        display.value = 0;
    }
    try {
        const result = eval(display.value);
        if (typeof result === 'number' && !Number.isInteger(result)) {
            display.value = result.toFixed(2);
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}
