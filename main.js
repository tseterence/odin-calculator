// arithmetic functions
function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    if (b === 0){
        return "Error"
    }
    return a / b
}

// operate function
function operate(operator, a, b){
    if (isNaN(a) || isNaN(b)){
        console.log("Please enter a valid math expression!")
        return
    }
    switch (operator){
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
        default:
            console.log("Please enter a valid math operator!")
    }
}

// DEFAULT
let displayValue = ""
let a = 0
let b = 0
let operator

const numberBtns = document.querySelectorAll(".numberBtn")
Array.from(numberBtns).forEach(number => number.addEventListener("click", updateDisplay))

const operatorBtns = document.querySelectorAll(".operatorBtn")
Array.from(operatorBtns).forEach(operator => operator.addEventListener("click", storeFirstNum))

const equalsBtn = document.querySelector("#equalsBtn")
equalsBtn.addEventListener("click", storeSecondNum)

const mainDisplay = document.querySelector("#mainDisplay")

const clearBtn = document.querySelector("#clearBtn")
clearBtn.addEventListener("click", () => mainDisplay.innerText = "")

let pushedOperator = false

// update display function
function updateDisplay(){
    if (pushedOperator) {
        mainDisplay.innerText = ""
        pushedOperator = false
    }
    mainDisplay.innerText += this.innerText
}

function storeFirstNum(){
    a = Number(mainDisplay.innerText)
    operator = this.innerText
    pushedOperator = true
}

function storeSecondNum(){
    b = Number(mainDisplay.innerText)
    mainDisplay.innerText = operate(operator, a, b)
}