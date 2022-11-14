
//html elements
const calcBody = document.getElementById('calculator-body'); 
const inputBox = document.getElementById('mainInput');
const output = document.getElementById('output');
const calculatedOutput = document.getElementById('calculatedOutput');
const history = document.getElementById('history');
//buttons
const buttons = document.getElementsByClassName('button');

//Same as [inputSate, setInputState] = useState("");  in React
var inputState = "";
function setInputState(newValue) {
    inputState = newValue;
}

calcBody.addEventListener('click', listenAction);
calcBody.addEventListener('keyup', listenAction);

//Listens to any actions on the page for global state management
function listenAction(e) {
    changeInputBoxValue(inputState)
    changeOutputValue(inputState)
}
//same as <p>{inputState}<p/> in JSX/React
function changeOutputValue(value) {
    output.textContent = value;
}

//same as <input>value={inputState}/> in JSX/React
function changeInputBoxValue(value) {
    inputBox.value = value;
}

//Change state of input on input 
inputBox.addEventListener('input', (e) => {
    setInputState(e.target.value);
});

for (const button in buttons)
{
    //Click events for each button
    buttons[button].addEventListener('click', (e) => {
        const buttonType = e.target.textContent;

        //Actions that happen on each button click
        switch (buttonType)
        {
        //NOTE: somme button use alt codes in the html
        //they need to be converted to Unicode
        //See: https://en.wikipedia.org/wiki/Alt_code
        //     https://unicode-table.com
            case '0':
                setInputState(inputState + buttonType);
                break;
            case '1':
                setInputState(inputState + buttonType);
                break;
            case '2':
                setInputState(inputState + buttonType);
                break;
            case '3':
                setInputState(inputState + buttonType);
                break;
            case '4':
                setInputState(inputState + buttonType);
                break;
            case '5':
                setInputState(inputState + buttonType);
                break;
            case '6':
                setInputState(inputState + buttonType);
                break;
            case '7':
                setInputState(inputState + buttonType);
                break;
            case '8':
                setInputState(inputState + buttonType);
                break;
            case '9':
                setInputState(inputState + buttonType);
                break;
            case '+':
                setInputState(inputState + buttonType);
                break;
            case '-':
                setInputState(inputState + buttonType);
                break;
            case 'x':
                setInputState(inputState + buttonType);
                break;
            case '.':
                setInputState(inputState + buttonType);
                break;
            //division
            case '\u00F7':
                setInputState(inputState + '\u00F7');
                break;
            //Clear button
            case 'C':
                setInputState("");
                break;  
            //Remove last character button
            case '\u232B':
                setInputState(inputState.slice(0, inputState.length - 1));
                break; 
            //Add minus character before last char
            //Or remove minux character before last char if its already there
            case '+/-':
                let beforeLastChar = inputState.length - 2;
                if (inputState.charAt(beforeLastChar) !== "-") 
                {
                    //insert minus char
                    setInputState(inputState.slice(0, inputState.length-1) + "-" + inputState.slice(inputState.length-1));
                }
                else if (inputState.charAt(beforeLastChar) === "-") 
                {
                    //remove minus char
                    setInputState(inputState.slice(0, beforeLastChar) + inputState.slice(inputState.length-1));  
                }
                break; 
            //Submit or calculate button
            case '=':
                calculate();
                break; 
            default:
                break;
        }
    });
}

//Do calculations here
function calculate() {
    let result = inputState;
    calculatedOutput.textContent = result;

    //Add result to history
    addToHistory(result);
}

function addToHistory(result) {
    if (result !== "ERROR") {
        const newLine = document.createElement('li');
        newLine.textContent = inputState + " = " + result;
        history.appendChild(newLine);
    }
}

function clearHistory() {
    history.innerHTML = "";
}
