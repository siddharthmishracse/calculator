function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.innerHTML += value;   
}

function add() {
    const display = document.getElementById("display");
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch (error) {
        display.innerHTML = "Error";
    }
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.innerHTML = "";
}