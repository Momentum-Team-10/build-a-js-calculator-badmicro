const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

let displayNum1 = "";
let displayNum2 = "";
let result = null;
let lastOperation = "";
let haveDec = false;

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        if(e.target.innerText === "." && !haveDec) {
            haveDec = true;
        } else if(e.target.innerText === "." && haveDec) {
            return;
        }
        displayNum2 += e.target.innerText;
        display.innerText = displayNum2;
    })
})

operations.forEach(operation => {
    operation.addEventListener("click", (e) => {
        if(!displayNum2) result;
        haveDec = false;
        const operationName = e.target.innerText;
        if(displayNum1 && displayNum2 && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(displayNum2);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

function clearVar(name = "") {
    displayNum1 += displayNum2 + " " + name + " ";
    display.innerText = result;
    displayNum2 = "";
}

function mathOperation() {
    if(lastOperation === "*") {
        result = parseFloat(result) * parseFloat(displayNum2);
    } else if (lastOperation === "/") {
        result= parseFloat(result) / parseFloat(displayNum2);
    } else if (lastOperation === "+") {
        result= parseFloat(result) + parseFloat(displayNum2);
    } else if (lastOperation === "-") {
        result= parseFloat(result) - parseFloat(displayNum2);
    }
}

equal.addEventListener("click", (e) => {
    if(!displayNum1 || !displayNum2) return;
    haveDec = false;
    mathOperation();
    clearVar();
    display.innerText = result;
    displayNum2 = result;
    displayNum1 = "";
})

clear.addEventListener("click", (e) => {
    display.innerText = "0";
    displayNum1 = "";
    displayNum2 = "";
    result = "";
})