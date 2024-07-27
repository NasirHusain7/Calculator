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
    var display = document.getElementById('display');
    if(!display.value){
        display.value = 0;
    }
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}