const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let calculation = []
let cummulativeCalculation 


function calculate(button) {
    const value = button.textContent;
    console.log(value)
    if(value == "CLEAR"){
        calculation = []
        screenDisplay.textContent = '.';
    }else if(value === '='){
        screenDisplay.textContent = eval(cummulativeCalculation)
    }else{
        calculation.push(value)
        cummulativeCalculation = calculation.join('')
        screenDisplay.textContent = cummulativeCalculation
    }

}



buttons.forEach(button => button.addEventListener('click', () => calculate(button)));

